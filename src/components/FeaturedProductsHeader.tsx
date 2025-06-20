
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedProductsHeader = () => {
  const { language } = useLanguage();

  return (
    <div className="text-center mb-12">
      <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 mx-auto rounded-full mb-8"></div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sand-800 mb-4">
        {language === 'fr' ? 'Nos Produits Phares' : 'Our Featured Products'}
      </h2>
      <p className="text-lg md:text-xl text-sand-700 max-w-2xl mx-auto leading-relaxed mb-8">
        {language === 'fr' 
          ? 'Découvrez notre sélection de produits de beauté authentiques, créés à partir d\'ingrédients précieux du Maroc'
          : 'Discover our selection of authentic beauty products, created from precious Moroccan ingredients'
        }
      </p>
    </div>
  );
};

export default FeaturedProductsHeader;
