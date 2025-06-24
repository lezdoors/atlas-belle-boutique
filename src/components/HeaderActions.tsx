
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Search, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import MobileSearch from '@/components/MobileSearch';
import UserMenu from '@/components/auth/UserMenu';

const HeaderActions = () => {
  const { language } = useLanguage();
  const { totalItems, openCart } = useCart();
  const [wishlistCount] = useState(0);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconColorClass = isScrolled ? 'text-clay-700 hover:text-amber-600' : 'text-white hover:text-amber-200';
  const hoverBgClass = isScrolled ? 'hover:bg-amber-50/80' : 'hover:bg-white/20';

  return (
    <div className="flex items-center space-x-2 lg:space-x-3">
      {/* Search Icon - Always visible */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowMobileSearch(true)}
        className={`transition-all duration-500 h-10 w-10 lg:h-11 lg:w-11 rounded-full group ${iconColorClass} ${hoverBgClass}`}
      >
        <Search className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 group-hover:scale-110" />
      </Button>

      {/* Wishlist Icon */}
      <Button
        variant="ghost"
        size="icon"
        className={`relative transition-all duration-500 h-10 w-10 lg:h-11 lg:w-11 rounded-full group ${iconColorClass} ${hoverBgClass}`}
      >
        <Heart className="h-4 w-4 lg:h-5 lg:w-5 transition-all duration-200 group-hover:scale-110 group-hover:fill-amber-600/20" />
        {wishlistCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white min-w-[18px] h-4 lg:min-w-[20px] lg:h-5 rounded-full flex items-center justify-center text-xs font-medium border-2 border-white shadow-sm"
          >
            {wishlistCount}
          </Badge>
        )}
      </Button>

      {/* Shopping Cart Icon */}
      <Button
        variant="ghost"
        size="icon"
        onClick={openCart}
        className={`relative transition-all duration-500 h-10 w-10 lg:h-11 lg:w-11 rounded-full group ${iconColorClass} ${hoverBgClass}`}
      >
        <ShoppingBag className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 group-hover:scale-110" />
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white min-w-[18px] h-4 lg:min-w-[20px] lg:h-5 rounded-full flex items-center justify-center text-xs font-medium border-2 border-white shadow-sm"
          >
            {totalItems > 99 ? '99+' : totalItems}
          </Badge>
        )}
      </Button>

      {/* User Account Icon */}
      <Button
        variant="ghost"
        size="icon"
        className={`transition-all duration-500 h-10 w-10 lg:h-11 lg:w-11 rounded-full group ${iconColorClass} ${hoverBgClass}`}
      >
        <User className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 group-hover:scale-110" />
      </Button>

      {/* Mobile Search Modal */}
      <MobileSearch 
        isOpen={showMobileSearch} 
        onClose={() => setShowMobileSearch(false)} 
      />
    </div>
  );
};

export default HeaderActions;
