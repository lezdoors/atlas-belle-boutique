

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
    <Card className="bg-white border border-stone-200 shadow-elegant rounded-2xl overflow-hidden">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="heading-display text-lg sm:text-xl text-foreground mb-4 sm:mb-6 text-center">
          {language === 'fr' ? 'Carte Interactive du Maroc' : 'Interactive Map of Morocco'}
        </h3>
        
        {/* Interactive Morocco Map */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl overflow-hidden border border-stone-200">
          {/* Accurate Morocco outline background */}
          <div 
            className="absolute inset-0 opacity-20 rounded-xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Cpath d='M60 120 L80 100 L120 90 L160 85 L200 80 L250 82 L300 85 L350 90 L400 95 L430 110 L440 130 L435 150 L430 170 L425 190 L420 210 L410 230 L400 250 L380 270 L360 285 L340 295 L320 300 L300 305 L280 310 L260 315 L240 320 L220 325 L200 330 L180 335 L160 340 L140 345 L120 350 L100 355 L85 360 L75 350 L70 340 L65 330 L60 320 L55 310 L50 300 L45 280 L42 260 L40 240 L38 220 L35 200 L32 180 L30 160 L35 140 L45 125 Z M90 200 L85 220 L80 240 L75 260 L70 280 L65 300 L60 320 L55 340 L50 360 L45 380 L50 390 L60 385 L70 380 L80 375 L90 370 L100 365 L110 360 L120 355 L130 350 L140 345 L150 340 L160 335 L170 330 L180 325 L190 320 L200 315 L210 310 L220 305 L230 300 L240 295 L250 290 L260 285 L270 280 L280 275 L290 270 L300 265 L310 260 L320 255 L330 250 L340 245 L350 240 L360 235 L370 230 L380 225 L390 220 L400 215 L410 210 L415 200 L420 190 L425 180 L430 170 L435 160 L440 150 L435 140 L430 130 L420 125 L410 120 L400 115 L390 110 L380 105 L370 102 L360 100 L350 98 L340 96 L330 94 L320 92 L310 90 L300 88 L290 86 L280 84 L270 82 L260 80 L250 78 L240 76 L230 74 L220 72 L210 70 L200 68 L190 66 L180 64 L170 62 L160 60 L150 58 L140 56 L130 54 L120 52 L110 50 L100 52 L95 60 L92 70 L90 80 L88 90 L86 100 L84 110 L82 120 L80 130 L78 140 L76 150 L74 160 L72 170 L70 180 L75 190 L85 195 Z' fill='%23a8a29e' stroke='%23868479' stroke-width='1.5' opacity='0.6'/%3E%3C/svg%3E")`,
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
          
          {/* Minimal decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-stone-400 rounded-full opacity-40"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-stone-300 rounded-full opacity-30"></div>
        </div>

        <div className="text-center mt-4 sm:mt-6 text-sm text-refined">
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

