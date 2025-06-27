
import React, { useState } from 'react';

interface PerleAtlasOfficialLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'header';
  animated?: boolean;
}

const PerleAtlasOfficialLogo = ({ 
  className = '', 
  size = 'md',
  variant = 'full',
  animated = false
}: PerleAtlasOfficialLogoProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Enhanced size mapping for better scaling
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-20 w-auto',
    xl: 'h-24 w-auto'
  };

  return (
    <div className={`${animated ? 'animate-fade-in' : ''} ${className}`}>
      <img 
        src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/perle-atlas-logo.png"
        alt="Perle de l'Atlas - Cosmétiques de Luxe Marocains"
        className={`${sizeClasses[size]} object-contain transition-all duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${animated ? 'animate-luxury-glow' : ''}`}
        style={{ 
          imageRendering: 'crisp-edges',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
        onLoad={() => setImageLoaded(true)}
        loading="eager"
      />
    </div>
  );
};

export default PerleAtlasOfficialLogo;
