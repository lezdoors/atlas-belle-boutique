
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const NewFooter = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Add newsletter subscription logic here
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-gray-800 mb-4 tracking-wide">
              Newsletter
            </h2>
            <p className="text-gray-600 mb-8 font-light text-lg max-w-md mx-auto">
              {language === 'fr' 
                ? 'Inscrivez-vous pour recevoir nos dernières actualités et inspirations'
                : 'Sign up to receive our latest news and inspirations'
              }
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto mb-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                  className="flex-1 px-6 py-4 border border-gray-300 focus:outline-none focus:border-gray-600 font-light text-base"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 font-light text-base uppercase tracking-wide"
                >
                  {language === 'fr' ? "S'abonner" : 'Subscribe'}
                </button>
              </div>
            </form>
            
            <Link 
              to="/privacy-policy" 
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors font-light underline"
            >
              {language === 'fr' ? 'Voir notre politique de confidentialité' : 'See our privacy policy'}
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Boutique Column */}
            <nav>
              <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
                {language === 'fr' ? 'Boutique' : 'Boutique'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/catalogue" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Tous les produits' : 'All Products'}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/new-arrivals" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Nouveautés' : 'New Arrivals'}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/gift-cards" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Cartes cadeaux' : 'Gift Cards'}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Client Services Column */}
            <nav>
              <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
                {language === 'fr' ? 'Service Client' : 'Client Services'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/shipping-returns" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Livraison & Retours' : 'Shipping & Returns'}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/friends" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Les Amis de la Maison' : 'The Friends of the Maison'}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Legal Column */}
            <nav>
              <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
                {language === 'fr' ? 'Légal' : 'Legal'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/terms" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Conditions Générales' : 'Terms and Conditions'}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cookies" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/credits" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Crédits' : 'Credits'}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/supply" 
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    {language === 'fr' ? 'Loi sur les Chaînes d\'Approvisionnement' : 'California Supply Chains Act'}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Column */}
            <nav>
              <h3 className="font-serif text-lg text-gray-800 mb-6 uppercase tracking-wide">
                Social
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://instagram.com/perledatlas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://tiktok.com/@perledatlas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com/@perledatlas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/company/perledatlas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors font-light text-sm uppercase tracking-wide"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Footer Base */}
      <section className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/Perle%20(Website)-4.png"
              alt="Perle de l'Atlas"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain mx-auto"
            />
          </div>

          {/* Language, Currency & Sitemap */}
          <div className="text-center mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>🇺🇸 EN</span>
                <span className="text-gray-400">|</span>
                <span>🇫🇷 FR</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>/ USD</span>
                <span className="text-gray-400">|</span>
                <span>€ EUR</span>
              </div>
              <Link 
                to="/sitemap" 
                className="hover:text-gray-800 transition-colors underline"
              >
                {language === 'fr' ? 'Plan du site' : 'Sitemap'}
              </Link>
            </div>
          </div>

          {/* Copyright & Legal Links */}
          <div className="text-center border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <span>© Perle de l'Atlas. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</span>
              <div className="flex items-center space-x-4">
                <Link to="/terms" className="hover:text-gray-700 transition-colors">
                  {language === 'fr' ? 'Conditions' : 'Terms'}
                </Link>
                <Link to="/privacy-policy" className="hover:text-gray-700 transition-colors">
                  {language === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
                <Link to="/cookies" className="hover:text-gray-700 transition-colors">
                  Cookies
                </Link>
                <Link to="/credits" className="hover:text-gray-700 transition-colors">
                  {language === 'fr' ? 'Crédits' : 'Credits'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default NewFooter;
