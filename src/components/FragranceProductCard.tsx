import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { FragranceProduct } from './fragrance/fragranceData';

interface FragranceProductCardProps {
  product: FragranceProduct;
}

const FragranceProductCard = ({ product }: FragranceProductCardProps) => {
  const { addToCart } = useCart();
  const { language } = useLanguage();

  const handleQuickShop = () => {
    // Convert FragranceProduct to CartItem format
    const cartItem = {
      id: product.id,
      name: product.name,
      priceMAD: product.price * 10.5, // Convert euros to MAD (approximate rate)
      image: product.image
    };
    
    addToCart(cartItem);
    toast.success(
      language === 'fr' 
        ? `${product.name} ajouté au panier` 
        : `${product.name} added to cart`
    );
  };

  return (
    <Card className="group bg-white border-0 luxury-shadow rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-72 lg:w-80">
      <div className="relative">
        {/* Smaller Product Image for mobile - 3:2 aspect ratio */}
        <div className="aspect-[3/2] lg:aspect-square overflow-hidden bg-gradient-to-br from-pearl-100 to-beige-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/90 hover:bg-white text-clay-700 rounded-full h-8 w-8"
          >
            <Eye className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4 lg:p-6">
        {/* Product Name */}
        <h4 className="font-display text-base lg:text-lg font-semibold text-clay-800 mb-2">
          {product.name}
        </h4>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 lg:h-4 lg:w-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs lg:text-sm text-clay-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg lg:text-xl font-bold text-clay-800">
            {product.price}€
          </span>
        </div>

        {/* Quick Shop Button */}
        <Button
          onClick={handleQuickShop}
          className="w-full copper-gradient hover-scale text-white border-0 h-10"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'Quick Shop' : 'Quick Shop'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FragranceProductCard;
