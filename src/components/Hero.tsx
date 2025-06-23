
import { useState } from 'react';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import HeroFallbackBackground from '@/components/HeroFallbackBackground';
import HeroDecorativeElements from '@/components/HeroDecorativeElements';
import HeroContent from '@/components/HeroContent';
import HeroProductShowcase from '@/components/HeroProductShowcase';
import SeasonalCarousel from '@/components/SeasonalCarousel';
import VideoControls from '@/components/VideoControls';

interface HeroProps {
  onVideoEnded?: (ended: boolean) => void;
}

const Hero = ({ onVideoEnded }: HeroProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoEnded = (ended: boolean) => {
    console.log('Hero video ended:', ended);
    onVideoEnded?.(ended);
    
    if (ended) {
      // Show carousel after video ends
      setTimeout(() => {
        setShowCarousel(true);
      }, 1000); // 1 second delay for smooth transition
    }
  };

  // If carousel should be shown, render it instead of the normal hero
  if (showCarousel) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SeasonalCarousel onScrollToProducts={scrollToProducts} />
      </section>
    );
  }

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

      {/* Enhanced Luxury Fallback Background */}
      {(videoError || !videoLoaded) && <HeroFallbackBackground />}

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Floating Decorative Elements */}
      <HeroDecorativeElements />

      {/* Video Controls - Only show when video is loaded and not in error state */}
      {videoLoaded && !videoError && (
        <VideoControls />
      )}

      {/* Main Content Container */}
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
