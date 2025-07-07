import { useState } from 'react';
import { Home, Search, ShoppingBag, User, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';

const MobileBottomNav = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const { user } = useAuth();
  const { language } = useLanguage();
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    {
      id: 'home',
      icon: Home,
      label: language === 'fr' ? 'Accueil' : 'Home',
      href: '/',
      active: location.pathname === '/'
    },
    {
      id: 'search',
      icon: Search,
      label: language === 'fr' ? 'Recherche' : 'Search',
      href: '/search',
      active: location.pathname === '/search',
      action: () => setSearchOpen(true)
    },
    {
      id: 'cart',
      icon: ShoppingBag,
      label: language === 'fr' ? 'Panier' : 'Cart',
      href: '/checkout',
      active: location.pathname === '/checkout',
      badge: totalItems
    },
    {
      id: 'wishlist',
      icon: Heart,
      label: language === 'fr' ? 'Favoris' : 'Wishlist',
      href: '/wishlist',
      active: location.pathname === '/wishlist'
    },
    {
      id: 'account',
      icon: User,
      label: language === 'fr' ? 'Compte' : 'Account',
      href: user ? '/dashboard' : '/auth',
      active: location.pathname === '/dashboard' || location.pathname === '/auth'
    }
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 safe-area-pb">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              onClick={item.action}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
                item.active
                  ? 'text-stone-900'
                  : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              <div className="relative">
                <item.icon className="w-5 h-5" />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-stone-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-light">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex items-center p-4 border-b border-stone-200">
            <button
              onClick={() => setSearchOpen(false)}
              className="mr-4 text-stone-600"
            >
              ←
            </button>
            <input
              type="text"
              placeholder={language === 'fr' ? 'Rechercher des céramiques...' : 'Search ceramics...'}
              className="flex-1 text-lg border-none outline-none"
              autoFocus
            />
          </div>
          
          {/* Search Suggestions */}
          <div className="p-4 space-y-4">
            <div>
              <h3 className="font-medium text-stone-900 mb-3">
                {language === 'fr' ? 'Recherches Populaires' : 'Popular Searches'}
              </h3>
              <div className="space-y-2">
                {['Tagines', 'Verres à thé', 'Bols décoratifs', 'Service complet'].map((term) => (
                  <button
                    key={term}
                    className="block w-full text-left py-2 text-stone-600 hover:text-stone-900"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-stone-900 mb-3">
                {language === 'fr' ? 'Par Région' : 'By Region'}
              </h3>
              <div className="space-y-2">
                {['Fès', 'Safi', 'Salé', 'Marrakech'].map((region) => (
                  <button
                    key={region}
                    className="block w-full text-left py-2 text-stone-600 hover:text-stone-900"
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for bottom navigation */}
      <div className="lg:hidden h-16"></div>
    </>
  );
};

export default MobileBottomNav;