
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const BottomNavigation = () => {
  const location = useLocation();
  const { totalItems, openCart } = useCart();
  const { language } = useLanguage();

  const navItems = [
    {
      icon: Home,
      label: language === 'fr' ? 'Accueil' : 'Home',
      path: '/',
      isActive: location.pathname === '/'
    },
    {
      icon: Search,
      label: language === 'fr' ? 'Recherche' : 'Search',
      path: '/search',
      isActive: location.pathname === '/search'
    },
    {
      icon: 'tagine',
      label: language === 'fr' ? 'Panier' : 'Bag',
      path: '/cart',
      isActive: location.pathname === '/cart',
      badge: totalItems > 0 ? totalItems : null,
      onClick: openCart
    },
    {
      icon: User,
      label: language === 'fr' ? 'Profil' : 'Profile',
      path: '/auth',
      isActive: location.pathname === '/auth'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-2xl lg:hidden bottom-nav-safe">
      <div className="flex items-center justify-around py-1 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.onClick) {
            return (
              <button
                key={item.path}
                onClick={item.onClick}
                className={`flex flex-col items-center justify-center p-3 min-w-[64px] min-h-[64px] rounded-2xl transition-all duration-300 touch-feedback ${
                  item.isActive
                    ? 'text-black bg-gray-50'
                    : 'text-gray-500 hover:text-black hover:bg-gray-50'
                }`}
              >
                <div className="relative">
                  {item.icon === 'tagine' ? (
                    <img 
                      src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//tagine-cart.png"
                      alt="Panier Tagine"
                      className="h-6 w-6 object-contain"
                    />
                  ) : (
                    <Icon className="h-6 w-6" strokeWidth={item.isActive ? 2 : 1.5} />
                  )}
                  {item.badge && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 bg-black text-white min-w-[18px] h-5 rounded-full flex items-center justify-center text-xs font-medium border-2 border-white"
                    >
                      {item.badge > 99 ? '99+' : item.badge}
                    </Badge>
                  )}
                </div>
                <span className={`text-xs mt-1 font-medium ${item.isActive ? 'text-black' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          }
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-3 min-w-[64px] min-h-[64px] rounded-2xl transition-all duration-300 touch-feedback ${
                item.isActive
                  ? 'text-black bg-gray-50'
                  : 'text-gray-500 hover:text-black hover:bg-gray-50'
              }`}
            >
              <div className="relative">
                <Icon className="h-6 w-6" strokeWidth={item.isActive ? 2 : 1.5} />
              </div>
              <span className={`text-xs mt-1 font-medium ${item.isActive ? 'text-black' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
