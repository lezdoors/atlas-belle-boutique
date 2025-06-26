
import React, { useState, useEffect } from 'react';

interface CustomLoaderProps {
  onComplete?: () => void;
  duration?: number;
  isVisible?: boolean;
}

const CustomLoader: React.FC<CustomLoaderProps> = ({ 
  onComplete,
  duration = 3000,
  isVisible = true
}) => {
  const [opacity, setOpacity] = useState(0);
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (!isVisible) {
      // Fade out
      setOpacity(0);
      const timer = setTimeout(() => {
        setShouldRender(false);
        onComplete?.();
      }, 500);
      return () => clearTimeout(timer);
    }

    // Fade in the loader
    const fadeInTimer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    // Auto-hide after duration
    const hideTimer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setShouldRender(false);
        onComplete?.();
      }, 500);
    }, duration);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(hideTimer);
    };
  }, [isVisible, onComplete, duration]);

  if (!shouldRender) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-pearl-50 via-white to-amber-50/30 flex items-center justify-center"
      style={{ 
        opacity,
        transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="text-center">
        {/* Logo with shimmer effect */}
        <div className="relative mb-8">
          <div 
            className="absolute inset-0 rounded-full opacity-30 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(184, 134, 11, 0.2) 0%, transparent 70%)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
          
          {/* Main logo with shimmer overlay */}
          <div className="relative">
            <img 
              src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Logo-1.png"
              alt="Perle de l'Atlas"
              className="h-24 w-auto mx-auto filter drop-shadow-lg relative z-10"
              style={{
                animation: 'logoFloat 3s ease-in-out infinite'
              }}
            />
            
            {/* Shimmer overlay */}
            <div 
              className="absolute inset-0 rounded-full opacity-0"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.6) 50%, transparent 70%)',
                animation: 'shimmer 3s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Elegant loading text */}
        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-clay-700 tracking-wide">
            Perle de l'Atlas
          </h2>
          <p className="font-light text-clay-500 text-sm tracking-widest uppercase">
            Chargement en cours...
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div 
            className="w-2 h-2 bg-amber-400 rounded-full"
            style={{ animation: 'dotPulse 1.5s ease-in-out infinite' }}
          />
          <div 
            className="w-2 h-2 bg-copper-400 rounded-full"
            style={{ animation: 'dotPulse 1.5s ease-in-out infinite 0.2s' }}
          />
          <div 
            className="w-2 h-2 bg-pearl-400 rounded-full"
            style={{ animation: 'dotPulse 1.5s ease-in-out infinite 0.4s' }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes shimmer {
          0% { opacity: 0; transform: translateX(-100%) rotate(45deg); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100%) rotate(45deg); }
        }
        
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CustomLoader;
