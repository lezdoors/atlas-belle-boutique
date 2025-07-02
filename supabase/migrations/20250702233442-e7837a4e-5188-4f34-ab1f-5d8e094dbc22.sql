-- Security Fix Migration: Address Critical Vulnerabilities
-- Remove dangerous anonymous access policies and implement secure authentication

-- 1. Fix Orders Table RLS Policies (CRITICAL VULNERABILITY)
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can create orders with their own user_id" ON public.orders;

-- Create single, secure policy for order creation
CREATE POLICY "Authenticated users can create their own orders only" ON public.orders
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND 
    auth.uid() = user_id AND
    auth.role() = 'authenticated'
  );

-- Ensure user_id is NOT NULL to prevent data exposure
ALTER TABLE public.orders ALTER COLUMN user_id SET NOT NULL;

-- Add security constraints to prevent abuse
ALTER TABLE public.orders 
  ADD CONSTRAINT IF NOT EXISTS check_reasonable_quantity CHECK (quantity > 0 AND quantity <= 1000),
  ADD CONSTRAINT IF NOT EXISTS check_reasonable_price CHECK (price_total > 0 AND price_total <= 1000000);

-- 2. Fix Wholesale Leads Table Authentication
DROP POLICY IF EXISTS "Authenticated users can submit wholesale leads" ON public.wholesale_leads;

CREATE POLICY "Authenticated users can submit wholesale leads only" ON public.wholesale_leads
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND
    auth.role() = 'authenticated'
  );

-- Add input length constraints to prevent abuse
ALTER TABLE public.wholesale_leads 
  ADD CONSTRAINT IF NOT EXISTS check_company_name_length CHECK (length(company_name) <= 100),
  ADD CONSTRAINT IF NOT EXISTS check_contact_name_length CHECK (length(contact_name) <= 100),
  ADD CONSTRAINT IF NOT EXISTS check_email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT IF NOT EXISTS check_phone_length CHECK (length(phone) <= 20),
  ADD CONSTRAINT IF NOT EXISTS check_address_length CHECK (length(address) <= 500),
  ADD CONSTRAINT IF NOT EXISTS check_message_length CHECK (message IS NULL OR length(message) <= 1000);

-- 3. Create Security Audit Log Table
CREATE TABLE IF NOT EXISTS public.security_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name text NOT NULL,
  operation text NOT NULL,
  user_id uuid,
  timestamp timestamp with time zone DEFAULT now(),
  ip_address inet,
  user_agent text,
  old_data jsonb,
  new_data jsonb,
  security_context jsonb
);

-- Enable RLS on audit log
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Only service role can read audit logs
CREATE POLICY "Service role can read audit logs" ON public.security_audit_log
  FOR SELECT USING (
    (auth.jwt() ->> 'role') = 'service_role'
  );

-- 4. Create Rate Limiting Table for Server-Side Control
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  ip_address inet,
  action text NOT NULL,
  attempt_count integer DEFAULT 1,
  last_attempt timestamp with time zone DEFAULT now(),
  reset_time timestamp with time zone DEFAULT (now() + interval '1 hour'),
  blocked_until timestamp with time zone
);

-- Enable RLS on rate limits
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Service role can manage rate limits
CREATE POLICY "Service role can manage rate limits" ON public.rate_limits
  FOR ALL USING (
    (auth.jwt() ->> 'role') = 'service_role'
  );

-- 5. Create Input Validation Function
CREATE OR REPLACE FUNCTION public.validate_email(email text)
RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND length(email) <= 255;
END;
$$;

-- 6. Create Secure Order Processing Function
CREATE OR REPLACE FUNCTION public.create_secure_order(
  p_product_id text,
  p_quantity integer,
  p_price_total numeric,
  p_currency text,
  p_customer_name text,
  p_email text,
  p_phone text DEFAULT NULL,
  p_shipping_address text DEFAULT NULL
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  order_id uuid;
  current_user_id uuid;
BEGIN
  -- Get current user
  current_user_id := auth.uid();
  
  -- Validate authentication
  IF current_user_id IS NULL THEN
    RAISE EXCEPTION 'Authentication required';
  END IF;
  
  -- Validate input parameters
  IF NOT public.validate_email(p_email) THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  
  IF p_quantity <= 0 OR p_quantity > 1000 THEN
    RAISE EXCEPTION 'Invalid quantity';
  END IF;
  
  IF p_price_total <= 0 OR p_price_total > 1000000 THEN
    RAISE EXCEPTION 'Invalid price';
  END IF;
  
  -- Insert order with validated data
  INSERT INTO public.orders (
    user_id,
    product_id,
    quantity,
    price_total,
    currency,
    customer_name,
    email,
    phone,
    shipping_address,
    payment_status
  ) VALUES (
    current_user_id,
    p_product_id,
    p_quantity,
    p_price_total,
    p_currency,
    p_customer_name,
    p_email,
    p_phone,
    p_shipping_address,
    'pending'
  ) RETURNING id INTO order_id;
  
  -- Log the order creation for security audit
  INSERT INTO public.security_audit_log (
    table_name,
    operation,
    user_id,
    new_data
  ) VALUES (
    'orders',
    'INSERT',
    current_user_id,
    jsonb_build_object(
      'order_id', order_id,
      'product_id', p_product_id,
      'quantity', p_quantity,
      'price_total', p_price_total
    )
  );
  
  RETURN order_id;
END;
$$;

-- 7. Create indexes for better performance on security-critical lookups
CREATE INDEX IF NOT EXISTS idx_orders_user_id_secure ON public.orders(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON public.orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_email_secure ON public.wholesale_leads(email);
CREATE INDEX IF NOT EXISTS idx_rate_limits_user_action ON public.rate_limits(user_id, action);
CREATE INDEX IF NOT EXISTS idx_rate_limits_ip_action ON public.rate_limits(ip_address, action);
CREATE INDEX IF NOT EXISTS idx_security_audit_user_time ON public.security_audit_log(user_id, timestamp);