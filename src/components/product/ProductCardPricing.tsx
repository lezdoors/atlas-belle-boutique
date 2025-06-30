
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { convertAndFormat } from '@/utils/currencyConverter';

interface ProductCardPricingProps {
  priceMAD: number;
  originalPriceMAD?: number;
}

const ProductCardPricing: React.FC<ProductCardPricingProps> = ({
  priceMAD,
  originalPriceMAD
}) => {
  const { currency } = useLanguage();

  return (
    <div className="flex items-center justify-between pt-4 border-t border-pearl-200">
      <div className="flex flex-col space-y-1">
        <span className="text-xl font-bold text-copper-600">
          {convertAndFormat(priceMAD, currency)}
        </span>
        {originalPriceMAD && (
          <span className="text-sm text-clay-400 line-through">
            {convertAndFormat(originalPriceMAD, currency)}
          </span>
        )}
      </div>
      {originalPriceMAD && (
        <div className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-xs font-medium">
          -{Math.round(((originalPriceMAD - priceMAD) / originalPriceMAD) * 100)}%
        </div>
      )}
    </div>
  );
};

export default ProductCardPricing;
