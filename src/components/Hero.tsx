
import { useState } from 'react';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import HeroFallbackBackground from '@/components/HeroFallbackBackground';
import HeroDecorativeElements from '@/components/HeroDecorativeElements';
import HeroContent from '@/components/HeroContent';
import HeroProductShowcase from '@/components/HeroProductShowcase';
import CinematicBackground from '@/components/CinematicBackground';
import FloatingProductCards from '@/components/FloatingProductCards';

interface HeroProps {
  onVideoEnded?: (ended: boolean) => void;
}

const Hero = ({ onVideoEnded }: HeroProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoEnded = (ended: boolean) => {
    onVideoEnded?.(ended);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Cinematic Background with Rotating Images */}
      <CinematicBackground />

      {/* Enhanced Video Background (fallback) */}
      {!videoError && (
        <HeroVideoBackground 
          onVideoLoaded={setVideoLoaded}
          onVideoError={setVideoError}
          onVideoEnded={handleVideoEnded}
        />
      )}

      {/* Luxury Fallback Background */}
      {(videoError || !videoLoaded) && <HeroFallbackBackground />}

      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-moroccan-blue/30 via-black/40 to-moroccan-blue/20 z-10"></div>

      {/* Floating Decorative Elements */}
      <HeroDecorativeElements />

      {/* Floating Product Cards */}
      <FloatingProductCards />

      {/* Main Content Container - Cinematic Layout */}
      <div className="relative z-40 container mx-auto px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[90vh]">
          
          {/* Hero Content - Takes more space */}
          <div className="lg:col-span-8 xl:col-span-7">
            <HeroContent onScrollToProducts={scrollToProducts} />
          </div>

          {/* Right Side - Elegant spacing for floating cards */}
          <div className="lg:col-span-4 xl:col-span-5 relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative animate-elegant-fade-in hidden lg:block">
              {/* Luxury Decorative Frame - More subtle */}
              <div className="absolute -inset-12 bg-gradient-radial from-moroccan-rose-gold/10 to-transparent rounded-full opacity-40 blur-3xl animate-gentle-float"></div>
              
              {/* Floating Moroccan Elements - Refined */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-moroccan-rose-gold/20 to-moroccan-sand/20 rounded-full opacity-30 animate-gentle-float blur-sm"></div>
              <div className="absolute -bottom-12 -left-12 w-16 h-16 bg-gradient-to-br from-moroccan-sand/20 to-moroccan-blue/20 rounded-full opacity-20 animate-gentle-float blur-sm" style={{
                animationDelay: '3s'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with luxury styling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-xs font-light tracking-wider uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
