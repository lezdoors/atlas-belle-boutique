
import React, { useState, useEffect } from 'react';

interface LogoLoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

const LogoLoadingAnimation: React.FC<LogoLoadingAnimationProps> = ({ 
  onComplete,
  duration = 2000 // Show loading text for 2 seconds
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in the loading text
    const fadeInTimer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    // Show loading text for specified duration, then fade out
    const hideTimer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 500); // Allow fade out animation to complete
    }, duration);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-pearl-50 to-amber-50 flex items-center justify-center">
      <div 
        className="text-center transition-opacity duration-500 ease-in-out"
        style={{ opacity }}
      >
        <div className="mb-6">
          <img 
            src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Logo-1.png"
            alt="Perle de l'Atlas"
            className="h-16 w-auto mx-auto filter drop-shadow-sm"
          />
        </div>
        <p className="font-serif text-clay-600 text-lg tracking-wide">
          Préparation en cours...
        </p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-copper-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-pearl-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoLoadingAnimation;
