-- Security fix: Update user signup trigger to use environment variables instead of hardcoded keys
-- Drop and recreate the trigger function with proper security practices

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user_signup();

-- Create improved function that uses Supabase service role key from environment
CREATE OR REPLACE FUNCTION public.handle_new_user_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_email text;
  user_name text;
  signup_provider text;
  supabase_url text;
  service_role_key text;
BEGIN
  -- Get environment variables securely
  supabase_url := current_setting('app.settings.supabase_url', true);
  service_role_key := current_setting('app.settings.service_role_key', true);
  
  -- Get user data
  user_email := NEW.email;
  user_name := COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(user_email, '@', 1));
  
  -- Determine signup method based on provider
  signup_provider := CASE 
    WHEN NEW.app_metadata->>'provider' = 'google' THEN 'google'
    WHEN NEW.app_metadata->>'provider' = 'apple' THEN 'apple'
    ELSE 'email'
  END;
  
  -- Insert user data into public.users table with proper error handling
  BEGIN
    INSERT INTO public.users (user_id, first_name, email, signup_method)
    VALUES (NEW.id, user_name, user_email, signup_provider)
    ON CONFLICT (user_id) DO UPDATE SET
      last_login_at = now(),
      avatar_url = COALESCE(NEW.raw_user_meta_data->>'avatar_url', users.avatar_url);
  EXCEPTION
    WHEN OTHERS THEN
      -- Log error but don't fail the signup process
      RAISE WARNING 'Failed to insert user data: %', SQLERRM;
  END;
  
  -- Only call welcome email function if environment variables are available
  IF supabase_url IS NOT NULL AND service_role_key IS NOT NULL THEN
    BEGIN
      PERFORM
        net.http_post(
          url := supabase_url || '/functions/v1/send-enhanced-welcome-email',
          headers := jsonb_build_object(
            'Content-Type', 'application/json',
            'Authorization', 'Bearer ' || service_role_key
          ),
          body := jsonb_build_object(
            'email', user_email,
            'fullName', user_name,
            'language', COALESCE(NEW.raw_user_meta_data->>'preferred_language', 'fr'),
            'signupMethod', signup_provider
          )
        );
    EXCEPTION
      WHEN OTHERS THEN
        -- Log error but don't fail the signup process
        RAISE WARNING 'Failed to send welcome email: %', SQLERRM;
    END;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user_signup();

-- Add additional security constraints to prevent malicious data
ALTER TABLE public.users 
  ADD CONSTRAINT check_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT check_name_length CHECK (length(first_name) <= 100 AND length(first_name) >= 1);

-- Ensure proper indexing for security-critical lookups
CREATE INDEX IF NOT EXISTS idx_users_email_secure ON public.users(email) WHERE email IS NOT NULL;

-- Add audit trail for user creation
CREATE TABLE IF NOT EXISTS public.user_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.users(user_id),
  action text NOT NULL,
  timestamp timestamp with time zone DEFAULT now(),
  ip_address inet,
  user_agent text,
  metadata jsonb
);

-- Enable RLS on audit log
ALTER TABLE public.user_audit_log ENABLE ROW LEVEL SECURITY;

-- Only authenticated users can view their own audit logs
CREATE POLICY "Users can view their own audit logs" ON public.user_audit_log
  FOR SELECT USING (
    auth.uid() IS NOT NULL AND 
    user_id IN (SELECT user_id FROM public.users WHERE user_id = auth.uid())
  );

-- Service role can manage all audit logs
CREATE POLICY "Service role can manage audit logs" ON public.user_audit_log
  FOR ALL USING (
    (auth.jwt() ->> 'role') = 'service_role'
  );