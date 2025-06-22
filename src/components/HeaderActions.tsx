
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Search } from 'lucide-react';
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
    <div className="flex items-center space-x-1 md:space-x-2">
      {/* Mobile Search - Only on small screens */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowMobileSearch(true)}
          className="text-clay-700 hover:text-copper-600 transition-colors h-10 w-10"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Wishlist - Simplified for mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="relative text-clay-700 hover:text-copper-600 transition-colors h-10 w-10"
      >
        <Heart className="h-5 w-5" />
        {wishlistCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 bg-copper-500 text-white min-w-[18px] h-5 rounded-full flex items-center justify-center text-xs"
          >
            {wishlistCount}
          </Badge>
        )}
      </Button>

      {/* Cart - Simplified for mobile */}
      <Button
        variant="ghost"
        size="icon"
        onClick={openCart}
        className="relative text-clay-700 hover:text-copper-600 transition-colors h-10 w-10"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 bg-copper-500 text-white min-w-[18px] h-5 rounded-full flex items-center justify-center text-xs"
          >
            {totalItems > 99 ? '99+' : totalItems}
          </Badge>
        )}
      </Button>

      {/* User Account - Now with authentication */}
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
