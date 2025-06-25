
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/hooks/useWishlist';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import type { Product } from '@/hooks/useProducts';
import SwipeableGallery from '@/components/SwipeableGallery';

interface EnhancedProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const EnhancedProductCard = ({ product, onQuickView }: EnhancedProductCardProps) => {
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { language } = useLanguage();
  const { user } = useAuth();

  const productName = language === 'fr' ? product.name_fr : product.name_en;
  const productDescription = language === 'fr' ? product.description_fr : product.description_en;
  const price = language === 'fr' ? product.price_eur : product.price_usd;
  const currency = language === 'fr' ? '€' : '$';

  const handleAddToCart = () => {
    const cartItem = {
      id: parseInt(product.id),
      name: productName,
      priceMAD: product.price_eur * 10.5, // Convert to MAD
      image: product.images[0] || '/placeholder.svg'
    };
    
    addToCart(cartItem);
    toast.success(
      language === 'fr' 
        ? `${productName} ajouté au panier` 
        : `${productName} added to cart`
    );
  };

  const handleWishlistToggle = () => {
    if (!user) {
      toast.error(
        language === 'fr' 
          ? 'Connectez-vous pour ajouter à la wishlist' 
          : 'Please sign in to add to wishlist'
      );
      return;
    }

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const productImages = product.images?.length > 0 ? product.images : ['/placeholder.svg'];

  return (
    <Card className="group bg-white border-0 luxury-shadow rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="relative">
        {/* Product Image Gallery */}
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-pearl-100 to-beige-100">
          <SwipeableGallery 
            images={productImages}
            alt={productName}
            className="h-full w-full"
          />
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/90 hover:bg-white text-clay-700 rounded-full h-8 w-8"
            onClick={() => onQuickView?.(product)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className={`bg-white/90 hover:bg-white rounded-full h-8 w-8 ${
              isInWishlist(product.id) ? 'text-red-500' : 'text-clay-700'
            }`}
            onClick={handleWishlistToggle}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-clay-800 px-3 py-1 rounded-full text-sm font-semibold z-20">
          {price}{currency}
        </div>

        {/* Stock Status */}
        {product.stock_quantity !== undefined && product.stock_quantity <= 5 && (
          <div className="absolute bottom-4 left-4 bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-medium z-20">
            {language === 'fr' ? 'Stock limité' : 'Limited stock'}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Product Name */}
        <h4 className="font-display text-lg font-semibold text-clay-800 mb-2">
          {productName}
        </h4>

        {/* Origin */}
        {product.origin_region && (
          <p className="text-copper-600 text-sm mb-2 font-medium">
            {language === 'fr' ? 'Origine: ' : 'Origin: '}{product.origin_region}
          </p>
        )}

        {/* Description */}
        {productDescription && (
          <p className="text-clay-600 text-sm mb-4 leading-relaxed line-clamp-2">
            {productDescription}
          </p>
        )}

        {/* Ingredients/Notes */}
        {product.ingredients?.length > 0 && (
          <div className="mb-4">
            <h5 className="text-sm font-medium text-clay-700 mb-2">
              {language === 'fr' ? 'Ingrédients:' : 'Ingredients:'}
            </h5>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.slice(0, 3).map((ingredient, idx) => (
                <span
                  key={idx}
                  className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Sustainability Badges */}
        {product.sustainability_badges?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.sustainability_badges.slice(0, 2).map((badge, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full copper-gradient hover-scale text-white border-0"
          disabled={product.stock_quantity === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.stock_quantity === 0
            ? (language === 'fr' ? 'Rupture de stock' : 'Out of stock')
            : (language === 'fr' ? 'Ajouter au panier' : 'Add to cart')
          }
        </Button>
      </CardContent>
    </Card>
  );
};

export default EnhancedProductCard;
