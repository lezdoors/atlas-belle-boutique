
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
  const [loadingProgress, setLoadingProgress] = useState(0);

  const fallbackImage = "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png";
  // Updated video URL as requested
  const videoUrl = "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4";

  useEffect(() => {
    console.log('Hero video component mounted, loading high-quality video');
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsLoading(false);
        setLoadingProgress(100);
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
        console.log('Video can play');
        setIsLoading(false);
        onVideoLoaded(true);
      };

      const handleVideoEnded = () => {
        console.log('Video ended - transitioning to carousel');
        setVideoEnded(true);
        onVideoEnded?.(true);
      };

      const handleProgress = () => {
        if (video.buffered.length > 0) {
          const bufferedEnd = video.buffered.end(video.buffered.length - 1);
          const duration = video.duration;
          if (duration > 0) {
            const progress = (bufferedEnd / duration) * 100;
            setLoadingProgress(Math.min(progress, 90)); // Cap at 90% until fully loaded
          }
        }
      };

      const handleLoadStart = () => {
        setLoadingProgress(10);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('ended', handleVideoEnded);
      video.addEventListener('progress', handleProgress);
      video.addEventListener('loadstart', handleLoadStart);
      
      // Enhanced preloading
      video.preload = 'auto';
      video.load();
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('ended', handleVideoEnded);
        video.removeEventListener('progress', handleProgress);
        video.removeEventListener('loadstart', handleLoadStart);
      };
    }
  }, [onVideoLoaded, onVideoError, onVideoEnded]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Enhanced loading state with progress */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-4 border-amber-200/30"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-amber-500 border-t-transparent animate-spin"
                style={{
                  background: `conic-gradient(from 0deg, transparent, transparent ${loadingProgress * 3.6}deg, #f59e0b ${loadingProgress * 3.6}deg)`
                }}
              ></div>
            </div>
            <div className="text-white text-sm font-light">
              Chargement de l'expérience... {Math.round(loadingProgress)}%
            </div>
          </div>
        </div>
      )}
      
      {/* High-quality video element with enhanced attributes */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
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
          setLoadingProgress(100);
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
        onEnded={() => {
          console.log('Video ended - transitioning to carousel');
          setVideoEnded(true);
          onVideoEnded?.(true);
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced fallback image */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          videoEnded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${fallbackImage}')`
        }}
      />

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
    </div>
  );
};

export default HeroVideoBackground;
