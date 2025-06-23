
-- Fix critical RLS policy vulnerability on orders table
-- Remove the problematic anonymous insert policy
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;

-- Create a more secure policy that requires proper user authentication
CREATE POLICY "Authenticated users can create their own orders" ON public.orders
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND 
    auth.uid() = user_id AND
    auth.role() = 'authenticated'
  );

-- Ensure orders table has proper constraints and user_id is required
ALTER TABLE public.orders 
  ALTER COLUMN user_id SET NOT NULL;

-- Add additional security constraints to prevent data abuse
ALTER TABLE public.orders 
  ADD CONSTRAINT check_reasonable_quantity CHECK (quantity > 0 AND quantity <= 1000),
  ADD CONSTRAINT check_reasonable_price CHECK (price_total > 0 AND price_total <= 1000000);

-- Add input length limits to prevent potential abuse
ALTER TABLE public.orders 
  ALTER COLUMN customer_name TYPE varchar(100),
  ALTER COLUMN email TYPE varchar(255),
  ALTER COLUMN phone TYPE varchar(20),
  ALTER COLUMN product_id TYPE varchar(50),
  ALTER COLUMN currency TYPE varchar(3),
  ALTER COLUMN payment_status TYPE varchar(20);

-- Ensure wholesale_leads table has proper input limits
ALTER TABLE public.wholesale_leads 
  ALTER COLUMN company_name TYPE varchar(100),
  ALTER COLUMN contact_name TYPE varchar(100),
  ALTER COLUMN email TYPE varchar(255),
  ALTER COLUMN phone TYPE varchar(20),
  ALTER COLUMN business_type TYPE varchar(50),
  ALTER COLUMN website TYPE varchar(255);

-- Add constraints to wholesale_leads for reasonable data limits
ALTER TABLE public.wholesale_leads 
  ADD CONSTRAINT check_address_length CHECK (length(address) <= 500),
  ADD CONSTRAINT check_products_interest_length CHECK (length(products_interest) <= 2000),
  ADD CONSTRAINT check_message_length CHECK (message IS NULL OR length(message) <= 1000);

-- Create indexes for better performance on security-critical lookups
CREATE INDEX IF NOT EXISTS idx_orders_user_id_secure ON public.orders(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON public.orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_email_secure ON public.wholesale_leads(email);
