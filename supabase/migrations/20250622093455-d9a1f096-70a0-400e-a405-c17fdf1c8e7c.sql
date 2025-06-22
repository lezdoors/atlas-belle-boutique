
-- Remove the problematic anonymous insert policy from orders table
DROP POLICY IF EXISTS "Authenticated users can create orders" ON public.orders;

-- Create a more secure policy that only allows service role to insert orders
CREATE POLICY "Service role can create orders" ON public.orders
  FOR INSERT WITH CHECK (
    auth.jwt() ->> 'role' = 'service_role'
  );

-- Ensure the policy for viewing orders is secure
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (
    auth.uid() = user_id OR 
    auth.jwt() ->> 'role' = 'service_role'
  );
