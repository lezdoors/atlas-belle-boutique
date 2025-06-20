
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-copper-100 text-copper-700 px-6 py-3 rounded-full mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">
              {language === 'fr' ? 'Origines des Ingrédients' : 'Ingredient Origins'}
            </span>
          </div>
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' 
              ? 'Du Cœur du Maroc à Votre Peau'
              : 'From the Heart of Morocco to Your Skin'
            }
          </h2>
          <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
            {language === 'fr'
              ? 'Explorez les régions exceptionnelles du Maroc d\'où proviennent nos ingrédients précieux'
              : 'Explore the exceptional regions of Morocco where our precious ingredients come from'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <Card className="bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-xl text-clay-800 mb-6 text-center">
                  {language === 'fr' ? 'Carte Interactive du Maroc' : 'Interactive Map of Morocco'}
                </h3>
                
                {/* Simplified Morocco Map */}
                <div className="relative w-full h-96 bg-gradient-to-br from-beige-100 to-pearl-200 rounded-xl overflow-hidden">
                  {/* Decorative Morocco silhouette background */}
                  <div className="absolute inset-0 opacity-10 bg-copper-600 rounded-xl"></div>
                  
                  {/* Region Markers */}
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white transition-all duration-300 ${
                        selectedRegion === region.id
                          ? 'bg-copper-600 scale-150 shadow-lg'
                          : 'bg-copper-400 hover:bg-copper-500 hover:scale-125'
                      }`}
                      style={{
                        top: region.position.top,
                        left: region.position.left,
                      }}
                      onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                    >
                      <span className="sr-only">{region.name}</span>
                    </button>
                  ))}

                  {/* Region Labels */}
                  {regions.map((region) => (
                    <div
                      key={`label-${region.id}`}
                      className="absolute transform -translate-x-1/2 pointer-events-none"
                      style={{
                        top: `calc(${region.position.top} + 20px)`,
                        left: region.position.left,
                      }}
                    >
                      <span className="text-xs font-medium text-clay-700 bg-white/80 px-2 py-1 rounded-full">
                        {region.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6 text-sm text-clay-600">
                  {language === 'fr' 
                    ? 'Cliquez sur les points pour découvrir chaque région'
                    : 'Click on the points to discover each region'
                  }
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Region Details */}
          <div className="space-y-6">
            {selectedRegion ? (
              regions
                .filter(region => region.id === selectedRegion)
                .map((region) => (
                  <Card key={region.id} className="bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-2xl animate-fade-in">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <MapPin className="h-5 w-5 text-copper-600 mr-2" />
                        <h3 className="font-display font-bold text-xl text-clay-800">
                          {region.name}
                        </h3>
                      </div>

                      <p className="elegant-text text-clay-600 mb-6 leading-relaxed">
                        {region.description}
                      </p>

                      {/* Climate & Harvest Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-xs text-clay-500 uppercase tracking-wide mb-1">
                            {language === 'fr' ? 'Climat' : 'Climate'}
                          </div>
                          <div className="text-sm font-medium text-clay-700">
                            {region.climate}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-clay-500 uppercase tracking-wide mb-1">
                            {language === 'fr' ? 'Récolte' : 'Harvest'}
                          </div>
                          <div className="text-sm font-medium text-clay-700">
                            {region.harvest}
                          </div>
                        </div>
                      </div>

                      {/* Ingredients */}
                      <div>
                        <div className="text-sm font-medium text-clay-700 mb-3">
                          {language === 'fr' ? 'Ingrédients principaux :' : 'Main ingredients:'}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {region.ingredients.map((ingredient, index) => (
                            <span
                              key={index}
                              className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            ) : (
              <Card className="bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-2xl">
                <CardContent className="p-8 text-center">
                  <Info className="h-12 w-12 text-copper-400 mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-lg text-clay-800 mb-2">
                    {language === 'fr' ? 'Explorez nos Régions' : 'Explore Our Regions'}
                  </h3>
                  <p className="elegant-text text-clay-600">
                    {language === 'fr' 
                      ? 'Sélectionnez une région sur la carte pour découvrir ses trésors naturels'
                      : 'Select a region on the map to discover its natural treasures'
                    }
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-copper-50 border-0 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-copper-600 mb-2">12+</div>
                  <div className="text-sm text-clay-600">
                    {language === 'fr' ? 'Régions sources' : 'Source regions'}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-copper-50 border-0 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-copper-600 mb-2">50+</div>
                  <div className="text-sm text-clay-600">
                    {language === 'fr' ? 'Ingrédients naturels' : 'Natural ingredients'}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientOriginMap;
