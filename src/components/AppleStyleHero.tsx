
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
      <div className="relative z-10 text-center w-full px-6 lg:px-12 py-40 lg:py-48">
        <div className="w-full max-w-5xl mx-auto">

        {/* Brand Name - Luxury Typography */}
        <h1 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground mb-8 animate-fade-in opacity-0 tracking-[0.02em]" 
            style={{ 
              lineHeight: '0.9', 
              animationDelay: '0.2s', 
              animationFillMode: 'forwards',
              fontFamily: 'var(--font-display)'
            }}>
          Maison Chapuis
        </h1>
        
        {/* Elegant Divider */}
        <div className="w-24 h-px bg-stone-300 mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}></div>
        
        {/* Subheading - Refined Typography */}
        <h2 className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-stone-600 mb-12 animate-fade-in opacity-0 leading-relaxed tracking-wide max-w-4xl mx-auto" 
            style={{ 
              animationDelay: '0.4s', 
              animationFillMode: 'forwards',
              lineHeight: '1.4'
            }}>
          L'Art de Vivre Français<br />
          <span className="text-stone-500 text-lg md:text-xl lg:text-2xl">Meets Moroccan Tradition</span>
        </h2>
        
        {/* Description - Enhanced Spacing */}
        <p className="font-light text-lg md:text-xl mb-16 animate-fade-in opacity-0 text-stone-500 leading-relaxed max-w-3xl mx-auto" 
           style={{ 
             animationDelay: '0.5s', 
             animationFillMode: 'forwards',
             letterSpacing: '0.01em'
           }}>
          Handcrafted ceramics and traditional tagines, curated with French sophistication for discerning American homes
        </p>

        {/* Luxury Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-stone-900 text-white hover:bg-stone-800 px-16 py-6 text-lg font-light tracking-[0.05em] transition-all duration-500 rounded-none border-none shadow-none hover:shadow-lg hover:shadow-stone-900/20"
            asChild
          >
            <Link to="/catalogue">
              Shop Ceramics
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-stone-400 px-16 py-6 text-lg font-light tracking-[0.05em] transition-all duration-500 rounded-none shadow-none hover:shadow-lg hover:shadow-stone-200/50"
            asChild
          >
            <Link to="/notre-heritage">
              View Collection
            </Link>
          </Button>
        </div>

        {/* Refined Feature Badges */}
        <div className="flex flex-wrap justify-center gap-12 mb-24 fade-in-up">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            <span className="text-base text-stone-500 font-light tracking-wide">Handcrafted in Morocco</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            <span className="text-base text-stone-500 font-light tracking-wide">Traditional Techniques</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            <span className="text-base text-stone-500 font-light tracking-wide">Free US Shipping</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            <span className="text-base text-stone-500 font-light tracking-wide">Artisan Direct</span>
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
