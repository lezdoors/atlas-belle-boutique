
import React from 'react';

interface PerleAtlasImprovedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'minimal';
}

const PerleAtlasImprovedLogo = ({ 
  className = '', 
  size = 'md',
  variant = 'light' 
}: PerleAtlasImprovedLogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-20 w-auto'
  };

  const colors = {
    light: {
      mountains: '#D4AF37',
      mountainsSecondary: '#B8860B',
      pearl: '#F5F5DC',
      text: '#5D4037',
      subtitle: '#8D6E63'
    },
    dark: {
      mountains: '#FFD700',
      mountainsSecondary: '#D4AF37',
      pearl: '#FFFFFF',
      text: '#FFFFFF',
      subtitle: '#E0E0E0'
    },
    minimal: {
      mountains: '#8D6E63',
      mountainsSecondary: '#6D4C41',
      pearl: '#BCAAA4',
      text: '#5D4037',
      subtitle: '#8D6E63'
    }
  };

  const currentColors = colors[variant];

  return (
    <svg 
      viewBox="0 0 320 120" 
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Mountain gradient */}
        <linearGradient id={`mountainGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={currentColors.mountains} />
          <stop offset="70%" stopColor={currentColors.mountainsSecondary} />
          <stop offset="100%" stopColor={currentColors.mountainsSecondary} opacity="0.8" />
        </linearGradient>
        
        {/* Pearl gradient */}
        <radialGradient id={`pearlGrad-${variant}`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={currentColors.pearl} />
          <stop offset="70%" stopColor={currentColors.pearl} opacity="0.9" />
          <stop offset="100%" stopColor={currentColors.mountainsSecondary} opacity="0.3" />
        </radialGradient>
        
        {/* Text gradient */}
        <linearGradient id={`textGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={currentColors.text} />
          <stop offset="100%" stopColor={currentColors.mountainsSecondary} />
        </linearGradient>
      </defs>
      
      {/* Atlas Mountains silhouette - more refined and elegant */}
      <g>
        {/* Background mountain layer */}
        <path 
          d="M20 45 L35 35 L50 40 L65 25 L80 30 L95 20 L110 25 L125 15 L140 20 L155 10 L170 15 L185 8 L200 12 L215 18 L230 22 L245 28 L260 25 L275 30 L290 35 L300 40 L300 50 L20 50 Z"
          fill={currentColors.mountainsSecondary}
          opacity="0.6"
        />
        
        {/* Main mountain peaks */}
        <path 
          d="M30 50 L45 40 L60 45 L75 30 L90 35 L105 25 L120 30 L135 20 L150 25 L165 15 L180 20 L195 13 L210 18 L225 23 L240 20 L255 25 L270 30 L285 35 L290 50 L30 50 Z"
          fill={`url(#mountainGrad-${variant})`}
        />
        
        {/* Central peak highlight (where the pearl sits) */}
        <path 
          d="M150 25 L165 15 L180 20 L175 25 L165 18 L155 23 Z"
          fill={currentColors.mountains}
          opacity="0.9"
        />
      </g>
      
      {/* The Pearl - positioned at the central peak */}
      <g>
        {/* Pearl shadow */}
        <ellipse cx="165" cy="17" rx="4" ry="3" fill={currentColors.mountainsSecondary} opacity="0.3" />
        
        {/* Main pearl */}
        <circle cx="165" cy="16" r="3.5" fill={`url(#pearlGrad-${variant})`} />
        
        {/* Pearl highlight */}
        <circle cx="164" cy="15" r="1" fill={currentColors.pearl} opacity="0.8" />
      </g>
      
      {/* Decorative elements */}
      <g opacity="0.7">
        {/* Left ornament */}
        <circle cx="45" cy="35" r="1" fill={currentColors.mountains} />
        <circle cx="42" cy="37" r="0.5" fill={currentColors.mountains} />
        
        {/* Right ornament */}
        <circle cx="275" cy="30" r="1" fill={currentColors.mountains} />
        <circle cx="278" cy="32" r="0.5" fill={currentColors.mountains} />
      </g>
      
      {/* Brand text */}
      <text 
        x="160" 
        y="70" 
        textAnchor="middle" 
        fontSize="16" 
        fontFamily="serif" 
        fontWeight="600"
        fill={`url(#textGrad-${variant})`}
        letterSpacing="0.5px"
      >
        Perle de l'Atlas
      </text>
      
      {/* Elegant underline */}
      <line 
        x1="100" 
        y1="75" 
        x2="220" 
        y2="75" 
        stroke={currentColors.mountains} 
        strokeWidth="0.5"
        opacity="0.8"
      />
      
      {/* Decorative dots */}
      <circle cx="95" cy="75" r="1" fill={currentColors.mountains} opacity="0.8" />
      <circle cx="225" cy="75" r="1" fill={currentColors.mountains} opacity="0.8" />
      
      {/* Subtitle */}
      <text 
        x="160" 
        y="88" 
        textAnchor="middle" 
        fontSize="8" 
        fontFamily="serif" 
        fontStyle="italic"
        fill={currentColors.subtitle}
        letterSpacing="0.3px"
      >
        Luxe Authentique • Du Maroc au Monde
      </text>
      
      {/* Optional tagline for larger sizes */}
      {(size === 'lg' || size === 'xl') && (
        <text 
          x="160" 
          y="100" 
          textAnchor="middle" 
          fontSize="6" 
          fontFamily="sans-serif" 
          fill={currentColors.subtitle}
          opacity="0.8"
          letterSpacing="0.2px"
        >
          La beauté ancestrale du Maroc
        </text>
      )}
    </svg>
  );
};

export default PerleAtlasImprovedLogo;
