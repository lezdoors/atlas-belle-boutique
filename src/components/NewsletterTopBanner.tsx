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
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          toast.error(language === 'fr' ? 'Cette adresse email est déjà inscrite' : 'This email is already subscribed');
        } else {
          throw error;
        }
      } else {
        toast.success(language === 'fr' ? 'Merci pour votre inscription !' : 'Thank you for subscribing!');
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error(language === 'fr' ? 'Une erreur est survenue' : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-stone-800 text-white relative">
      <div className="container-refined py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex items-center space-x-4 max-w-md w-full">
              <Mail className="h-4 w-4 text-stone-300" />
              <span className="text-sm font-light hidden sm:block">
                {language === 'fr' 
                  ? 'Inscrivez-vous pour recevoir nos lancements exclusifs'
                  : 'Subscribe to receive our exclusive launches'
                }
              </span>
              <Input
                type="email"
                placeholder={language === 'fr' ? 'Votre email' : 'Your email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-stone-300 h-8 text-sm"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                size="sm"
                className="bg-white text-stone-800 hover:bg-stone-100 h-8 px-4 text-sm font-normal"
              >
                {language === 'fr' ? 'Accès Anticipé' : 'Early Access'}
              </Button>
            </form>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-stone-300 hover:text-white transition-colors p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterTopBanner;