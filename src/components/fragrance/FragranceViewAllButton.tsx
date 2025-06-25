
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const FragranceViewAllButton = () => {
  const { language } = useLanguage();

  return (
    <div className="text-center mt-12">
      <Button 
        variant="outline" 
        size="lg"
        className="border-2 border-copper-500 text-copper-600 hover:bg-copper-500 hover:text-white transition-colors duration-300"
      >
        {language === 'fr' ? 'Voir toutes les collections' : 'View all collections'}
      </Button>
    </div>
  );
};

export default FragranceViewAllButton;
