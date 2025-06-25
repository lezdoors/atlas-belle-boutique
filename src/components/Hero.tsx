
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
    console.log('Hero video ended:', ended);
    onVideoEnded?.(ended);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {!videoError && (
        <HeroVideoBackground 
          onVideoLoaded={setVideoLoaded}
          onVideoError={setVideoError}
          onVideoEnded={handleVideoEnded}
        />
      )}

      {/* Enhanced Luxury Fallback Background - loads immediately */}
      {(videoError || !videoLoaded) && <HeroFallbackBackground />}

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Floating Decorative Elements */}
      <HeroDecorativeElements />

      {/* Main Content Container - loads immediately */}
      <div className="relative z-40 container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Section - Hero Content */}
          <HeroContent onScrollToProducts={scrollToProducts} />

          {/* Right Section - Product Showcase */}
          <HeroProductShowcase />
        </div>
      </div>
    </section>
  );
};

export default Hero;
