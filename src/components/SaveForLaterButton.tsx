
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useSavedItems } from '@/hooks/useSavedItems';
import { useLanguage } from '@/contexts/LanguageContext';

interface SaveForLaterButtonProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onSave?: () => void;
}

const SaveForLaterButton = ({ item, onSave }: SaveForLaterButtonProps) => {
  const { saveItem, isItemSaved } = useSavedItems();
  const { language } = useLanguage();
  
  const isSaved = isItemSaved(item.id);

  const handleSave = () => {
    if (!isSaved) {
      saveItem(item);
      onSave?.();
    }
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleSave}
      disabled={isSaved}
      className={`border-clay-300 text-clay-600 hover:bg-clay-50 ${
        isSaved ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <Heart className={`h-4 w-4 mr-1 ${isSaved ? 'fill-current' : ''}`} />
      {language === 'fr' 
        ? (isSaved ? 'Sauvegardé' : 'Sauvegarder') 
        : (isSaved ? 'Saved' : 'Save for Later')
      }
    </Button>
  );
};

export default SaveForLaterButton;
