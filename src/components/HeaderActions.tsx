
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import MobileSearch from '@/components/MobileSearch';
import UserMenu from '@/components/auth/UserMenu';

const HeaderActions = () => {
  const { language } = useLanguage();
  const { totalItems, openCart } = useCart();
  const [wishlistCount] = useState(0); // TODO: Implement wishlist context
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <div className="flex items-center space-x-3 lg:space-x-4">
      {/* Mobile Search - Only on small screens */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowMobileSearch(true)}
          className="text-clay-700 hover:text-amber-600 transition-all duration-300 h-10 w-10 lg:h-11 lg:w-11 rounded-full hover:bg-amber-50/80 group"
        >
          <Search className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 group-hover:scale-110" />
        </Button>
      </div>

      {/* Wishlist Icon */}
      <Button
        variant="ghost"
        size="icon"
        className="relative text-clay-700 hover:text-amber-600 transition-all duration-300 h-10 w-10 lg:h-11 lg:w-11 rounded-full hover:bg-amber-50/80 group"
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
        className="relative text-clay-700 hover:text-amber-600 transition-all duration-300 h-10 w-10 lg:h-11 lg:w-11 rounded-full hover:bg-amber-50/80 group"
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
      <UserMenu />

      {/* Mobile Search Modal */}
      <MobileSearch 
        isOpen={showMobileSearch} 
        onClose={() => setShowMobileSearch(false)} 
      />
    </div>
  );
};

export default HeaderActions;
