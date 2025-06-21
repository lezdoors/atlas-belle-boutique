
import React, { useState, useEffect } from 'react';

interface LogoLoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

const LogoLoadingAnimation: React.FC<LogoLoadingAnimationProps> = ({ 
  onComplete,
  duration = 0 // Set to 0 to disable loading animation
}) => {
  const [isVisible, setIsVisible] = useState(false); // Changed to false to disable

  useEffect(() => {
    // Immediately call onComplete to skip loading animation
    setIsVisible(false);
    onComplete?.();
  }, [onComplete]);

  // Never render the loading animation
  return null;
};

export default LogoLoadingAnimation;
