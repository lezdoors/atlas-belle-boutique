
import { useState, useRef, useEffect } from 'react';

interface HeroVideoBackgroundProps {
  onVideoLoaded: (loaded: boolean) => void;
  onVideoError: (error: boolean) => void;
}

const HeroVideoBackground = ({ onVideoLoaded, onVideoError }: HeroVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('Hero component mounted, checking video load');
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        onVideoLoaded(true);
        onVideoError(false);
      };
      
      const handleError = (e: Event) => {
        console.error('Video failed to load:', e);
        onVideoError(true);
        onVideoLoaded(false);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleLoadedData);
      
      // Force load attempt
      video.load();
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleLoadedData);
      };
    }
  }, [onVideoLoaded, onVideoError]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover z-0"
      onLoadedData={() => {
        console.log('Video onLoadedData event fired');
        onVideoLoaded(true);
        onVideoError(false);
      }}
      onError={(e) => {
        console.error('Video onError event fired:', e);
        onVideoError(true);
      }}
      onCanPlay={() => {
        console.log('Video can play');
        onVideoLoaded(true);
      }}
    >
      <source src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/videos/perle-datlas-hero.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideoBackground;
