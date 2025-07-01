
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import ModernNewsletterSection from '@/components/newsletter/ModernNewsletterSection';

const LuxuryFooter = () => {
  const { language, currency, setLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
  };

  return (
    <footer className="bg-white">
      {/* Modern Newsletter Section */}
      <ModernNewsletterSection />

      {/* Main Footer Content */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
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
      </div>
    </footer>
  );
};

export default LuxuryFooter;
