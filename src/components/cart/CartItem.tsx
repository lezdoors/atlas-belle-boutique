import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/contexts/CartContext';
import { Minus, Plus, X, ShoppingCart } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 0) return;
    
    setIsUpdating(true);
    await onUpdateQuantity(item.id, newQuantity);
    setIsUpdating(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b border-stone-100 last:border-b-0">
      {/* Product Image */}
      <div className="w-16 h-16 bg-stone-50 rounded-lg overflow-hidden flex-shrink-0">
        {item.product.images?.[0] ? (
          <img
            src={item.product.images[0]}
            alt={item.product.name_fr}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-stone-200 flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-stone-400" />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-stone-900 text-sm truncate">
          {item.product.name_fr}
        </h3>
        <p className="text-xs text-stone-500 truncate">
          {item.product.name_en}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-medium text-stone-900">
            {formatPrice(item.product.price)}
          </span>
          {item.quantity > 1 && (
            <span className="text-xs text-stone-500">
              × {item.quantity}
            </span>
          )}
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={isUpdating || item.quantity <= 1}
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="text-sm font-medium min-w-[2rem] text-center">
          {item.quantity}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => handleQuantityChange(item.quantity + 1)}
          disabled={isUpdating}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-stone-400 hover:text-red-500 rounded-full"
        onClick={() => onRemove(item.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;