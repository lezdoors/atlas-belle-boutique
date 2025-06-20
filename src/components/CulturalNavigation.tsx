
import { useState } from 'react';
import { ChevronDown, MapPin, Mountain, Waves, Sun, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const CulturalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const regions = [
    {
      id: 'atlas',
      name: language === 'fr' ? 'Montagnes de l\'Atlas' : 'Atlas Mountains',
      description: language === 'fr' ? 'Rose de Damas, herbes de montagne, eaux alpines' : 'Damask Rose, mountain herbs, alpine waters',
      icon: Mountain,
      image: '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      climate: language === 'fr' ? 'Climat montagnard frais' : 'Cool mountain climate',
      traditions: language === 'fr' ? 'Distillation traditionnelle de rose' : 'Traditional rose distillation'
    },
    {
      id: 'sahara',
      name: language === 'fr' ? 'Désert du Sahara' : 'Sahara Desert',
      description: language === 'fr' ? 'Huile de figue de Barbarie, minéraux du désert, baumes protecteurs' : 'Prickly pear oil, desert minerals, protective balms',
      icon: Sun,
      image: '/lovable-uploads/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png',
      climate: language === 'fr' ? 'Climat aride et sec' : 'Arid and dry climate',
      traditions: language === 'fr' ? 'Protection solaire ancestrale' : 'Ancestral sun protection'
    },
    {
      id: 'atlantic',
      name: language === 'fr' ? 'Côte Atlantique' : 'Atlantic Coast',
      description: language === 'fr' ? 'Extraits d\'algues, sels marins, parfums de brise côtière' : 'Seaweed extracts, marine salts, coastal breeze scents',
      icon: Waves,
      image: '/lovable-uploads/073dee32-d52c-4b0f-9910-d5d85832b4ef.png',
      climate: language === 'fr' ? 'Climat océanique tempéré' : 'Temperate oceanic climate',
      traditions: language === 'fr' ? 'Soins marins traditionnels' : 'Traditional marine treatments'
    },
    {
      id: 'middle-atlas',
      name: language === 'fr' ? 'Moyen Atlas' : 'Middle Atlas',
      description: language === 'fr' ? 'Argile rouge, miel de montagne, plantes médicinales' : 'Red clay, mountain honey, medicinal plants',
      icon: TreePine,
      image: '/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png',
      climate: language === 'fr' ? 'Climat continental montagnard' : 'Continental mountain climate',
      traditions: language === 'fr' ? 'Phytothérapie berbère' : 'Berber phytotherapy'
    }
  ];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center space-x-2 text-sand-700 hover:text-amber-600 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MapPin className="h-4 w-4" />
        <span>{language === 'fr' ? 'Explorer par Région' : 'Shop by Region'}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-md rounded-2xl luxury-shadow border border-sand-100 z-50">
          <div className="p-6">
            <h3 className="font-display font-bold text-lg text-clay-800 mb-4">
              {language === 'fr' ? 'Découvrez nos Régions' : 'Discover Our Regions'}
            </h3>
            <div className="space-y-3">
              {regions.map((region) => {
                const IconComponent = region.icon;
                return (
                  <Card 
                    key={region.id} 
                    className="group hover-scale cursor-pointer border-0 bg-white/80 hover:bg-copper-50 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 rounded-full bg-copper-100 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-copper-600" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-display font-semibold text-clay-800 mb-1 group-hover:text-copper-600 transition-colors">
                            {region.name}
                          </h4>
                          <p className="text-sm text-clay-600 leading-relaxed">
                            {region.description}
                          </p>
                          <div className="mt-2 flex items-center text-xs text-clay-500">
                            <span>{region.climate}</span>
                            <span className="mx-2">•</span>
                            <span>{region.traditions}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-6 text-center">
              <Button 
                className="copper-gradient text-white rounded-full px-6"
                onClick={() => setIsOpen(false)}
              >
                {language === 'fr' ? 'Voir la Carte Interactive' : 'View Interactive Map'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CulturalNavigation;
