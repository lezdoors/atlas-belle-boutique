import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Tables } from '@/integrations/supabase/types';

type DatabaseProduct = Tables<'products'>;

// Flexible product interface that can handle both old and new formats
interface FlexibleProduct {
  id: string | number;
  name_fr?: string;
  name_en?: string;
  name?: string; // fallback for old format
  price_eur?: number;
  price?: number; // fallback for old format
  priceMAD?: number; // fallback for MAD currency
  images?: string[] | any;
  image?: string; // fallback for single image
  category?: string;
  origin_region?: string | null;
  region?: string; // fallback
  artisan_story?: string | null;
  material?: string | null;
  stock_quantity?: number | null;
  in_stock?: boolean;
}

interface ProductCardProps {
  product: FlexibleProduct;
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle different naming conventions
  const productName = product.name_fr || product.name_en || product.name || 'Product';
  const productPrice = product.price_eur || product.price || product.priceMAD || 0;
  
  // Handle different image formats
  let images: string[] = [];
  if (Array.isArray(product.images)) {
    images = product.images;
  } else if (product.image) {
    images = [product.image];
  } else if (product.images && typeof product.images === 'string') {
    images = [product.images];
  }
  
  const primaryImage = images[0] || '/placeholder.svg';
  const secondaryImage = images[1] || primaryImage;

  const getRegionBadge = (region?: string | null) => {
    const regionName = region || product.region;
    if (!regionName) return null;
    
    const regionMap: { [key: string]: { name: string; color: string } } = {
      'fes': { name: 'Fès', color: 'bg-moroccan-blue text-white' },
      'safi': { name: 'Safi', color: 'bg-moroccan-rose-gold text-moroccan-blue' },
      'sale': { name: 'Salé', color: 'bg-moroccan-sand text-moroccan-blue' }
    };

    const regionInfo = regionMap[regionName.toLowerCase()] || { name: regionName, color: 'bg-stone-200 text-stone-800' };
    
    return (
      <Badge className={`text-xs font-light ${regionInfo.color} absolute top-3 left-3 z-10`}>
        {regionInfo.name}
      </Badge>
    );
  };

  const handleAddToCart = async () => {
    await addToCart({
      id: String(product.id),
      name_fr: product.name_fr || product.name || '',
      name_en: product.name_en || product.name || '',
      price_eur: productPrice,
      price_usd: productPrice * 1.08,
      stock_quantity: (product.stock_quantity || 0) > 0 ? (product.stock_quantity || 10) : 0,
      images: images,
      category: (product.category as any) || 'accessories',
      created_at: new Date().toISOString(),
      featured: false
    }, 1);

    toast({
      title: language === 'fr' ? 'Ajouté au panier' : 'Added to cart',
      description: `${productName} ${language === 'fr' ? 'a été ajouté à votre panier' : 'has been added to your cart'}`
    });
  };

  return (
    <div 
      className={`group relative bg-white rounded-lg overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container with Hover Effect */}
      <div className="relative aspect-square overflow-hidden">
        {getRegionBadge(product.origin_region)}
        
        {/* Authenticity Badge */}
        <Badge className="absolute top-3 right-3 z-10 bg-white/90 text-moroccan-blue text-xs font-light">
          Fait main
        </Badge>

        {/* Image with Zoom Effect */}
        <div className="relative w-full h-full">
          <img
            src={primaryImage}
            alt={productName}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
          <img
            src={secondaryImage}
            alt={productName}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
            }`}
          />
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3">
            <Button
              size="sm"
              className="bg-white/90 text-moroccan-blue hover:bg-white hover:scale-105 transition-all duration-300 rounded-full p-3 shadow-lg"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="bg-moroccan-rose-gold text-moroccan-blue hover:bg-moroccan-rose-gold/90 hover:scale-105 transition-all duration-300 rounded-full p-3 shadow-lg"
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-6">
        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-medium text-moroccan-blue mb-2 hover:text-moroccan-blue/80 transition-colors">
            {productName}
          </h3>
        </Link>

        {/* Material & Category */}
        {product.material && (
          <p className="text-sm text-stone-600 mb-2 font-light">
            {product.material}
          </p>
        )}

        {/* Price with Luxury Styling */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-light text-moroccan-blue">
            {productPrice.toFixed(2)}€
          </span>
          
          {/* Rating Stars (placeholder) */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-moroccan-sand text-moroccan-sand" />
            ))}
            <span className="text-xs text-stone-500 ml-1">(12)</span>
          </div>
        </div>

        {/* Artisan Story Preview */}
        {product.artisan_story && (
          <p className="text-xs text-stone-500 line-clamp-2 mb-3 font-light italic">
            "{product.artisan_story.substring(0, 80)}..."
          </p>
        )}

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-moroccan-blue text-white hover:bg-moroccan-blue/90 transition-all duration-300 font-light tracking-wide rounded-lg"
          disabled={(product.stock_quantity || 0) === 0 || product.in_stock === false}
        >
          {((product.stock_quantity || 0) === 0 || product.in_stock === false)
            ? (language === 'fr' ? 'Rupture de stock' : 'Out of Stock')
            : (language === 'fr' ? 'Ajouter au panier' : 'Add to Cart')
          }
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;