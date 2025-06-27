
import { useState, useRef, useEffect } from 'react';
import AnimatedLogoLoader from './AnimatedLogoLoader';

interface HeroVideoBackgroundProps {
  onVideoLoaded: (loaded: boolean) => void;
  onVideoError: (error: boolean) => void;
  onVideoEnded?: (ended: boolean) => void;
}

const HeroVideoBackground = ({ onVideoLoaded, onVideoError, onVideoEnded }: HeroVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Updated video URL as requested
  const videoUrl = "https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/movies/73847-549547533.mp4";
  
  // High-quality fallback image
  const fallbackImage = "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//puneet-saravanan-W0po8aJGTDU-unsplash.jpg";

  useEffect(() => {
    console.log('Hero video component mounted, loading new video');
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsLoading(false);
        setShowLoader(false);
        onVideoLoaded(true);
        onVideoError(false);
      };
      
      const handleError = (e: Event) => {
        console.error('Video failed to load:', e);
        setIsLoading(false);
        setShowLoader(false);
        setHasError(true);
        onVideoError(true);
        onVideoLoaded(false);
      };

      const handleCanPlay = () => {
        console.log('Video can play');
        setIsLoading(false);
        setShowLoader(false);
        onVideoLoaded(true);
      };

      const handleVideoEnded = () => {
        console.log('Video ended - transitioning to carousel');
        setVideoEnded(true);
        onVideoEnded?.(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('ended', handleVideoEnded);
      
      video.preload = 'auto';
      video.load();
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, [onVideoLoaded, onVideoError, onVideoEnded]);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Animated Logo Loader */}
      <AnimatedLogoLoader 
        isVisible={showLoader && isLoading} 
        onComplete={handleLoaderComplete}
      />
      
      {/* Enhanced Fallback Background */}
      {(hasError || videoEnded) && (
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 opacity-100"
            style={{
              backgroundImage: `url('${fallbackImage}')`,
              filter: 'brightness(0.8) sepia(0.1) saturate(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
          <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
        </div>
      )}
      
      {/* Video Element */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            videoEnded ? 'opacity-0' : 'opacity-100'
          } ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          style={{
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent lg:from-black/60 lg:via-black/30"></div>
    </div>
  );
};

export default HeroVideoBackground;
