
import { Button } from '@/components/ui/button';

interface SeasonalCTAButtonsProps {
  onScrollToProducts: () => void;
}

const SeasonalCTAButtons = ({ onScrollToProducts }: SeasonalCTAButtonsProps) => {
  return (
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
  );
};

export default SeasonalCTAButtons;
