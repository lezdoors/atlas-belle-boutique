
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCarousel from '@/components/heritage/ProductCarousel';

const AppleStyleHero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden w-full">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8 py-20">

        {/* Headline */}
        <h1 className="font-light text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 fade-in-up tracking-wide leading-tight">
          Sagesse Ancestrale,<br />
          Embouteillée avec Élégance
        </h1>
        
        {/* Subheadline */}
        <p className="font-light text-lg md:text-xl mb-12 max-w-3xl mx-auto fade-in-up text-stone-600 leading-relaxed">
          Soins et parfums marocains, 100% bio, artisanaux et livrés dans le monde entier.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-base font-normal tracking-wide transition-all duration-300"
          >
            M'informer
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-base font-normal tracking-wide transition-all duration-300"
          >
            Aperçu Boutique
          </Button>
        </div>

        {/* Clean Feature Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-20 fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
            <span className="text-sm text-refined font-light">100% Bio Certifié</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
            <span className="text-sm text-refined font-light">Artisanat Lent</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
            <span className="text-sm text-refined font-light">Expédié du Maroc</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
            <span className="text-sm text-refined font-light">Sans Cruauté</span>
          </div>
        </div>

        {/* Product Showcase Carousel */}
        <ProductCarousel />
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-stone-300">
          <div className="w-px h-6 bg-stone-600 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AppleStyleHero;
