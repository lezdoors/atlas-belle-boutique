
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Phone, ChevronDown } from 'lucide-react';

interface HeroContentProps {
  onScrollToProducts: () => void;
}

const HeroContent = ({ onScrollToProducts }: HeroContentProps) => {
  return (
    <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 sm:space-y-8 relative">
      {/* Luxury decorative badge with enhanced animation */}
      <div className="inline-flex items-center bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 luxury-shadow animate-fade-in">
        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-copper-600 mr-2 animate-pulse" />
        <span className="text-xs sm:text-sm font-medium text-clay-700 tracking-wide font-serif">
          Traditions Ancestrales • Collections Saisonnières
        </span>
      </div>

      {/* Enhanced title with luxury typography */}
      <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-4 sm:mb-6 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Perle d'Atlas
      </h1>
      
      {/* Refined subtitle with better mobile readability */}
      <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-pearl-50 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-4 sm:px-0 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        L'art millénaire marocain rencontre l'élégance contemporaine. Chaque produit raconte l'histoire de nos artisans berbères et de nos récoltes saisonnières.
      </p>

      {/* Enhanced CTA buttons with luxury styling */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Button 
          size="lg" 
          onClick={onScrollToProducts}
          className="copper-gradient text-white px-8 py-4 text-lg font-medium rounded-full hover-scale luxury-shadow border-0 font-serif tracking-wide min-h-[56px] w-full sm:w-auto transition-all duration-300 hover:shadow-2xl"
        >
          Découvrir nos Trésors
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white/90 backdrop-blur-md text-clay-700 border-2 border-white/80 px-8 py-4 text-lg font-medium rounded-full hover:bg-white hover:border-white hover:shadow-xl transition-all duration-300 font-serif tracking-wide min-h-[56px] w-full sm:w-auto"
        >
          Notre Héritage
        </Button>
      </div>

      {/* Contact line - Desktop/tablet only */}
      <div className="hidden md:flex items-center justify-center lg:justify-start space-x-2 text-pearl-200/80 text-sm font-serif animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <Phone className="h-4 w-4" />
        <span>06 63 06 89 80 – Disponible aussi sur WhatsApp</span>
      </div>

      {/* Enhanced scroll cue with ritual discovery message */}
      <div className="flex flex-col items-center lg:items-start space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Button
          onClick={onScrollToProducts}
          variant="ghost"
          className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-6 py-3 font-serif text-sm tracking-wide"
        >
          📜 Découvrir nos Rituels
        </Button>
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/80 drop-shadow-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
