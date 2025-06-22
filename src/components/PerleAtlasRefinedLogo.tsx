
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
    sm: 'h-12 w-auto',
    md: 'h-16 w-auto',
    lg: 'h-20 w-auto',
    xl: 'h-24 w-auto'
  };

  const logoWidth = variant === 'compact' || variant === 'header' ? 240 : 320;
  const logoHeight = variant === 'compact' || variant === 'header' ? 80 : 120;

  return (
    <svg 
      viewBox={`0 0 ${logoWidth} ${logoHeight}`}
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Elegant gold gradient */}
        <linearGradient id="elegantGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="30%" stopColor="#F4C430" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        
        {/* Pearl gradient */}
        <radialGradient id="pearlShine" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFEF7" />
          <stop offset="50%" stopColor="#F8F6F0" />
          <stop offset="100%" stopColor="#E8E4D6" />
        </radialGradient>
        
        {/* Text gradient */}
        <linearGradient id="textElegant" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
        
        {/* Luxury background */}
        <radialGradient id="luxuryBg" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#E6E6FA" />
        </radialGradient>
      </defs>
      
      {/* Background */}
      {withBackground && (
        <rect 
          width={logoWidth} 
          height={logoHeight} 
          fill="url(#luxuryBg)" 
          rx="4" 
        />
      )}
      
      {/* Atlas Mountains - Simplified elegant silhouette */}
      <g>
        {/* Main mountain range */}
        <path 
          d="M20 45 L35 35 L50 40 L70 25 L90 30 L110 20 L130 25 L150 15 L170 20 L190 12 L210 18 L220 45 L20 45 Z"
          fill="url(#elegantGold)"
          opacity="0.8"
        />
        
        {/* Central peak where pearl sits */}
        <path 
          d="M130 25 L150 15 L170 20 L165 22 L150 17 L140 22 Z"
          fill="#FFD700"
        />
      </g>
      
      {/* The Pearl */}
      <g>
        {/* Pearl shadow */}
        <ellipse cx="150" cy="17" rx="3" ry="2.5" fill="#B8860B" opacity="0.3" />
        
        {/* Main pearl */}
        <circle cx="150" cy="16" r="2.5" fill="url(#pearlShine)" />
        
        {/* Pearl highlight */}
        <circle cx="149" cy="15" r="0.8" fill="#FFFFFF" opacity="0.9" />
      </g>
      
      {/* Brand text */}
      <text 
        x={logoWidth / 2} 
        y="58" 
        textAnchor="middle" 
        fontSize={variant === 'header' ? "14" : "16"} 
        fontFamily="'Playfair Display', serif" 
        fontWeight="600"
        fill="url(#textElegant)"
        letterSpacing="0.5px"
      >
        Perle de l'Atlas
      </text>
      
      {/* Elegant underline */}
      <line 
        x1={logoWidth / 2 - 50} 
        y1="62" 
        x2={logoWidth / 2 + 50} 
        y2="62" 
        stroke="url(#elegantGold)" 
        strokeWidth="0.5"
        opacity="0.8"
      />
      
      {/* Decorative elements */}
      <circle cx={logoWidth / 2 - 55} cy="62" r="0.8" fill="url(#elegantGold)" opacity="0.8" />
      <circle cx={logoWidth / 2 + 55} cy="62" r="0.8" fill="url(#elegantGold)" opacity="0.8" />
      
      {/* Subtitle only for full variant */}
      {variant === 'full' && (
        <text 
          x={logoWidth / 2} 
          y="75" 
          textAnchor="middle" 
          fontSize="9" 
          fontFamily="'Playfair Display', serif" 
          fontStyle="italic"
          fill="url(#textElegant)"
          opacity="0.8"
          letterSpacing="0.3px"
        >
          Les Trésors Naturels du Maroc
        </text>
      )}
    </svg>
  );
};

export default PerleAtlasRefinedLogo;
