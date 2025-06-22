
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
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Enhanced backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300"
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Enhanced menu panel */}
      <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white luxury-shadow animate-slide-in-right">
        <div className="p-6 h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-pearl-200">
            <h2 className="font-display font-bold text-xl text-clay-800">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-pearl-100 h-10 w-10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links with enhanced styling */}
          <nav className="flex-1 space-y-2 mb-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 px-4 text-clay-700 hover:text-copper-600 hover:bg-copper-50 rounded-xl transition-all duration-200 font-serif font-medium text-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Dropdown and Contact Info */}
          <div className="pt-6 border-t border-pearl-200 space-y-4">
            <div className="flex justify-center">
              <LanguageDropdown />
            </div>
            <div className="text-center text-sm text-clay-600 font-serif">
              <p>Contact: +212 524 123 456</p>
              <p>contact@perledatlas.ma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
