
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface WishlistButtonProps {
  productId: number;
  productName: string;
  variant?: 'icon' | 'full';
  size?: 'sm' | 'default' | 'lg' | 'icon';
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ 
  productId, 
  productName, 
  variant = 'icon',
  size = 'icon' 
}) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();

  const handleWishlistToggle = () => {
    setIsInWishlist(!isInWishlist);
    
    toast({
      title: isInWishlist 
        ? (language === 'fr' ? 'Retiré de la liste de souhaits' : 'Removed from wishlist')
        : (language === 'fr' ? 'Ajouté à la liste de souhaits' : 'Added to wishlist'),
      description: isInWishlist 
        ? `${productName} ${language === 'fr' ? 'a été retiré de votre liste de souhaits' : 'has been removed from your wishlist'}`
        : `${productName} ${language === 'fr' ? 'a été ajouté à votre liste de souhaits' : 'has been added to your wishlist'}`,
    });
  };

  if (variant === 'full') {
    return (
      <Button
        variant="outline"
        size={size}
        onClick={handleWishlistToggle}
        className={`${isInWishlist ? 'text-red-500 border-red-500' : ''} transition-colors`}
      >
        <Heart className={`h-4 w-4 mr-2 ${isInWishlist ? 'fill-current' : ''}`} />
        {isInWishlist 
          ? (language === 'fr' ? 'Dans la liste' : 'In wishlist')
          : (language === 'fr' ? 'Ajouter à la liste' : 'Add to wishlist')
        }
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={handleWishlistToggle}
      className={`${isInWishlist ? 'text-red-500' : 'text-clay-600'} hover:text-red-500 transition-colors`}
    >
      <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
    </Button>
  );
};

export default WishlistButton;
