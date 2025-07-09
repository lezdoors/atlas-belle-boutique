import { useState, useEffect } from 'react';

interface CinematicBackgroundProps {
  className?: string;
}

const CinematicBackground = ({ className = "" }: CinematicBackgroundProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    {
      url: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73afe?w=1920&q=80', // Atlas Mountains
      alt: 'Atlas Mountains Morocco'
    },
    {
      url: 'https://images.unsplash.com/photo-1542977636-4ae3a504e5ba?w=1920&q=80', // Artisan workshop
      alt: 'Traditional Moroccan pottery workshop'
    },
    {
      url: 'https://images.unsplash.com/photo-1544737151-8e4de8b6e511?w=1920&q=80', // Finished ceramics
      alt: 'Beautiful Moroccan ceramics'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </div>
      ))}
      
      {/* Additional cinematic vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30"></div>
    </div>
  );
};

export default CinematicBackground;