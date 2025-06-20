
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedProductsInfoBar = () => {
  const { language } = useLanguage();

  return (
    <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 shadow-sm max-w-4xl mx-auto">
      <div className="flex items-center text-sm text-sand-600">
        <span className="flex items-center">
          {language === 'fr' 
            ? `✨ Livraison gratuite dès 150€ • Échantillons offerts`
            : `✨ Free shipping from $150 • Free samples`
          }
        </span>
      </div>
    </div>
  );
};

export default FeaturedProductsInfoBar;
