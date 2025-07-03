-- Supabase Security Hardening Migration
-- 1. Harden SQL Functions with secure search_path
-- 2. Move pg_net extension to safe schema

-- 1. Update handle_new_user function with secure search_path
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
begin
  insert into public.profiles (id, created_at)
  values (new.id, now());
  return new;
end;
$function$;

-- 2. Update handle_new_user_signup function with secure search_path
CREATE OR REPLACE FUNCTION public.handle_new_user_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
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
        extensions.http_post(
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
$function$;

-- 3. Update generate_order_number function with secure search_path
CREATE OR REPLACE FUNCTION public.generate_order_number()
RETURNS text
LANGUAGE plpgsql
SET search_path = 'public'
AS $function$
BEGIN
  RETURN 'PA-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(NEXTVAL('order_number_seq')::TEXT, 6, '0');
END;
$function$;

-- 4. Move pg_net extension to safe schema
CREATE SCHEMA IF NOT EXISTS extensions;

-- Drop existing pg_net extension if it exists
DROP EXTENSION IF EXISTS pg_net CASCADE;

-- Create pg_net extension in extensions schema
CREATE EXTENSION IF NOT EXISTS pg_net SCHEMA extensions;

-- Grant necessary permissions for the extension to work properly
GRANT USAGE ON SCHEMA extensions TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA extensions TO postgres, anon, authenticated, service_role;

-- Update any existing code that references net.http_post to use extensions.http_post
-- (This is already updated in the handle_new_user_signup function above)