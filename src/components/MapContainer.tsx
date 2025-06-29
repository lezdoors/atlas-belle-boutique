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
    // Prevent deselection when clicking the same region - keep it selected
    onRegionSelect(regionId);
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-2xl overflow-hidden">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="font-display font-bold text-lg sm:text-xl text-clay-800 mb-4 sm:mb-6 text-center">
          {language === 'fr' ? 'Carte Interactive du Maroc' : 'Interactive Map of Morocco'}
        </h3>
        
        {/* Responsive Morocco Map */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-beige-100 to-pearl-200 rounded-xl overflow-hidden">
          {/* Decorative Morocco silhouette background */}
          <div className="absolute inset-0 opacity-10 bg-copper-600 rounded-xl"></div>
          
          {/* Region Markers - Responsive positioning */}
          {regions.map((region) => (
            <MapRegionMarker
              key={region.id}
              region={region}
              isSelected={selectedRegion === region.id}
              onSelect={() => handleRegionClick(region.id)}
            />
          ))}
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
