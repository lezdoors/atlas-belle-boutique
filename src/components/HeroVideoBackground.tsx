
import { useState, useRef, useEffect } from 'react';

interface HeroVideoBackgroundProps {
  onVideoLoaded: (loaded: boolean) => void;
  onVideoError: (error: boolean) => void;
}

const HeroVideoBackground = ({ onVideoLoaded, onVideoError }: HeroVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      };

      const handleCanPlay = () => {
        console.log('Video can play');
        setIsLoading(false);
        onVideoLoaded(true);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      
      // Set poster image for fallback
      video.poster = 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/hero-poster.jpg';
      
      // Force load attempt
      video.load();
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [onVideoLoaded, onVideoError]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Loading shimmer effect */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-pearl-200 via-pearl-100 to-pearl-200 animate-pulse"></div>
      )}
      
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
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
          console.log('Video can play');
          setIsLoading(false);
          onVideoLoaded(true);
        }}
      >
        <source src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/73847-549547533.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideoBackground;
