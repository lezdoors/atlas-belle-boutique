import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EnhancedMobileCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  enableLazyLoading?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const EnhancedMobileCarousel: React.FC<EnhancedMobileCarouselProps> = ({
  images,
  alt,
  className = '',
  enableLazyLoading = true,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 4000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const minSwipeDistance = 50;
  const maxSwipeVelocity = 0.5;

  // Enhanced touch handling for iOS Safari
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    
    // Stop auto-play during interaction
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    // Prevent default scroll behavior on mobile
    if (Math.abs(e.targetTouches[0].clientX - (touchStart || 0)) > 10) {
      e.preventDefault();
    }
    setTouchEnd(e.targetTouches[0].clientX);
  }, [touchStart]);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }

    setIsDragging(false);
    
    // Restart auto-play after interaction
    if (autoPlay) {
      startAutoPlay();
    }
  }, [touchStart, touchEnd, currentIndex, images.length, autoPlay]);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlay && images.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, autoPlayInterval);
    }
  }, [autoPlay, images.length, autoPlayInterval]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);

  // Lazy loading for performance
  useEffect(() => {
    if (enableLazyLoading) {
      const imagesToLoad = new Set<number>();
      
      // Load current, next, and previous images
      imagesToLoad.add(currentIndex);
      if (currentIndex > 0) imagesToLoad.add(currentIndex - 1);
      if (currentIndex < images.length - 1) imagesToLoad.add(currentIndex + 1);
      
      imagesToLoad.forEach(index => {
        if (!loadedImages.has(index)) {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(index));
            if (index === 0) setIsLoading(false);
          };
          img.src = images[index];
        }
      });
    } else {
      // Load all images immediately if lazy loading is disabled
      const imagePromises = images.map((src, index) => {
        return new Promise<number>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(index);
          img.onerror = () => resolve(index);
          img.src = src;
        });
      });
      
      Promise.all(imagePromises).then((indices) => {
        setLoadedImages(new Set(indices));
        setIsLoading(false);
      });
    }
  }, [currentIndex, images, enableLazyLoading, loadedImages]);

  const goToPrevious = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
  }, [images.length]);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
  }, [images.length]);

  const goToSlide = useCallback((index: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex(index);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className={`relative h-full flex items-center justify-center bg-stone-100 ${className}`}>
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
      </div>
    );
  }

  return (
    <div className={`relative h-full group ${className}`}>
      <div
        ref={carouselRef}
        className="relative overflow-hidden h-full rounded-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        <div
          className={`flex transition-transform duration-300 ease-out h-full ${
            isDragging ? 'transition-none' : ''
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {loadedImages.has(index) ? (
                <img
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={enableLazyLoading ? 'lazy' : 'eager'}
                  onError={(e) => {
                    console.error('Image failed to load:', image);
                    e.currentTarget.src = '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png';
                  }}
                />
              ) : (
                <div className="w-full h-full bg-stone-100 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-stone-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Buttons - Larger touch targets for mobile */}
        {showArrows && images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full h-12 w-12 md:h-10 md:w-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 touch-target"
              onClick={goToPrevious}
              type="button"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 md:h-5 md:w-5 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full h-12 w-12 md:h-10 md:w-10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 touch-target"
              onClick={goToNext}
              type="button"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 md:h-5 md:w-5 text-white" />
            </Button>
          </>
        )}

        {/* Enhanced Dot Indicators */}
        {showDots && images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`transition-all duration-300 touch-target ${
                  index === currentIndex 
                    ? 'w-6 h-3 bg-white rounded-full' 
                    : 'w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full'
                }`}
                onClick={(e) => goToSlide(index, e)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image counter for better UX */}
        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white text-sm px-2 py-1 rounded-full z-20">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default EnhancedMobileCarousel;