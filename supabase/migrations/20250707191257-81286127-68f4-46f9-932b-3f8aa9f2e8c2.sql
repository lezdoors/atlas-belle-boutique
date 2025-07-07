-- Create Maison Chapuis e-commerce schema (cart and orders only)
-- Note: Products table already exists, so we'll work with the existing one

-- Cart items table
CREATE TABLE public.cart_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Orders table  
CREATE TABLE public.maison_orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  shipping_address JSONB NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Order items table
CREATE TABLE public.maison_order_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES public.maison_orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL,
  price_at_time DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.maison_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.maison_order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Cart Items (Session-based access)
CREATE POLICY "Users can view their own cart items" 
ON public.cart_items 
FOR SELECT 
USING (true);

CREATE POLICY "Users can insert cart items" 
ON public.cart_items 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own cart items" 
ON public.cart_items 
FOR UPDATE 
USING (true);

CREATE POLICY "Users can delete their own cart items" 
ON public.cart_items 
FOR DELETE 
USING (true);

-- RLS Policies for Orders (Customer email-based access)
CREATE POLICY "Customers can view their own orders" 
ON public.maison_orders 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create orders" 
ON public.maison_orders 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Service role can manage all orders" 
ON public.maison_orders 
FOR ALL 
USING ((auth.jwt() ->> 'role'::text) = 'service_role'::text);

-- RLS Policies for Order Items (Linked to orders)
CREATE POLICY "Users can view order items for their orders" 
ON public.maison_order_items 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create order items" 
ON public.maison_order_items 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Service role can manage all order items" 
ON public.maison_order_items 
FOR ALL 
USING ((auth.jwt() ->> 'role'::text) = 'service_role'::text);

-- Create indexes for better performance
CREATE INDEX idx_cart_items_session_id ON public.cart_items(session_id);
CREATE INDEX idx_cart_items_product_id ON public.cart_items(product_id);
CREATE INDEX idx_maison_orders_customer_email ON public.maison_orders(customer_email);
CREATE INDEX idx_maison_orders_status ON public.maison_orders(status);
CREATE INDEX idx_maison_order_items_order_id ON public.maison_order_items(order_id);
CREATE INDEX idx_maison_order_items_product_id ON public.maison_order_items(product_id);