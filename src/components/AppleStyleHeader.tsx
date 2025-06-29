
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingBag, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

const AppleStyleHeader = () => {
  const { language, setLanguage } = useLanguage();
  const { totalItems } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: language === 'fr' ? 'Accueil' : 'Home' },
    { href: '/heritage', label: language === 'fr' ? 'Héritage' : 'Heritage' },
    { href: '/collections', label: language === 'fr' ? 'Collections' : 'Collections' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-black/5' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-2xl font-light tracking-tight text-black">
                Perle d'Atlas
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-black'
                      : 'text-black/70 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="hidden lg:flex text-black/70 hover:text-black font-light"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === 'fr' ? 'EN' : 'FR'}
              </Button>

              {/* Search */}
              <Button variant="ghost" size="icon" className="text-black/70 hover:text-black">
                <Search className="w-5 h-5" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="icon" className="relative text-black/70 hover:text-black">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-black text-white text-xs min-w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-black/70 hover:text-black"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-black/5">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-lg font-light text-black/80 hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="flex items-center text-black/70 hover:text-black font-light p-0"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'fr' ? 'English' : 'Français'}
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default AppleStyleHeader;
