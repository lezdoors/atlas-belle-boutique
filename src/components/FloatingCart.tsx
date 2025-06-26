
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

const FloatingCart = () => {
  const { totalItems, openCart } = useCart();
  const { language } = useLanguage();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-24 right-4 z-40 lg:bottom-6 lg:right-6">
      <Button
        size="lg"
        onClick={openCart}
        className="bg-black hover:bg-gray-800 text-white rounded-full w-14 h-14 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative border-none on-style-button p-0"
      >
        <ShoppingBag className="h-5 w-5" />
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 bg-amber-500 text-white min-w-[22px] h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm"
          >
            {totalItems > 99 ? '99+' : totalItems}
          </Badge>
        )}
      </Button>
    </div>
  );
};

export default FloatingCart;
