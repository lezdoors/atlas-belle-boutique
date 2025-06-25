
-- First, drop all existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can view active products" ON public.products;
DROP POLICY IF EXISTS "Service role can manage products" ON public.products;
DROP POLICY IF EXISTS "Anyone can view artisans" ON public.artisans;
DROP POLICY IF EXISTS "Service role can manage artisans" ON public.artisans;
DROP POLICY IF EXISTS "Anyone can view approved reviews" ON public.product_reviews;
DROP POLICY IF EXISTS "Authenticated users can create reviews" ON public.product_reviews;
DROP POLICY IF EXISTS "Users can update their own reviews" ON public.product_reviews;
DROP POLICY IF EXISTS "Service role can manage all reviews" ON public.product_reviews;
DROP POLICY IF EXISTS "Service role can view search analytics" ON public.search_analytics;
DROP POLICY IF EXISTS "Anyone can insert search analytics" ON public.search_analytics;
DROP POLICY IF EXISTS "Users can view their own wishlist" ON public.wishlists;
DROP POLICY IF EXISTS "Users can manage their own wishlist" ON public.wishlists;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.user_profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.user_profiles;
DROP POLICY IF EXISTS "Service role can manage all profiles" ON public.user_profiles;
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Service role can manage all orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Users can create their own orders" ON public.orders;
DROP POLICY IF EXISTS "Authenticated users can create orders with their own user_id" ON public.orders;
DROP POLICY IF EXISTS "Anyone can submit wholesale leads" ON public.wholesale_leads;
DROP POLICY IF EXISTS "Service role can view all wholesale leads" ON public.wholesale_leads;
DROP POLICY IF EXISTS "Authenticated users can submit wholesale leads" ON public.wholesale_leads;

-- Enable RLS on all tables that don't have it yet
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artisans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Create secure RLS policies for orders table
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (
    auth.uid() = user_id
  );

CREATE POLICY "Authenticated users can create orders with their own user_id" ON public.orders
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND 
    auth.uid() = user_id AND
    auth.role() = 'authenticated'
  );

CREATE POLICY "Service role can manage all orders" ON public.orders
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create secure RLS policies for products (public read, admin write)
CREATE POLICY "Anyone can view active products" ON public.products
  FOR SELECT USING (
    is_active = true
  );

CREATE POLICY "Service role can manage products" ON public.products
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create secure RLS policies for artisans (public read)
CREATE POLICY "Anyone can view artisans" ON public.artisans
  FOR SELECT USING (true);

CREATE POLICY "Service role can manage artisans" ON public.artisans
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create secure RLS policies for product reviews
CREATE POLICY "Anyone can view approved reviews" ON public.product_reviews
  FOR SELECT USING (
    status = 'approved'
  );

CREATE POLICY "Authenticated users can create reviews" ON public.product_reviews
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL AND
    auth.uid() = user_id
  );

CREATE POLICY "Users can update their own reviews" ON public.product_reviews
  FOR UPDATE USING (
    auth.uid() = user_id
  );

CREATE POLICY "Service role can manage all reviews" ON public.product_reviews
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create secure RLS policies for search analytics
CREATE POLICY "Service role can view search analytics" ON public.search_analytics
  FOR SELECT USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

CREATE POLICY "Anyone can insert search analytics" ON public.search_analytics
  FOR INSERT WITH CHECK (true);

-- Create secure RLS policies for wishlists
CREATE POLICY "Users can view their own wishlist" ON public.wishlists
  FOR SELECT USING (
    auth.uid() = user_id
  );

CREATE POLICY "Users can manage their own wishlist" ON public.wishlists
  FOR ALL USING (
    auth.uid() = user_id
  );

-- Create secure RLS policies for user profiles
CREATE POLICY "Users can view their own profile" ON public.user_profiles
  FOR SELECT USING (
    auth.uid() = id
  );

CREATE POLICY "Users can update their own profile" ON public.user_profiles
  FOR UPDATE USING (
    auth.uid() = id
  );

CREATE POLICY "Users can insert their own profile" ON public.user_profiles
  FOR INSERT WITH CHECK (
    auth.uid() = id
  );

CREATE POLICY "Service role can manage all profiles" ON public.user_profiles
  FOR ALL USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Create secure RLS policies for wholesale leads
CREATE POLICY "Authenticated users can submit wholesale leads" ON public.wholesale_leads
  FOR INSERT WITH CHECK (
    auth.role() = 'authenticated' OR
    auth.jwt() ->> 'role' = 'service_role'
  );

CREATE POLICY "Service role can view all wholesale leads" ON public.wholesale_leads
  FOR SELECT USING (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Update user_id columns to NOT NULL where required for security (with safe approach)
DO $$
BEGIN
  -- Only update if the column allows NULL
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'orders' AND column_name = 'user_id' AND is_nullable = 'YES'
  ) THEN
    ALTER TABLE public.orders ALTER COLUMN user_id SET NOT NULL;
  END IF;
  
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'wishlists' AND column_name = 'user_id' AND is_nullable = 'YES'
  ) THEN
    ALTER TABLE public.wishlists ALTER COLUMN user_id SET NOT NULL;
  END IF;
  
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'product_reviews' AND column_name = 'user_id' AND is_nullable = 'YES'
  ) THEN
    ALTER TABLE public.product_reviews ALTER COLUMN user_id SET NOT NULL;
  END IF;
END $$;

-- Add security constraints (drop existing ones first to avoid conflicts)
DO $$
BEGIN
  -- Drop existing constraints if they exist
  ALTER TABLE public.orders DROP CONSTRAINT IF EXISTS check_reasonable_quantity;
  ALTER TABLE public.orders DROP CONSTRAINT IF EXISTS check_reasonable_price;
  ALTER TABLE public.wholesale_leads DROP CONSTRAINT IF EXISTS check_address_length;
  ALTER TABLE public.wholesale_leads DROP CONSTRAINT IF EXISTS check_products_interest_length;
  ALTER TABLE public.wholesale_leads DROP CONSTRAINT IF EXISTS check_message_length;
  
  -- Add new constraints
  ALTER TABLE public.orders 
    ADD CONSTRAINT check_reasonable_quantity CHECK (quantity > 0 AND quantity <= 1000),
    ADD CONSTRAINT check_reasonable_price CHECK (price_total > 0 AND price_total <= 1000000);
    
  ALTER TABLE public.wholesale_leads 
    ADD CONSTRAINT check_address_length CHECK (length(address) <= 500),
    ADD CONSTRAINT check_products_interest_length CHECK (length(products_interest) <= 2000),
    ADD CONSTRAINT check_message_length CHECK (message IS NULL OR length(message) <= 1000);
END $$;

-- Create indexes for better performance on security-critical lookups
CREATE INDEX IF NOT EXISTS idx_orders_user_id_secure ON public.orders(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON public.orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_wishlists_user_id_secure ON public.wishlists(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_product_reviews_user_id_secure ON public.product_reviews(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_wholesale_leads_email_secure ON public.wholesale_leads(email);
