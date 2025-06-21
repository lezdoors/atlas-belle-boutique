
import React from 'react';

interface PerleAtlasLogoProps {
  size?: 'small' | 'medium' | 'large' | 'favicon';
  variant?: 'light' | 'dark' | 'watermark';
  animated?: boolean;
  className?: string;
}

const PerleAtlasLogo: React.FC<PerleAtlasLogoProps> = ({ 
  size = 'medium', 
  variant = 'light',
  animated = false,
  className = ''
}) => {
  const dimensions = {
    favicon: { width: 32, height: 32 },
    small: { width: 120, height: 80 },
    medium: { width: 200, height: 133 },
    large: { width: 400, height: 266 }
  };

  const { width, height } = dimensions[size];
  
  const goldColor = variant === 'watermark' ? 'rgba(184, 134, 11, 0.6)' : '#B8860B';
  const darkBg = variant === 'light' ? '#1a1a1a' : 'transparent';
  
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
        
        {/* Ornate Border */}
        <rect 
          x="10" 
          y="10" 
          width="380" 
          height="246" 
          fill="none" 
          stroke={goldColor} 
          strokeWidth="2"
          rx="4"
        />
        
        {/* Corner Decorative Flourishes */}
        <g fill={goldColor} opacity={animated ? '0' : '1'}>
          {/* Top Left Corner */}
          <path d="M20 20 Q30 20 35 25 Q40 30 35 35 Q30 40 20 40 Q25 35 25 30 Q25 25 20 20 Z">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.5s" fill="freeze" />}
          </path>
          <circle cx="22" cy="30" r="2">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.7s" fill="freeze" />}
          </circle>
          
          {/* Top Right Corner */}
          <path d="M380 20 Q370 20 365 25 Q360 30 365 35 Q370 40 380 40 Q375 35 375 30 Q375 25 380 20 Z">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.6s" fill="freeze" />}
          </path>
          <circle cx="378" cy="30" r="2">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.8s" fill="freeze" />}
          </circle>
          
          {/* Bottom Left Corner */}
          <path d="M20 246 Q30 246 35 241 Q40 236 35 231 Q30 226 20 226 Q25 231 25 236 Q25 241 20 246 Z">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.9s" fill="freeze" />}
          </path>
          
          {/* Bottom Right Corner */}
          <path d="M380 246 Q370 246 365 241 Q360 236 365 231 Q370 226 380 226 Q375 231 375 236 Q375 241 380 246 Z">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="1.0s" fill="freeze" />}
          </path>
        </g>
        
        {/* Decorative Side Scrollwork */}
        <g fill={goldColor} opacity={animated ? '0' : '1'}>
          {/* Left Side Ornaments */}
          <path d="M15 80 Q25 75 30 85 Q35 95 25 100 Q15 105 10 95 Q5 85 15 80 Z">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="1.1s" fill="freeze" />}
          </path>
          <path d="M15 180 Q25 175 30 185 Q35 195 25 200 Q15 205 10 195 Q5 185 15 180 Z">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="1.2s" fill="freeze" />}
          </path>
          
          {/* Right Side Ornaments */}
          <path d="M385 80 Q375 75 370 85 Q365 95 375 100 Q385 105 390 95 Q395 85 385 80 Z">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="1.1s" fill="freeze" />}
          </path>
          <path d="M385 180 Q375 175 370 185 Q365 195 375 200 Q385 205 390 195 Q395 185 385 180 Z">
            {animated && <animate attributeName="opacity" values="0;1" dur="0.8s" begin="1.2s" fill="freeze" />}
          </path>
        </g>
        
        {/* Atlas Mountains - Multiple Peaks */}
        <g fill={goldColor}>
          {/* Mountain Range Background */}
          <path 
            d="M100 120 L140 60 L180 90 L220 40 L260 75 L300 55 L340 95 L380 85 L380 140 L100 140 Z"
            opacity={animated ? '0' : '0.6'}
          >
            {animated && <animate attributeName="opacity" values="0;0.6" dur="1s" begin="0.3s" fill="freeze" />}
          </path>
          
          {/* Main Mountain Peaks */}
          <path 
            d="M120 130 L160 70 L200 100 L240 50 L280 85 L320 65 L360 105 L360 130 Z"
            opacity={animated ? '0' : '1'}
          >
            {animated && <animate attributeName="opacity" values="0;1" dur="1s" begin="0.4s" fill="freeze" />}
          </path>
          
          {/* Central Peak Highlight */}
          <path 
            d="M200 100 L240 50 L280 85 L260 90 L240 60 L220 95 Z"
            fill="url(#mountainGradient)"
            opacity={animated ? '0' : '1'}
          >
            {animated && <animate attributeName="opacity" values="0;1" dur="1s" begin="0.6s" fill="freeze" />}
          </path>
        </g>
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F1C660" />
            <stop offset="50%" stopColor={goldColor} />
            <stop offset="100%" stopColor="#8B7355" />
          </linearGradient>
          
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F1C660" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor={goldColor} />
          </linearGradient>
        </defs>
        
        {/* Brand Text "Perle d'Atlas" */}
        <text 
          x="200" 
          y="180" 
          textAnchor="middle" 
          fontSize={size === 'favicon' ? '14' : size === 'small' ? '18' : size === 'medium' ? '24' : '36'}
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
        {(size === 'medium' || size === 'large') && (
          <text 
            x="200" 
            y="210" 
            textAnchor="middle" 
            fontSize={size === 'medium' ? '10' : '14'}
            fontFamily="serif" 
            fill={goldColor}
            opacity={animated ? '0' : '0.8'}
          >
            {animated && <animate attributeName="opacity" values="0;0.8" dur="0.8s" begin="1.8s" fill="freeze" />}
            La beauté ancestrale du Maroc
          </text>
        )}
        
        {/* Golden Shine Effect (for animation) */}
        {animated && (
          <path d="M0 0 L50 0 L100 266 L50 266 Z" fill="url(#shineGradient)" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="2s" begin="2s" />
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="-100 0;400 0" 
              dur="2s" 
              begin="2s"
            />
          </path>
        )}
        
        {/* Shine Gradient */}
        <defs>
          <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 215, 0, 0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PerleAtlasLogo;
