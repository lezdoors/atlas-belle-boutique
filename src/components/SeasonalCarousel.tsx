
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  poetic: string;
  season: string;
}

interface SeasonalCarouselProps {
  onScrollToProducts: () => void;
}

const carouselData: CarouselSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1920&q=80",
    title: "Printemps",
    subtitle: "Rituel de Renouveau",
    poetic: "Au printemps, la rose ouvre la peau au renouveau.",
    season: "spring"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80",
    title: "Été",
    subtitle: "Rituel d'Éclat",
    poetic: "L'été dorée révèle la lumière cachée de votre beauté.",
    season: "summer"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
    title: "Automne",
    subtitle: "Rituel de Sagesse",
    poetic: "L'automne murmure les secrets ancestraux de l'argan.",
    season: "autumn"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80",
    title: "Hiver",
    subtitle: "Rituel de Protection",
    poetic: "L'hiver enveloppe la peau d'une douceur millénaire.",
    season: "winter"
  }
];

const SeasonalCarousel = ({ onScrollToProducts }: SeasonalCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

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
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Ken Burns Effect */}
            <div 
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[20000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                filter: 'brightness(0.7) sepia(0.2) saturate(1.1)'
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl mx-auto">
                <div className={`transition-all duration-1000 ease-out ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`} style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}>
                  
                  {/* Season Badge */}
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6">
                    <span className="text-sm font-medium text-pearl-100 tracking-wide font-serif">
                      {slide.title} • {slide.subtitle}
                    </span>
                  </div>

                  {/* Poetic Line */}
                  <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-8 drop-shadow-2xl italic">
                    {slide.poetic}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Desktop only */}
        <div className="hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-0 rounded-full h-12 w-12 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
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
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA Buttons at Bottom Center */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 px-4">
        <Button 
          size="lg" 
          onClick={onScrollToProducts}
          className="copper-gradient text-white px-8 py-4 text-lg font-medium rounded-full hover-scale luxury-shadow border-0 font-serif tracking-wide min-h-[56px] w-full sm:w-auto transition-all duration-300 hover:shadow-2xl"
        >
          Découvrir nos Trésors
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white/90 backdrop-blur-md text-clay-700 border-2 border-white/80 px-8 py-4 text-lg font-medium rounded-full hover:bg-white hover:border-white hover:shadow-xl transition-all duration-300 font-serif tracking-wide min-h-[56px] w-full sm:w-auto"
        >
          Notre Héritage
        </Button>
      </div>
    </div>
  );
};

export default SeasonalCarousel;
