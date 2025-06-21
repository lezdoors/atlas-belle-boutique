
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroContentProps {
  onScrollToProducts: () => void;
}

const HeroContent = ({ onScrollToProducts }: HeroContentProps) => {
  return (
    <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
      {/* Decorative Badge - Mobile Responsive */}
      <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 luxury-shadow">
        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-copper-600 mr-2" />
        <span className="text-xs sm:text-sm font-medium text-clay-700 tracking-wide">
          Traditions Ancestrales • Luxe Moderne
        </span>
      </div>

      {/* Main Title with Enhanced Mobile Typography */}
      <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-none text-white mb-4 sm:mb-6 drop-shadow-lg">
        Perle d'Atlas
      </h1>
      
      {/* Elegant Subtitle - Mobile Optimized */}
      <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-pearl-100 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-4 sm:px-0 drop-shadow-md">
        L'art millénaire marocain rencontre l'élégance contemporaine. Chaque produit raconte l'histoire de nos artisans berbères.
      </p>

      {/* Enhanced Mobile-First CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0">
        <Button 
          size="lg" 
          onClick={onScrollToProducts}
          className="copper-gradient text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full hover-scale luxury-shadow border-0 font-sans tracking-wide min-h-[50px] sm:min-h-[56px]"
        >
          Découvrir nos Trésors
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white/90 backdrop-blur-sm text-clay-700 border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full hover:bg-white hover:border-white transition-all duration-300 font-sans tracking-wide min-h-[50px] sm:min-h-[56px]"
        >
          Notre Héritage
        </Button>
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <div className="animate-bounce justify-center lg:justify-start hidden sm:flex">
        <ArrowDown className="h-6 w-6 text-white drop-shadow-lg" />
      </div>
    </div>
  );
};

export default HeroContent;
