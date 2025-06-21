
import React, { useState, useEffect } from 'react';
import PerleAtlasLogo from './PerleAtlasLogo';

interface LogoLoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

const LogoLoadingAnimation: React.FC<LogoLoadingAnimationProps> = ({ 
  onComplete,
  duration = 4000 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-clay-800 flex items-center justify-center">
      <div className="text-center">
        <PerleAtlasLogo 
          size="large" 
          variant="light" 
          animated={true}
          className="mb-6"
        />
        <div className="w-64 h-1 bg-clay-600 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full animate-pulse"></div>
        </div>
        <p className="text-amber-400 font-serif mt-4 animate-fade-in">
          Chargement de votre expérience de beauté...
        </p>
      </div>
    </div>
  );
};

export default LogoLoadingAnimation;
