
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart, Eye, X } from 'lucide-react';
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
  longDescription?: string;
  ingredients?: string[];
  skinType?: string[];
  region?: string;
}

interface QuickViewModalProps {
  product: Product;
  children: React.ReactNode;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, children }) => {
  const { language, currency } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-2xl"
            />
            <ProductBadge 
              type={product.badge.type} 
              discount={product.badge.type === 'discount' ? product.badge.discount : undefined}
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-clay-800 mb-2">
                {product.name}
              </h2>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
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
                <span className="text-sm text-clay-600 ml-2">
                  ({product.reviews} {language === 'fr' ? 'avis' : 'reviews'})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl font-bold text-copper-600">
                  {convertAndFormat(product.priceMAD, currency)}
                </span>
                {product.originalPriceMAD && (
                  <span className="text-lg text-clay-400 line-through">
                    {convertAndFormat(product.originalPriceMAD, currency)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="elegant-text text-clay-700 leading-relaxed">
                {product.longDescription || product.description}
              </p>
            </div>

            {/* Ingredients */}
            {product.ingredients && (
              <div>
                <h3 className="font-display font-semibold text-clay-800 mb-2">
                  {language === 'fr' ? 'Ingrédients clés' : 'Key Ingredients'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span 
                      key={index}
                      className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Skin Type */}
            {product.skinType && (
              <div>
                <h3 className="font-display font-semibold text-clay-800 mb-2">
                  {language === 'fr' ? 'Type de peau' : 'Skin Type'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.skinType.map((type, index) => (
                    <span 
                      key={index}
                      className="bg-pearl-100 text-clay-700 px-3 py-1 rounded-full text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                <Button className="flex-1 copper-gradient text-white rounded-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" className="w-full rounded-full">
                {language === 'fr' ? 'Voir tous les détails' : 'View full details'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
