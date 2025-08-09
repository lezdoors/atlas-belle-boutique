import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface MobileOptimizedHeaderProps {
  onSearchToggle: () => void;
  onFilterToggle: () => void;
  isSearchOpen: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: () => void;
}

const MobileOptimizedHeader = ({
  onSearchToggle,
  onFilterToggle,
  isSearchOpen,
  searchQuery,
  onSearchChange,
  onSearchSubmit
}: MobileOptimizedHeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { totalItems } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Main Header */}
      <header 
        className={`border-b border-stone-200 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/perle-atlas-logo.png"
                alt="Perle de l’Atlas"
                className="h-8 w-auto"
              />
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onSearchToggle}
                className="p-2 h-auto"
              >
                <Search className="h-5 w-5 text-stone-600" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={onFilterToggle}
                className="p-2 h-auto"
              >
                <Filter className="h-5 w-5 text-stone-600" />
              </Button>

              <Link to="/checkout" className="relative">
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <ShoppingBag className="h-5 w-5 text-stone-600" />
                  {totalItems > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-copper-600"
                    >
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 h-auto"
              >
                {isMobileMenuOpen ? 
                  <X className="h-5 w-5 text-stone-600" /> : 
                  <Menu className="h-5 w-5 text-stone-600" />
                }
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="mt-3 animate-fade-in">
              <div className="relative">
                <Input
                  type="text"
                  placeholder={language === 'fr' ? 'Rechercher des produits...' : 'Search products...'}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-10 pr-4 py-3 rounded-full border-stone-200 focus:border-copper-400 focus:ring-copper-400"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSearchChange('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 h-auto"
                  >
                    <X className="h-4 w-4 text-stone-400" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-stone-200 bg-white animate-fade-in">
            <nav className="px-4 py-6 space-y-4">
              <Link
                to="/catalogue"
                className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'fr' ? 'Catalogue' : 'Catalogue'}
              </Link>
              
              <Link
                to="/notre-heritage"
                className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
              </Link>
              
              <Link
                to="/a-propos"
                className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'fr' ? 'À propos' : 'About'}
              </Link>
              
              <Link
                to="/contact"
                className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === 'fr' ? 'Contact' : 'Contact'}
              </Link>

              <div className="border-t border-stone-200 pt-4 space-y-3">
                <Link 
                  to={user ? "/dashboard" : "/auth"} 
                  className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'fr' ? 'Compte' : 'Account'}
                </Link>
                
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-3"
                >
                  {language === 'fr' ? 'English' : 'Français'}
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default MobileOptimizedHeader;