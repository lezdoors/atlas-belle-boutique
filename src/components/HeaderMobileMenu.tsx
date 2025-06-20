
import { User } from 'lucide-react';
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
        { name: 'Parfums', href: '/parfums' },
        { name: 'Huiles', href: '/huiles' },
        { name: 'Crèmes', href: '/cremes' },
        { name: 'Masques', href: '/masques' },
        { name: 'Nouveautés', href: '/nouveautes' },
      ]
    : [
        { name: 'Perfumes', href: '/perfumes' },
        { name: 'Oils', href: '/oils' },
        { name: 'Creams', href: '/creams' },
        { name: 'Masks', href: '/masks' },
        { name: 'New Arrivals', href: '/new-arrivals' },
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
              <a
                key={category.name}
                href={category.href}
                className="block text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-3 text-lg border-b border-sand-100 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </a>
            ))}
            <a
              href="/rituels"
              className="block text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-3 text-lg border-b border-sand-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'fr' ? 'Rituels de beauté' : 'Beauty rituals'}
            </a>
          </div>

          {/* Account Section */}
          <div className="pt-6 border-t border-sand-200">
            <a
              href="/compte"
              className="flex items-center text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-3 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-3" />
              {language === 'fr' ? 'Mon compte' : 'My account'}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
