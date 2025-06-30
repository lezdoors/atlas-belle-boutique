
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProducts } from './productData';
import ProductCarouselCard from './ProductCarouselCard';

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
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label={language === 'fr' ? 'Produit précédent' : 'Previous product'}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label={language === 'fr' ? 'Produit suivant' : 'Next product'}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getVisibleProducts().map((product) => (
            <ProductCarouselCard key={product.id} product={product} />
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`${language === 'fr' ? 'Aller au produit' : 'Go to product'} ${index + 1}`}
            />
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
