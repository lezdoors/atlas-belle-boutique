
-- Fix critical RLS policy vulnerability on orders table
-- Remove problematic policies that allow anonymous access
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create their own orders" ON public.orders;

-- Create secure policy that requires proper authentication and user matching
CREATE POLICY "Authenticated users can create their own orders only" ON public.orders
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND 
    auth.uid() = user_id AND
    auth.role() = 'authenticated'
  );

-- Ensure user_id is NOT NULL to prevent data exposure
ALTER TABLE public.orders ALTER COLUMN user_id SET NOT NULL;

-- Add additional security constraints to prevent abuse
ALTER TABLE public.orders 
  ADD CONSTRAINT check_reasonable_quantity CHECK (quantity > 0 AND quantity <= 1000),
  ADD CONSTRAINT check_reasonable_price CHECK (price_total > 0 AND price_total <= 1000000);

-- Fix wholesale_leads table to require authentication for submission
DROP POLICY IF EXISTS "Authenticated users can submit wholesale leads" ON public.wholesale_leads;

CREATE POLICY "Authenticated users can submit wholesale leads only" ON public.wholesale_leads
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND
    auth.role() = 'authenticated'
  );

-- Add input length constraints to prevent abuse
ALTER TABLE public.wholesale_leads 
  ADD CONSTRAINT check_company_name_length CHECK (length(company_name) <= 100),
  ADD CONSTRAINT check_contact_name_length CHECK (length(contact_name) <= 100),
  ADD CONSTRAINT check_email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT check_phone_length CHECK (length(phone) <= 20),
  ADD CONSTRAINT check_address_length CHECK (length(address) <= 500),
  ADD CONSTRAINT check_message_length CHECK (message IS NULL OR length(message) <= 1000);

-- Create indexes for better performance on security-critical lookups
CREATE INDEX IF NOT EXISTS idx_orders_user_id_secure ON public.orders(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON public.orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_email_secure ON public.wholesale_leads(email);

-- Enable audit logging for sensitive tables
CREATE TABLE IF NOT EXISTS public.security_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name text NOT NULL,
  operation text NOT NULL,
  user_id uuid,
  timestamp timestamp with time zone DEFAULT now(),
  old_data jsonb,
  new_data jsonb
);

-- Enable RLS on audit log
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Only service role can read audit logs
CREATE POLICY "Service role can read audit logs" ON public.security_audit_log
  FOR SELECT USING (
    (auth.jwt() ->> 'role') = 'service_role'
  );
