-- Add signup method to users table
ALTER TABLE public.users 
ADD COLUMN IF NOT EXISTS signup_method text DEFAULT 'email',
ADD COLUMN IF NOT EXISTS last_login_at timestamp with time zone,
ADD COLUMN IF NOT EXISTS avatar_url text;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_users_signup_method ON public.users(signup_method);
CREATE INDEX IF NOT EXISTS idx_users_last_login ON public.users(last_login_at);

-- Update the user signup trigger to include signup method
CREATE OR REPLACE FUNCTION public.handle_new_user_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  user_email text;
  user_name text;
  signup_provider text;
BEGIN
  -- Get user data
  user_email := NEW.email;
  user_name := COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(user_email, '@', 1));
  
  -- Determine signup method based on provider
  signup_provider := CASE 
    WHEN NEW.app_metadata->>'provider' = 'google' THEN 'google'
    WHEN NEW.app_metadata->>'provider' = 'apple' THEN 'apple'
    ELSE 'email'
  END;
  
  -- Insert user data into public.users table
  INSERT INTO public.users (user_id, first_name, email, signup_method)
  VALUES (NEW.id, user_name, user_email, signup_provider)
  ON CONFLICT (user_id) DO UPDATE SET
    last_login_at = now(),
    avatar_url = COALESCE(NEW.raw_user_meta_data->>'avatar_url', users.avatar_url);
  
  -- Call the welcome email function asynchronously
  PERFORM
    net.http_post(
      url := 'https://yiqvfmspqdrdlaqedlfv.supabase.co/functions/v1/send-enhanced-welcome-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcXZmbXNwcWRyZGxhcWVkbGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0ODAzNjIsImV4cCI6MjA2NjA1NjM2Mn0.XvzTs5Cn3c2sCFlrRK2aYhTOaxOq7Y_cJLc--4eQ5pQ'
      ),
      body := jsonb_build_object(
        'email', user_email,
        'fullName', user_name,
        'language', COALESCE(NEW.raw_user_meta_data->>'preferred_language', 'fr'),
        'signupMethod', signup_provider
      )
    );
  
  RETURN NEW;
END;
$function$;