
import { useState, useRef, useEffect } from 'react';

interface HeroVideoBackgroundProps {
  onVideoLoaded: (loaded: boolean) => void;
  onVideoError: (error: boolean) => void;
  onVideoEnded?: (ended: boolean) => void;
}

const HeroVideoBackground = ({ onVideoLoaded, onVideoError, onVideoEnded }: HeroVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showStaticImage, setShowStaticImage] = useState(false);

  // Using elegant Moroccan luxury image from Supabase media bucket
  const fallbackImage = "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/397b8d88-7594-4433-8004-050f047a13b6.png";

  useEffect(() => {
    console.log('Hero video component mounted, checking video load');
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsLoading(false);
        onVideoLoaded(true);
        onVideoError(false);
      };
      
      const handleError = (e: Event) => {
        console.error('Video failed to load:', e);
        setIsLoading(false);
        onVideoError(true);
        onVideoLoaded(false);
        setShowStaticImage(true);
      };

      const handleCanPlay = () => {
        console.log('Video can play');
        setIsLoading(false);
        onVideoLoaded(true);
      };

      const handleVideoEnded = () => {
        console.log('Video ended, transitioning to static image');
        setVideoEnded(true);
        onVideoEnded?.(true);
        setTimeout(() => {
          setShowStaticImage(true);
        }, 500); // Small delay for smooth transition
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('ended', handleVideoEnded);
      
      // Force load attempt
      video.load();
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, [onVideoLoaded, onVideoError, onVideoEnded]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Loading shimmer effect */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-pearl-200 via-pearl-100 to-pearl-200 animate-pulse"></div>
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={fallbackImage}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoEnded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
        onLoadedData={() => {
          console.log('Video onLoadedData event fired');
          setIsLoading(false);
          onVideoLoaded(true);
          onVideoError(false);
        }}
        onError={(e) => {
          console.error('Video onError event fired:', e);
          setIsLoading(false);
          onVideoError(true);
          setShowStaticImage(true);
        }}
        onCanPlay={() => {
          console.log('Video can play');
          setIsLoading(false);
          onVideoLoaded(true);
        }}
        onEnded={() => {
          console.log('Video ended, transitioning to static image');
          setVideoEnded(true);
          onVideoEnded?.(true);
          setTimeout(() => {
            setShowStaticImage(true);
          }, 500);
        }}
      >
        <source src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/73847-549547533.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </source>

      {/* Static image that appears after video ends or on error */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          showStaticImage ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${fallbackImage}')`
        }}
      />
    </div>
  );
};

export default HeroVideoBackground;
