
import React, { useState, useEffect } from 'react';

interface VideoLoadingAnimationProps {
  isVisible: boolean;
  onVideoLoad?: () => void;
}

const VideoLoadingAnimation: React.FC<VideoLoadingAnimationProps> = ({ 
  isVisible,
  onVideoLoad
}) => {
  const [shouldShow, setShouldShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldShow(true);
    } else {
      // Add a small delay before hiding to allow for smooth transition
      const timer = setTimeout(() => {
        setShouldShow(false);
        onVideoLoad?.();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onVideoLoad]);

  if (!shouldShow) return null;

  return (
    <div className={`absolute inset-0 z-20 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="text-center">
        {/* Elegant logo with subtle animation */}
        <div className="mb-6 animate-pulse">
          <img 
            src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Logo-1.png"
            alt="Perle de l'Atlas"
            className="h-12 w-auto mx-auto filter drop-shadow-lg"
          />
        </div>
        
        {/* Sophisticated loading indicator */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-copper-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-pearl-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default VideoLoadingAnimation;
