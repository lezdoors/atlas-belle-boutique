import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const NewsletterTopBanner = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Store subscription in newsletter_subscribers table
      const { error: subscriptionError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (subscriptionError) {
        if (subscriptionError.code === '23505') { // Unique constraint violation
          toast.error(language === 'fr' ? 'Vous êtes déjà inscrit(e).' : 'You are already subscribed.');
          setEmail('');
          setIsSubmitting(false);
          return;
        }
        throw subscriptionError;
      }

      // Send welcome email via SMTP
      const { error: emailError } = await supabase.functions.invoke('send-newsletter-welcome-smtp', {
        body: {
          email: email,
          firstName: email.split('@')[0], // Use email prefix as fallback name
          language: language
        }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
        // Don't throw error here - subscription is saved, just email failed
      }

      toast.success(language === 'fr' ? 'Merci ! Vous êtes bien inscrit(e).' : 'Thank you! You are now subscribed.');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error(language === 'fr' ? 'Une erreur est survenue' : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="text-center">
      <h3 className="text-lg font-light text-stone-700 mb-4">
        {language === 'fr' 
          ? 'Inscrivez-vous pour nos lancements exclusifs'
          : 'Subscribe for exclusive launches'
        }
      </h3>
      <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white border-stone-300 text-stone-700 placeholder:text-stone-400 h-10 text-sm"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          size="sm"
          className="bg-stone-800 text-white hover:bg-stone-900 h-10 px-6 text-sm font-light"
        >
          {language === 'fr' ? 'S\'inscrire' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterTopBanner;