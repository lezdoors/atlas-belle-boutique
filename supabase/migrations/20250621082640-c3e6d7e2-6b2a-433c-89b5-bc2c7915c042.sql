
-- Create wholesale_leads table for storing wholesale application data
CREATE TABLE wholesale_leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name varchar(255) NOT NULL,
  contact_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(50) NOT NULL,
  website varchar(255),
  address text NOT NULL,
  business_type varchar(255) NOT NULL,
  products_interest text NOT NULL,
  message text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE wholesale_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (no authentication required for wholesale leads)
CREATE POLICY "Allow wholesale leads submission" ON wholesale_leads
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for admin access (if needed later)
CREATE POLICY "Admin can view all wholesale leads" ON wholesale_leads
  FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');
