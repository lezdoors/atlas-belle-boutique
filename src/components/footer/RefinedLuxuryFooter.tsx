
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const RefinedLuxuryFooter = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Add newsletter subscription logic here
    setEmail('');
  };

  return (
    <footer className="bg-[#f9f9f9]">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 tracking-wide">
            Newsletter
          </h2>
          <p className="text-gray-600 mb-8 font-light">
            {language === 'fr' ? 'Recevez nos nouveautés et inspirations' : 'Receive our latest news and inspirations'}
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-amber-600 font-light text-sm"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gray-800 text-white hover:bg-amber-600 transition-colors duration-300 font-light text-sm uppercase tracking-wide"
              >
                {language === 'fr' ? "Je m'abonne" : 'Subscribe'}
              </button>
            </div>
          </form>
          
          <Link 
            to="/politique-confidentialite" 
            className="text-xs text-gray-500 hover:text-amber-600 transition-colors relative group font-light"
          >
            {language === 'fr' ? 'Voir notre politique de confidentialité' : 'View our privacy policy'}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Boutique Column */}
          <nav aria-label="Boutique">
            <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
              {language === 'fr' ? 'Boutique' : 'Shop'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/catalogue" 
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                >
                  {language === 'fr' ? 'Nos produits' : 'Our products'}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services Clients Column */}
          <nav aria-label="Services clients">
            <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
              {language === 'fr' ? 'Services Clients' : 'Client Services'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                >
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/livraison-retours" 
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                >
                  {language === 'fr' ? 'Livraison & Retours' : 'Shipping & Returns'}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal Column */}
          <nav aria-label="Mentions légales">
            <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Statement'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/conditions-vente" 
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                >
                  {language === 'fr' ? 'Conditions Générales' : 'Terms and Conditions'}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-confidentialite" 
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                >
                  {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <button className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide text-left relative group">
                  Cookies
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Social Column */}
          <nav aria-label="Réseaux sociaux">
            <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
              {language === 'fr' ? 'Réseaux Sociaux' : 'Social Media'}
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://instagram.com/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                  aria-label="Instagram"
                >
                  Instagram
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                  aria-label="TikTok"
                >
                  TikTok
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                  aria-label="YouTube"
                >
                  YouTube
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/perledatlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors font-light text-sm uppercase tracking-wide relative group"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section with Logo */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <img 
              src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/perle-atlas-logo.png"
              alt="Perle de l'Atlas - Cosmétiques de Luxe Marocains"
              className="h-12 w-auto object-contain mx-auto opacity-60"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RefinedLuxuryFooter;
