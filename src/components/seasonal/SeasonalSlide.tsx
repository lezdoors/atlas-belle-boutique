
import { CarouselSlide } from './types';

interface SeasonalSlideProps {
  slide: CarouselSlide;
  isActive: boolean;
  index: number;
}

const SeasonalSlide = ({ slide, isActive, index }: SeasonalSlideProps) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
        isActive 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-105'
      }`}
    >
      {/* Background Image with Ken Burns Effect */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[20000ms] ease-linear ${
          isActive ? 'scale-110' : 'scale-100'
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
            isActive 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`} style={{ transitionDelay: isActive ? '500ms' : '0ms' }}>
            
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
  );
};

export default SeasonalSlide;
