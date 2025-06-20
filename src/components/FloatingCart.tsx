
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingCart = () => {
  const [itemCount] = useState(0);
  const { language } = useLanguage();

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        size="lg"
        className="copper-gradient text-white rounded-full w-16 h-16 luxury-shadow hover-scale relative"
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[24px] h-6 rounded-full flex items-center justify-center text-xs font-bold"
          >
            {itemCount > 99 ? '99+' : itemCount}
          </Badge>
        )}
      </Button>
    </div>
  );
};

export default FloatingCart;
