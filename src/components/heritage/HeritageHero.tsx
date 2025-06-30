
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';

const HeritageHero = () => {
  const { language } = useLanguage();

  const scrollToContent = () => {
    const contentSection = document.querySelector('#heritage-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute inset-0 opacity-5 moroccan-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-black mb-8 tracking-tight leading-none">
          {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-black/70 mb-16 max-w-2xl mx-auto leading-relaxed">
          {language === 'fr'
            ? 'Sagesse ancestrale, élégance moderne'
            : 'Ancestral wisdom, modern elegance'
          }
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 rounded-full hover:bg-black/5 transition-colors"
      >
        <ArrowDown className="w-6 h-6 text-black/40" />
      </button>
    </section>
  );
};

export default HeritageHero;
