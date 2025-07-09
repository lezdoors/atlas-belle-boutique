import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const ArtisanRegions = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-moroccan-blue mb-6 text-center">
            {language === 'fr' ? 'Régions Artisanales' : 'Artisan Regions'}
          </h1>
          <p className="text-lg text-stone-600 text-center max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez les régions du Maroc où nos artisans perpétuent les traditions séculaires.'
              : 'Discover the regions of Morocco where our artisans perpetuate centuries-old traditions.'
            }
          </p>
        </div>
      </section>

      <ModernElegantFooter />
    </div>
  );
};

export default ArtisanRegions;