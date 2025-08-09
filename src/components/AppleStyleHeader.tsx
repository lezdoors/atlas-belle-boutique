
import { useState } from 'react';
import { Menu, X, Search, Heart, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import LanguageDropdown from '@/components/LanguageDropdown';

const AppleStyleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const { totalItems } = useCart();

  const navigation = [
    { 
      name: language === 'fr' ? 'Catalogue' : 'Catalog', 
      href: '/catalog',
      hasDropdown: true
    },
    { 
      name: language === 'fr' ? 'Notre Héritage' : 'Our Heritage', 
      href: '/notre-heritage'
    },
    { 
      name: language === 'fr' ? 'À Propos' : 'About', 
      href: '/a-propos' 
    },
    { 
      name: 'Contact', 
      href: '/contact' 
    }
  ];

  return (
    <header className="sticky top-10 bg-white/95 backdrop-blur-xl border-b border-black/5 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 relative">
                  <div className="absolute inset-0 bg-black rounded-full"></div>
                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl font-extralight text-black tracking-tight">
                  Perle de l’Atlas
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-light text-black hover:text-black/60 transition-colors flex items-center"
              >
                {item.name}
                {item.hasDropdown && <span className="ml-1">⌄</span>}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <LanguageDropdown />
            
            {/* Action Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-black text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-black/5 py-6">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-light text-black hover:text-black/60 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Action Icons */}
              <div className="flex items-center justify-center space-x-6 pt-6 border-t border-black/5">
                <Button variant="ghost" size="icon">
                  <Search className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-6 w-6" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-black text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-6 w-6" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppleStyleHeader;
