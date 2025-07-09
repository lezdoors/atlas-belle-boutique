import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductGrid from '@/components/ProductGrid';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const GiftSets = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-moroccan-blue mb-6 text-center">
            {language === 'fr' ? 'Coffrets Cadeaux' : 'Gift Sets'}
          </h1>
          <ProductGrid category="tableware" />
        </div>
      </section>

      <ModernElegantFooter />
    </div>
  );
};

export default GiftSets;