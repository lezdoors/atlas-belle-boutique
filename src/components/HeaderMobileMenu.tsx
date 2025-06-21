
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageDropdown from '@/components/LanguageDropdown';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderMobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const HeaderMobileMenu = ({ isMenuOpen, setIsMenuOpen }: HeaderMobileMenuProps) => {
  const { language } = useLanguage();

  const navItems = [
    { href: '/', label: language === 'fr' ? 'Accueil' : 'Home' },
    { href: '/boutique', label: language === 'fr' ? 'Boutique' : 'Shop' },
    { href: '/rituels', label: language === 'fr' ? 'Rituels' : 'Rituals' },
    { href: '/programme-fidelite', label: language === 'fr' ? 'Programme Fidélité' : 'Loyalty Program' },
    { href: '/regions', label: language === 'fr' ? 'Régions' : 'Regions' },
    { href: '/ingredients', label: language === 'fr' ? 'Ingrédients' : 'Ingredients' },
    { href: '/about', label: language === 'fr' ? 'À propos' : 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white z-50 luxury-shadow animate-slide-in-right">
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display font-bold text-xl text-clay-800">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-pearl-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-clay-700 hover:text-copper-600 hover:bg-pearl-50 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Dropdown */}
          <div className="pt-6 border-t border-pearl-200">
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
