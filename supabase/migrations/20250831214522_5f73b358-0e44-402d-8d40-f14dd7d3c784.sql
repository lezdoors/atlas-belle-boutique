-- Create user roles enum
CREATE TYPE public.user_role AS ENUM ('admin', 'user', 'moderator');

-- Create user_roles table for proper role management
CREATE TABLE public.user_roles (
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

-- Create function to safely assign admin role (only existing admins can assign)
CREATE OR REPLACE FUNCTION public.assign_admin_role(target_user_id UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_count INTEGER;
  current_user_is_admin BOOLEAN;
BEGIN
  -- Check if current user is admin
  SELECT public.is_admin(auth.uid()) INTO current_user_is_admin;
  
  -- Count existing admins
  SELECT COUNT(*) INTO admin_count 
  FROM public.user_roles 
  WHERE role = 'admin'::user_role AND is_active = true;
  
  -- Allow creation if no admins exist (initial setup) or if current user is admin
  IF admin_count = 0 OR current_user_is_admin THEN
    INSERT INTO public.user_roles (user_id, role, assigned_by)
    VALUES (target_user_id, 'admin'::user_role, auth.uid())
    ON CONFLICT (user_id, role) DO UPDATE SET
      is_active = true,
      assigned_by = auth.uid(),
      assigned_at = NOW();
    
    -- Log the admin assignment
    PERFORM public.log_security_event(
      'admin_role_assigned',
      auth.uid(),
      NULL,
      NULL,
      jsonb_build_object(
        'target_user', target_user_id,
        'assigned_by', auth.uid(),
        'admin_count_before', admin_count
      )
    );
    
    RETURN true;
  ELSE
    -- Log unauthorized attempt
    PERFORM public.log_security_event(
      'unauthorized_admin_assignment_attempt',
      auth.uid(),
      NULL,
      NULL,
      jsonb_build_object('target_user', target_user_id)
    );
    
    RETURN false;
  END IF;
END;
$$;

-- RLS policies for user_roles table
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

-- Service role has full access
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

-- Enhanced rate limiting table with better structure
CREATE TABLE IF NOT EXISTS public.enhanced_rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  ip_address INET,
  action TEXT NOT NULL,
  attempt_count INTEGER DEFAULT 1,
  first_attempt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_attempt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reset_time TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '1 hour'),
  blocked_until TIMESTAMP WITH TIME ZONE,
  is_blocked BOOLEAN DEFAULT false,
  UNIQUE(user_id, action),
  UNIQUE(ip_address, action)
);

-- Enable RLS on enhanced_rate_limits
ALTER TABLE public.enhanced_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access on enhanced_rate_limits"
ON public.enhanced_rate_limits
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Enhanced security audit with better categorization
CREATE TABLE IF NOT EXISTS public.enhanced_security_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  severity TEXT NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  user_id UUID REFERENCES auth.users(id),
  ip_address INET,
  user_agent TEXT,
  resource_accessed TEXT,
  action_taken TEXT,
  event_details JSONB,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved BOOLEAN DEFAULT false
);

-- Enable RLS on enhanced_security_log
ALTER TABLE public.enhanced_security_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can access security logs"
ON public.enhanced_security_log
FOR ALL
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Service role full access on enhanced_security_log"
ON public.enhanced_security_log
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Enhanced security logging function
CREATE OR REPLACE FUNCTION public.log_enhanced_security_event(
  event_type TEXT,
  severity TEXT DEFAULT 'medium',
  user_id_param UUID DEFAULT NULL,
  ip_address_param INET DEFAULT NULL,
  user_agent_param TEXT DEFAULT NULL,
  resource_accessed_param TEXT DEFAULT NULL,
  action_taken_param TEXT DEFAULT NULL,
  event_details_param JSONB DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.enhanced_security_log (
    event_type,
    severity,
    user_id,
    ip_address,
    user_agent,
    resource_accessed,
    action_taken,
    event_details
  ) VALUES (
    event_type,
    severity,
    COALESCE(user_id_param, auth.uid()),
    ip_address_param,
    user_agent_param,
    resource_accessed_param,
    action_taken_param,
    event_details_param
  );
END;
$$;