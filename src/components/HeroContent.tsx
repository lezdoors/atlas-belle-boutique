
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroContentProps {
  onScrollToProducts: () => void;
}

const HeroContent = ({ onScrollToProducts }: HeroContentProps) => {
  return (
    <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
      {/* Mobile-optimized decorative badge */}
      <div className="inline-flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-8 luxury-shadow">
        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-copper-600 mr-2" />
        <span className="text-xs sm:text-sm font-medium text-clay-700 tracking-wide">
          Traditions Ancestrales • Collections Saisonnières
        </span>
      </div>

      {/* Enhanced mobile title with better readability */}
      <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-3 sm:mb-6 drop-shadow-2xl">
        Perle d'Atlas
      </h1>
      
      {/* Mobile-optimized subtitle with better contrast */}
      <p className="font-serif text-base sm:text-xl md:text-2xl leading-relaxed text-pearl-50 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 px-2 sm:px-0 drop-shadow-lg">
        L'art millénaire marocain rencontre l'élégance contemporaine. Chaque produit raconte l'histoire de nos artisans berbères et de nos récoltes saisonnières.
      </p>

      {/* Enhanced mobile-first CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-12 px-2 sm:px-0">
        <Button 
          size="lg" 
          onClick={onScrollToProducts}
          className="copper-gradient text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full hover-scale luxury-shadow border-0 font-sans tracking-wide min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
        >
          Découvrir nos Trésors
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white/95 backdrop-blur-sm text-clay-700 border-2 border-white/70 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full hover:bg-white hover:border-white transition-all duration-300 font-sans tracking-wide min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
        >
          Notre Héritage
        </Button>
      </div>

      {/* Mobile-hidden scroll indicator */}
      <div className="animate-bounce justify-center lg:justify-start hidden sm:flex">
        <ArrowDown className="h-6 w-6 text-white drop-shadow-lg" />
      </div>
    </div>
  );
};

export default HeroContent;
