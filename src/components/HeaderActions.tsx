
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, User, Search } from 'lucide-react';
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
    <div className="flex items-center space-x-6">
      {/* Mobile Search - Only on small screens */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowMobileSearch(true)}
          className="text-clay-800 hover:text-amber-600 transition-all duration-300 h-11 w-11 rounded-full hover:bg-amber-50"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Wishlist Icon */}
      <Button
        variant="ghost"
        size="icon"
        className="relative text-clay-800 hover:text-amber-600 transition-all duration-300 h-11 w-11 rounded-full hover:bg-amber-50 group"
      >
        <Heart className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
        {wishlistCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs font-medium border-2 border-white"
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
        className="relative text-clay-800 hover:text-amber-600 transition-all duration-300 h-11 w-11 rounded-full hover:bg-amber-50 group"
      >
        <ShoppingBag className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs font-medium border-2 border-white"
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
