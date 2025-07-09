
import { Button } from '@/components/ui/button';
import { Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroContentProps {
  onScrollToProducts: () => void;
}

const HeroContent = ({ onScrollToProducts }: HeroContentProps) => {
  const { language } = useLanguage();

  return (
    <div className="text-center lg:text-left order-2 lg:order-1 space-y-8 lg:space-y-12 relative max-w-3xl mx-auto lg:mx-0">
      
      {/* Luxury Artisan Badge with Animation */}
      <div className="inline-flex items-center bg-white/95 backdrop-blur-xl rounded-full px-8 py-4 mb-8 shadow-luxury animate-fade-in border border-white/20">
        <Sparkles className="h-5 w-5 text-moroccan-rose-gold mr-3 animate-pulse" />
        <span className="text-sm font-medium text-moroccan-blue tracking-wide font-serif">
          {language === 'fr' ? 'Artisanat Authentique du Maroc' : 'Authentic Moroccan Craftsmanship'}
        </span>
      </div>

      {/* Cinematic Brand Title */}
      <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white mb-6 drop-shadow-2xl tracking-tight">
          Maison Chapuis
        </h1>
        <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-moroccan-sand font-light tracking-wider leading-relaxed">
          {language === 'fr' ? 'L\'Art de Vivre Marocain' : 'The Moroccan Art of Living'}
        </p>
      </div>
      
      {/* Elegant Tagline */}
      <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <p className="font-serif text-lg lg:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto lg:mx-0 font-light tracking-wide">
          {language === 'fr' 
            ? 'Des ateliers traditionnels du Maroc à votre table - L\'excellence artisanale dans chaque création'
            : 'From traditional Moroccan workshops to your table - Artisan excellence in every creation'
          }
        </p>
      </div>

      {/* Luxury CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Button 
          size="lg" 
          onClick={onScrollToProducts}
          className="bg-moroccan-rose-gold hover:bg-moroccan-rose-gold/90 text-moroccan-blue px-12 py-6 text-lg font-medium rounded-full shadow-luxury border-0 font-serif tracking-wide min-h-[64px] w-full sm:w-auto transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
        >
          {language === 'fr' ? 'Découvrir nos créations' : 'Discover Our Creations'}
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-12 py-6 text-lg font-medium rounded-full hover:bg-white/20 hover:border-white/60 transition-all duration-700 font-serif tracking-wide min-h-[64px] w-full sm:w-auto hover:scale-105 hover:-translate-y-1"
        >
          {language === 'fr' ? 'Notre Savoir-Faire' : 'Our Craftsmanship'}
        </Button>
      </div>

      {/* Trust Badges - Emotional Hooks */}
      <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="flex items-center gap-3 text-white/90">
          <div className="w-2 h-2 bg-moroccan-rose-gold rounded-full animate-pulse"></div>
          <span className="text-sm font-light tracking-wide">
            {language === 'fr' ? 'Façonné par des maîtres artisans' : 'Handcrafted by master artisans'}
          </span>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <div className="w-2 h-2 bg-moroccan-sand rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <span className="text-sm font-light tracking-wide">
            {language === 'fr' ? 'Direct des coopératives du Maroc' : 'Direct from Morocco\'s finest cooperatives'}
          </span>
        </div>
      </div>

      {/* Elegant Scroll Invitation */}
      <div className="flex flex-col items-center lg:items-start space-y-4 pt-6 animate-fade-in" style={{ animationDelay: '1s' }}>
        <Button
          onClick={onScrollToProducts}
          variant="ghost"
          className="text-moroccan-sand/90 hover:text-moroccan-sand hover:bg-moroccan-sand/10 transition-all duration-500 rounded-full px-8 py-3 font-serif text-sm tracking-wide backdrop-blur-sm"
        >
          ✨ {language === 'fr' ? 'Explorer nos Collections' : 'Explore Our Collections'}
        </Button>
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-moroccan-sand/70 drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
