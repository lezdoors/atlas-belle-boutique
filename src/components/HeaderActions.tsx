
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import LanguageDropdown from '@/components/LanguageDropdown';
import MobileSearch from '@/components/MobileSearch';

const HeaderActions = () => {
  const { language } = useLanguage();
  const { totalItems, openCart } = useCart();
  const [wishlistCount] = useState(0); // TODO: Implement wishlist context

  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      {/* Mobile Search */}
      <div className="md:hidden">
        <MobileSearch />
      </div>

      {/* Language Dropdown */}
      <LanguageDropdown />

      {/* Wishlist */}
      <Button
        variant="ghost"
        size="icon"
        className="relative text-clay-700 hover:text-copper-600 transition-colors"
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

      {/* Cart */}
      <Button
        variant="ghost"
        size="icon"
        onClick={openCart}
        className="relative text-clay-700 hover:text-copper-600 transition-colors"
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

      {/* User Account */}
      <Button
        variant="ghost"
        size="icon"
        className="text-clay-700 hover:text-copper-600 transition-colors"
      >
        <User className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default HeaderActions;
