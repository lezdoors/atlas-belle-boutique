
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
    <Card className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-pearl-100 to-beige-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Heart Button */}
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleLike}
          className={`absolute top-3 right-3 rounded-full h-10 w-10 backdrop-blur-md transition-all duration-300 ${
            isLiked 
              ? 'bg-amber-500/90 text-white hover:bg-amber-600' 
              : 'bg-white/90 text-clay-700 hover:bg-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        {/* Product Name */}
        <h4 className="font-display text-base font-semibold text-clay-800 mb-2 line-clamp-2">
          {product.name}
        </h4>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(product.rating!) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-clay-600">
              {product.rating} {product.reviews && `(${product.reviews})`}
            </span>
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-clay-800">
            {product.price}€
          </span>
          <Button
            onClick={handleQuickShop}
            size="sm"
            className="copper-gradient hover-scale text-white border-0 rounded-xl px-4 h-10 min-w-[44px]"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileProductCard;
