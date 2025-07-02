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

-- Add security constraints to prevent abuse (drop first if exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_reasonable_quantity') THEN
    ALTER TABLE public.orders DROP CONSTRAINT check_reasonable_quantity;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_reasonable_price') THEN
    ALTER TABLE public.orders DROP CONSTRAINT check_reasonable_price;
  END IF;
END $$;

ALTER TABLE public.orders 
  ADD CONSTRAINT check_reasonable_quantity CHECK (quantity > 0 AND quantity <= 1000),
  ADD CONSTRAINT check_reasonable_price CHECK (price_total > 0 AND price_total <= 1000000);

-- 2. Fix Wholesale Leads Table Authentication
DROP POLICY IF EXISTS "Authenticated users can submit wholesale leads" ON public.wholesale_leads;

CREATE POLICY "Authenticated users can submit wholesale leads only" ON public.wholesale_leads
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND
    auth.role() = 'authenticated'
  );

-- Add input length constraints to prevent abuse
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_company_name_length') THEN
    ALTER TABLE public.wholesale_leads DROP CONSTRAINT check_company_name_length;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_contact_name_length') THEN
    ALTER TABLE public.wholesale_leads DROP CONSTRAINT check_contact_name_length;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_email_length') THEN
    ALTER TABLE public.wholesale_leads DROP CONSTRAINT check_email_length;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_phone_length') THEN
    ALTER TABLE public.wholesale_leads DROP CONSTRAINT check_phone_length;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_address_length') THEN
    ALTER TABLE public.wholesale_leads DROP CONSTRAINT check_address_length;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_message_length') THEN
    ALTER TABLE public.wholesale_leads DROP CONSTRAINT check_message_length;
  END IF;
END $$;

ALTER TABLE public.wholesale_leads 
  ADD CONSTRAINT check_company_name_length CHECK (length(company_name) <= 100),
  ADD CONSTRAINT check_contact_name_length CHECK (length(contact_name) <= 100),
  ADD CONSTRAINT check_email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT check_phone_length CHECK (length(phone) <= 20),
  ADD CONSTRAINT check_address_length CHECK (length(address) <= 500),
  ADD CONSTRAINT check_message_length CHECK (message IS NULL OR length(message) <= 1000);

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

-- 5. Create indexes for better performance on security-critical lookups
CREATE INDEX IF NOT EXISTS idx_orders_user_id_secure ON public.orders(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON public.orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_email_secure ON public.wholesale_leads(email);
CREATE INDEX IF NOT EXISTS idx_rate_limits_user_action ON public.rate_limits(user_id, action);
CREATE INDEX IF NOT EXISTS idx_rate_limits_ip_action ON public.rate_limits(ip_address, action);
CREATE INDEX IF NOT EXISTS idx_security_audit_user_time ON public.security_audit_log(user_id, timestamp);