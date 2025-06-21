
import { MapPin, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Region {
  id: string;
  name: string;
  position: { top: string; left: string };
  ingredients: string[];
  description: string;
  climate: string;
  harvest: string;
}

interface RegionDetailsProps {
  selectedRegion: string | null;
  regions: Region[];
}

const RegionDetails = ({ selectedRegion, regions }: RegionDetailsProps) => {
  const { language } = useLanguage();

  if (!selectedRegion) {
    return (
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
    );
  }

  const region = regions.find(r => r.id === selectedRegion);
  if (!region) return null;

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-2xl animate-fade-in">
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
  );
};

export default RegionDetails;
