
import React from 'react';

interface PerleAtlasNewLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'header';
}

const PerleAtlasNewLogo = ({ 
  className = '', 
  size = 'md',
  variant = 'full'
}: PerleAtlasNewLogoProps) => {
  // Size mapping for responsive logo sizing
  const sizeClasses = {
    sm: 'w-16 md:w-20',
    md: 'w-20 md:w-24 lg:w-28',
    lg: 'w-24 md:w-28 lg:w-32',
    xl: 'w-28 md:w-32 lg:w-36'
  };

  return (
    <div 
      className={`inline-block ${sizeClasses[size]} ${className}`}
      style={{
        width: 'clamp(120px, 15vw, 240px)',
        maxWidth: '100%',
        height: 'auto'
      }}
    >
      <svg 
        viewBox="0 0 512 512" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ backgroundColor: 'transparent' }}
      >
        {/* Atlas Mountains silhouette */}
        <g fill="none" stroke="#B8860B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
          {/* Mountain peaks based on the uploaded logo design */}
          <path d="M50 350 L120 250 L180 300 L240 200 L300 280 L360 180 L420 260 L480 220 L520 300" />
          <path d="M80 370 L140 280 L200 320 L260 240 L320 300 L380 220 L440 280 L500 250" />
          <path d="M110 380 L170 300 L230 340 L290 260 L350 320 L410 240 L470 300" />
        </g>
        
        {/* Mountain fills with golden gradient */}
        <defs>
          <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>
        </defs>
        
        {/* Filled mountain shapes */}
        <path d="M50 350 L120 250 L180 300 L240 200 L300 280 L360 180 L420 260 L480 220 L520 300 L520 400 L50 400 Z" 
              fill="url(#mountainGradient)" opacity="0.8" />
        
        {/* Brand text */}
        <text 
          x="256" 
          y="450" 
          textAnchor="middle" 
          fontSize="36" 
          fontFamily="serif" 
          fontWeight="600"
          fill="#B8860B"
          letterSpacing="2px"
        >
          PERLE DE L'ATLAS
        </text>
      </svg>
    </div>
  );
};

export default PerleAtlasNewLogo;
