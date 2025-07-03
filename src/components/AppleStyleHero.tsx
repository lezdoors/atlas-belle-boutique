
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/utils/translations';
import ProductCarousel from '@/components/heritage/ProductCarousel';
import { Link } from 'react-router-dom';

const AppleStyleHero = () => {
  const { language } = useLanguage();

  const scrollToCategories = () => {
    const categoriesSection = document.querySelector('#categories') || document.querySelector('#banniere-infos');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden w-full">
      {/* Subtle Background Image with Tint */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//orange%20rose%20and%20bottle%20behind%20it.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full px-6 lg:px-12 py-32">
        <div className="w-full">

        {/* Headline */}
        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 animate-fade-in opacity-0 tracking-tight" style={{ lineHeight: '1.3', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {language === 'fr' ? 'Une Invitation à l\'Art de Vivre Marocain' : 'An Invitation to the Moroccan Art of Living'}
        </h1>
        
        {/* Subheadline */}
        <p className="font-light text-base md:text-lg mb-12 animate-fade-in opacity-0 text-stone-600 leading-relaxed" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          {language === 'fr' 
            ? 'De la vaisselle artisanale aux décorations empreintes d\'âme, découvrez l\'élégance intemporelle née dans l\'Atlas.'
            : 'From handcrafted tableware to soulful décor, discover timeless elegance born in the Atlas.'}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-base font-normal tracking-wide transition-all duration-300"
            asChild
          >
            <Link to="/a-propos">
              {language === 'fr' ? 'M\'informer' : 'Get Notified'}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-base font-normal tracking-wide transition-all duration-300"
            asChild
          >
            <Link to="/catalogue">
              {language === 'fr' ? 'Aperçu Boutique' : 'Shop Preview'}
            </Link>
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
