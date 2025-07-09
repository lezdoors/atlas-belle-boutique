import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductGrid from '@/components/ProductGrid';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const Ceramiques = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-moroccan-sand/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl lg:text-5xl text-moroccan-blue mb-6 font-light">
              {language === 'fr' ? 'Céramiques Marocaines' : 'Moroccan Ceramics'}
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {language === 'fr' 
                ? 'Découvrez notre collection de céramiques artisanales, façonnées par les mains expertes de nos artisans dans les ateliers traditionnels du Maroc.'
                : 'Discover our collection of artisanal ceramics, shaped by the expert hands of our craftsmen in traditional Moroccan workshops.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ProductGrid category="ceramics" />
        </div>
      </section>

      <ModernElegantFooter />
    </div>
  );
};

export default Ceramiques;