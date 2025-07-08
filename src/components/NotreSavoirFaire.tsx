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
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6">
            {language === 'fr' ? 'Notre Savoir-Faire' : 'Our Craftsmanship'}
          </h2>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'De l\'atelier de l\'artisan à votre table, découvrez le processus de création de nos pièces d\'exception'
              : 'From the artisan\'s workshop to your table, discover the creation process of our exceptional pieces'
            }
          </p>
        </div>

        {/* Crafting Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {craftingSteps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                {language === 'fr' ? step.titleFr : step.titleEn}
              </h3>
              
              <p className="text-stone-600 font-light leading-relaxed text-sm">
                {language === 'fr' ? step.descriptionFr : step.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Heritage Statement */}
        <div className="bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-serif text-2xl lg:text-3xl text-stone-900 mb-6">
            {language === 'fr' ? 'Un Héritage Vivant' : 'A Living Heritage'}
          </h3>
          <p className="text-lg text-stone-700 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            {language === 'fr'
              ? 'Nos artisans perpétuent des techniques millénaires tout en innovant pour créer des pièces qui s\'intègrent parfaitement dans la vie contemporaine. Chaque création raconte une histoire, celle de la rencontre entre tradition et modernité.'
              : 'Our artisans perpetuate millennial techniques while innovating to create pieces that integrate perfectly into contemporary life. Each creation tells a story, that of the meeting between tradition and modernity.'
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif text-amber-600 mb-2">15+</div>
              <p className="text-sm font-light text-stone-600">
                {language === 'fr' ? 'Artisans partenaires' : 'Partner artisans'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-serif text-amber-600 mb-2">500+</div>
              <p className="text-sm font-light text-stone-600">
                {language === 'fr' ? 'Années d\'expérience cumulées' : 'Years of combined experience'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-serif text-amber-600 mb-2">100%</div>
              <p className="text-sm font-light text-stone-600">
                {language === 'fr' ? 'Fait à la main' : 'Handmade'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotreSavoirFaire;