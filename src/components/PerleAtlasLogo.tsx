
import React from 'react';
import { PerleAtlasLogoProps } from './logo/LogoTypes';
import { getLogoDimensions } from './logo/LogoDimensions';
import { getLogoColors } from './logo/LogoColors';
import LogoGradients from './logo/LogoGradients';
import LogoDecorations from './logo/LogoDecorations';
import LogoMountains from './logo/LogoMountains';
import LogoText from './logo/LogoText';
import LogoAnimations from './logo/LogoAnimations';

const PerleAtlasLogo: React.FC<PerleAtlasLogoProps> = ({ 
  size = 'medium', 
  variant = 'light',
  animated = false,
  className = ''
}) => {
  const { width, height } = getLogoDimensions(size);
  const { goldColor, darkBg } = getLogoColors(variant);
  
  return (
    <div className={`inline-block ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 400 266" 
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? 'animate-fade-in' : ''}
      >
        {/* Dark Background */}
        <rect width="400" height="266" fill={darkBg} rx="8" />
        
        {/* Gradient Definitions */}
        <LogoGradients goldColor={goldColor} />
        
        {/* Decorative Elements */}
        <LogoDecorations goldColor={goldColor} animated={animated} />
        
        {/* Atlas Mountains */}
        <LogoMountains goldColor={goldColor} animated={animated} />
        
        {/* Brand Text and Tagline */}
        <LogoText size={size} goldColor={goldColor} animated={animated} />
        
        {/* Golden Shine Effect (for animation) */}
        <LogoAnimations animated={animated} />
      </svg>
    </div>
  );
};

export default PerleAtlasLogo;
