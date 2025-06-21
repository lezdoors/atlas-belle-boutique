
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import CulturalNavigation from '@/components/CulturalNavigation';

interface HeaderMobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen
}) => {
  const { language } = useLanguage();

  const categories = language === 'fr' 
    ? [
        { name: 'Boutique', href: '/boutique' },
        { name: 'Régions', href: '/regions' },
        { name: 'Rituels', href: '/rituels' },
        { name: 'Ingrédients', href: '/ingredients' },
        { name: 'À propos', href: '/a-propos' },
        { name: 'Contact', href: '/contact' },
      ]
    : [
        { name: 'Shop', href: '/boutique' },
        { name: 'Regions', href: '/regions' },
        { name: 'Rituals', href: '/rituels' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'About', href: '/a-propos' },
        { name: 'Contact', href: '/contact' },
      ];

  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-sand-200 animate-fade-in">
      <div className="container mx-auto px-4 py-6">
        <nav className="space-y-6">
          {/* Cultural Navigation for Mobile */}
          <div className="pb-4 border-b border-sand-100">
            <CulturalNavigation />
          </div>

          {/* Main Categories */}
          <div className="space-y-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="block text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-3 text-lg border-b border-sand-100 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Account Section */}
          <div className="pt-6 border-t border-sand-200">
            <Link
              to="/compte"
              className="flex items-center text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-3 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-3" />
              {language === 'fr' ? 'Mon compte' : 'My account'}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
