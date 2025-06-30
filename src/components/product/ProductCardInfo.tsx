
import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardInfoProps {
  productName: string;
  description: string;
  rating: number;
  reviews: number;
}

const ProductCardInfo: React.FC<ProductCardInfoProps> = ({
  productName,
  description,
  rating,
  reviews
}) => {
  const { language } = useLanguage();

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

  return (
    <div className="p-6 flex flex-col flex-grow bg-white">
      {/* Rating */}
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${
                i < Math.floor(rating) 
                  ? 'text-copper-500 fill-current' 
                  : 'text-pearl-300'
              }`} 
            />
          ))}
        </div>
        <span className="text-sm text-clay-600 ml-2 font-medium">
          ({reviews})
        </span>
      </div>

      {/* Product Name */}
      <h3 className="font-display font-semibold text-clay-800 mb-2 text-lg leading-snug line-clamp-2">
        {productName}
      </h3>

      {/* Poetic Seasonal Caption */}
      <p className="text-copper-600 text-sm font-serif italic mb-2">
        {getSeasonalCaption()}
      </p>

      {/* Description */}
      <p className="elegant-text text-clay-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-2 font-serif">
        {description}
      </p>
    </div>
  );
};

export default ProductCardInfo;
