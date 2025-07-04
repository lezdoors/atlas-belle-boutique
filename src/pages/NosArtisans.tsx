import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NosArtisans = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/moroccan-architecture.jpg')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light text-stone-800 mb-6">
            {language === 'fr' ? 'Nos Artisans' : 'Our Artisans'}
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
            {language === 'fr' 
              ? 'Découvrez les maîtres artisans qui perpétuent les traditions séculaires du Maroc'
              : 'Meet the master artisans who perpetuate the centuries-old traditions of Morocco'
            }
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-stone-800 mb-8">
              {language === 'fr' ? 'L\'Art Transmis de Génération en Génération' : 'Art Passed Down Through Generations'}
            </h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed mb-8">
              {language === 'fr' 
                ? 'Dans les montagnes de l\'Atlas, où les traditions ancestrales se mêlent à la beauté naturelle, nos artisans perpétuent un savoir-faire millénaire. Chaque geste, chaque technique, chaque création porte en elle l\'âme du Maroc authentique.'
                : 'In the Atlas mountains, where ancestral traditions blend with natural beauty, our artisans perpetuate a thousand-year-old know-how. Every gesture, every technique, every creation carries within it the soul of authentic Morocco.'
              }
            </p>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {language === 'fr' 
                ? 'Découvrez l\'histoire de ces hommes et femmes exceptionnels qui, avec passion et dévouement, donnent vie à chaque produit Perle de l\'Atlas. Leur héritage précieux continue de rayonner à travers nos créations uniques.'
                : 'Discover the story of these exceptional men and women who, with passion and dedication, bring every Perle de l\'Atlas product to life. Their precious heritage continues to shine through our unique creations.'
              }
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block p-8 bg-stone-50 rounded-2xl">
              <h3 className="text-2xl font-serif font-light text-stone-800 mb-4">
                {language === 'fr' ? 'Bientôt Disponible' : 'Coming Soon'}
              </h3>
              <p className="text-stone-600 font-light">
                {language === 'fr' 
                  ? 'Découvrez prochainement les portraits de nos artisans et l\'histoire de leur savoir-faire exceptionnel.'
                  : 'Soon discover the portraits of our artisans and the story of their exceptional craftsmanship.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NosArtisans;