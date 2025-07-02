
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const NewsletterSignup = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-amber-25">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Mail className="h-12 w-12 mx-auto mb-6 text-amber-600" />
          <h2 className="text-3xl font-extralight text-black mb-4 tracking-tight">
            {language === 'fr' ? 'Rejoignez notre univers' : 'Join our world'}
          </h2>
          <p className="text-lg font-light text-black/60 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Recevez des offres exclusives et des récits du Maroc directement dans votre boîte mail'
              : 'Receive exclusive offers and stories from Morocco directly in your inbox'
            }
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                className="flex-1 border-black/20 focus:border-black/40 rounded-full px-6 py-3 font-light"
                required
              />
              <Button
                type="submit"
                className="bg-black text-white hover:bg-black/90 rounded-full px-8 font-light whitespace-nowrap"
              >
                {language === 'fr' ? 'S\'inscrire' : 'Subscribe'}
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-lg font-light text-black">
              {language === 'fr' ? 'Merci ! Vous êtes inscrit(e)' : 'Thank you! You\'re subscribed'}
            </p>
          </div>
        )}

        <p className="text-xs text-black/40 mt-6 max-w-md mx-auto">
          {language === 'fr' 
            ? 'Nous respectons votre vie privée. Pas de spam, uniquement des contenus de qualité.'
            : 'We respect your privacy. No spam, only quality content.'
          }
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
