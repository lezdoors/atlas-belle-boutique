
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-black mb-8 tracking-tight leading-none">
          Perle d'Atlas
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-black/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          {language === 'fr'
            ? 'L\'artisanat marocain authentique rencontre l\'élégance contemporaine'
            : 'Authentic Moroccan craftsmanship meets contemporary elegance'
          }
        </p>

        <Button
          size="lg"
          className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105"
        >
          {language === 'fr' ? 'Découvrir' : 'Discover'}
          <ChevronRight className="ml-2 w-5 h-5" />
        </Button>
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
