
import React from 'react';

interface LogoMountainsProps {
  goldColor: string;
  animated: boolean;
}

const LogoMountains: React.FC<LogoMountainsProps> = ({ goldColor, animated }) => {
  return (
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
  );
};

export default LogoMountains;
