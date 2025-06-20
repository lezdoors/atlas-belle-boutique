
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { convertAndFormat } from '@/utils/currencyConverter';
import ProductBadge from '@/components/ProductBadge';

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
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, currency } = useLanguage();

  return (
    <Card className="group hover-scale bg-white/90 backdrop-blur-sm border-0 luxury-shadow h-full flex flex-col overflow-hidden rounded-2xl">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Enhanced Product Image with Overlay */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Badge */}
          <ProductBadge 
            type={product.badge.type} 
            discount={product.badge.type === 'discount' ? 25 : undefined}
          />

          {/* Enhanced Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white hover:text-red-500 transition-colors rounded-full luxury-shadow"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white hover:text-copper-600 transition-colors rounded-full luxury-shadow"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Enhanced Quick Actions Overlay */}
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button 
              size="sm" 
              className="w-full copper-gradient text-white rounded-full luxury-shadow border-0 font-medium tracking-wide"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
            </Button>
          </div>
        </div>

        {/* Enhanced Product Info */}
        <div className="p-6 flex flex-col flex-grow bg-white">
          {/* Rating with Enhanced Styling */}
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

          {/* Product Name with Enhanced Typography */}
          <h3 className="font-display font-semibold text-clay-800 mb-3 text-lg leading-snug">
            {product.name}
          </h3>

          {/* Description */}
          <p className="elegant-text text-clay-600 text-sm mb-6 flex-grow leading-relaxed">
            {product.description}
          </p>

          {/* Enhanced Price Section */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-pearl-200">
            <div className="flex items-center space-x-3">
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
