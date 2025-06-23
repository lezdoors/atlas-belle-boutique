
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerHeaderProps {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

const BannerHeader = ({ 
  canScrollLeft, 
  canScrollRight, 
  onScrollLeft, 
  onScrollRight 
}: BannerHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-white font-display font-semibold text-lg mb-1">
          Nos Trésors Artisanaux
        </h3>
        <p className="text-white/80 text-sm">
          Découvrez notre sélection premium
        </p>
      </div>
      
      {/* Navigation buttons - hidden on mobile */}
      <div className="hidden md:flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onScrollLeft}
          disabled={!canScrollLeft}
          className="text-white hover:bg-white/20 rounded-full w-10 h-10 disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onScrollRight}
          disabled={!canScrollRight}
          className="text-white hover:bg-white/20 rounded-full w-10 h-10 disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default BannerHeader;
