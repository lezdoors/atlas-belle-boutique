import { Palette, Users, Gem, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NotreSavoirFaire = () => {
  const { language } = useLanguage();

  const craftingSteps = [
    {
      icon: Palette,
      titleFr: 'Conception Artisanale',
      titleEn: 'Artisanal Design',
      descriptionFr: 'Nos designs s\'inspirent de motifs traditionnels marocains, réinterprétés avec une élégance contemporaine.',
      descriptionEn: 'Our designs draw inspiration from traditional Moroccan patterns, reinterpreted with contemporary elegance.'
    },
    {
      icon: Users,
      titleFr: 'Façonnage à la Main',
      titleEn: 'Hand Crafting',
      descriptionFr: 'Chaque pièce est façonnée à la main par nos maîtres artisans, perpétuant des techniques ancestrales.',
      descriptionEn: 'Each piece is hand-crafted by our master artisans, perpetuating ancestral techniques.'
    },
    {
      icon: Gem,
      titleFr: 'Finitions Précieuses',
      titleEn: 'Precious Finishes',
      descriptionFr: 'Les finitions sont appliquées avec un soin méticuleux, créant des pièces uniques et durables.',
      descriptionEn: 'Finishes are applied with meticulous care, creating unique and durable pieces.'
    },
    {
      icon: Award,
      titleFr: 'Curation Française',
      titleEn: 'French Curation',
      descriptionFr: 'Chaque création est sélectionnée selon nos standards parisiens d\'excellence et de raffinement.',
      descriptionEn: 'Each creation is selected according to our Parisian standards of excellence and refinement.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-4 sm:mb-6 leading-tight">
            {language === 'fr' ? 'Notre Savoir-Faire' : 'Our Craftsmanship'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed px-4">
            {language === 'fr'
              ? 'L\'art artisanal au service de l\'élégance contemporaine'
              : 'Artisanal craft in service of contemporary elegance'
            }
          </p>
        </div>

        {/* Crafting Steps - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {craftingSteps.map((step, index) => (
            <div key={index} className="text-center group px-2">
              {/* Step Number */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-serif text-lg sm:text-xl text-stone-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                {language === 'fr' ? step.titleFr : step.titleEn}
              </h3>
              
              <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                {language === 'fr' ? step.descriptionFr : step.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Heritage Statement - Simplified for Mobile */}
        <div className="bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-stone-900 mb-4 sm:mb-6 leading-tight">
            {language === 'fr' ? 'Un Héritage Vivant' : 'A Living Heritage'}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-stone-700 font-light leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
            {language === 'fr'
              ? 'Techniques millénaires et innovation contemporaine se rencontrent pour créer des pièces uniques.'
              : 'Millennial techniques and contemporary innovation meet to create unique pieces.'
            }
          </p>
          
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center max-w-lg mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-amber-600 mb-1 sm:mb-2">15+</div>
              <p className="text-xs sm:text-sm font-light text-stone-600 leading-tight">
                {language === 'fr' ? 'Artisans' : 'Artisans'}
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-amber-600 mb-1 sm:mb-2">500+</div>
              <p className="text-xs sm:text-sm font-light text-stone-600 leading-tight">
                {language === 'fr' ? 'Années d\'expérience' : 'Years experience'}
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-amber-600 mb-1 sm:mb-2">100%</div>
              <p className="text-xs sm:text-sm font-light text-stone-600 leading-tight">
                {language === 'fr' ? 'Fait main' : 'Handmade'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotreSavoirFaire;