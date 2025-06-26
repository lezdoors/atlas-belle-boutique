
import React, { useState, useEffect } from 'react';

interface LogoLoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
  showOnMount?: boolean;
}

const LogoLoadingAnimation: React.FC<LogoLoadingAnimationProps> = ({ 
  onComplete,
  duration = 1500, // Reduced duration for better UX
  showOnMount = false // Only show when explicitly requested
}) => {
  const [isVisible, setIsVisible] = useState(showOnMount);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!showOnMount) return;

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
      }, 300); // Shorter fade out duration
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
          <img 
            src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Logo-1.png"
            alt="Perle de l'Atlas"
            className="h-16 w-auto mx-auto filter drop-shadow-sm animate-pulse"
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
