
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  href: string;
}

const ProductCarousel = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: Product[] = [
    {
      id: '1',
      name: language === 'fr' ? 'Parfum Traditionnel Ambre' : 'Traditional Amber Perfume',
      description: language === 'fr' ? 'Senteur authentique des souks marocains' : 'Authentic scent of Moroccan souks',
      image: '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
      category: 'perfumes',
      href: '/catalog/perfumes'
    },
    {
      id: '2',
      name: language === 'fr' ? 'Huile d\'Argan Premium' : 'Premium Argan Oil',
      description: language === 'fr' ? 'L\'or liquide du Maroc pour votre peau' : 'Morocco\'s liquid gold for your skin',
      image: '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      category: 'skincare',
      href: '/catalog/skincare'
    },
    {
      id: '3',
      name: language === 'fr' ? 'Céramique Artisanale' : 'Artisanal Ceramics',
      description: language === 'fr' ? 'Poterie traditionnelle de Salé' : 'Traditional pottery from Salé',
      image: '/lovable-uploads/2649b5ab-37a7-4b14-ab73-9976ba61320a.png',
      category: 'ceramics',
      href: '/catalog/ceramics'
    },
    {
      id: '4',
      name: language === 'fr' ? 'Plateaux en Métal Ciselé' : 'Engraved Metal Trays',
      description: language === 'fr' ? 'Artisanat de Fès fait main' : 'Handmade craftsmanship from Fez',
      image: '/lovable-uploads/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png',
      category: 'home-goods',
      href: '/catalog/trays'
    },
    {
      id: '5',
      name: language === 'fr' ? 'Coussins Berbères' : 'Berber Cushions',
      description: language === 'fr' ? 'Textiles tissés à la main' : 'Hand-woven textiles',
      image: '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
      category: 'textiles',
      href: '/catalog/pillows'
    },
    {
      id: '6',
      name: language === 'fr' ? 'Savon au Ghassoul' : 'Ghassoul Clay Soap',
      description: language === 'fr' ? 'Purification naturelle de l\'Atlas' : 'Natural purification from Atlas',
      image: '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
      category: 'wellness',
      href: '/catalog/skincare'
    }
  ];

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
            <Link
              key={product.id}
              to={product.href}
              className="group block"
            >
              <article
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                itemScope
                itemType="https://schema.org/Product"
              >
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${language === 'fr' ? 'Artisanat marocain authentique' : 'Authentic Moroccan craftsmanship'}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    itemProp="image"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 
                    className="text-white font-light text-lg mb-2 line-clamp-1"
                    itemProp="name"
                  >
                    {product.name}
                  </h3>
                  <p 
                    className="text-white/80 text-sm font-light leading-relaxed line-clamp-2"
                    itemProp="description"
                  >
                    {product.description}
                  </p>
                  
                  {/* Hidden Schema.org data */}
                  <meta itemProp="category" content={product.category} />
                  <meta itemProp="url" content={product.href} />
                </div>
              </article>
            </Link>
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
