
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
      <div className="inline-flex items-center bg-moroccan-sand/90 backdrop-blur-lg rounded-full px-6 py-3 mb-6 shadow-luxury animate-fade-in">
        <Sparkles className="h-4 w-4 text-moroccan-blue mr-3 animate-pulse" />
        <span className="text-sm font-medium text-moroccan-blue tracking-wide font-serif">
          {language === 'fr' ? 'Artisanat Marocain Authentique' : 'Authentic Moroccan Craftsmanship'}
        </span>
      </div>

      {/* Brand Hero Title */}
      <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-4 drop-shadow-2xl">
          Maison Chapuis
        </h1>
        <p className="font-serif text-lg sm:text-xl lg:text-2xl text-moroccan-sand font-light tracking-wide">
          {language === 'fr' ? 'Artisanat Marocain d\'Exception' : 'Exceptional Moroccan Craftsmanship'}
        </p>
      </div>
      
      {/* Brand Introduction */}
      <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <p className="font-serif text-lg lg:text-xl leading-relaxed text-gray-100 max-w-xl mx-auto lg:mx-0 font-light">
          {language === 'fr' 
            ? 'Des ateliers traditionnels du Maroc à votre table - Céramiques et verrerie authentiques'
            : 'From traditional Moroccan workshops to your table - Authentic ceramics and glassware'
          }
        </p>
      </div>

      {/* Refined CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Button 
          size="lg" 
          onClick={onScrollToProducts}
          className="bg-moroccan-rose-gold hover:bg-moroccan-rose-gold/90 text-moroccan-blue px-10 py-4 text-lg font-medium rounded-full shadow-luxury border-0 font-serif tracking-wide min-h-[56px] w-full sm:w-auto transition-all duration-500 hover:shadow-2xl hover:scale-105"
        >
          {language === 'fr' ? 'Découvrir nos créations' : 'Discover Our Creations'}
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-moroccan-sand/20 backdrop-blur-md text-white border-2 border-moroccan-sand/60 px-10 py-4 text-lg font-medium rounded-full hover:bg-moroccan-sand/30 hover:border-moroccan-sand/80 transition-all duration-500 font-serif tracking-wide min-h-[56px] w-full sm:w-auto hover:scale-105"
        >
          {language === 'fr' ? 'Notre Savoir-Faire' : 'Our Craftsmanship'}
        </Button>
      </div>

      {/* Collection Discovery Invitation */}
      <div className="flex flex-col items-center lg:items-start space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Button
          onClick={onScrollToProducts}
          variant="ghost"
          className="text-moroccan-sand/90 hover:text-moroccan-sand hover:bg-moroccan-sand/10 transition-all duration-500 rounded-full px-6 py-3 font-serif text-sm tracking-wide backdrop-blur-sm"
        >
          ✨ {language === 'fr' ? 'Collections Artisanales' : 'Artisanal Collections'}
        </Button>
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-moroccan-sand/70 drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
