
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const { language } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('Hero component mounted, checking video load');
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setVideoLoaded(true);
        setVideoError(false);
      };
      
      const handleError = (e: Event) => {
        console.error('Video failed to load:', e);
        setVideoError(true);
        setVideoLoaded(false);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleLoadedData);
      
      // Force load attempt
      video.load();
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleLoadedData);
      };
    }
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onLoadedData={() => {
            console.log('Video onLoadedData event fired');
            setVideoLoaded(true);
            setVideoError(false);
          }}
          onError={(e) => {
            console.error('Video onError event fired:', e);
            setVideoError(true);
          }}
          onCanPlay={() => {
            console.log('Video can play');
            setVideoLoaded(true);
          }}
        >
          <source src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/videos/perle-datlas-hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Enhanced Luxury Fallback Background */}
      {(videoError || !videoLoaded) && (
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Luxury gradient background inspired by Moroccan golden hour */}
          <div className="absolute inset-0 bg-gradient-to-br from-pearl-100 via-copper-100 to-clay-200 animate-gradient bg-[length:400%_400%]"></div>
          
          {/* Moroccan geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(184, 134, 11, 0.3) 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.2) 2px, transparent 2px),
                               linear-gradient(45deg, transparent 40%, rgba(184, 134, 11, 0.1) 50%, transparent 60%)`,
              backgroundSize: '80px 80px, 120px 120px, 200px 200px'
            }}></div>
          </div>
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-5 bg-gradient-to-tr from-transparent via-clay-500 to-transparent"></div>
        </div>
      )}

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Floating Decorative Elements - Moroccan inspired */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-copper-200 opacity-20 animate-float blur-xl z-30"></div>
      <div className="absolute bottom-32 right-8 sm:right-16 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-clay-200 opacity-25 animate-float blur-lg z-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-copper-300 opacity-15 animate-float blur-md z-30" style={{ animationDelay: '2s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-40 container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Section - Enhanced Mobile-First Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            {/* Decorative Badge - Mobile Responsive */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 luxury-shadow">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-copper-600 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-clay-700 tracking-wide">
                Traditions Ancestrales • Luxe Moderne
              </span>
            </div>

            {/* Main Title with Enhanced Mobile Typography */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-none text-white mb-4 sm:mb-6 drop-shadow-lg">
              Perle d'Atlas
            </h1>
            
            {/* Elegant Subtitle - Mobile Optimized */}
            <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-pearl-100 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-4 sm:px-0 drop-shadow-md">
              L'art millénaire marocain rencontre l'élégance contemporaine. Chaque produit raconte l'histoire de nos artisans berbères.
            </p>

            {/* Enhanced Mobile-First CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0">
              <Button 
                size="lg" 
                onClick={scrollToProducts}
                className="copper-gradient text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full hover-scale luxury-shadow border-0 font-sans tracking-wide min-h-[50px] sm:min-h-[56px]"
              >
                Découvrir nos Trésors
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/90 backdrop-blur-sm text-clay-700 border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full hover:bg-white hover:border-white transition-all duration-300 font-sans tracking-wide min-h-[50px] sm:min-h-[56px]"
              >
                Notre Héritage
              </Button>
            </div>

            {/* Scroll Indicator - Hidden on small screens */}
            <div className="animate-bounce justify-center lg:justify-start hidden sm:flex">
              <ArrowDown className="h-6 w-6 text-white drop-shadow-lg" />
            </div>
          </div>

          {/* Right Section - Mobile Optimized Product Showcase */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center mb-8 lg:mb-0">
            <div className="relative animate-scale-in-bounce">
              {/* Enhanced Decorative Frame - Mobile Responsive */}
              <div className="absolute -inset-4 sm:-inset-8 copper-gradient rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
              
              {/* Main Product Container - Mobile Optimized */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-12 luxury-shadow border border-white/30">
                {/* Elegant Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, rgba(184, 134, 11, 0.4) 1px, transparent 1px),
                                     radial-gradient(circle at 70% 70%, rgba(160, 82, 45, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px, 60px 60px'
                  }}></div>
                </div>
                
                {/* Product Showcase - Responsive Sizing */}
                <div className="relative z-10 w-64 sm:w-80 h-80 sm:h-96 mx-auto">
                  {/* Main Product Mockup - Mobile Responsive */}
                  <div className="relative w-36 sm:w-48 h-48 sm:h-64 mx-auto mb-4 sm:mb-6 rounded-2xl luxury-shadow bg-gradient-to-br from-pearl-50 to-copper-100 flex items-center justify-center">
                    <div className="text-center">
                      {/* Bottle Design - Scaled for Mobile */}
                      <div className="w-16 sm:w-20 h-24 sm:h-32 mx-auto mb-3 sm:mb-4 relative">
                        <div className="absolute inset-0 copper-gradient rounded-2xl opacity-90 luxury-shadow"></div>
                        <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-3 sm:h-4 bg-clay-600 rounded-t-lg"></div>
                        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-serif text-white">
                          Perle d'Atlas
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Details - Mobile Optimized */}
                  <div className="text-center">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-clay-800 mb-2">
                      Huile d'Argan Précieuse
                    </h3>
                    <p className="text-clay-600 text-sm elegant-text mb-2">
                      Élixir de beauté ancestrale
                    </p>
                    <div className="text-xs text-copper-600 font-medium">
                      Récolte Saisonnière • Atlas
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Product Elements - Responsive */}
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 bg-copper-200 rounded-full opacity-60 animate-float blur-sm"></div>
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-8 sm:w-12 h-8 sm:h-12 bg-clay-200 rounded-full opacity-50 animate-float blur-sm" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
