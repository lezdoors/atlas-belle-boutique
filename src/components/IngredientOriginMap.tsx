
import { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import MapContainer from './MapContainer';
import RegionDetails from './RegionDetails';
import RegionStats from './RegionStats';

const IngredientOriginMap = () => {
  const { language } = useLanguage();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const mobileDetailsRef = useRef<HTMLDivElement>(null);

  // Stable region data structure - prevents re-creation on language change
  const regionsData = [
    {
      id: 'essaouira',
      position: { top: '45%', left: '15%' },
      name: {
        fr: 'Essaouira',
        en: 'Essaouira'
      },
      ingredients: {
        fr: ['Huile d\'argan', 'Sel de mer', 'Algues marines'],
        en: ['Argan oil', 'Sea salt', 'Marine algae']
      },
      description: {
        fr: 'Région côtière célèbre pour ses arganiers centenaires et ses coopératives féminines.',
        en: 'Coastal region famous for its century-old argan trees and women\'s cooperatives.'
      },
      climate: {
        fr: 'Méditerranéen sec',
        en: 'Dry Mediterranean'
      },
      harvest: {
        fr: 'Juin - Août',
        en: 'June - August'
      }
    },
    {
      id: 'atlas',
      position: { top: '35%', left: '45%' },
      name: {
        fr: 'Montagnes de l\'Atlas',
        en: 'Atlas Mountains'
      },
      ingredients: {
        fr: ['Argile rouge', 'Plantes de montagne', 'Miel de montagne'],
        en: ['Red clay', 'Mountain plants', 'Mountain honey']
      },
      description: {
        fr: 'Chaîne montagneuse riche en argiles thérapeutiques et plantes médicinales.',
        en: 'Mountain range rich in therapeutic clays and medicinal plants.'
      },
      climate: {
        fr: 'Continental montagnard',
        en: 'Continental mountain'
      },
      harvest: {
        fr: 'Mai - Septembre',
        en: 'May - September'
      }
    },
    {
      id: 'fes',
      position: { top: '25%', left: '35%' },
      name: {
        fr: 'Fès',
        en: 'Fès'
      },
      ingredients: {
        fr: ['Rose de Damas', 'Oud', 'Épices rares'],
        en: ['Damask rose', 'Oud', 'Rare spices']
      },
      description: {
        fr: 'Capitale spirituelle connue pour ses parfums traditionnels et ses roses.',
        en: 'Spiritual capital known for its traditional perfumes and roses.'
      },
      climate: {
        fr: 'Méditerranéen continental',
        en: 'Continental Mediterranean'
      },
      harvest: {
        fr: 'Avril - Juin',
        en: 'April - June'
      }
    },
    {
      id: 'marrakech',
      position: { top: '50%', left: '35%' },
      name: {
        fr: 'Marrakech',
        en: 'Marrakech'
      },
      ingredients: {
        fr: ['Cactus de Barbarie', 'Henné', 'Huile d\'olive'],
        en: ['Prickly pear cactus', 'Henna', 'Olive oil']
      },
      description: {
        fr: 'Oasis du sud réputée pour ses cactus riches en antioxydants.',
        en: 'Southern oasis renowned for its antioxidant-rich cacti.'
      },
      climate: {
        fr: 'Aride subtropical',
        en: 'Subtropical arid'
      },
      harvest: {
        fr: 'Juillet - Octobre',
        en: 'July - October'
      }
    }
  ];

  // Transform data for current language while maintaining stability
  const regions = regionsData.map(region => ({
    id: region.id,
    name: region.name[language],
    position: region.position,
    ingredients: region.ingredients[language],
    description: region.description[language],
    climate: region.climate[language],
    harvest: region.harvest[language]
  }));

  // Handle region selection with accordion-like behavior
  const handleRegionSelect = (regionId: string) => {
    setActiveRegion(current => current === regionId ? null : regionId);
  };

  // Scroll to mobile details when region is selected on mobile
  useEffect(() => {
    if (activeRegion && mobileDetailsRef.current) {
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      if (isMobile) {
        setTimeout(() => {
          mobileDetailsRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 100); // Small delay to let the content render
      }
    }
  }, [activeRegion]);

  return (
    <section className="w-full py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-stone-100 text-stone-700 px-6 py-3 rounded-full mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">
              {language === 'fr' ? 'Origines des Ingrédients' : 'Ingredient Origins'}
            </span>
          </div>
          <h2 className="heading-display text-3xl lg:text-4xl text-foreground mb-6">
            {language === 'fr' 
              ? 'Du Cœur du Maroc à Votre Peau'
              : 'From the Heart of Morocco to Your Skin'
            }
          </h2>
          <p className="body-text max-w-3xl mx-auto text-lg">
            {language === 'fr'
              ? 'Explorez les régions exceptionnelles du Maroc d\'où proviennent nos ingrédients précieux'
              : 'Explore the exceptional regions of Morocco where our precious ingredients come from'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <MapContainer
              regions={regions}
              selectedRegion={activeRegion}
              onRegionSelect={handleRegionSelect}
            />
          </div>

          {/* Region Details - Desktop */}
          <div className="hidden lg:block space-y-6">
            <RegionDetails
              selectedRegion={activeRegion}
              regions={regions}
              onClose={() => setActiveRegion(null)}
            />

            {/* Quick Stats */}
            <RegionStats />
          </div>
        </div>

        {/* Mobile Region Details - Display below map on mobile */}
        <div ref={mobileDetailsRef} className="lg:hidden mt-8">
          {activeRegion && (
            <RegionDetails
              selectedRegion={activeRegion}
              regions={regions}
              onClose={() => setActiveRegion(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default IngredientOriginMap;
