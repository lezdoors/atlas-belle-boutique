
import React from 'react';

interface LogoAnimationsProps {
  animated: boolean;
}

const LogoAnimations: React.FC<LogoAnimationsProps> = ({ animated }) => {
  if (!animated) return null;

  return (
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
  );
};

export default LogoAnimations;
