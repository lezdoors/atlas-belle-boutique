import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductGrid from '@/components/ProductGrid';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const Verrerie = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-moroccan-sand/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl lg:text-5xl text-moroccan-blue mb-6 font-light">
              {language === 'fr' ? 'Verrerie Artisanale' : 'Artisanal Glassware'}
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {language === 'fr' 
                ? 'Explorez notre sélection de verrerie marocaine, alliant tradition séculaire et raffinement contemporain pour sublimer vos moments de partage.'
                : 'Explore our selection of Moroccan glassware, combining centuries-old tradition with contemporary refinement to enhance your moments of sharing.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ProductGrid category="glassware" />
        </div>
      </section>

      <ModernElegantFooter />
    </div>
  );
};

export default Verrerie;