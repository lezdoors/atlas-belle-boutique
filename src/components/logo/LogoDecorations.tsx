
import React from 'react';

interface LogoDecorationsProps {
  goldColor: string;
  animated: boolean;
}

const LogoDecorations: React.FC<LogoDecorationsProps> = ({ goldColor, animated }) => {
  return (
    <>
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
    </>
  );
};

export default LogoDecorations;
