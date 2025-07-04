
import React from 'react';

interface PerleAtlasRefinedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'header';
  withBackground?: boolean;
}

const PerleAtlasRefinedLogo = ({ 
  className = '', 
  size = 'md',
  variant = 'full',
  withBackground = false
}: PerleAtlasRefinedLogoProps) => {
  const sizeClasses = {
    sm: 'h-10 w-auto',
    md: 'h-12 w-auto md:h-14',
    lg: 'h-16 w-auto md:h-20',
    xl: 'h-20 w-auto md:h-24'
  };

  return (
    <img 
      src="/lovable-uploads/17e659e7-d9cb-4996-9b8d-458208d6b68b.png"
      alt="Perle de l'Atlas - Cosmétiques de Luxe Marocains"
      className={`${sizeClasses[size]} ${className} object-contain`}
      style={{ 
        backgroundColor: 'transparent',
        background: 'transparent'
      }}
    />
  );
};

export default PerleAtlasRefinedLogo;
