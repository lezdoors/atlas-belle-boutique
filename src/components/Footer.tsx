
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-clay-900 text-clay-100 relative overflow-hidden">
      {/* Subtle Moroccan Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content - Simplified */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/perle-atlas-logo.png"
                  alt="Perle de l'Atlas"
                  className="h-12 w-auto object-contain"
                />
              </div>
              
              <p className="text-clay-300 mb-6 leading-relaxed font-serif text-lg">
                {language === 'fr'
                  ? 'L\'authenticité marocaine sublimée. Découvrez nos créations artisanales inspirées des traditions séculaires de l\'Atlas.'
                  : 'Authentic Moroccan excellence. Discover our artisanal creations inspired by the ancient traditions of the Atlas.'
                }
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-copper-600 rounded-full flex items-center justify-center hover:bg-copper-500 transition-colors cursor-pointer hover-scale">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-copper-600 rounded-full flex items-center justify-center hover:bg-copper-500 transition-colors cursor-pointer hover-scale">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-copper-400 mb-6">
                {language === 'fr' ? 'Navigation' : 'Navigation'}
              </h4>
              <ul className="space-y-3">
                {[
                  { name: language === 'fr' ? 'Accueil' : 'Home', href: '/' },
                  { name: language === 'fr' ? 'Boutique' : 'Shop', href: '/boutique' },
                  { name: language === 'fr' ? 'Notre Héritage' : 'Our Heritage', href: '/heritage' },
                  { name: 'Contact', href: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-clay-300 hover:text-copper-400 transition-colors font-serif">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-copper-400 mb-6">
                Contact
              </h4>
              <div className="space-y-4 text-clay-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-copper-400" />
                  <span>+212 663 06 89 80</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-copper-400" />
                  <span>contact@perledatlas.ma</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 text-copper-400 mt-1" />
                  <span>Marrakech, Maroc</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="mt-8 space-y-2">
                <Link to="/mentions-legales" className="block text-sm text-clay-400 hover:text-copper-400 transition-colors">
                  {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
                </Link>
                <Link to="/politique-confidentialite" className="block text-sm text-clay-400 hover:text-copper-400 transition-colors">
                  {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </Link>
                <Link to="/cgv" className="block text-sm text-clay-400 hover:text-copper-400 transition-colors">
                  {language === 'fr' ? 'Conditions Générales de Vente' : 'Terms & Conditions'}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Simplified */}
        <div className="border-t border-clay-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-clay-400">
              <div className="mb-4 md:mb-0 flex items-center">
                <span>
                  © 2024 Perle de l'Atlas. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
                </span>
              </div>
              <div className="flex items-center space-x-6 text-xs">
                <span className="flex items-center">
                  🔒 {language === 'fr' ? 'Paiement sécurisé' : 'Secure payment'}
                </span>
                <span className="flex items-center">
                  📦 {language === 'fr' ? 'Livraison suivie' : 'Tracked delivery'}
                </span>
                <span className="flex items-center">
                  💬 {language === 'fr' ? 'Service client' : 'Customer service'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
