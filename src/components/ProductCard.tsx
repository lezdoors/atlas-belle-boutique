
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, ShoppingCart } from 'lucide-react';
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
    <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 luxury-shadow h-full flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-lg aspect-[3/4]">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Badge */}
          <ProductBadge 
            type={product.badge.type} 
            discount={product.badge.type === 'discount' ? 25 : undefined}
          />

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white hover:text-red-500 transition-colors rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Quick Actions */}
          <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              size="sm" 
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-amber-400 fill-current' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm text-sand-600 ml-2">
              ({product.reviews})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif font-semibold text-sand-800 mb-2 text-lg">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sand-600 text-sm mb-4 flex-grow">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-amber-600">
                {convertAndFormat(product.priceMAD, currency)}
              </span>
              {product.originalPriceMAD && (
                <span className="text-sm text-sand-500 line-through">
                  {convertAndFormat(product.originalPriceMAD, currency)}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
