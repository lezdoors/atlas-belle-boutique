
import React, { useState, useEffect } from 'react';
import PerleAtlasOfficialLogo from './PerleAtlasOfficialLogo';

interface LogoLoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
  showOnMount?: boolean;
}

const LogoLoadingAnimation: React.FC<LogoLoadingAnimationProps> = ({ 
  onComplete,
  duration = 1500,
  showOnMount = false
}) => {
  const [isVisible, setIsVisible] = useState(showOnMount);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!showOnMount) return;

    // Fade in the loading screen
    const fadeInTimer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    // Hide loading screen after duration
    const hideTimer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 300);
    }, duration);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete, duration, showOnMount]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-pearl-50 to-amber-50 flex items-center justify-center">
      <div 
        className="text-center transition-opacity duration-300 ease-in-out"
        style={{ opacity }}
      >
        <div className="mb-4">
          <PerleAtlasOfficialLogo 
            size="xl"
            animated={true}
            className="animate-logo-float"
          />
        </div>
        <p className="font-serif text-clay-600 text-lg tracking-wide">
          Préparation en cours...
        </p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-copper-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-pearl-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LogoLoadingAnimation;
