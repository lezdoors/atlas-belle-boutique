
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ShoppingCart, Eye, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { convertAndFormat } from '@/utils/currencyConverter';
import ProductBadge from '@/components/ProductBadge';
import WishlistButton from '@/components/WishlistButton';
import SaveForLaterButton from '@/components/SaveForLaterButton';
import QuickViewModal from '@/components/QuickViewModal';
import SwipeableGallery from '@/components/SwipeableGallery';
import PerleAtlasLogo from './PerleAtlasLogo';

interface Product {
  id: number;
  name: string;
  priceMAD: number;
  originalPriceMAD?: number;
  image: string;
  rating: number;
  reviews: number;
  badge: { type: 'new' | 'bestseller' | 'limited' | 'discount'; discount?: number };
  description: string;
  longDescription?: string;
  ingredients?: string[];
  skinType?: string[];
  region?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, currency } = useLanguage();
  const { addToCart } = useCart();

  // Ensure we're using authentic Perle d'Atlas images
  const getAuthenticImage = (originalImage: string) => {
    // Map any remaining stock images to our authentic Perle d'Atlas images
    const imageMap: { [key: string]: string } = {
      'photo-1465146344425-f00d5f5c8f07': '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      'photo-1482881497185-d4a9ddbe4151': '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
      'photo-1500673922987-e212871fec22': '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
      'photo-1506744038136-46273834b3fb': '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
      'photo-1469474968028-56623f02e42e': '/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png'
    };

    // Check if the image URL contains any stock photo identifier
    for (const [stockId, authenticImage] of Object.entries(imageMap)) {
      if (originalImage.includes(stockId)) {
        return authenticImage;
      }
    }

    // If already an authentic image or unknown, return as is
    return originalImage;
  };

  const authenticImage = getAuthenticImage(product.image);

  // Create multiple images for the gallery (using the same authentic image)
  const productImages = [
    authenticImage,
    authenticImage, // In real app, these would be different angles/views
    authenticImage,
  ];

  const enhancedProduct = {
    ...product,
    image: authenticImage,
    longDescription: product.longDescription || (language === 'fr' 
      ? 'Un produit authentique du Maroc, créé avec des ingrédients naturels et des méthodes traditionnelles pour révéler votre beauté naturelle.'
      : 'An authentic product from Morocco, created with natural ingredients and traditional methods to reveal your natural beauty.'),
    ingredients: product.ingredients || (language === 'fr' 
      ? ['Huile d\'argan', 'Beurre de karité', 'Huile de rose'] 
      : ['Argan oil', 'Shea butter', 'Rose oil']),
    skinType: product.skinType || (language === 'fr' 
      ? ['Tous types de peau'] 
      : ['All skin types']),
    region: product.region || 'Marrakech'
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      priceMAD: product.priceMAD,
      image: authenticImage
    });
  };

  // Convert product to item format for SaveForLaterButton
  const saveForLaterItem = {
    id: product.id,
    name: product.name,
    price: product.priceMAD,
    image: authenticImage
  };

  return (
    <Card className="group hover-scale bg-white/90 backdrop-blur-sm border-0 luxury-shadow h-full flex flex-col overflow-hidden rounded-2xl">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Enhanced Product Image with Swipeable Gallery */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <SwipeableGallery 
            images={productImages}
            alt={product.name}
            className="h-full w-full"
          />
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Badge */}
          <ProductBadge 
            type={product.badge.type} 
            discount={product.badge.type === 'discount' ? 25 : undefined}
          />

          {/* Authenticity Seal */}
          <div className="absolute bottom-3 left-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            <PerleAtlasLogo 
              size="favicon" 
              variant="watermark"
              className="bg-white/90 rounded-full p-1"
            />
          </div>

          {/* Enhanced Action Buttons - More Touch-Friendly */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <SaveForLaterButton 
              item={saveForLaterItem}
            />
            <WishlistButton 
              productId={product.id} 
              productName={product.name}
              variant="icon"
              size="icon"
            />
            <QuickViewModal product={enhancedProduct}>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/90 hover:bg-white hover:text-copper-600 transition-colors rounded-full luxury-shadow h-10 w-10"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </QuickViewModal>
          </div>

          {/* Enhanced Quick Actions Overlay - Touch-Friendly */}
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="w-full copper-gradient text-white rounded-full luxury-shadow border-0 font-medium tracking-wide min-h-[44px] text-sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
            </Button>
          </div>
        </div>

        {/* Product Info - Mobile Optimized */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow bg-white">
          {/* Rating with Enhanced Styling */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-copper-500 fill-current' 
                      : 'text-pearl-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-clay-600 ml-2 font-medium">
              ({product.reviews})
            </span>
          </div>

          {/* Product Name with Enhanced Typography */}
          <h3 className="font-display font-semibold text-clay-800 mb-3 text-base sm:text-lg leading-snug">
            {product.name}
          </h3>

          {/* Description */}
          <p className="elegant-text text-clay-600 text-sm mb-4 sm:mb-6 flex-grow leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Enhanced Price Section - Mobile Optimized */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-pearl-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <span className="text-lg sm:text-xl font-bold text-copper-600">
                {convertAndFormat(product.priceMAD, currency)}
              </span>
              {product.originalPriceMAD && (
                <span className="text-sm text-clay-400 line-through">
                  {convertAndFormat(product.originalPriceMAD, currency)}
                </span>
              )}
            </div>
            {product.originalPriceMAD && (
              <div className="bg-copper-100 text-copper-700 px-2 py-1 rounded-full text-xs font-medium">
                -{Math.round(((product.originalPriceMAD - product.priceMAD) / product.originalPriceMAD) * 100)}%
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
