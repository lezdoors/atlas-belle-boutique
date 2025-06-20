
import { useLanguage } from '@/contexts/LanguageContext';

const HeaderTopBar = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-sand-50 text-sand-800 text-sm py-2">
      <div className="container mx-auto px-4 text-center">
        {language === 'fr' 
          ? 'Livraison gratuite à partir de 150€ • Échantillons offerts'
          : 'Free shipping from $150 • Free samples included'
        }
      </div>
    </div>
  );
};

export default HeaderTopBar;
