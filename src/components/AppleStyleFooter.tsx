
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Youtube, Mail } from 'lucide-react';
import LanguageDropdown from '@/components/LanguageDropdown';

const AppleStyleFooter = () => {
  const { language } = useLanguage();

  const legalLinks = [
    {
      name: language === 'fr' ? 'Conditions générales' : 'Terms of Service',
      href: '/terms'
    },
    {
      name: language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy',
      href: '/privacy'
    },
    {
      name: language === 'fr' ? 'Conditions générales de vente' : 'Terms of Sale',
      href: '/terms-of-sale'
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-white rounded-full"></div>
                <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
              </div>
              <span className="text-lg font-extralight tracking-tight">
                Maison Chapuis
              </span>
            </div>
            <p className="text-white/70 font-light leading-relaxed max-w-md">
              {language === 'fr' 
                ? 'L\'artisanat marocain authentique rencontre l\'élégance contemporaine. Chaque pièce raconte une histoire de tradition et de savoir-faire.'
                : 'Authentic Moroccan craftsmanship meets contemporary elegance. Each piece tells a story of tradition and expertise.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
              {language === 'fr' ? 'Navigation' : 'Quick Links'}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/catalog" className="text-white/70 hover:text-white font-light transition-colors">
                  {language === 'fr' ? 'Catalogue' : 'Catalog'}
                </a>
              </li>
              <li>
                <a href="/notre-heritage" className="text-white/70 hover:text-white font-light transition-colors">
                  {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
                </a>
              </li>
              <li>
                <a href="/a-propos" className="text-white/70 hover:text-white font-light transition-colors">
                  {language === 'fr' ? 'À Propos' : 'About'}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-white font-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-white/70 font-light">
                contact@maisonchapuis.com
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="mailto:contact@maisonchapuis.com" className="text-white/70 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-white/50 hover:text-white/70 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language & Copyright */}
            <div className="flex items-center space-x-6">
              <LanguageDropdown />
              <p className="text-xs text-white/50">
                © 2024 Maison Chapuis. {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppleStyleFooter;
