
import { useLanguage } from '@/contexts/LanguageContext';

const TopBanner = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-amber-50 text-amber-800 text-sm py-3 border-b border-amber-100">
      <div className="container mx-auto px-4 text-center">
        {language === 'fr' 
          ? 'Livraison gratuite à partir de 149€ – Expédition rapide dans le monde entier'
          : 'Free shipping from $149 – Express shipping worldwide'
        }
      </div>
    </div>
  );
};

export default TopBanner;
