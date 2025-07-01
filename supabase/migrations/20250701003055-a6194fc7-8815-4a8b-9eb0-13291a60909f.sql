
-- Create a trigger function that sends welcome email on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_email text;
  user_name text;
BEGIN
  -- Get user email and name from the new user record
  user_email := NEW.email;
  user_name := COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(user_email, '@', 1));
  
  -- Insert user data into public.users table
  INSERT INTO public.users (user_id, first_name, email)
  VALUES (NEW.id, user_name, user_email)
  ON CONFLICT (user_id) DO NOTHING;
  
  -- Call the welcome email function asynchronously
  PERFORM
    net.http_post(
      url := 'https://yiqvfmspqdrdlaqedlfv.supabase.co/functions/v1/send-welcome-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcXZmbXNwcWRyZGxhcWVkbGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0ODAzNjIsImV4cCI6MjA2NjA1NjM2Mn0.XvzTs5Cn3c2sCFlrRK2aYhTOaxOq7Y_cJLc--4eQ5pQ'
      ),
      body := jsonb_build_object(
        'email', user_email,
        'fullName', user_name,
        'language', 'fr'
      )
    );
  
  RETURN NEW;
END;
$$;

-- Create the trigger to call the function after user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user_signup();

-- Enable the pg_net extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Update the users table to allow user_id to be populated automatically
ALTER TABLE public.users 
ADD CONSTRAINT users_user_id_unique UNIQUE (user_id);
