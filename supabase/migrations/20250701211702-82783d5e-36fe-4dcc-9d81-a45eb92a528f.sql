
-- Create early access list table
CREATE TABLE IF NOT EXISTS public.early_access_list (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add Row Level Security
ALTER TABLE public.early_access_list ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting early access subscriptions (public access)
CREATE POLICY "Anyone can subscribe to early access" 
  ON public.early_access_list 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for service role to manage early access subscriptions
CREATE POLICY "Service role can manage early access subscriptions" 
  ON public.early_access_list 
  FOR ALL 
  USING ((auth.jwt() ->> 'role'::text) = 'service_role'::text);
