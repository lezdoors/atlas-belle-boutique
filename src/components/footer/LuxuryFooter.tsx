
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { validateEmail } from '@/utils/inputValidation';
import { useToast } from '@/hooks/use-toast';

const LuxuryFooter = () => {
  const { language, currency, setLanguage } = useLanguage();
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: language === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!',
        description: language === 'fr' 
          ? 'Merci de vous être inscrit à notre newsletter.'
          : 'Thank you for subscribing to our newsletter.',
      });
      
      setEmail('');
    } catch (error) {
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

  const handleLanguageToggle = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-gray-800 mb-4">
            Newsletter
          </h2>
          <p className="text-gray-600 mb-8 font-light">
            {language === 'fr' ? 'Inscrivez-vous pour recevoir nos dernières actualités' : 'Sign up to receive our latest news'}
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="relative mb-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'fr' ? 'Votre adresse e-mail' : 'Your email address'}
                className="w-full border-0 border-b-2 border-gray-200 bg-transparent rounded-none focus:border-amber-500 focus:ring-0 py-3 px-0 text-center font-light"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-50 text-gray-600 hover:text-amber-600 border-0 shadow-none"
                disabled={isSubmitting}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <Link 
              to="/politique-confidentialite" 
              className="text-sm text-gray-500 hover:text-amber-600 transition-colors underline font-light"
            >
              {language === 'fr' ? 'Voir notre politique de confidentialité' : 'See our privacy policy'}
            </Link>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-16"></div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Stores Column */}
          <nav aria-label="Store locations">
            <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
              {language === 'fr' ? 'Magasins' : 'Stores'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/magasins" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  {language === 'fr' ? 'Magasins' : 'Stores'}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Client Services Column */}
          <nav aria-label="Client services">
            <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
              {language === 'fr' ? 'Service Client' : 'Client Services'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/livraison-retour" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  {language === 'fr' ? 'Livraison & Retour' : 'Shipping & Return'}
                </Link>
              </li>
              <li>
                <Link to="/programme-fidelite" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  {language === 'fr' ? 'Les Amis de Perle' : 'The Friends of Perle'}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal Statement Column */}
          <nav aria-label="Legal information">
            <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Statement'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/cgv" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  {language === 'fr' ? 'Conditions Générales' : 'Terms and Conditions'}
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  {language === 'fr' ? 'Politique des Cookies' : 'Cookies Policy'}
                </Link>
              </li>
              <li>
                <button className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide text-left">
                  {language === 'fr' ? 'Paramètres des Cookies' : 'Cookie Settings'}
                </button>
              </li>
              <li>
                <Link to="/credits" className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide">
                  {language === 'fr' ? 'Crédits' : 'Credits'}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Column */}
          <nav aria-label="Social media">
            <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
              Social
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://instagram.com/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide"
                  aria-label="TikTok"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide"
                  aria-label="YouTube"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://pinterest.com/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide"
                  aria-label="Pinterest"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/212663068980" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Left: Copyright */}
            <div className="text-sm text-gray-500 font-light">
              {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}
            </div>

            {/* Center: Logo */}
            <div className="flex items-center">
              <img 
                src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/perle-atlas-logo.png"
                alt="Perle de l'Atlas - Cosmétiques de Luxe Marocains"
                className="h-8 w-auto object-contain opacity-80"
              />
            </div>

            {/* Right: Language/Currency Switcher */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <button 
                onClick={handleLanguageToggle}
                className="flex items-center space-x-1 hover:text-amber-600 transition-colors font-light"
              >
                <span>{language === 'fr' ? '🇫🇷' : '🇺🇸'}</span>
                <span>/{currency}</span>
              </button>
              <span>•</span>
              <Link 
                to="/sitemap" 
                className="hover:text-amber-600 transition-colors font-light"
              >
                {language === 'fr' ? 'Plan du site' : 'Sitemap'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;
