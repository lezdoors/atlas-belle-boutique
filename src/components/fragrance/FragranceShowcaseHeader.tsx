
import { useLanguage } from '@/contexts/LanguageContext';

const FragranceShowcaseHeader = () => {
  const { language } = useLanguage();

  return (
    <div className="text-center mb-12">
      <h2 className="section-title text-clay-800 mb-6">
        {language === 'fr' ? 'Collections Exclusives de Parfums' : 'Exclusive Fragrance Collections'}
      </h2>
      <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
        {language === 'fr' 
          ? 'Découvrez nos créations parfumées uniques, inspirées des traditions ancestrales du Maroc et créées par nos maîtres parfumeurs.'
          : 'Discover our unique fragrant creations, inspired by the ancestral traditions of Morocco and created by our master perfumers.'
        }
      </p>
    </div>
  );
};

export default FragranceShowcaseHeader;
