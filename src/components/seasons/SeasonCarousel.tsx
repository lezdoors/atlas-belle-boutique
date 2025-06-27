
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  name: string;
  price: string;
}

interface Season {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  color: string;
  products: Product[];
}

interface SeasonCarouselProps {
  seasons: Season[];
  currentSeason: number;
  onPrevSeason: () => void;
  onNextSeason: () => void;
  onSetCurrentSeason: (index: number) => void;
  language: 'fr' | 'en';
}

const SeasonCarousel = ({ 
  seasons, 
  currentSeason, 
  onPrevSeason, 
  onNextSeason, 
  onSetCurrentSeason, 
  language 
}: SeasonCarouselProps) => {
  const season = seasons[currentSeason];

  return (
    <div className="lg:hidden mb-16">
      <div className="relative">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden luxury-shadow">
          {/* Season Image */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={season.image} 
              alt={season.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${season.color} opacity-20`}></div>
          </div>

          {/* Season Content */}
          <div className="p-6">
            <h3 className="font-display font-bold text-2xl text-clay-800 mb-2">
              {season.name}
            </h3>
            <h4 className="font-serif text-xl text-copper-600 mb-4">
              {season.title}
            </h4>
            <p className="text-clay-600 leading-relaxed mb-6">
              {season.description}
            </p>

            {/* Featured Products */}
            <div className="space-y-3 mb-6">
              {season.products.map((product, productIndex) => (
                <div key={productIndex} className="flex justify-between items-center">
                  <span className="text-clay-600">{product.name}</span>
                  <span className="font-semibold text-copper-600 text-lg">{product.price}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="w-full copper-gradient text-white rounded-full font-medium tracking-wide hover-scale"
            >
              {language === 'fr' ? 'Découvrir la collection →' : 'Discover collection →'}
            </Button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <Button 
            onClick={onPrevSeason}
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 p-0 border-copper-300 hover:bg-copper-50"
          >
            <ChevronLeft className="h-5 w-5 text-copper-600" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {seasons.map((_, index) => (
              <button
                key={index}
                onClick={() => onSetCurrentSeason(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSeason 
                    ? 'bg-copper-500 scale-125' 
                    : 'bg-copper-200 hover:bg-copper-300'
                }`}
              />
            ))}
          </div>

          <Button 
            onClick={onNextSeason}
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 p-0 border-copper-300 hover:bg-copper-50"
          >
            <ChevronRight className="h-5 w-5 text-copper-600" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeasonCarousel;
