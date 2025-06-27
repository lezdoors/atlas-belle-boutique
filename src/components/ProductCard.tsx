
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

  // Ensure authentic product images
  const getAuthenticImage = (originalImage: string) => {
    const imageMap: { [key: string]: string } = {
      'photo-1465146344425-f00d5f5c8f07': '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      'photo-1482881497185-d4a9ddbe4151': '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
      'photo-1500673922987-e212871fec22': '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
      'photo-1506744038136-46273834b3fb': '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
      'photo-1469474968028-56623f02e42e': '/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png'
    };

    for (const [stockId, authenticImage] of Object.entries(imageMap)) {
      if (originalImage.includes(stockId)) {
        return authenticImage;
      }
    }
    return originalImage;
  };

  const authenticImage = getAuthenticImage(product.image);
  const productImages = [authenticImage, authenticImage, authenticImage];

  // Generate poetic seasonal caption
  const getSeasonalCaption = () => {
    const currentMonth = new Date().getMonth();
    const season = currentMonth >= 2 && currentMonth <= 4 ? 'spring' :
                   currentMonth >= 5 && currentMonth <= 7 ? 'summer' :
                   currentMonth >= 8 && currentMonth <= 10 ? 'autumn' : 'winter';
    
    const seasonalCaptions = {
      spring: language === 'fr' ? 'Éveil printanier' : 'Spring Awakening',
      summer: language === 'fr' ? 'Éclat d\'été' : 'Summer Radiance',
      autumn: language === 'fr' ? 'Chaleur d\'automne' : 'Autumn Warmth',
      winter: language === 'fr' ? 'Douceur hivernale' : 'Winter Comfort'
    };
    
    return seasonalCaptions[season];
  };

  const enhancedProduct = {
    ...product,
    image: authenticImage,
    longDescription: product.longDescription || (language === 'fr' 
      ? 'Création artisanale authentique du Maroc, élaborée selon les traditions ancestrales pour révéler votre beauté naturelle.'
      : 'Authentic artisanal creation from Morocco, crafted according to ancestral traditions to reveal your natural beauty.'),
    ingredients: product.ingredients || (language === 'fr' 
      ? ['Huile d\'argan', 'Beurre de karité', 'Essence de rose'] 
      : ['Argan oil', 'Shea butter', 'Rose essence']),
    skinType: product.skinType || (language === 'fr' 
      ? ['Tous types de peau'] 
      : ['All skin types']),
    region: product.region || 'Atlas Mountains'
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      priceMAD: product.priceMAD,
      image: authenticImage
    });
  };

  const saveForLaterItem = {
    id: product.id,
    name: product.name,
    price: product.priceMAD,
    image: authenticImage
  };

  return (
    <Card className="group hover-sophisticate bg-white/95 backdrop-blur-sm border-0 luxury-shadow h-full flex flex-col overflow-hidden rounded-3xl transition-all duration-500">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Enhanced Product Image */}
        <div className="relative overflow-hidden aspect-[4/3] lg:aspect-square">
          <SwipeableGallery 
            images={productImages}
            alt={product.name}
            className="h-full w-full transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Seasonal Edition Badge */}
          <div className="absolute top-3 left-3">
            <div className="bg-copper-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
              {language === 'fr' ? 'Édition 2025' : '2025 Edition'}
            </div>
          </div>

          {/* Product Badge */}
          <ProductBadge 
            type={product.badge.type} 
            discount={product.badge.type === 'discount' ? 25 : undefined}
          />

          {/* Refined Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <SaveForLaterButton item={saveForLaterItem} />
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
                className="bg-white/90 hover:bg-white hover:text-copper-600 transition-all duration-300 rounded-full luxury-shadow h-10 w-10 backdrop-blur-sm"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </QuickViewModal>
          </div>

          {/* Enhanced Quick Add to Cart */}
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="w-full copper-gradient text-white rounded-full luxury-shadow border-0 font-medium tracking-wide min-h-[44px] backdrop-blur-sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
            </Button>
          </div>
        </div>

        {/* Refined Product Info */}
        <div className="p-6 flex flex-col flex-grow bg-white">
          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-copper-500 fill-current' 
                      : 'text-pearl-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm text-clay-600 ml-2 font-medium">
              ({product.reviews})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-display font-semibold text-clay-800 mb-2 text-lg leading-snug line-clamp-2">
            {product.name}
          </h3>

          {/* Poetic Seasonal Caption */}
          <p className="text-copper-600 text-sm font-serif italic mb-2">
            {getSeasonalCaption()}
          </p>

          {/* Description */}
          <p className="elegant-text text-clay-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-2 font-serif">
            {product.description}
          </p>

          {/* Enhanced Price Section */}
          <div className="flex items-center justify-between pt-4 border-t border-pearl-200">
            <div className="flex flex-col space-y-1">
              <span className="text-xl font-bold text-copper-600">
                {convertAndFormat(product.priceMAD, currency)}
              </span>
              {product.originalPriceMAD && (
                <span className="text-sm text-clay-400 line-through">
                  {convertAndFormat(product.originalPriceMAD, currency)}
                </span>
              )}
            </div>
            {product.originalPriceMAD && (
              <div className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-xs font-medium">
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
