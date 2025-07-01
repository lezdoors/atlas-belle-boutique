
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const ConditionsVente = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-br from-pearl-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-clay-800 mb-6">
                {language === 'fr' ? 'Conditions Générales de Vente' : 'Terms and Conditions of Sale'}
              </h1>
              <p className="font-serif text-lg text-clay-600 leading-relaxed">
                {language === 'fr'
                  ? 'Conditions régissant la vente de nos produits artisanaux marocains'
                  : 'Conditions governing the sale of our Moroccan artisanal products'
                }
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-pearl-50 rounded-2xl p-8 border border-pearl-200">
                <p className="font-serif text-clay-600 leading-relaxed text-center text-lg">
                  {language === 'fr'
                    ? 'Nos conditions générales de vente détaillées seront bientôt disponibles. Pour toute question concernant nos conditions de vente, n\'hésitez pas à nous contacter.'
                    : 'Our detailed terms and conditions of sale will be available soon. For any questions regarding our terms of sale, please do not hesitate to contact us.'
                  }
                </p>
                <div className="text-center mt-8">
                  <a 
                    href="/contact"
                    className="inline-flex items-center bg-copper-600 hover:bg-copper-700 text-white px-8 py-4 rounded-full font-serif font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ConditionsVente;
