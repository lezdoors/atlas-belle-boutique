
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check, AlertCircle, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { validateEmail, sanitizeInput } from '@/utils/inputValidation';
import { supabase } from '@/integrations/supabase/client';

const FooterNewsletter = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const { language } = useLanguage();
  const { toast } = useToast();

  const handleFirstNameChange = (value: string) => {
    const sanitized = sanitizeInput(value);
    setFirstName(sanitized);
    
    if (sanitized && sanitized.length < 2) {
      setFirstNameError(language === 'fr' ? 'Le prénom doit contenir au moins 2 caractères' : 'First name must be at least 2 characters');
    } else {
      setFirstNameError('');
    }
  };

  const handleEmailChange = (value: string) => {
    const sanitized = sanitizeInput(value);
    setEmail(sanitized);
    
    if (sanitized && !validateEmail(sanitized)) {
      setEmailError(language === 'fr' ? 'Adresse e-mail invalide' : 'Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!firstName || firstName.length < 2) {
      setFirstNameError(language === 'fr' ? 'Veuillez entrer votre prénom' : 'Please enter your first name');
      return;
    }
    
    if (!email || !validateEmail(email)) {
      setEmailError(language === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Store user data in Supabase
      const { data: userData, error: userError } = await supabase
        .from('users')
        .insert([
          {
            first_name: firstName,
            email: email,
            user_id: null // Will be set when user signs up properly
          }
        ])
        .select();

      if (userError) {
        console.error('Error saving user data:', userError);
        throw new Error('Failed to save user data');
      }

      // Send welcome email
      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: {
          email: email,
          fullName: firstName,
          language: language
        }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
        // Don't throw error here - user data is saved, just email failed
      }

      setIsSubmitted(true);
      toast({
        title: language === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!',
        description: language === 'fr' 
          ? 'Merci de vous être inscrit à notre newsletter. Vous recevrez bientôt un email de bienvenue.'
          : 'Thank you for subscribing to our newsletter. You will receive a welcome email shortly.',
      });

      setFirstName('');
      setEmail('');
      setFirstNameError('');
      setEmailError('');
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' 
          ? 'Une erreur est survenue. Veuillez réessayer.'
          : 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-sand-700/50 rounded-lg p-6 border border-sand-600">
        <div className="flex items-center justify-center space-x-2 text-green-400">
          <Check className="h-5 w-5" />
          <span className="text-sm font-medium">
            {language === 'fr' ? 'Inscription confirmée' : 'Subscription confirmed'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand-700/50 rounded-lg p-6 border border-sand-600">
      <div className="mb-4">
        <h4 className="text-lg font-serif font-semibold text-amber-400 mb-2">
          {language === 'fr' ? 'Secrets d\'Atlas' : 'Atlas Secrets'}
        </h4>
        <p className="text-sand-300 text-sm leading-relaxed">
          {language === 'fr' 
            ? 'Découvrez en avant-première nos nouvelles collections et rituels de beauté ancestraux.'
            : 'Discover our new collections and ancestral beauty rituals in advance.'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Input
            type="text"
            value={firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
            placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'}
            className={`pl-10 bg-sand-800/50 border-sand-600 text-sand-100 placeholder:text-sand-400 focus:border-amber-500 focus:ring-amber-500/20 ${
              firstNameError ? 'border-red-500' : ''
            }`}
            maxLength={50}
            disabled={isSubmitting}
            autoComplete="given-name"
          />
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sand-400" />
        </div>
        
        {firstNameError && (
          <div className="flex items-center text-red-400 text-xs">
            <AlertCircle className="h-3 w-3 mr-1" />
            {firstNameError}
          </div>
        )}

        <div className="relative">
          <Input
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
            className={`pl-10 bg-sand-800/50 border-sand-600 text-sand-100 placeholder:text-sand-400 focus:border-amber-500 focus:ring-amber-500/20 ${
              emailError ? 'border-red-500' : ''
            }`}
            maxLength={100}
            disabled={isSubmitting}
            autoComplete="email"
          />
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sand-400" />
        </div>
        
        {emailError && (
          <div className="flex items-center text-red-400 text-xs">
            <AlertCircle className="h-3 w-3 mr-1" />
            {emailError}
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full bg-amber-600 hover:bg-amber-500 text-white text-sm py-2 h-auto border-0"
          disabled={isSubmitting || !!emailError || !!firstNameError}
        >
          {isSubmitting 
            ? (language === 'fr' ? 'Inscription...' : 'Subscribing...')
            : (language === 'fr' ? 'S\'inscrire' : 'Subscribe')
          }
        </Button>
      </form>

      <p className="text-xs text-sand-400 mt-3 text-center">
        {language === 'fr' 
          ? 'Désinscription possible à tout moment.'
          : 'Unsubscribe at any time.'
        }
      </p>
    </div>
  );
};

export default FooterNewsletter;
