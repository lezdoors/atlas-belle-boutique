
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
    { href: '/collections', label: 'Collections' },
    { href: '/about', label: language === 'fr' ? 'Notre Mission' : 'Our Mission' },
    { href: '/testimonials', label: language === 'fr' ? 'Témoignages' : 'Testimonials' },
    { href: '/contact', label: 'Contact' }
  ];

  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Enhanced backdrop with luxury blur */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500"
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* App-like menu panel */}
      <div className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white/98 backdrop-blur-xl shadow-2xl animate-slide-in-right">
        <div className="p-6 h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-amber-100/60">
            <h2 className="font-light text-xl text-clay-800 tracking-wide">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="hover:bg-amber-50/80 h-10 w-10 rounded-full transition-all duration-300 text-clay-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links with app-like styling */}
          <nav className="flex-1 space-y-1 mb-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 px-4 text-clay-800 hover:text-amber-600 hover:bg-amber-50/60 rounded-xl transition-all duration-300 font-light text-base tracking-wide border-b border-transparent hover:border-amber-100/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Dropdown and Contact Info */}
          <div className="pt-6 border-t border-amber-100/60 space-y-4">
            <div className="flex justify-center">
              <LanguageDropdown />
            </div>
            <div className="text-center text-sm text-clay-500 font-light space-y-1">
              <p className="font-medium text-clay-700">Contact</p>
              <p>+212 524 123 456</p>
              <p>contact@perledatlas.ma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
