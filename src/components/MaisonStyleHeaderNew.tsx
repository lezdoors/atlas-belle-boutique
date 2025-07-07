import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, User, Menu, X, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/contexts/CartContext';
import { t } from '@/utils/translations';
import { Link } from 'react-router-dom';
import CatalogueMegaMenu from '@/components/CatalogueMegaMenu';

const TajineIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 12c0-1.5 1-3 3-3h12c2 0 3 1.5 3 3v6c0 1.5-1 3-3 3H6c-2 0-3-1.5-3-3v-6z"/>
    <path d="M8 9V6c0-1.5 1-2.5 2.5-2.5h3c1.5 0 2.5 1 2.5 2.5v3"/>
    <circle cx="12" cy="4" r="1"/>
  </svg>
);

const MaisonChapuisLogo = ({ className = "h-8" }: { className?: string }) => (
  <div className={`${className} flex items-center`}>
    <h1 className="text-2xl lg:text-3xl font-serif tracking-wider text-stone-800 font-light">
      <span className="italic">Maison</span>
      <span className="ml-2 font-medium">Chapuis</span>
    </h1>
  </div>
);

const MaisonStyleHeaderNew = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { user } = useAuth();
  const { totalItems } = useCart();

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

  const navigation = [
    { name: language === 'fr' ? 'Notre Héritage' : 'Our Heritage', href: '/notre-heritage' },
    { name: language === 'fr' ? 'À propos' : 'About', href: '/a-propos' },
    { name: language === 'fr' ? 'Contact' : 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-stone-100 text-stone-700 text-sm py-2">
        <div className="text-center font-serif tracking-wide">
          {t('header.freeShipping', language)}
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`bg-white border-b border-stone-200 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Logo Section */}
          <div className="flex items-center justify-center h-20 border-b border-stone-100">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <MaisonChapuisLogo className="h-12" />
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="flex items-center justify-between h-16">
            {/* Left - Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <CatalogueMegaMenu />
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-stone-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>

            {/* Center - Mobile Logo (shown on mobile) */}
            <div className="lg:hidden flex-1">
              <Link to="/" className="flex items-center justify-center">
                <MaisonChapuisLogo className="h-8" />
              </Link>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center space-x-4">
              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-4">
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <Link to={user ? "/dashboard" : "/auth"} className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <User className="h-4 w-4" />
                </Link>
                <Link to="/checkout" className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative">
                  <ShoppingBag className="h-4 w-4" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <TajineIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={toggleLanguage}
                  className="text-xs text-stone-600 hover:text-stone-900 transition-colors px-2 py-1 border border-stone-200 rounded"
                >
                  {language === 'fr' ? 'EN' : 'FR'}
                </button>
              </div>

              {/* Mobile Actions */}
              <div className="flex lg:hidden items-center space-x-2">
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <Link to="/checkout" className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative">
                  <ShoppingBag className="h-4 w-4" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <TajineIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-stone-200 bg-white">
                <nav className="py-6 space-y-6">
                  <Link
                    to="/catalogue"
                    className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors px-4 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === 'fr' ? 'Catalogue' : 'Catalogue'}
                  </Link>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors px-4 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-stone-200 pt-6 px-4">
                    <Link 
                      to={user ? "/dashboard" : "/auth"} 
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {language === 'fr' ? 'Compte' : 'Account'}
                    </Link>
                    <button
                      onClick={toggleLanguage}
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
                    >
                      {t('header.language', language)}
                    </button>
                  </div>
                </nav>
              </div>
            )}
        </div>
      </header>
    </div>
  );
};

export default MaisonStyleHeaderNew;