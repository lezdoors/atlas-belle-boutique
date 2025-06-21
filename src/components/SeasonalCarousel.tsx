
import SeasonalSlide from '@/components/seasonal/SeasonalSlide';
import SeasonalNavigation from '@/components/seasonal/SeasonalNavigation';
import SeasonalCTAButtons from '@/components/seasonal/SeasonalCTAButtons';
import { useSeasonalCarousel } from '@/components/seasonal/useSeasonalCarousel';
import { carouselData } from '@/components/seasonal/types';

interface SeasonalCarouselProps {
  onScrollToProducts: () => void;
}

const SeasonalCarousel = ({ onScrollToProducts }: SeasonalCarouselProps) => {
  const {
    currentSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    goToSlide,
    goToPrevious,
    goToNext
  } = useSeasonalCarousel();

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Carousel Container */}
      <div 
        className="relative w-full h-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {carouselData.map((slide, index) => (
          <SeasonalSlide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
            index={index}
          />
        ))}

        <SeasonalNavigation
          currentSlide={currentSlide}
          onPrevious={goToPrevious}
          onNext={goToNext}
          onGoToSlide={goToSlide}
        />
      </div>

      <SeasonalCTAButtons onScrollToProducts={onScrollToProducts} />
    </div>
  );
};

export default SeasonalCarousel;
