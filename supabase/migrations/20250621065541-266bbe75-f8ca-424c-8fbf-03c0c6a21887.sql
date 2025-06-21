
-- Update the orders table to ensure all required fields are present with proper types
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Ensure all required columns exist with proper constraints
ALTER TABLE public.orders 
ALTER COLUMN customer_name SET NOT NULL,
ALTER COLUMN email SET NOT NULL,
ALTER COLUMN product_id SET NOT NULL,
ALTER COLUMN quantity SET NOT NULL,
ALTER COLUMN price_total SET NOT NULL,
ALTER COLUMN currency SET NOT NULL,
ALTER COLUMN payment_status SET NOT NULL;

-- Add default values where appropriate
ALTER TABLE public.orders 
ALTER COLUMN payment_status SET DEFAULT 'pending',
ALTER COLUMN currency SET DEFAULT 'EUR',
ALTER COLUMN quantity SET DEFAULT 1;

-- Enable Row Level Security if not already enabled
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policies for order management
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Service role can manage all orders" ON public.orders;

CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (
    auth.uid() = user_id OR 
    auth.jwt() ->> 'role' = 'service_role'
  );

CREATE POLICY "Service role can manage all orders" ON public.orders
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create an index on stripe_session_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session_id ON public.orders(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at);
