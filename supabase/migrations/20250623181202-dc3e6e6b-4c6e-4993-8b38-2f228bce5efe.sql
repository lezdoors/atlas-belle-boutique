
-- Enable RLS on all tables and create comprehensive security policies
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wholesale_leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Service role can manage all orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Service role can create orders" ON public.orders;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Allow wholesale leads submission" ON public.wholesale_leads;
DROP POLICY IF EXISTS "Service role can view all wholesale leads" ON public.wholesale_leads;

-- Create secure RLS policies for orders table
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (
    auth.uid() = user_id
  );

CREATE POLICY "Users can create orders with their own user_id" ON public.orders
  FOR INSERT WITH CHECK (
    auth.uid() = user_id AND
    auth.role() = 'authenticated'
  );

CREATE POLICY "Service role can manage all orders" ON public.orders
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create secure RLS policies for profiles table
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (
    auth.uid() = id
  );

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (
    auth.uid() = id
  );

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (
    auth.uid() = id
  );

CREATE POLICY "Service role can manage all profiles" ON public.profiles
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create secure RLS policies for wholesale_leads table
CREATE POLICY "Anyone can submit wholesale leads" ON public.wholesale_leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can view all wholesale leads" ON public.wholesale_leads
  FOR SELECT USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Ensure user_id is NOT NULL for orders table to prevent data exposure
ALTER TABLE public.orders ALTER COLUMN user_id SET NOT NULL;

-- Create indexes for better performance and security
CREATE INDEX IF NOT EXISTS idx_orders_user_id_secure ON public.orders(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_profiles_id_secure ON public.profiles(id);
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_created_at_secure ON public.wholesale_leads(created_at DESC);
