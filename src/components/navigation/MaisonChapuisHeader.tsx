import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, User, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import NavigationDropdown from './NavigationDropdown';
import CartIcon from '@/components/cart/CartIcon';
import CartSidebar from '@/components/cart/CartSidebar';

const MaisonChapuisHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
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

  const ceramiquesItems = [
    { label: 'Tagines', href: '/ceramiques/tagines', description: 'Tagines traditionnels et modernes' },
    { label: 'Verres à Thé', href: '/ceramiques/verres-the', description: 'Service à thé marocain authentique' },
    { label: 'Bols & Plats', href: '/ceramiques/bols-plats', description: 'Vaisselle élégante pour vos repas' },
    { label: 'Accessoires', href: '/ceramiques/accessoires', description: 'Compléments décoratifs' }
  ];

  const collectionsItems = [
    { label: 'Signature Collection', href: '/collections/signature', description: 'Nos pièces emblématiques' },
    { label: 'New Arrivals', href: '/collections/nouveautes', description: 'Dernières créations' },
    { label: 'Gift Sets', href: '/collections/cadeaux', description: 'Coffrets cadeaux raffinés' }
  ];

  const navigation = [
    { label: language === 'fr' ? 'Notre Histoire' : 'Our Story', href: '/notre-histoire' },
    { label: language === 'fr' ? 'Guide d\'Entretien' : 'Care Guide', href: '/guide-entretien' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className="bg-stone-100 text-stone-700 text-sm py-2">
          <div className="text-center font-light tracking-wide">
            {language === 'fr' 
              ? 'Livraison gratuite dès 125$ • Pièces faites main au Maroc'
              : 'Free shipping over $125 • Handcrafted in Morocco'
            }
          </div>
        </div>

        {/* Main Header */}
        <header 
          className={`bg-white border-b border-stone-200 transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="w-full px-6 lg:px-12">
            <div className="flex items-center justify-between h-20">
                
              {/* Left side - Logo */}
              <div className="flex items-center flex-1">
                <Link to="/" className="flex items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 relative">
                      <div className="absolute inset-0 bg-stone-900 rounded-full"></div>
                      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-xl font-serif font-light text-stone-900 tracking-tight">
                      Perle de l’Atlas
                    </span>
                  </div>
                </Link>
              </div>

              {/* Right side - Desktop Actions */}
              <div className="hidden lg:flex items-center justify-end space-x-6">
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                
                <CartIcon onClick={() => setIsCartOpen(true)} />
                
                <Link to={user ? "/dashboard" : "/auth"} className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <User className="h-4 w-4" />
                </Link>
                
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="text-xs text-stone-600 hover:text-stone-900 transition-colors px-3 py-1 border border-stone-200 rounded-full"
                >
                  {language === 'fr' ? 'EN' : 'FR'}
                </button>
              </div>

              {/* Mobile Menu Button and Actions */}
              <div className="flex lg:hidden items-center space-x-3">
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <CartIcon onClick={() => setIsCartOpen(true)} />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Desktop Navigation - Below Logo */}
            <div className="hidden lg:block border-t border-stone-100">
              <nav className="py-4">
                <div className="flex items-center justify-center space-x-12">
                  <NavigationDropdown
                    title={language === 'fr' ? 'Céramiques' : 'Ceramics'}
                    items={ceramiquesItems}
                  />
                  <NavigationDropdown
                    title="Collections"
                    items={collectionsItems}
                  />
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide relative group py-2"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-stone-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-stone-200 bg-white">
                <nav className="py-6 space-y-6">
                  <div className="space-y-4">
                    <div className="px-4">
                      <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                        {language === 'fr' ? 'Céramiques' : 'Ceramics'}
                      </h3>
                      <div className="space-y-2 ml-4">
                        {ceramiquesItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block text-sm font-light text-stone-600 hover:text-stone-900 transition-colors py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="px-4">
                      <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-3">
                        Collections
                      </h3>
                      <div className="space-y-2 ml-4">
                        {collectionsItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block text-sm font-light text-stone-600 hover:text-stone-900 transition-colors py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {navigation.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors px-4 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-stone-200 pt-6 px-4">
                    <Link 
                      to={user ? "/dashboard" : "/auth"} 
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {language === 'fr' ? 'Mon Compte' : 'My Account'}
                    </Link>
                    <button
                      onClick={() => {
                        toggleLanguage();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
                    >
                      {language === 'fr' ? '🇺🇸 English' : '🇫🇷 Français'}
                    </button>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default MaisonChapuisHeader;