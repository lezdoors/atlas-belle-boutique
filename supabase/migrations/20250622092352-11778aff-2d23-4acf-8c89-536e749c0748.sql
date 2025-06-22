
-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Service role can manage all orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Allow wholesale leads submission" ON public.wholesale_leads;
DROP POLICY IF EXISTS "Service role can view all wholesale leads" ON public.wholesale_leads;

-- Enable RLS on both tables (safe to run even if already enabled)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wholesale_leads ENABLE ROW LEVEL SECURITY;

-- Create comprehensive policies for orders table
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (
    auth.uid() = user_id OR 
    auth.jwt() ->> 'role' = 'service_role'
  );

CREATE POLICY "Service role can manage all orders" ON public.orders
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

CREATE POLICY "Authenticated users can create orders" ON public.orders
  FOR INSERT WITH CHECK (
    auth.role() = 'authenticated' OR
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create policies for wholesale_leads table
CREATE POLICY "Allow wholesale leads submission" ON public.wholesale_leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can view all wholesale leads" ON public.wholesale_leads
  FOR SELECT USING (
    auth.jwt() ->> 'role' = 'service_role' OR
    auth.jwt() ->> 'role' = 'admin'
  );

-- Create indexes for better performance (only if they don't exist)
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_email ON public.orders(email);
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_email ON public.wholesale_leads(email);
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_created_at ON public.wholesale_leads(created_at);
