
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCarousel from '@/components/heritage/ProductCarousel';

const AppleStyleHero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/hero-image-atlas-landscape.jpg"
          alt="Atlas Mountains"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/perle-atlas-logo.png"
            alt="Perle de l'Atlas - Logo circulaire noir et or avec perle et montagnes de l'Atlas"
            className="h-20 md:h-24 lg:h-28 mx-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-black mb-6 tracking-tight leading-tight">
          Sagesse Ancestrale,<br />
          Embouteillée avec Élégance
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl font-light text-black/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          Soins et parfums marocains, 100% bio, artisanaux et livrés dans le monde entier.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-copper-600 text-white hover:bg-copper-700 rounded-full px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105"
          >
            M'informer
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-copper-600 text-copper-600 hover:bg-copper-50 rounded-full px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105"
          >
            Aperçu Boutique
          </Button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-black/70">100% Bio Certifié</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-copper-500 rounded-full"></div>
            <span className="text-sm font-medium text-black/70">Artisanat Lent</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm font-medium text-black/70">Expédié du Maroc</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-black/70">Sans Cruauté</span>
          </div>
        </div>

        {/* Product Showcase Carousel */}
        <ProductCarousel />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-black/20 rounded-full">
          <div className="w-1 h-8 bg-black/40 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AppleStyleHero;
