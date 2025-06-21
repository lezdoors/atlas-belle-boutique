
import { useState, useEffect } from 'react';

const HeroFallbackBackground = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Using the beautiful desert landscape from your uploaded images
  const fallbackImage = "/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png";

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = fallbackImage;
  }, [fallbackImage]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Loading shimmer effect */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-sand-200 via-clay-100 to-copper-100 animate-pulse"></div>
      )}
      
      {/* High-quality fallback image */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${fallbackImage}')`,
          filter: 'brightness(0.8) sepia(0.1) saturate(1.1)'
        }}
      />

      {/* Enhanced gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
      
      {/* Moroccan-inspired decorative overlay */}
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
    </div>
  );
};

export default HeroFallbackBackground;
