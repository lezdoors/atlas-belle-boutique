
import React from 'react';

interface PerleAtlasElegantLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'header';
}

const PerleAtlasElegantLogo = ({ 
  className = '', 
  size = 'md',
  variant = 'full'
}: PerleAtlasElegantLogoProps) => {
  // Size mapping for responsive logo sizing
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-20 w-auto'
  };

  const isCompact = variant === 'compact' || variant === 'header';

  return (
    <svg 
      viewBox="0 0 280 120" 
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Mountain gradient - warm gold tones */}
        <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1C660" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        
        {/* Pearl gradient */}
        <radialGradient id="pearlGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="50%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#D4AF37" opacity="0.6" />
        </radialGradient>
        
        {/* Text gradient */}
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      
      {/* Atlas Mountains silhouette - elegant and stylized */}
      <g>
        {/* Background mountain layer */}
        <path 
          d="M20 45 L35 38 L50 42 L65 30 L80 35 L95 25 L110 30 L125 20 L140 25 L155 15 L170 20 L185 12 L200 16 L215 22 L230 18 L245 24 L260 20 L260 55 L20 55 Z"
          fill="url(#mountainGrad)"
          opacity="0.7"
        />
        
        {/* Main mountain peaks */}
        <path 
          d="M30 50 L45 43 L60 47 L75 35 L90 40 L105 30 L120 35 L135 25 L150 30 L165 20 L180 25 L195 17 L210 21 L225 27 L240 23 L255 29 L255 55 L30 55 Z"
          fill="url(#mountainGrad)"
        />
        
        {/* Central peak highlight */}
        <path 
          d="M150 30 L165 20 L180 25 L175 30 L165 23 L155 28 Z"
          fill="#F1C660"
          opacity="0.9"
        />
      </g>
      
      {/* The Pearl/Sun - positioned at the central peak */}
      <g>
        {/* Pearl shadow */}
        <ellipse cx="165" cy="22" rx="5" ry="4" fill="#B8860B" opacity="0.3" />
        
        {/* Main pearl */}
        <circle cx="165" cy="21" r="4.5" fill="url(#pearlGrad)" />
        
        {/* Pearl highlights */}
        <circle cx="163" cy="19" r="1.5" fill="#FFF8DC" opacity="0.9" />
        <circle cx="164" cy="20" r="0.8" fill="#FFFFFF" opacity="0.7" />
        
        {/* Subtle rays emanating from pearl */}
        <g stroke="#F1C660" strokeWidth="0.5" opacity="0.6">
          <line x1="165" y1="12" x2="165" y2="8" />
          <line x1="173" y1="16" x2="176" y2="13" />
          <line x1="177" y1="21" x2="180" y2="21" />
          <line x1="173" y1="26" x2="176" y2="29" />
          <line x1="157" y1="26" x2="154" y2="29" />
          <line x1="153" y1="21" x2="150" y2="21" />
          <line x1="157" y1="16" x2="154" y2="13" />
        </g>
      </g>
      
      {/* Brand text - elegant serif typography */}
      <text 
        x="140" 
        y="75" 
        textAnchor="middle" 
        fontSize="18" 
        fontFamily="Playfair Display, serif" 
        fontWeight="600"
        fill="url(#textGrad)"
        letterSpacing="1px"
      >
        Perle d'Atlas
      </text>
      
      {/* Elegant decorative line */}
      <line 
        x1="80" 
        y1="82" 
        x2="200" 
        y2="82" 
        stroke="url(#textGrad)" 
        strokeWidth="0.8"
        opacity="0.8"
      />
      
      {/* Decorative elements */}
      <circle cx="75" cy="82" r="1.5" fill="#D4AF37" opacity="0.8" />
      <circle cx="205" cy="82" r="1.5" fill="#D4AF37" opacity="0.8" />
      
      {/* Tagline - only for non-compact versions */}
      {!isCompact && (
        <text 
          x="140" 
          y="96" 
          textAnchor="middle" 
          fontSize="10" 
          fontFamily="Cormorant Garamond, serif" 
          fontStyle="italic"
          fill="#8B6914"
          letterSpacing="0.5px"
          opacity="0.8"
        >
          La beauté ancestrale du Maroc
        </text>
      )}
      
      {/* Additional elegance for larger sizes */}
      {(size === 'lg' || size === 'xl') && !isCompact && (
        <>
          {/* Ornamental borders */}
          <rect 
            x="35" 
            y="65" 
            width="210" 
            height="40" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="0.5"
            rx="2"
            opacity="0.4"
          />
          
          {/* Corner flourishes */}
          <g fill="#D4AF37" opacity="0.6">
            <circle cx="40" cy="70" r="1" />
            <circle cx="240" cy="70" r="1" />
            <circle cx="40" cy="100" r="1" />
            <circle cx="240" cy="100" r="1" />
          </g>
        </>
      )}
    </svg>
  );
};

export default PerleAtlasElegantLogo;
