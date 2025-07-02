
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import MapContainer from './MapContainer';
import RegionDetails from './RegionDetails';
import RegionStats from './RegionStats';

const IngredientOriginMap = () => {
  const { language } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      id: 'essaouira',
      name: 'Essaouira',
      position: { top: '45%', left: '15%' },
      ingredients: language === 'fr' 
        ? ['Huile d\'argan', 'Sel de mer', 'Algues marines']
        : ['Argan oil', 'Sea salt', 'Marine algae'],
      description: language === 'fr'
        ? 'Région côtière célèbre pour ses arganiers centenaires et ses coopératives féminines.'
        : 'Coastal region famous for its century-old argan trees and women\'s cooperatives.',
      climate: language === 'fr' ? 'Méditerranéen sec' : 'Dry Mediterranean',
      harvest: language === 'fr' ? 'Juin - Août' : 'June - August'
    },
    {
      id: 'atlas',
      name: language === 'fr' ? 'Montagnes de l\'Atlas' : 'Atlas Mountains',
      position: { top: '35%', left: '45%' },
      ingredients: language === 'fr'
        ? ['Argile rouge', 'Plantes de montagne', 'Miel de montagne']
        : ['Red clay', 'Mountain plants', 'Mountain honey'],
      description: language === 'fr'
        ? 'Chaîne montagneuse riche en argiles thérapeutiques et plantes médicinales.'
        : 'Mountain range rich in therapeutic clays and medicinal plants.',
      climate: language === 'fr' ? 'Continental montagnard' : 'Continental mountain',
      harvest: language === 'fr' ? 'Mai - Septembre' : 'May - September'
    },
    {
      id: 'fes',
      name: 'Fès',
      position: { top: '25%', left: '35%' },
      ingredients: language === 'fr'
        ? ['Rose de Damas', 'Oud', 'Épices rares']
        : ['Damask rose', 'Oud', 'Rare spices'],
      description: language === 'fr'
        ? 'Capitale spirituelle connue pour ses parfums traditionnels et ses roses.'
        : 'Spiritual capital known for its traditional perfumes and roses.',
      climate: language === 'fr' ? 'Méditerranéen continental' : 'Continental Mediterranean',
      harvest: language === 'fr' ? 'Avril - Juin' : 'April - June'
    },
    {
      id: 'marrakech',
      name: 'Marrakech',
      position: { top: '50%', left: '35%' },
      ingredients: language === 'fr'
        ? ['Cactus de Barbarie', 'Henné', 'Huile d\'olive']
        : ['Prickly pear cactus', 'Henna', 'Olive oil'],
      description: language === 'fr'
        ? 'Oasis du sud réputée pour ses cactus riches en antioxydants.'
        : 'Southern oasis renowned for its antioxidant-rich cacti.',
      climate: language === 'fr' ? 'Aride subtropical' : 'Subtropical arid',
      harvest: language === 'fr' ? 'Juillet - Octobre' : 'July - October'
    }
  ];

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
              selectedRegion={selectedRegion}
              onRegionSelect={setSelectedRegion}
            />
          </div>

          {/* Region Details */}
          <div className="space-y-6">
            <RegionDetails
              selectedRegion={selectedRegion}
              regions={regions}
            />

            {/* Quick Stats */}
            <RegionStats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientOriginMap;
