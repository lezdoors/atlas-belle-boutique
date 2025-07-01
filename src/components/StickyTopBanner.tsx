
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
    ? `Livraison gratuite dès ${getThresholdText()} – Livraison internationale express`
    : `Free shipping from ${getThresholdText()} – Express international delivery`;

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#fafafa] shadow-sm transition-opacity duration-300">
      <div className="relative flex items-center justify-center h-10 px-4">
        <p className="text-sm font-semibold text-[#333] text-center">
          {bannerText}
        </p>
        <button
          onClick={handleClose}
          className="absolute right-4 p-1 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
          aria-label="Close banner"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default StickyTopBanner;
