import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const Credits = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 w-full">
        <div className="w-full px-6 lg:px-12 xl:px-16 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-8">
              {language === 'fr' ? 'Crédits' : 'Credits'}
            </h1>
            
            <div className="prose prose-lg prose-stone max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-4">
                  {language === 'fr' ? 'Équipe de Développement' : 'Development Team'}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {language === 'fr' 
                    ? 'Ce site web a été conçu et développé avec passion pour célébrer l\'artisanat marocain authentique.'
                    : 'This website was designed and developed with passion to celebrate authentic Moroccan craftsmanship.'
                  }
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-4">
                  {language === 'fr' ? 'Technologies Utilisées' : 'Technologies Used'}
                </h2>
                <ul className="list-disc list-inside text-stone-600 space-y-2">
                  <li>React & TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Supabase</li>
                  <li>Vercel Analytics</li>
                  <li>Lovable Platform</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-4">
                  {language === 'fr' ? 'Remerciements' : 'Acknowledgments'}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {language === 'fr'
                    ? 'Nous remercions tous les artisans marocains qui perpétuent les traditions millénaires et inspirent notre travail quotidien.'
                    : 'We thank all the Moroccan artisans who perpetuate thousand-year-old traditions and inspire our daily work.'
                  }
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Credits;