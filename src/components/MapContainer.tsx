
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import MapRegionMarker from './MapRegionMarker';

interface Region {
  id: string;
  name: string;
  position: { top: string; left: string };
  ingredients: string[];
  description: string;
  climate: string;
  harvest: string;
}

interface MapContainerProps {
  regions: Region[];
  selectedRegion: string | null;
  onRegionSelect: (regionId: string | null) => void;
}

const MapContainer = ({ regions, selectedRegion, onRegionSelect }: MapContainerProps) => {
  const { language } = useLanguage();

  const handleRegionClick = (regionId: string) => {
    onRegionSelect(regionId);
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-2xl overflow-hidden">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="font-display font-bold text-lg sm:text-xl text-clay-800 mb-4 sm:mb-6 text-center">
          {language === 'fr' ? 'Carte Interactive du Maroc' : 'Interactive Map of Morocco'}
        </h3>
        
        {/* Interactive Morocco Map */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl overflow-hidden border-2 border-copper-200">
          {/* Morocco outline background */}
          <div 
            className="absolute inset-0 opacity-20 rounded-xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cpath d='M50 80 L120 70 L180 85 L250 90 L320 100 L350 130 L340 180 L300 220 L200 240 L120 220 L80 180 L60 140 Z' fill='%23d4946b' stroke='%23b8860b' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Region Markers */}
          {regions.map((region) => (
            <MapRegionMarker
              key={region.id}
              region={region}
              isSelected={selectedRegion === region.id}
              onSelect={() => handleRegionClick(region.id)}
            />
          ))}
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 bg-orange-400 rounded-full opacity-40"></div>
        </div>

        <div className="text-center mt-4 sm:mt-6 text-sm text-clay-600">
          {language === 'fr' 
            ? 'Cliquez sur les points pour découvrir chaque région'
            : 'Click on the points to discover each region'
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default MapContainer;
