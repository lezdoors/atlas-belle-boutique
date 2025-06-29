
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeritageHero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Moroccan texture */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-amber-50 to-orange-100 moroccan-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 tracking-tight leading-none">
          {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
        </h1>
        
        <p className="font-serif text-2xl md:text-3xl font-light text-black/70 mb-12 max-w-3xl mx-auto leading-relaxed italic">
          {language === 'fr'
            ? 'Sagesse Ancestrale, Élégance Moderne'
            : 'Ancestral Wisdom, Modern Elegance'
          }
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-copper-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-clay-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-amber-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-black/20 rounded-full">
          <div className="w-1 h-8 bg-black/40 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeritageHero;
