import { useState, useRef } from 'react';
import { Heart, ShoppingBag, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

import { convertAndFormat } from '@/utils/currencyConverter';
import { toast } from 'sonner';

interface MobileProductCardProps {
  product: {
    id: string;
    name_fr: string;
    name_en: string;
    price: number;
    images: string[];
    category: string;
    in_stock: boolean;
    description_fr?: string;
    description_en?: string;
    created_at: string;
  };
}

const MobileProductCard = ({ product }: MobileProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  const { addToCart } = useCart();
  const { language, currency } = useLanguage();

  const productName = language === 'fr' ? product.name_fr : product.name_en;
  const productDescription = language === 'fr' ? product.description_fr : product.description_en;
  const isWishlisted = false; // Simplified for now

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentImageIndex < product.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      // Transform product for cart
      const cartProduct = {
        ...product,
        category: product.category as "tagines" | "tea-glasses" | "bowls" | "accessories"
      };
      await addToCart(cartProduct, quantity);
      toast.success(
        language === 'fr' 
          ? `${productName} ajouté au panier` 
          : `${productName} added to cart`
      );
    } catch (error) {
      toast.error(
        language === 'fr' 
          ? 'Erreur lors de l\'ajout au panier' 
          : 'Error adding to cart'
      );
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleWishlistToggle = () => {
    // Simplified wishlist - just show toast for now
    toast.success(
      language === 'fr' ? 'Ajouté à la liste de souhaits' : 'Added to wishlist'
    );
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300">
      {/* Image Gallery with Swipe */}
      <div className="relative aspect-square bg-stone-50">
        <div
          className="w-full h-full relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={product.images[currentImageIndex] || '/placeholder.svg'}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white"
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-600'
              }`} 
            />
          </Button>

          {/* Image Indicators */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Stock Status */}
          {!product.in_stock && (
            <Badge 
              variant="secondary" 
              className="absolute top-3 left-3 bg-stone-800 text-white"
            >
              {language === 'fr' ? 'Épuisé' : 'Out of Stock'}
            </Badge>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-medium text-stone-900 line-clamp-2 text-sm">
            {productName}
          </h3>
          <p className="text-xs text-stone-600 line-clamp-2">
            {productDescription}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-light text-copper-600">
            {convertAndFormat(product.price, currency)}
          </span>
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="space-y-3">
          {/* Quantity Selector */}
          <div className="flex items-center justify-center space-x-3 bg-stone-50 rounded-full p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="p-2 h-8 w-8 rounded-full"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm font-medium min-w-[2rem] text-center">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 h-8 w-8 rounded-full"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/product/${product.id}`}
              className="text-center py-2 px-3 text-sm font-medium text-stone-700 border border-stone-200 rounded-full hover:bg-stone-50 transition-colors"
            >
              {language === 'fr' ? 'Voir' : 'View'}
            </Link>
            <Button
              onClick={handleAddToCart}
              disabled={!product.in_stock || isAddingToCart}
              className="py-2 px-3 text-sm font-medium bg-copper-600 hover:bg-copper-700 text-white rounded-full disabled:opacity-50"
            >
              {isAddingToCart ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              ) : (
                <div className="flex items-center space-x-1">
                  <ShoppingBag className="h-3 w-3" />
                  <span>{language === 'fr' ? 'Ajouter' : 'Add'}</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProductCard;