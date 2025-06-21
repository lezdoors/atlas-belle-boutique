
import { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { convertAndFormat } from '@/utils/currencyConverter';

interface ProductInfoProps {
  product: {
    id: number;
    name: string;
    priceMAD: number;
    originalPriceMAD?: number;
    rating: number;
    reviews: number;
    description: string;
  };
  onOrderNow: (quantity: number) => void;
}

const ProductInfo = ({ product, onOrderNow }: ProductInfoProps) => {
  const { language, currency } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="section-title text-clay-800 mb-4">{product.name}</h1>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating) 
                    ? 'text-copper-500 fill-current' 
                    : 'text-pearl-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-clay-600 ml-2">
            {product.rating} ({product.reviews} {language === 'fr' ? 'avis' : 'reviews'})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-3xl font-bold text-copper-600">
            {convertAndFormat(product.priceMAD, currency)}
          </span>
          {product.originalPriceMAD && (
            <span className="text-xl text-clay-400 line-through">
              {convertAndFormat(product.originalPriceMAD, currency)}
            </span>
          )}
          {product.originalPriceMAD && (
            <span className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm font-medium">
              -{Math.round(((product.originalPriceMAD - product.priceMAD) / product.originalPriceMAD) * 100)}%
            </span>
          )}
        </div>

        {/* Description */}
        <p className="elegant-text text-clay-700 leading-relaxed mb-6">
          {product.description}
        </p>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label className="text-clay-700 font-medium">
            {language === 'fr' ? 'Quantité:' : 'Quantity:'}
          </label>
          <div className="flex items-center border border-sand-300 rounded-lg">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:bg-sand-100"
            >
              -
            </button>
            <span className="px-4 py-2 border-x border-sand-300">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 hover:bg-sand-100"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button 
            size="lg" 
            className="flex-1 copper-gradient text-white rounded-full min-h-[48px]"
            onClick={() => onOrderNow(quantity)}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {language === 'fr' ? 'Commander maintenant' : 'Order Now'}
          </Button>
          <Button variant="outline" size="lg" className="rounded-full min-h-[48px]">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full min-h-[48px]">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
