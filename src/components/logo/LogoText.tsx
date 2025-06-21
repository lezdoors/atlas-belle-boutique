
import React from 'react';

interface LogoTextProps {
  size: string;
  goldColor: string;
  animated: boolean;
}

const LogoText: React.FC<LogoTextProps> = ({ size, goldColor, animated }) => {
  const getFontSize = () => {
    switch (size) {
      case 'favicon': return '14';
      case 'small': return '18';
      case 'medium': return '24';
      case 'large': return '36';
      default: return '24';
    }
  };

  const getTaglineFontSize = () => {
    return size === 'medium' ? '10' : '14';
  };

  const showTagline = size === 'medium' || size === 'large';

  return (
    <>
      {/* Brand Text "Perle d'Atlas" */}
      <text 
        x="200" 
        y="180" 
        textAnchor="middle" 
        fontSize={getFontSize()}
        fontFamily="serif" 
        fontStyle="italic"
        fontWeight="bold"
        fill="url(#textGradient)"
        opacity={animated ? '0' : '1'}
      >
        {animated && <animate attributeName="opacity" values="0;1" dur="1s" begin="1.3s" fill="freeze" />}
        Perle d'Atlas
      </text>
      
      {/* Decorative Underline */}
      <line 
        x1="140" 
        y1="190" 
        x2="260" 
        y2="190" 
        stroke={goldColor} 
        strokeWidth="1"
        opacity={animated ? '0' : '1'}
      >
        {animated && <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze" />}
      </line>
      
      {/* Small Decorative Dots */}
      <circle cx="135" cy="190" r="2" fill={goldColor} opacity={animated ? '0' : '1'}>
        {animated && <animate attributeName="opacity" values="0;1" dur="0.3s" begin="1.6s" fill="freeze" />}
      </circle>
      <circle cx="265" cy="190" r="2" fill={goldColor} opacity={animated ? '0' : '1'}>
        {animated && <animate attributeName="opacity" values="0;1" dur="0.3s" begin="1.7s" fill="freeze" />}
      </circle>
      
      {/* Tagline (only for larger sizes) */}
      {showTagline && (
        <text 
          x="200" 
          y="210" 
          textAnchor="middle" 
          fontSize={getTaglineFontSize()}
          fontFamily="serif" 
          fill={goldColor}
          opacity={animated ? '0' : '0.8'}
        >
          {animated && <animate attributeName="opacity" values="0;0.8" dur="0.8s" begin="1.8s" fill="freeze" />}
          La beauté ancestrale du Maroc
        </text>
      )}
    </>
  );
};

export default LogoText;
