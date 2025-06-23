
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

  // Using the hand with sand video as requested
  const fallbackImage = "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png";
  const sandVideoUrl = "/lovable-uploads/hand-sand-video.mp4"; // Using the sand video mentioned

  useEffect(() => {
    console.log('Hero video component mounted, loading sand video');
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        console.log('Sand video loaded successfully');
        setIsLoading(false);
        onVideoLoaded(true);
        onVideoError(false);
      };
      
      const handleError = (e: Event) => {
        console.error('Sand video failed to load, using fallback:', e);
        setIsLoading(false);
        onVideoError(true);
        onVideoLoaded(false);
      };

      const handleCanPlay = () => {
        console.log('Sand video can play');
        setIsLoading(false);
        onVideoLoaded(true);
      };

      const handleVideoEnded = () => {
        console.log('Sand video ended - transitioning to carousel');
        setVideoEnded(true);
        onVideoEnded?.(true);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('ended', handleVideoEnded);
      
      // Preload metadata for faster loading
      video.preload = 'metadata';
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
        <div className="absolute inset-0 bg-gradient-to-r from-sand-200 via-sand-100 to-sand-200 animate-pulse"></div>
      )}
      
      {/* Sand video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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
        }}
        onCanPlay={() => {
          console.log('Sand video can play');
          setIsLoading(false);
          onVideoLoaded(true);
        }}
        onEnded={() => {
          console.log('Sand video ended - transitioning to carousel');
          setVideoEnded(true);
          onVideoEnded?.(true);
        }}
      >
        {/* Multiple source formats for better compatibility */}
        <source src={sandVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Desert fallback image with subtle gradient overlay */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          videoEnded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${fallbackImage}')`
        }}
      />

      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
    </div>
  );
};

export default HeroVideoBackground;
