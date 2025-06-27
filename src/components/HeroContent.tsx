
import { Button } from '@/components/ui/button';
import { Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroContentProps {
  onScrollToProducts: () => void;
}

const HeroContent = ({ onScrollToProducts }: HeroContentProps) => {
  const { language } = useLanguage();

  return (
    <div className="text-center lg:text-left order-2 lg:order-1 space-y-8 lg:space-y-10 relative max-w-2xl mx-auto lg:mx-0">
      {/* Luxury Artisan Badge */}
      <div className="inline-flex items-center bg-white/90 backdrop-blur-lg rounded-full px-6 py-3 mb-6 luxury-shadow animate-fade-in">
        <Sparkles className="h-4 w-4 text-copper-600 mr-3 animate-pulse" />
        <span className="text-sm font-medium text-clay-700 tracking-wide font-serif">
          {language === 'fr' ? 'Artisanat Marocain Authentique' : 'Authentic Moroccan Craftsmanship'}
        </span>
      </div>

      {/* Poetic Hero Title */}
      <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-4 drop-shadow-2xl">
          Perle d'Atlas
        </h1>
        <p className="font-serif text-lg sm:text-xl lg:text-2xl text-copper-200 font-light tracking-wide">
          {language === 'fr' ? 'L\'âme du Maroc' : 'The Soul of Morocco'}
        </p>
      </div>
      
      {/* Poetic Introduction */}
      <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <p className="font-serif text-lg lg:text-xl leading-relaxed text-pearl-100 max-w-xl mx-auto lg:mx-0 font-light">
          {language === 'fr' 
            ? 'Où les traditions millénaires rencontrent l\'élégance contemporaine. Chaque création raconte l\'histoire de nos artisans berbères et célèbre la beauté intemporelle du Maroc.'
            : 'Where ancient traditions meet contemporary elegance. Each creation tells the story of our Berber artisans and celebrates the timeless beauty of Morocco.'
          }
        </p>
      </div>

      {/* Refined CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Button 
          size="lg" 
          onClick={onScrollToProducts}
          className="copper-gradient text-white px-10 py-4 text-lg font-medium rounded-full hover-scale luxury-shadow border-0 font-serif tracking-wide min-h-[56px] w-full sm:w-auto transition-all duration-500 hover:shadow-2xl hover:scale-105"
        >
          {language === 'fr' ? 'Découvrir nos Trésors' : 'Discover Our Treasures'}
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-10 py-4 text-lg font-medium rounded-full hover:bg-white/20 hover:border-white/60 transition-all duration-500 font-serif tracking-wide min-h-[56px] w-full sm:w-auto hover:scale-105"
        >
          {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
        </Button>
      </div>

      {/* Seasonal Discovery Invitation */}
      <div className="flex flex-col items-center lg:items-start space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Button
          onClick={onScrollToProducts}
          variant="ghost"
          className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-500 rounded-full px-6 py-3 font-serif text-sm tracking-wide backdrop-blur-sm"
        >
          ✨ {language === 'fr' ? 'Collections Saisonnières' : 'Seasonal Collections'}
        </Button>
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70 drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
