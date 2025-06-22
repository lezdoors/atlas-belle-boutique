
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

  // Using high-quality optimized desert video and fallback image
  const fallbackImage = "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1920&q=80";
  const optimizedVideoUrl = "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/desert-luxury-compressed.mp4";

  useEffect(() => {
    console.log('Hero video component mounted, checking optimized video load');
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        console.log('Optimized video loaded successfully');
        setIsLoading(false);
        onVideoLoaded(true);
        onVideoError(false);
      };
      
      const handleError = (e: Event) => {
        console.error('Video failed to load, using fallback:', e);
        setIsLoading(false);
        onVideoError(true);
        onVideoLoaded(false);
      };

      const handleCanPlay = () => {
        console.log('Optimized video can play');
        setIsLoading(false);
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
        <div className="absolute inset-0 bg-gradient-to-r from-pearl-200 via-pearl-100 to-pearl-200 animate-pulse"></div>
      )}
      
      {/* Optimized video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
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
          console.log('Optimized video can play');
          setIsLoading(false);
          onVideoLoaded(true);
        }}
        onEnded={() => {
          console.log('Video ended - transitioning to carousel');
          setVideoEnded(true);
          onVideoEnded?.(true);
        }}
      >
        {/* Multiple source formats for better compatibility */}
        <source src={optimizedVideoUrl} type="video/mp4" />
        <source src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/desert-luxury-compressed.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* High-quality fallback image that appears after video ends */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          videoEnded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${fallbackImage}')`
        }}
      />
    </div>
  );
};

export default HeroVideoBackground;
