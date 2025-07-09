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
    { 
      name: language === 'fr' ? 'Céramiques' : 'Ceramics', 
      href: '/categories/ceramiques',
      dropdown: [
        { name: language === 'fr' ? 'Tagines' : 'Tagines', href: '/categories/tagines' },
        { name: language === 'fr' ? 'Assiettes' : 'Plates', href: '/categories/assiettes' },
        { name: language === 'fr' ? 'Bols' : 'Bowls', href: '/categories/bols' }
      ]
    },
    { 
      name: language === 'fr' ? 'Verrerie' : 'Glassware', 
      href: '/categories/verrerie',
      dropdown: [
        { name: language === 'fr' ? 'Verres à thé' : 'Tea Glasses', href: '/categories/verres-the' },
        { name: language === 'fr' ? 'Carafes' : 'Carafes', href: '/categories/carafes' },
        { name: language === 'fr' ? 'Lanternes' : 'Lanterns', href: '/categories/lanternes' }
      ]
    },
    { 
      name: language === 'fr' ? 'Art de la Table' : 'Tableware', 
      href: '/categories/art-de-la-table',
      dropdown: [
        { name: language === 'fr' ? 'Services' : 'Sets', href: '/categories/services' },
        { name: language === 'fr' ? 'Collections' : 'Collections', href: '/collections' }
      ]
    },
    { 
      name: language === 'fr' ? 'Nos Artisans' : 'Our Artisans', 
      href: '/nos-artisans',
      dropdown: [
        { name: language === 'fr' ? 'Régions' : 'Regions', href: '/artisans/regions' },
        { name: language === 'fr' ? 'Coopératives' : 'Cooperatives', href: '/artisans/cooperatives' }
      ]
    },
    { 
      name: language === 'fr' ? 'Collections' : 'Collections', 
      href: '/collections',
      dropdown: [
        { name: language === 'fr' ? 'Nouveautés' : 'New Arrivals', href: '/collections/nouveautes' },
        { name: language === 'fr' ? 'Coffrets' : 'Gift Sets', href: '/collections/coffrets' }
      ]
    }
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

          {/* Navigation Section */}
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo and Desktop Navigation */}
            <div className="flex items-center space-x-12">
              {/* Logo - Always visible on left */}
              <Link to="/" className="flex items-center">
                <MaisonChapuisLogo className="h-8" />
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-10">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="text-sm font-light text-stone-700 hover:text-stone-900 transition-all duration-300 tracking-[0.02em] py-2 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-stone-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {item.dropdown && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-stone-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-3 text-sm font-light text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-all duration-200 tracking-wide"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Action Icons */}
            <div className="flex items-center space-x-6">
              <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              
              <Link to={user ? "/dashboard" : "/auth"} className="hidden lg:block p-2 text-stone-600 hover:text-stone-900 transition-colors">
                <User className="h-5 w-5" />
              </Link>
              
              <Link to="/checkout" className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              <button
                onClick={toggleLanguage}
                className="hidden lg:block text-xs text-stone-600 hover:text-stone-900 transition-colors px-3 py-1 border border-stone-200 rounded-full"
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-stone-200 bg-white">
                <nav className="py-8 space-y-6">
                  {navigation.map((item) => (
                    <div key={item.name} className="px-4">
                      <Link
                        to={item.href}
                        className="block text-lg font-light text-stone-700 hover:text-stone-900 transition-colors py-3 tracking-wide"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {/* Mobile Dropdown Items */}
                      {item.dropdown && (
                        <div className="ml-4 mt-2 space-y-2 border-l border-stone-200 pl-4">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block text-base font-light text-stone-600 hover:text-stone-900 transition-colors py-2"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="border-t border-stone-200 pt-6 px-4 space-y-4">
                    <Link 
                      to={user ? "/dashboard" : "/auth"} 
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {language === 'fr' ? 'Compte' : 'Account'}
                    </Link>
                    <button
                      onClick={() => {
                        toggleLanguage();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
                    >
                      {language === 'fr' ? 'English' : 'Français'}
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