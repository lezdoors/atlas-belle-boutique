
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeritageStory = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="font-serif text-xl leading-relaxed text-gray-700 mb-8">
                {language === 'fr' 
                  ? "Au cœur des montagnes de l'Atlas, là où les traditions se transmettent de génération en génération, naît notre passion pour l'artisanat marocain authentique. Chaque pièce de notre collection raconte une histoire millénaire, tissée par les mains expertes d'artisans qui perpétuent un savoir-faire ancestral."
                  : "In the heart of the Atlas Mountains, where traditions pass from generation to generation, our passion for authentic Moroccan craftsmanship is born. Each piece in our collection tells a thousand-year-old story, woven by the expert hands of artisans who perpetuate ancestral know-how."
                }
              </p>
              
              <p className="font-serif text-xl leading-relaxed text-gray-700 mb-8">
                {language === 'fr'
                  ? "Nous croyons que la beauté réside dans l'imperfection artisanale, dans ces légères variations qui font de chaque objet une œuvre unique. Notre mission est de préserver ces techniques traditionnelles tout en les adaptant à l'esthétique contemporaine, créant ainsi un pont entre le passé et le présent."
                  : "We believe that beauty lies in artisanal imperfection, in those slight variations that make each object a unique work. Our mission is to preserve these traditional techniques while adapting them to contemporary aesthetics, thus creating a bridge between past and present."
                }
              </p>

              <p className="font-serif text-xl leading-relaxed text-gray-700">
                {language === 'fr'
                  ? "Chaque collaboration avec nos artisans partenaires s'inscrit dans une démarche de commerce équitable et de respect mutuel. Ensemble, nous créons des pièces qui portent en elles l'âme du Maroc et la promesse d'un avenir où tradition et modernité coexistent harmonieusement."
                  : "Each collaboration with our partner artisans is part of a fair trade approach and mutual respect. Together, we create pieces that carry within them the soul of Morocco and the promise of a future where tradition and modernity coexist harmoniously."
                }
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl luxury-shadow group">
              <img 
                src="/lovable-uploads/moroccan-architecture.jpg"
                alt={language === 'fr' ? 'Architecture traditionnelle marocaine' : 'Traditional Moroccan architecture'}
                className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Decorative overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-copper-500 rounded-full animate-pulse"></div>
                    <span className="text-lg font-serif font-medium text-black">
                      {language === 'fr' ? 'Tradition Millénaire' : 'Millennial Tradition'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageStory;
