
import React from 'react';

interface PerleAtlasLuxuryLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact';
  withBackground?: boolean;
}

const PerleAtlasLuxuryLogo = ({ 
  className = '', 
  size = 'md',
  variant = 'full',
  withBackground = true
}: PerleAtlasLuxuryLogoProps) => {
  const sizeClasses = {
    sm: 'h-16 w-auto',
    md: 'h-24 w-auto',
    lg: 'h-32 w-auto',
    xl: 'h-40 w-auto'
  };

  const logoWidth = variant === 'compact' ? 280 : 320;
  const logoHeight = variant === 'compact' ? 120 : 140;

  return (
    <svg 
      viewBox={`0 0 ${logoWidth} ${logoHeight}`}
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Rich plum background gradient */}
        <radialGradient id="backgroundGrad" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#4A1A3D" />
          <stop offset="50%" stopColor="#5D2247" />
          <stop offset="100%" stopColor="#2E1329" />
        </radialGradient>
        
        {/* Golden mountain gradient */}
        <linearGradient id="mountainGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="30%" stopColor="#F4C430" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        
        {/* Pearl gradient */}
        <radialGradient id="pearlGrad" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFEF7" />
          <stop offset="40%" stopColor="#F8F6F0" />
          <stop offset="80%" stopColor="#E8E4D6" />
          <stop offset="100%" stopColor="#DAA520" opacity="0.3" />
        </radialGradient>
        
        {/* Text gradient */}
        <linearGradient id="textGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#F4C430" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        
        {/* Subtle text gradient for subtitle */}
        <linearGradient id="subtitleGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E6C47A" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      
      {/* Rich plum background */}
      {withBackground && (
        <rect 
          width={logoWidth} 
          height={logoHeight} 
          fill="url(#backgroundGrad)" 
          rx="8" 
        />
      )}
      
      {/* Atlas Mountains - Elegant peaked silhouette */}
      <g>
        {/* Background mountain layer for depth */}
        <path 
          d="M30 55 L45 45 L60 50 L75 35 L90 40 L105 30 L120 35 L135 25 L150 30 L165 20 L180 25 L195 18 L210 23 L225 28 L240 33 L255 30 L270 35 L285 40 L290 55 L30 55 Z"
          fill="url(#mountainGold)"
          opacity="0.6"
        />
        
        {/* Main mountain peaks */}
        <path 
          d="M40 55 L55 45 L70 50 L85 35 L100 40 L115 30 L130 35 L145 25 L160 30 L175 20 L190 25 L205 18 L220 23 L235 28 L250 25 L265 30 L280 35 L280 55 L40 55 Z"
          fill="url(#mountainGold)"
          stroke="#B8860B"
          strokeWidth="0.5"
        />
        
        {/* Central peak highlight where pearl rests */}
        <path 
          d="M160 30 L175 20 L190 25 L185 28 L175 22 L170 27 Z"
          fill="#FFD700"
          opacity="0.9"
        />
      </g>
      
      {/* The Pearl - Resting in central mountain fold */}
      <g>
        {/* Pearl shadow */}
        <ellipse cx="175" cy="23" rx="4.5" ry="3.5" fill="#B8860B" opacity="0.4" />
        
        {/* Main pearl body */}
        <circle cx="175" cy="22" r="4" fill="url(#pearlGrad)" />
        
        {/* Pearl highlights */}
        <circle cx="173.5" cy="20.5" r="1.2" fill="#FFFFFF" opacity="0.9" />
        <circle cx="176" cy="23" r="0.6" fill="#FFFFFF" opacity="0.7" />
      </g>
      
      {/* Decorative flourishes */}
      <g opacity="0.8">
        {/* Left ornament */}
        <path 
          d="M55 42 Q60 40 62 45 Q60 50 55 48 Q52 45 55 42 Z"
          fill="url(#mountainGold)"
        />
        <circle cx="57" cy="45" r="0.8" fill="#FFD700" />
        
        {/* Right ornament */}
        <path 
          d="M265 32 Q270 30 272 35 Q270 40 265 38 Q262 35 265 32 Z"
          fill="url(#mountainGold)"
        />
        <circle cx="267" cy="35" r="0.8" fill="#FFD700" />
      </g>
      
      {/* Brand text "Perle de l'Atlas" */}
      <text 
        x={logoWidth / 2} 
        y="75" 
        textAnchor="middle" 
        fontSize="18" 
        fontFamily="'Playfair Display', serif" 
        fontWeight="600"
        fill="url(#textGold)"
        letterSpacing="0.5px"
      >
        Perle de l'Atlas
      </text>
      
      {/* Elegant underline with decorative elements */}
      <g>
        <line 
          x1="90" 
          y1="80" 
          x2="230" 
          y2="80" 
          stroke="url(#textGold)" 
          strokeWidth="0.8"
          opacity="0.9"
        />
        <circle cx="85" cy="80" r="1.2" fill="url(#textGold)" opacity="0.9" />
        <circle cx="235" cy="80" r="1.2" fill="url(#textGold)" opacity="0.9" />
      </g>
      
      {/* Subtitle "Les Trésors Naturels du Maroc" */}
      {variant === 'full' && (
        <text 
          x={logoWidth / 2} 
          y="95" 
          textAnchor="middle" 
          fontSize="10" 
          fontFamily="'Playfair Display', serif" 
          fontStyle="italic"
          fill="url(#subtitleGold)"
          letterSpacing="0.3px"
          opacity="0.9"
        >
          Les Trésors Naturels du Maroc
        </text>
      )}
      
      {/* Additional decorative elements for luxury feel */}
      <g opacity="0.6">
        {/* Corner flourishes */}
        <path 
          d="M45 35 Q50 32 52 37 Q47 42 45 37 Z"
          fill="url(#mountainGold)"
        />
        <path 
          d="M275 27 Q280 24 282 29 Q277 34 275 29 Z"
          fill="url(#mountainGold)"
        />
      </g>
      
      {/* Subtle moroccan pattern elements */}
      <g opacity="0.3">
        <circle cx="70" cy="40" r="0.5" fill="#FFD700" />
        <circle cx="250" cy="32" r="0.5" fill="#FFD700" />
        <circle cx="110" cy="32" r="0.5" fill="#FFD700" />
        <circle cx="240" cy="40" r="0.5" fill="#FFD700" />
      </g>
    </svg>
  );
};

export default PerleAtlasLuxuryLogo;
