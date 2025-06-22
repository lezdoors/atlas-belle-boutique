
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { sanitizeInput, validateEmail } from '@/utils/inputValidation';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      // Validate and sanitize inputs
      const cleanEmail = sanitizeInput(email.toLowerCase().trim());
      const cleanFullName = fullName ? sanitizeInput(fullName.trim()) : '';

      if (!validateEmail(cleanEmail)) {
        return { error: { message: 'Invalid email format' } };
      }

      if (password.length < 8) {
        return { error: { message: 'Password must be at least 8 characters long' } };
      }

      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: cleanFullName
          }
        }
      });

      return { error };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error: { message: 'An unexpected error occurred during sign up' } };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Validate and sanitize inputs
      const cleanEmail = sanitizeInput(email.toLowerCase().trim());

      if (!validateEmail(cleanEmail)) {
        return { error: { message: 'Invalid email format' } };
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      return { error };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error: { message: 'An unexpected error occurred during sign in' } };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      return { error };
    } catch (error) {
      console.error('Sign out error:', error);
      return { error: { message: 'An unexpected error occurred during sign out' } };
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const cleanEmail = sanitizeInput(email.toLowerCase().trim());

      if (!validateEmail(cleanEmail)) {
        return { error: { message: 'Invalid email format' } };
      }

      const redirectUrl = `${window.location.origin}/reset-password`;
      
      const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
        redirectTo: redirectUrl,
      });

      return { error };
    } catch (error) {
      console.error('Reset password error:', error);
      return { error: { message: 'An unexpected error occurred during password reset' } };
    }
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
