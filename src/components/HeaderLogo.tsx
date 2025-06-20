
import { useLanguage } from '@/contexts/LanguageContext';

const HeaderLogo = () => {
  const { language } = useLanguage();

  return (
    <div className="flex items-center flex-shrink-0">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-700">
        Perle d'Atlas
      </h1>
      <div className="hidden md:block ml-2 text-xs text-sand-600 font-light">
        {language === 'fr' 
          ? 'La beauté ancestrale du Maroc'
          : 'Ancestral beauty of Morocco'
        }
      </div>
    </div>
  );
};

export default HeaderLogo;
