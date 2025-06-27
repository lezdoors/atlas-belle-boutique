
import { useState, useEffect } from 'react';
import PerleAtlasOfficialLogo from './PerleAtlasOfficialLogo';

const HeroFallbackBackground = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // High-quality fallback image
  const fallbackImage = "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//puneet-saravanan-W0po8aJGTDU-unsplash.jpg";

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      // Smooth transition delay
      setTimeout(() => setShowContent(true), 300);
    };
    img.src = fallbackImage;
  }, [fallbackImage]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Loading state with logo */}
      {!showContent && (
        <div className="absolute inset-0 bg-gradient-to-br from-sand-200 via-clay-100 to-copper-100 flex items-center justify-center">
          <div className="text-center">
            <PerleAtlasOfficialLogo 
              size="lg" 
              animated={true}
              className="mb-4"
            />
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-dot-pulse"></div>
              <div className="w-2 h-2 bg-copper-400 rounded-full animate-dot-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="w-2 h-2 bg-pearl-400 rounded-full animate-dot-pulse" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
        </div>
      )}
      
      {/* High-quality fallback image */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${fallbackImage}')`,
          filter: 'brightness(0.8) sepia(0.1) saturate(1.1)'
        }}
      />

      {/* Enhanced gradient overlay for better readability */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 transition-opacity duration-1000 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      {/* Moroccan-inspired decorative overlay */}
      <div className={`absolute inset-0 moroccan-pattern opacity-5 transition-opacity duration-1000 ${
        showContent ? 'opacity-5' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default HeroFallbackBackground;
