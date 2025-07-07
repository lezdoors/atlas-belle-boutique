import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onQuickView }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-stone-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-stone-50">
        {!imageError ? (
          <img
            src={product.images[0]}
            alt={product.name_fr}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-stone-200 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <p className="text-sm">Image non disponible</p>
            </div>
          </div>
        )}
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-4 right-4">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 text-stone-700 hover:bg-white backdrop-blur-sm"
              onClick={() => onQuickView(product)}
            >
              <Eye className="w-4 h-4 mr-1" />
              Aperçu
            </Button>
          </div>
        </div>

        {/* Featured Badge */}
        {product.featured && (
          <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
            Nouveauté
          </Badge>
        )}

        {/* Stock Status */}
        {!product.in_stock && (
          <Badge variant="destructive" className="absolute bottom-4 left-4">
            Épuisé
          </Badge>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-serif text-xl text-stone-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
            {product.name_fr}
          </h3>
          <p className="text-sm text-stone-500 font-light">
            {product.name_en}
          </p>
        </div>

        {product.description && (
          <p className="text-stone-600 text-sm mb-4 line-clamp-2 font-light leading-relaxed">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="text-2xl font-light text-stone-900">
            {formatPrice(product.price)}
          </div>
          
          <Button
            onClick={() => onAddToCart(product.id)}
            disabled={!product.in_stock}
            className="bg-stone-900 text-white hover:bg-stone-800 transition-all duration-300 group-hover:scale-105"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 border-2 border-amber-400 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

export default ProductCard;