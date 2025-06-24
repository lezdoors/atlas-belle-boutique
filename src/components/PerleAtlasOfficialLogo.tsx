
import React from 'react';

interface PerleAtlasOfficialLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'header';
}

const PerleAtlasOfficialLogo = ({ 
  className = '', 
  size = 'md',
  variant = 'full'
}: PerleAtlasOfficialLogoProps) => {
  // Size mapping for responsive logo sizing
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-20 w-auto'
  };

  return (
    <img 
      src="/lovable-uploads/perle-atlas-logo.png"
      alt="Perle de l'Atlas - Cosmétiques de Luxe Marocains"
      className={`${sizeClasses[size]} ${className} object-contain`}
      style={{ 
        backgroundColor: 'transparent',
        background: 'transparent'
      }}
    />
  );
};

export default PerleAtlasOfficialLogo;
