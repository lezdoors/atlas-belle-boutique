
-- Create user profiles table with enhanced features
CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  country TEXT DEFAULT 'France',
  preferred_language TEXT DEFAULT 'fr',
  preferred_currency TEXT DEFAULT 'EUR',
  marketing_consent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table for inventory management
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_fr TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_fr TEXT,
  description_en TEXT,
  price_eur DECIMAL(10,2) NOT NULL,
  price_usd DECIMAL(10,2) NOT NULL,
  sku TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  stock_quantity INTEGER DEFAULT 0,
  min_stock_level INTEGER DEFAULT 5,
  is_active BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  images JSONB DEFAULT '[]'::jsonb,
  ingredients JSONB DEFAULT '[]'::jsonb,
  origin_region TEXT,
  artisan_story TEXT,
  sustainability_badges JSONB DEFAULT '[]'::jsonb,
  seasonal_availability JSONB DEFAULT '[]'::jsonb,
  seo_title_fr TEXT,
  seo_title_en TEXT,
  seo_description_fr TEXT,
  seo_description_en TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create wishlist table
CREATE TABLE public.wishlists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Create enhanced orders table
CREATE TABLE public.enhanced_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  order_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending',
  total_amount_eur DECIMAL(10,2) NOT NULL,
  total_amount_usd DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'EUR',
  shipping_address JSONB,
  billing_address JSONB,
  payment_method TEXT,
  payment_status TEXT DEFAULT 'pending',
  stripe_session_id TEXT,
  tracking_number TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create order items table
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.enhanced_orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL,
  unit_price_eur DECIMAL(10,2) NOT NULL,
  unit_price_usd DECIMAL(10,2) NOT NULL,
  total_price_eur DECIMAL(10,2) NOT NULL,
  total_price_usd DECIMAL(10,2) NOT NULL
);

-- Create product reviews table
CREATE TABLE public.product_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT,
  verified_purchase BOOLEAN DEFAULT false,
  helpful_votes INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Create search analytics table
CREATE TABLE public.search_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  results_count INTEGER,
  clicked_product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create artisans table for storytelling
CREATE TABLE public.artisans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  region TEXT NOT NULL,
  specialty TEXT,
  story_fr TEXT,
  story_en TEXT,
  image_url TEXT,
  video_url TEXT,
  years_experience INTEGER,
  techniques JSONB DEFAULT '[]'::jsonb,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enhanced_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artisans ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view their own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for products (public read, admin write)
CREATE POLICY "Anyone can view active products" ON public.products
  FOR SELECT USING (is_active = true);

-- RLS Policies for wishlists
CREATE POLICY "Users can manage their own wishlist" ON public.wishlists
  FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for orders
CREATE POLICY "Users can view their own orders" ON public.enhanced_orders
  FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for order items
CREATE POLICY "Users can view their own order items" ON public.order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.enhanced_orders 
      WHERE id = order_items.order_id AND user_id = auth.uid()
    )
  );

-- RLS Policies for reviews
CREATE POLICY "Anyone can read approved reviews" ON public.product_reviews
  FOR SELECT USING (status = 'approved');
CREATE POLICY "Users can manage their own reviews" ON public.product_reviews
  FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for search analytics (restricted)
CREATE POLICY "Search analytics insert only" ON public.search_analytics
  FOR INSERT WITH CHECK (true);

-- RLS Policies for artisans (public read)
CREATE POLICY "Anyone can view featured artisans" ON public.artisans
  FOR SELECT USING (is_featured = true);

-- Create function to generate order numbers
CREATE OR REPLACE FUNCTION public.generate_order_number()
RETURNS TEXT AS $$
BEGIN
  RETURN 'PA-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(NEXTVAL('order_number_seq')::TEXT, 6, '0');
END;
$$ LANGUAGE plpgsql;

-- Create sequence for order numbers
CREATE SEQUENCE IF NOT EXISTS order_number_seq START 1000;

-- Insert sample products with Moroccan authenticity
INSERT INTO public.products (name_fr, name_en, description_fr, description_en, price_eur, price_usd, sku, category, subcategory, stock_quantity, featured, images, ingredients, origin_region, artisan_story, sustainability_badges, seasonal_availability, seo_title_fr, seo_title_en) VALUES 
('Huile d''Argan Premium Bio', 'Premium Organic Argan Oil', 'Huile d''argan 100% pure, pressée à froid par les coopératives féminines de l''Atlas', '100% pure argan oil, cold-pressed by women''s cooperatives in the Atlas Mountains', 89.00, 95.00, 'ARG-001', 'Huiles', 'Précieuses', 25, true, '["https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/orange%20rose%20and%20bottle%20behind%20it.jpg"]', '["Argania Spinosa", "Vitamine E"]', 'Montagnes de l''Atlas', 'Pressée à la main par Fatima et son équipe dans la coopérative d''Essaouira', '["bio", "commerce-equitable", "vegan"]', '["printemps", "été", "automne", "hiver"]', 'Huile d''Argan Premium Bio - Perle de l''Atlas', 'Premium Organic Argan Oil - Pearl of Atlas'),
('Savon Noir Traditionnel', 'Traditional Black Soap', 'Savon noir artisanal aux olives de Meknès, idéal pour le rituel du hammam', 'Artisanal black soap with Meknes olives, perfect for hammam ritual', 35.00, 38.00, 'SAV-001', 'Gommage', 'Traditionnel', 50, true, '["https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/women%20face%20covered.jpg"]', '["Huile d''olive", "Potasse", "Eucalyptus"]', 'Meknès', 'Fabriqué selon les méthodes ancestrales par Maître Hassan', '["naturel", "zero-dechet", "artisanal"]', '["printemps", "été", "automne", "hiver"]', 'Savon Noir Traditionnel - Rituel Hammam', 'Traditional Black Soap - Hammam Ritual');

-- Insert sample artisans
INSERT INTO public.artisans (name, region, specialty, story_fr, story_en, years_experience, techniques, is_featured) VALUES 
('Fatima Benali', 'Essaouira', 'Huile d''Argan', 'Fatima dirige une coopérative de 20 femmes qui perpétuent la tradition millénaire de l''extraction d''huile d''argan. Chaque goutte raconte l''histoire de générations de savoir-faire berbère.', 'Fatima leads a cooperative of 20 women who perpetuate the thousand-year-old tradition of argan oil extraction. Each drop tells the story of generations of Berber know-how.', 15, '["Extraction manuelle", "Torréfaction traditionnelle", "Pressage à froid"]', true),
('Hassan El Fassi', 'Fès', 'Savonnerie', 'Maître savonnier depuis trois générations, Hassan fabrique ses savons selon les recettes ancestrales transmises par son grand-père. Son atelier dans la médina de Fès est un véritable temple de l''artisanat.', 'Master soap maker for three generations, Hassan makes his soaps according to ancestral recipes passed down by his grandfather. His workshop in the Fez medina is a true temple of craftsmanship.', 25, '["Saponification à froid", "Séchage naturel", "Parfumage aux huiles essentielles"]', true);

-- Create indexes for performance
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_products_featured ON public.products(featured);
CREATE INDEX idx_products_active ON public.products(is_active);
CREATE INDEX idx_wishlists_user ON public.wishlists(user_id);
CREATE INDEX idx_orders_user ON public.enhanced_orders(user_id);
CREATE INDEX idx_orders_status ON public.enhanced_orders(status);
CREATE INDEX idx_reviews_product ON public.product_reviews(product_id);
CREATE INDEX idx_reviews_rating ON public.product_reviews(rating);
CREATE INDEX idx_search_query ON public.search_analytics(query);
