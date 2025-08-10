import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const ArtisanCooperatives = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-moroccan-blue mb-6 text-center">
            {language === 'fr' ? 'Nos Coopératives' : 'Our Cooperatives'}
          </h1>
          <p className="text-lg text-stone-600 text-center max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Rencontrez les coopératives artisanales partenaires de Perle de l’Atlas.'
              : 'Meet the artisan cooperatives that partner with Perle de l’Atlas.'
            }
          </p>
        </div>
      </section>

      <ModernElegantFooter />
    </div>
  );
};

export default ArtisanCooperatives;