
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-black mb-8 tracking-tight leading-none">
          {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-black/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          {language === 'fr'
            ? 'Sagesse ancestrale, élégance moderne'
            : 'Ancestral wisdom, modern elegance'
          }
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105"
            >
              {language === 'fr' ? 'Voir le Catalogue' : 'View Catalog'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContent}
            className="border-2 border-black/20 text-black hover:bg-black/5 rounded-full px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105"
          >
            {language === 'fr' ? 'Découvrir notre histoire' : 'Discover our story'}
          </Button>
        </div>
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
