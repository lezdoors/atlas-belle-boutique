
-- Enable Row Level Security on existing tables
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wholesale_leads ENABLE ROW LEVEL SECURITY;

-- Create comprehensive policies for orders table
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Service role can manage all orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Service role can create orders" ON public.orders;

-- Orders policies
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
    auth.role() = 'authenticated' AND
    auth.uid() = user_id
  );

-- Wholesale leads policies (keeping existing but ensuring they're secure)
DROP POLICY IF EXISTS "Allow wholesale leads submission" ON public.wholesale_leads;
DROP POLICY IF EXISTS "Service role can view all wholesale leads" ON public.wholesale_leads;

CREATE POLICY "Allow wholesale leads submission" ON public.wholesale_leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can view all wholesale leads" ON public.wholesale_leads
  FOR SELECT USING (
    auth.jwt() ->> 'role' = 'service_role' OR
    auth.jwt() ->> 'role' = 'admin'
  );

-- Create profiles table for user data
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  full_name text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (id)
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', '')
  );
  RETURN NEW;
END;
$$;

-- Trigger for new user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_id ON public.profiles(id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id_created ON public.orders(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_created_at ON public.wholesale_leads(created_at DESC);
