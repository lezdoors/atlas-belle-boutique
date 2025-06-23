
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume, VolumeOff } from 'lucide-react';

interface VideoControlsProps {
  className?: string;
}

const VideoControls = ({ className = '' }: VideoControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show controls after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlayPause = () => {
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex gap-3 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    } ${className}`}>
      {/* Play/Pause Button */}
      <Button
        onClick={togglePlayPause}
        variant="ghost"
        size="icon"
        className="bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all duration-300 rounded-full w-12 h-12 group"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
        ) : (
          <Play className="h-5 w-5 ml-0.5 transition-transform duration-200 group-hover:scale-110" />
        )}
      </Button>

      {/* Mute/Unmute Button */}
      <Button
        onClick={toggleMute}
        variant="ghost"
        size="icon"
        className="bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all duration-300 rounded-full w-12 h-12 group"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeOff className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
        ) : (
          <Volume className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
        )}
      </Button>
    </div>
  );
};

export default VideoControls;
