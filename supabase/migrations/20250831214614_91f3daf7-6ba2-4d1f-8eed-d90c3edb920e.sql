-- Create user_roles table for proper role management (using existing user_role enum)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL DEFAULT 'user',
  assigned_by UUID REFERENCES auth.users(id),
  assigned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(check_user_id UUID, required_role user_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = check_user_id 
    AND role = required_role 
    AND is_active = true
  );
$$;

-- Update the is_admin function to use proper roles
CREATE OR REPLACE FUNCTION public.is_admin(check_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(check_user_id, 'admin'::user_role);
$$;

-- Drop and recreate RLS policies for user_roles table
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can assign roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles" ON public.user_roles;
DROP POLICY IF EXISTS "Service role full access on user_roles" ON public.user_roles;

CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can assign roles"
ON public.user_roles
FOR INSERT
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
USING (public.is_admin(auth.uid()));

CREATE POLICY "Service role full access on user_roles"
ON public.user_roles
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Update newsletter_subscribers policies to use proper admin detection
DROP POLICY IF EXISTS "Only authenticated admins can insert newsletter subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Only authenticated admins can view newsletter subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "newsletter_subscribers_admin_only" ON public.newsletter_subscribers;

CREATE POLICY "Admins can manage newsletter subscribers"
ON public.newsletter_subscribers
FOR ALL
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Update wholesale_leads policies
DROP POLICY IF EXISTS "Only authenticated admins can insert wholesale leads" ON public.wholesale_leads;
DROP POLICY IF EXISTS "Only authenticated admins can view wholesale leads" ON public.wholesale_leads;
DROP POLICY IF EXISTS "wholesale_leads_admin_only" ON public.wholesale_leads;

CREATE POLICY "Admins can manage wholesale leads"
ON public.wholesale_leads
FOR ALL
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Update early_access_list policies
DROP POLICY IF EXISTS "Only authenticated admins can insert early access entries" ON public.early_access_list;
DROP POLICY IF EXISTS "Only authenticated admins can view early access list" ON public.early_access_list;
DROP POLICY IF EXISTS "early_access_list_admin_only" ON public.early_access_list;

CREATE POLICY "Admins can manage early access list"
ON public.early_access_list
FOR ALL
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Secure admin_analytics table
DROP POLICY IF EXISTS "admin_analytics_restricted_access" ON public.admin_analytics;

CREATE POLICY "Only admins can access analytics"
ON public.admin_analytics
FOR ALL
USING (
  CASE 
    WHEN auth.role() = 'service_role' THEN true
    ELSE public.is_admin(auth.uid())
  END
)
WITH CHECK (
  CASE 
    WHEN auth.role() = 'service_role' THEN true  
    ELSE public.is_admin(auth.uid())
  END
);