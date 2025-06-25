
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SwipeableGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

const SwipeableGallery: React.FC<SwipeableGalleryProps> = ({ 
  images, 
  alt, 
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1); // Loop to last image
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop to first image
    }
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className={`relative h-full ${className}`}>
      <div
        ref={galleryRef}
        className="relative overflow-hidden h-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              onError={(e) => {
                console.error('Image failed to load:', image);
                e.currentTarget.src = '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png';
              }}
            />
          ))}
        </div>

        {/* Navigation Buttons - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full h-8 w-8 z-30 shadow-lg pointer-events-auto"
              onClick={goToPrevious}
              type="button"
            >
              <ChevronLeft className="h-4 w-4 text-clay-700" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full h-8 w-8 z-30 shadow-lg pointer-events-auto"
              onClick={goToNext}
              type="button"
            >
              <ChevronRight className="h-4 w-4 text-clay-700" />
            </Button>
          </>
        )}

        {/* Indicators - Only show if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto ${
                  index === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                onClick={(e) => goToSlide(index, e)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SwipeableGallery;
