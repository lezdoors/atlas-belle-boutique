
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StickyTopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { language, currency } = useLanguage();

  if (!isVisible) return null;

  const getThresholdText = () => {
    if (currency === 'EUR') {
      return '€139';
    } else if (currency === 'USD') {
      return '$149';
    }
    return '$149';
  };

  const bannerText = language === 'fr' 
    ? `🎁 Livraison gratuite dès ${getThresholdText()} – Expédition express depuis le Maroc 🇲🇦 via DHL`
    : `🎁 Free shipping from ${getThresholdText()} – Express shipping from Morocco 🇲🇦 via DHL`;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-copper-600 to-amber-600 text-white shadow-lg">
      <div className="relative flex items-center justify-center py-2 px-4">
        <p className="text-sm font-medium text-center flex-1 pr-8">
          {bannerText}
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyTopBanner;
