
import React, { useState, useEffect } from 'react';
import PerleAtlasOfficialLogo from './PerleAtlasOfficialLogo';

interface AnimatedLogoLoaderProps {
  isVisible: boolean;
  onComplete?: () => void;
  className?: string;
}

const AnimatedLogoLoader: React.FC<AnimatedLogoLoaderProps> = ({ 
  isVisible, 
  onComplete,
  className = ''
}) => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [shouldShow, setShouldShow] = useState(isVisible);

  useEffect(() => {
    if (!isVisible) {
      setShouldShow(false);
      return;
    }

    setShouldShow(true);
    
    // Phase 1: Logo appears with fade-in
    const phase1Timer = setTimeout(() => {
      setAnimationPhase(1);
    }, 300);

    // Phase 2: Gold shimmer effect
    const phase2Timer = setTimeout(() => {
      setAnimationPhase(2);
    }, 800);

    // Phase 3: Subtle floating animation
    const phase3Timer = setTimeout(() => {
      setAnimationPhase(3);
    }, 1200);

    // Complete animation
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 2000);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(completeTimer);
    };
  }, [isVisible, onComplete]);

  if (!shouldShow) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-pearl-50/95 to-sand-100/95 backdrop-blur-sm flex items-center justify-center ${className}`}>
      <div className="text-center">
        {/* Animated Logo */}
        <div className={`relative mb-6 transition-all duration-700 ${
          animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${animationPhase >= 3 ? 'animate-logo-float' : ''}`}>
          
          {/* Shimmer overlay effect */}
          {animationPhase >= 2 && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-gold-300/30 to-transparent animate-shimmer"></div>
            </div>
          )}
          
          <PerleAtlasOfficialLogo 
            size="xl" 
            animated={animationPhase >= 1}
            className="relative z-10"
          />
        </div>

        {/* Elegant loading dots */}
        <div className={`flex justify-center space-x-2 transition-all duration-500 ${
          animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-2 h-2 bg-gold-400 rounded-full animate-dot-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-copper-400 rounded-full animate-dot-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 bg-pearl-400 rounded-full animate-dot-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>

        {/* Loading text */}
        <p className={`mt-4 font-serif text-clay-600 text-sm tracking-wide transition-all duration-500 ${
          animationPhase >= 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          Chargement de l'expérience...
        </p>
      </div>
    </div>
  );
};

export default AnimatedLogoLoader;
