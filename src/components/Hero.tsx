
import { useState } from 'react';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import HeroFallbackBackground from '@/components/HeroFallbackBackground';
import HeroDecorativeElements from '@/components/HeroDecorativeElements';
import HeroContent from '@/components/HeroContent';
import HeroProductShowcase from '@/components/HeroProductShowcase';

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
      {/* Enhanced Video Background */}
      {!videoError && (
        <HeroVideoBackground 
          onVideoLoaded={setVideoLoaded}
          onVideoError={setVideoError}
          onVideoEnded={handleVideoEnded}
        />
      )}

      {/* Luxury Fallback Background */}
      {(videoError || !videoLoaded) && <HeroFallbackBackground />}

      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>

      {/* Floating Decorative Elements */}
      <HeroDecorativeElements />

      {/* Main Content Container */}
      <div className="relative z-40 container mx-auto px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[85vh]">
          
          {/* Hero Content */}
          <HeroContent onScrollToProducts={scrollToProducts} />

          {/* Product Showcase - Refined */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative animate-elegant-fade-in">
              {/* Luxury Decorative Frame */}
              <div className="absolute -inset-8 copper-gradient rounded-full opacity-20 blur-3xl animate-gentle-float"></div>
              
              {/* Floating Moroccan Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-copper-300 to-copper-500 rounded-full opacity-40 animate-gentle-float blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-clay-300 to-clay-500 rounded-full opacity-30 animate-gentle-float blur-sm" style={{
                animationDelay: '2s'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
