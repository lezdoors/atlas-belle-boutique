
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

        {/* Brand Name */}
        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in opacity-0 tracking-tight" style={{ lineHeight: '1.3', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Maison Chapuis
        </h1>
        
        {/* Subheading */}
        <h2 className="font-serif text-xl md:text-2xl text-stone-700 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          L'Art de Vivre Français Meets Moroccan Tradition
        </h2>
        
        {/* Description */}
        <p className="font-light text-base md:text-lg mb-12 animate-fade-in opacity-0 text-stone-600 leading-relaxed" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Handcrafted ceramics and tagine glasses, curated with French sophistication for discerning American homes
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-base font-normal tracking-wide transition-all duration-300"
            asChild
          >
            <Link to="/catalogue">
              Shop Ceramics
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-base font-normal tracking-wide transition-all duration-300"
            asChild
          >
            <Link to="/notre-heritage">
              View Collection
            </Link>
          </Button>
        </div>

        {/* Clean Feature Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-20 fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
            <span className="text-sm text-refined font-light">Handcrafted in Morocco</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
            <span className="text-sm text-refined font-light">Traditional Techniques</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
            <span className="text-sm text-refined font-light">Free US Shipping</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
            <span className="text-sm text-refined font-light">Artisan Direct</span>
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
