
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Search, Heart, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const BottomNavigation = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const { language } = useLanguage();

  const navItems = [
    {
      icon: Home,
      label: language === 'fr' ? 'Accueil' : 'Home',
      path: '/',
      isActive: location.pathname === '/'
    },
    {
      icon: ShoppingBag,
      label: language === 'fr' ? 'Boutique' : 'Shop',
      path: '/boutique',
      isActive: location.pathname === '/boutique',
      badge: totalItems > 0 ? totalItems : null
    },
    {
      icon: Search,
      label: language === 'fr' ? 'Recherche' : 'Search',
      path: '/search',
      isActive: location.pathname === '/search'
    },
    {
      icon: Heart,
      label: language === 'fr' ? 'Favoris' : 'Favorites',
      path: '/favorites',
      isActive: location.pathname === '/favorites'
    },
    {
      icon: User,
      label: language === 'fr' ? 'Profil' : 'Profile',
      path: '/auth',
      isActive: location.pathname === '/auth'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-amber-100/50 shadow-2xl lg:hidden">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 min-w-[44px] min-h-[44px] rounded-xl transition-all duration-300 ${
                item.isActive
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-clay-600 hover:text-amber-600 hover:bg-amber-50/50'
              }`}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
                {item.badge && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 bg-amber-500 text-white min-w-[16px] h-4 rounded-full flex items-center justify-center text-xs font-medium"
                  >
                    {item.badge > 99 ? '99+' : item.badge}
                  </Badge>
                )}
              </div>
              <span className="text-xs font-medium mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
