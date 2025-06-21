
import SeasonalSlide from '@/components/seasonal/SeasonalSlide';
import SeasonalNavigation from '@/components/seasonal/SeasonalNavigation';
import SeasonalCTAButtons from '@/components/seasonal/SeasonalCTAButtons';
import { useSeasonalCarousel } from '@/components/seasonal/useSeasonalCarousel';
import { carouselData } from '@/components/seasonal/types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      toast({
        title: "Inscription réussie !",
        description: "Bienvenue dans la famille Perle d'Atlas. Vous recevrez bientôt nos secrets de beauté.",
      });
    }, 1500);
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

      {/* Integrated Email Collection Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 luxury-shadow border border-white/20">
          {!isSubmitted ? (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Gift className="h-5 w-5 text-copper-600" />
                <h3 className="font-display text-lg font-semibold text-clay-800">
                  Offre Spéciale
                </h3>
              </div>
              
              <p className="text-sm text-clay-600 mb-4">
                Inscrivez-vous et recevez 15% de réduction sur votre première commande
              </p>
              
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-clay-400" />
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 rounded-full border-clay-200 focus:border-copper-400 text-sm"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full copper-gradient text-white rounded-full text-sm py-2 h-auto hover-scale"
                >
                  {isLoading ? 'Inscription...' : 'Obtenir ma réduction'}
                </Button>
              </form>
              
              <p className="text-xs text-clay-500">
                Vous pouvez vous désabonner à tout moment.
              </p>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-base text-clay-800 mb-1">
                  Bienvenue !
                </h3>
                <p className="text-sm text-clay-600">
                  Votre code de réduction arrive bientôt par email.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <SeasonalCTAButtons onScrollToProducts={onScrollToProducts} />
    </div>
  );
};

export default SeasonalCarousel;
