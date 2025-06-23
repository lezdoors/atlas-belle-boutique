
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex-shrink-0 w-64 md:w-72">
      <Card className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden hover:bg-white/30 transition-all duration-300 hover-scale cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            {/* Product image */}
            <div className="relative w-20 h-20 rounded-xl overflow-hidden luxury-shadow flex-shrink-0">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Product info */}
            <div className="flex-1 min-w-0">
              <Badge 
                variant="outline" 
                className="bg-white/20 text-white border-white/30 text-xs mb-2"
              >
                {product.category}
              </Badge>
              
              <h4 className="text-white font-medium text-sm mb-1 truncate">
                {product.name}
              </h4>
              
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-amber-400 fill-current" />
                  <span className="text-white/80 text-xs ml-1">
                    {product.rating}
                  </span>
                </div>
              </div>
              
              <p className="text-amber-300 font-semibold text-sm">
                {product.price}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
