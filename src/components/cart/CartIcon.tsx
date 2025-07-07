import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface CartIconProps {
  onClick: () => void;
  className?: string;
}

const CartIcon = ({ onClick, className = "" }: CartIconProps) => {
  const { totalItems } = useCart();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`relative rounded-full hover:bg-stone-100 transition-colors ${className}`}
      onClick={onClick}
    >
      <ShoppingCart className="h-5 w-5 text-stone-700" />
      {totalItems > 0 && (
        <Badge 
          className="absolute -top-2 -right-2 bg-amber-500 text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs font-medium"
        >
          {totalItems > 99 ? '99+' : totalItems}
        </Badge>
      )}
    </Button>
  );
};

export default CartIcon;