
import { useState } from 'react';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import LanguageDropdown from './LanguageDropdown';
import MegaMenu from './MegaMenu';
import { Link } from 'react-router-dom';

const AppleStyleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//Perle%20(Website)-4.png"
              alt="Perle d'Atlas - Cosmétiques de Luxe Marocains"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <MegaMenu />
            <Link 
              to="/notre-heritage"
              className="text-sm lg:text-base font-light tracking-wide transition-all duration-500 relative group px-3 py-2 font-serif text-black hover:text-amber-600"
            >
              {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
            </Link>
            <button className="text-sm lg:text-base font-light tracking-wide transition-all duration-500 relative group px-3 py-2 font-serif text-black hover:text-amber-600">
              {language === 'fr' ? 'À Propos' : 'About'}
            </button>
            <button className="text-sm lg:text-base font-light tracking-wide transition-all duration-500 relative group px-3 py-2 font-serif text-black hover:text-amber-600">
              {language === 'fr' ? 'Contact' : 'Contact'}
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <LanguageDropdown />
            <Button variant="ghost" size="icon" className="text-black hover:text-amber-600 hover:bg-amber-50">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:text-amber-600 hover:bg-amber-50">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:text-amber-600 hover:bg-amber-50 relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-black hover:text-amber-600 hover:bg-amber-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu - Only visible on mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-black/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/notre-heritage"
                className="block px-3 py-2 text-base font-light text-black hover:text-amber-600 hover:bg-amber-50 rounded-lg font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
              </Link>
              <button className="block w-full text-left px-3 py-2 text-base font-light text-black hover:text-amber-600 hover:bg-amber-50 rounded-lg font-serif">
                {language === 'fr' ? 'Catalogue' : 'Catalog'}
              </button>
              <button className="block w-full text-left px-3 py-2 text-base font-light text-black hover:text-amber-600 hover:bg-amber-50 rounded-lg font-serif">
                {language === 'fr' ? 'À Propos' : 'About'}
              </button>
              <button className="block w-full text-left px-3 py-2 text-base font-light text-black hover:text-amber-600 hover:bg-amber-50 rounded-lg font-serif">
                {language === 'fr' ? 'Contact' : 'Contact'}
              </button>
            </div>
            <div className="px-2 pt-2 pb-3 border-t border-black/10 flex items-center justify-between">
              <LanguageDropdown />
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-black hover:text-amber-600 hover:bg-amber-50">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-black hover:text-amber-600 hover:bg-amber-50">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-black hover:text-amber-600 hover:bg-amber-50 relative">
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppleStyleHeader;
