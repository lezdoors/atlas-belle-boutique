
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
      <div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-32 lg:py-48">
        <div className="w-full max-w-5xl mx-auto">

        {/* Brand Name - Mobile Optimized Typography */}
        <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 sm:mb-8 animate-fade-in opacity-0 tracking-tight sm:tracking-[0.02em]" 
            style={{ 
              lineHeight: '1.1', 
              animationDelay: '0.2s', 
              animationFillMode: 'forwards',
              fontFamily: 'var(--font-display)'
            }}>
          Maison Chapuis
        </h1>
        
        {/* Elegant Divider */}
        <div className="w-16 sm:w-24 h-px bg-stone-300 mx-auto mb-6 sm:mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}></div>
        
        {/* Subheading - Mobile Optimized */}
        <h2 className="font-serif font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-700 mb-8 sm:mb-12 animate-fade-in opacity-0 leading-relaxed tracking-wide max-w-4xl mx-auto" 
            style={{ 
              animationDelay: '0.4s', 
              animationFillMode: 'forwards',
              lineHeight: '1.4'
            }}>
          <span className="block sm:inline">L'Art de Vivre Français</span>
          <br className="block sm:hidden" />
          <span className="text-stone-500 text-base sm:text-lg md:text-xl lg:text-2xl block sm:inline mt-2 sm:mt-0">Meets Moroccan Tradition</span>
        </h2>
        
        {/* Description - Simplified for Mobile */}
        <p className="font-light text-base sm:text-lg md:text-xl mb-10 sm:mb-16 animate-fade-in opacity-0 text-stone-600 leading-relaxed max-w-2xl mx-auto px-2" 
           style={{ 
             animationDelay: '0.5s', 
             animationFillMode: 'forwards',
             letterSpacing: '0.01em'
           }}>
          Artisan ceramics and tagines, curated with French elegance
        </p>

        {/* Simplified Buttons for Mobile */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 animate-fade-in opacity-0 px-4" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-stone-900 text-white hover:bg-stone-800 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-light tracking-wide transition-all duration-500 rounded-sm border-none shadow-none hover:shadow-lg hover:shadow-stone-900/20 w-full sm:w-auto"
            asChild
          >
            <Link to="/categories/ceramiques">
              {language === 'fr' ? 'Découvrir' : 'Shop Now'}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-stone-400 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-light tracking-wide transition-all duration-500 rounded-sm shadow-none hover:shadow-lg hover:shadow-stone-200/50 w-full sm:w-auto"
            asChild
          >
            <Link to="/collections">
              {language === 'fr' ? 'Collections' : 'View Collection'}
            </Link>
          </Button>
        </div>

        {/* Simplified Feature Badges - Mobile Optimized */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 mb-16 sm:mb-24 fade-in-up px-4">
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-stone-400 rounded-full flex-shrink-0"></div>
            <span className="text-xs sm:text-sm text-stone-600 font-light">Handcrafted</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-stone-400 rounded-full flex-shrink-0"></div>
            <span className="text-xs sm:text-sm text-stone-600 font-light">Authentic</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-stone-400 rounded-full flex-shrink-0"></div>
            <span className="text-xs sm:text-sm text-stone-600 font-light">Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-stone-400 rounded-full flex-shrink-0"></div>
            <span className="text-xs sm:text-sm text-stone-600 font-light">Artisan Direct</span>
          </div>
        </div>

        {/* Product Showcase Carousel - Hidden on small mobile */}
        <div className="hidden sm:block">
          <ProductCarousel />
        </div>
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
