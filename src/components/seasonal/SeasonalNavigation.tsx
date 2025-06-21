
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselData } from './types';

interface SeasonalNavigationProps {
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

const SeasonalNavigation = ({ currentSlide, onPrevious, onNext, onGoToSlide }: SeasonalNavigationProps) => {
  return (
    <>
      {/* Navigation Arrows - Desktop only */}
      <div className="hidden md:block">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-0 rounded-full h-12 w-12 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-0 rounded-full h-12 w-12 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default SeasonalNavigation;
