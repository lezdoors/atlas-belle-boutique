
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useSelection } from '@/contexts/SelectionContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  priceMAD: number;
  originalPriceMAD?: number;
  image: string;
  rating: number;
  reviews: number;
  badge: { type: 'new' | 'bestseller' | 'limited' | 'discount'; discount?: number };
  description: string;
  region?: string;
}

interface SaveForLaterButtonProps {
  product: Product;
  variant?: 'icon' | 'full';
  size?: 'sm' | 'default' | 'lg' | 'icon';
}

const SaveForLaterButton: React.FC<SaveForLaterButtonProps> = ({ 
  product, 
  variant = 'icon',
  size = 'icon' 
}) => {
  const { addToSelection, removeFromSelection, isInSelection } = useSelection();
  const { language } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  const isSelected = isInSelection(product.id);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (isSelected) {
      removeFromSelection(product.id);
    } else {
      addToSelection(product);
    }
  };

  if (variant === 'full') {
    return (
      <Button
        variant="outline"
        size={size}
        onClick={handleToggle}
        className={`${isSelected ? 'text-copper-600 border-copper-600 bg-copper-50' : 'text-clay-600 border-clay-300'} 
          transition-all duration-300 hover:text-copper-600 hover:border-copper-600 hover:bg-copper-50
          ${isAnimating ? 'scale-95' : 'scale-100'}`}
      >
        {isSelected ? (
          <BookmarkCheck className="h-4 w-4 mr-2" />
        ) : (
          <Bookmark className="h-4 w-4 mr-2" />
        )}
        {isSelected 
          ? (language === 'fr' ? 'Enregistré' : 'Saved')
          : (language === 'fr' ? 'Enregistrer' : 'Save for later')
        }
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={handleToggle}
      className={`${isSelected ? 'text-copper-600' : 'text-clay-600'} 
        hover:text-copper-600 transition-all duration-300 bg-white/90 hover:bg-white hover:scale-105 
        rounded-full luxury-shadow
        ${isAnimating ? 'scale-90' : 'scale-100'}`}
    >
      {isSelected ? (
        <BookmarkCheck className="h-4 w-4" />
      ) : (
        <Bookmark className="h-4 w-4" />
      )}
    </Button>
  );
};

export default SaveForLaterButton;
