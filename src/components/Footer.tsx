
import { Mail, Map, User, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-sand-800 text-sand-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">
                Perle d'Atlas
              </h3>
              <p className="text-sand-300 mb-6 leading-relaxed">
                {language === 'fr'
                  ? 'La beauté ancestrale du Maroc, réinventée pour la femme moderne. Découvrez nos rituels authentiques inspirés des traditions séculaires.'
                  : 'The ancestral beauty of Morocco, reinvented for the modern woman. Discover our authentic rituals inspired by centuries-old traditions.'
                }
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                  <Map className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
                {language === 'fr' ? 'Navigation' : 'Navigation'}
              </h4>
              <ul className="space-y-3">
                {[
                  { name: language === 'fr' ? 'Boutique' : 'Shop', href: '/boutique' },
                  { name: language === 'fr' ? 'Régions' : 'Regions', href: '/regions' },
                  { name: language === 'fr' ? 'Rituels' : 'Rituals', href: '/rituels' },
                  { name: language === 'fr' ? 'Ingrédients' : 'Ingredients', href: '/ingredients' },
                  { name: language === 'fr' ? 'À propos' : 'About', href: '/a-propos' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
                {language === 'fr' ? 'Services' : 'Services'}
              </h4>
              <ul className="space-y-3">
                {[
                  language === 'fr' ? 'Rituels de beauté' : 'Beauty rituals',
                  language === 'fr' ? 'Conseils personnalisés' : 'Personalized advice',
                  language === 'fr' ? 'Livraison express' : 'Express delivery',
                  language === 'fr' ? 'Échantillons gratuits' : 'Free samples',
                  language === 'fr' ? 'Programme fidélité' : 'Loyalty program'
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
                {language === 'fr' ? 'Contact' : 'Contact'}
              </h4>
              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sand-300 text-sm font-medium">WhatsApp :</p>
                    <a 
                      href="https://wa.me/+212663068980" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors text-sm"
                    >
                      06 63 06 89 80
                    </a>
                  </div>
                </div>

                {/* USA Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sand-300 text-sm font-medium">
                      {language === 'fr' ? 'Adresse USA :' : 'USA Address:'}
                    </p>
                    <p className="text-sand-400 text-sm leading-relaxed">
                      822 C Street #11<br />
                      Hayward, CA 94541
                    </p>
                  </div>
                </div>

                {/* France Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sand-300 text-sm font-medium">
                      {language === 'fr' ? 'Adresse France :' : 'France Address:'}
                    </p>
                    <p className="text-sand-400 text-sm italic">
                      {language === 'fr' ? 'à venir' : 'coming soon'}
                    </p>
                  </div>
                </div>

                {/* Legal Links */}
                <div className="pt-4 border-t border-sand-700">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/contact" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
                        {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                      </Link>
                    </li>
                    {[
                      'FAQ',
                      language === 'fr' ? 'Livraison & Retours' : 'Shipping & Returns',
                      'CGV',
                      language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'
                    ].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sand-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sand-400">
              <div className="mb-4 md:mb-0">
                © 2024 Perle d'Atlas. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
              </div>
              <div className="flex space-x-6">
                <span>{language === 'fr' ? 'Paiement sécurisé' : 'Secure payment'}</span>
                <span>•</span>
                <span>{language === 'fr' ? 'Livraison suivie' : 'Tracked delivery'}</span>
                <span>•</span>
                <span>{language === 'fr' ? 'Service client 7j/7' : 'Customer service 24/7'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
