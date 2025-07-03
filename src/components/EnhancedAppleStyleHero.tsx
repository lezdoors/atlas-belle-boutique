
import { Button } from '@/components/ui/button';
import { ChevronRight, Play, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EnhancedAppleStyleHero = () => {
  const { language } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        {!isVideoPlaying ? (
          <div className="relative w-full h-full">
            <img
              src="/lovable-uploads/hero-image-atlas-landscape.jpg"
              alt="Atlas Mountains and Argan Fields"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/60"></div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={() => setIsVideoPlaying(true)}
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 hover:scale-110"
                size="icon"
              >
                <Play className="h-8 w-8 text-white ml-1" />
              </Button>
            </div>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video-placeholder.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Luxury Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20">
          <Heart className="h-4 w-4 text-amber-200 mr-3 animate-pulse" />
          <span className="text-sm font-medium text-white tracking-wide font-serif">
            {language === 'fr' ? 'Artisanat Marocain Authentique' : 'Authentic Moroccan Craftsmanship'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight text-white mb-6 tracking-tight">
          {language === 'fr' ? 'Sagesse Marocaine,' : 'Moroccan Wisdom,'}
          <br />
          <span className="text-amber-200">
            {language === 'fr' ? 'Embouteillée avec Élégance' : 'Bottled With Elegance'}
          </span>
        </h1>
        
        {/* Secondary Line */}
        <p className="text-xl md:text-2xl font-light text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-serif">
          {language === 'fr'
            ? 'Soins ancestraux & parfums. 100% bio. Du Maroc à vous.'
            : 'Ancestral skincare & perfumes. 100% organic. From Morocco to you.'
          }
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-amber-900/30 font-serif tracking-wide min-h-[56px] w-full sm:w-auto"
            asChild
          >
            <Link to="/a-propos">
              {language === 'fr' ? 'M\'informer' : 'Notify Me'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 text-lg font-medium rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-serif tracking-wide min-h-[56px] w-full sm:w-auto hover:scale-105"
            asChild
          >
            <Link to="/catalogue">
              {language === 'fr' ? 'Aperçu Boutique' : 'Shop Preview'}
            </Link>
          </Button>
        </div>

        {/* Luxury Trust Signals */}
        <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm font-light">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            {language === 'fr' ? '100% Bio Certifié' : '100% Organic Certified'}
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            {language === 'fr' ? 'Artisanat Lent' : 'Slow-crafted'}
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            {language === 'fr' ? 'Expédié du Maroc' : 'Ships from Morocco'}
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            {language === 'fr' ? 'Sans Cruauté' : 'Cruelty-Free'}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-1 h-16 bg-white/30 rounded-full">
          <div className="w-1 h-8 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAppleStyleHero;
