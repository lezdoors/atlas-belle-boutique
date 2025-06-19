
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { language, currency, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-sand-600 font-medium">
        {language === 'fr' ? 'Langue:' : 'Language:'}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="border-amber-200 hover:bg-amber-50 text-sand-700"
      >
        {language === 'fr' ? 'Français' : 'English'} ({currency})
      </Button>
    </div>
  );
};

export default LanguageToggle;
