
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProducts } from './productData';
import ProductCarouselCard from './ProductCarouselCard';
import EnhancedMobileCarousel from '@/components/mobile/EnhancedMobileCarousel';

const ProductCarousel = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = getProducts(language);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const getVisibleProducts = () => {
    const visibleCount = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % products.length;
      result.push(products[index]);
    }
    
    return result;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 p-6">
        {/* Enhanced Navigation Arrows - Larger touch targets for mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 touch-target min-h-[48px] min-w-[48px] md:min-h-[40px] md:min-w-[40px]"
          aria-label={language === 'fr' ? 'Produit précédent' : 'Previous product'}
        >
          <ChevronLeft className="w-6 h-6 md:w-5 md:h-5 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 touch-target min-h-[48px] min-w-[48px] md:min-h-[40px] md:min-w-[40px]"
          aria-label={language === 'fr' ? 'Produit suivant' : 'Next product'}
        >
          <ChevronRight className="w-6 h-6 md:w-5 md:h-5 text-white" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getVisibleProducts().map((product) => (
            <ProductCarouselCard key={product.id} product={product} />
          ))}
        </div>

        {/* Enhanced Dots Indicator - Larger touch targets */}
        <div className="flex justify-center mt-6 space-x-3 md:space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 touch-target min-h-[44px] min-w-[44px] md:min-h-[32px] md:min-w-[32px] flex items-center justify-center ${
                index === currentIndex 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : 'bg-white/10 hover:bg-white/15 backdrop-blur-sm'
              }`}
              aria-label={`${language === 'fr' ? 'Aller au produit' : 'Go to product'} ${index + 1}`}
            >
              <div className={`rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6 h-3 md:w-4 md:h-2' 
                  : 'bg-white/60 hover:bg-white/80 w-3 h-3 md:w-2 md:h-2'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="text-center mt-6">
        <Link
          to="/"
          className="inline-flex items-center text-white/80 hover:text-white font-light tracking-wide transition-colors group"
        >
          {language === 'fr' ? 'Voir tous nos produits' : 'View all our products'}
          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCarousel;
