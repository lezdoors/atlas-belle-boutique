
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { validateEmail, sanitizeInput } from '@/utils/inputValidation';
import { supabase } from '@/integrations/supabase/client';

const NewFooter = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !validateEmail(email)) {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: subscriptionError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: sanitizeInput(email) }]);

      if (subscriptionError) {
        if (subscriptionError.code === '23505') {
          toast({
            title: language === 'fr' ? 'Déjà inscrit' : 'Already subscribed',
            description: language === 'fr' 
              ? 'Cette adresse e-mail est déjà inscrite à notre newsletter.'
              : 'This email address is already subscribed to our newsletter.',
          });
          setEmail('');
          setIsSubmitting(false);
          return;
        }
        throw subscriptionError;
      }

      toast({
        title: language === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!',
        description: language === 'fr' 
          ? 'Merci de vous être inscrit à notre newsletter.'
          : 'Thank you for subscribing to our newsletter.',
      });

      setEmail('');
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

  return (
    <footer className="bg-neutral-50">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-2xl text-neutral-800 mb-2 tracking-wide">
          Newsletter
        </h2>
        <p className="text-neutral-600 mb-8 text-sm font-light">
          {language === 'fr' 
            ? 'Inscrivez-vous pour recevoir nos dernières actualités'
            : 'Sign up to receive our latest news'
          }
        </p>
        
        <form onSubmit={handleNewsletterSubmit} className="max-w-sm mx-auto mb-4">
          <div className="flex gap-2 mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
              className="flex-1 px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-neutral-500"
              disabled={isSubmitting}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-neutral-800 text-white hover:bg-neutral-700 transition-colors text-sm font-light uppercase tracking-wider disabled:opacity-50"
          >
            {isSubmitting 
              ? (language === 'fr' ? 'Inscription...' : 'Subscribing...')
              : (language === 'fr' ? "S'abonner" : 'Subscribe')
            }
          </button>
        </form>
        
        <Link 
          to="/privacy" 
          className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors underline"
        >
          {language === 'fr' ? 'Voir notre politique de confidentialité' : 'See our privacy policy'}
        </Link>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Stores */}
          <div>
            <h3 className="font-light text-neutral-800 mb-6 text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Magasins' : 'Stores'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/shop" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Boutique' : 'Stores'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Services */}
          <div>
            <h3 className="font-light text-neutral-800 mb-6 text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Service Client' : 'Client Services'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/shipping-return" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Livraison & Retours' : 'Shipping & Return'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/story" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Les Amis de la Maison' : 'The Friends of the Maison'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Statement */}
          <div>
            <h3 className="font-light text-neutral-800 mb-6 text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Statement'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/terms" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Conditions Générales' : 'Terms and Conditions'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/cgv" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Conditions de Vente' : 'Loyalty Program Terms and Conditions'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/credits" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Crédits' : 'Credits'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Politique de Cookies' : 'Cookies Policy'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  {language === 'fr' ? 'Paramètres de Cookies' : 'Cookie Settings'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-light text-neutral-800 mb-6 text-sm uppercase tracking-wider">
              Social
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://instagram.com/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://vimeo.com/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a 
                  href="https://weibo.com/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  WeChat
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors text-xs uppercase tracking-wider"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Logo */}
          <div className="text-center mb-6">
            <img 
              src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/Perle%20(Website)-4.png"
              alt="Perle de l'Atlas"
              className="h-12 w-auto mx-auto opacity-60"
            />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-neutral-500">
              <span>All rights reserved</span>
              <div className="flex items-center gap-4">
                <span>🇺🇸 EN / 🇫🇷 FR</span>
                <span>|</span>
                <span>$ USD / € EUR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
