
import React from 'react';

interface LogoGradientsProps {
  goldColor: string;
}

const LogoGradients: React.FC<LogoGradientsProps> = ({ goldColor }) => {
  return (
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
      
      <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="50%" stopColor="rgba(255, 215, 0, 0.6)" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
  );
};

export default LogoGradients;
