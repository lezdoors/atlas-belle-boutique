
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import SwipeableGallery from '@/components/SwipeableGallery';

interface FragranceProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

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

  // Create multiple images for the gallery (using the same image for now, in a real app these would be different angles)
  const productImages = [
    product.image,
    product.image, // In real app, these would be different views
    product.image,
  ];

  return (
    <Card className="group bg-white border-0 luxury-shadow rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="relative">
        {/* Product Image with Gallery - Fixed aspect ratio */}
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-pearl-100 to-beige-100">
          <SwipeableGallery 
            images={productImages}
            alt={product.name}
            className="h-full w-full"
          />
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/90 hover:bg-white text-clay-700 rounded-full h-8 w-8"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-clay-800 px-3 py-1 rounded-full text-sm font-semibold z-20">
          {product.price}€
        </div>
      </div>

      <CardContent className="p-6">
        {/* Product Name */}
        <h4 className="font-display text-lg font-semibold text-clay-800 mb-2">
          {product.name}
        </h4>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-clay-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Description */}
        <p className="text-clay-600 text-sm mb-4 leading-relaxed">
          {language === 'fr' ? 'Fragrance luxueuse aux notes subtiles et raffinées.' : 'Luxurious fragrance with subtle and refined notes.'}
        </p>

        {/* Notes */}
        <div className="mb-6">
          <h5 className="text-sm font-medium text-clay-700 mb-2">
            {language === 'fr' ? 'Notes principales:' : 'Key notes:'}
          </h5>
          <div className="flex flex-wrap gap-2">
            {['Oud', 'Rose', 'Ambre'].map((note, idx) => (
              <span
                key={idx}
                className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Shop Button */}
        <Button
          onClick={handleQuickShop}
          className="w-full copper-gradient hover-scale text-white border-0"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'Quick Shop' : 'Quick Shop'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FragranceProductCard;
