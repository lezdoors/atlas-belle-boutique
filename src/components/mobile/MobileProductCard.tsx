
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { useState } from 'react';

interface MobileProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating?: number;
    reviews?: number;
  };
}

const MobileProductCard = ({ product }: MobileProductCardProps) => {
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const [isLiked, setIsLiked] = useState(false);

  const handleQuickShop = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      priceMAD: product.price * 10.5,
      image: product.image
    };
    
    addToCart(cartItem);
    toast.success(
      language === 'fr' 
        ? `${product.name} ajouté au panier` 
        : `${product.name} added to cart`
    );
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 touch-manipulation w-full max-w-[160px]">
      <div className="relative">
        {/* Smaller Product Image - 4:3 aspect ratio instead of square */}
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-pearl-100 to-beige-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Smaller Heart Button */}
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleLike}
          className={`absolute top-2 right-2 rounded-full h-8 w-8 backdrop-blur-md transition-all duration-300 ${
            isLiked 
              ? 'bg-amber-500/90 text-white hover:bg-amber-600' 
              : 'bg-white/90 text-clay-700 hover:bg-white'
          }`}
        >
          <Heart className={`h-3 w-3 ${isLiked ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-3">
        {/* Compact Product Name */}
        <h4 className="font-display text-sm font-semibold text-clay-800 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h4>

        {/* Compact Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-2.5 w-2.5 ${i < Math.floor(product.rating!) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-clay-600">
              {product.rating}
            </span>
          </div>
        )}

        {/* Compact Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-clay-800">
            {product.price}€
          </span>
          <Button
            onClick={handleQuickShop}
            size="sm"
            className="copper-gradient hover-scale text-white border-0 rounded-lg px-2 h-8 min-w-[32px]"
          >
            <ShoppingBag className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileProductCard;
