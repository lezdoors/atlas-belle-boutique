
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Heart } from 'lucide-react';
import { useSeasonalTheme } from '../seasonal/SeasonalThemeProvider';

interface Artisan {
  name: string;
  specialty: string;
  region: string;
  experience: string;
  story: string;
  image: string;
  signature: string;
}

const artisans: Artisan[] = [
  {
    name: "Lalla Malika",
    specialty: "Maîtresse de l'Huile d'Argan",
    region: "Essaouira",
    experience: "35 ans d'expertise",
    story: "Depuis trois générations, notre famille perpétue l'art ancestral de l'extraction d'huile d'argan. Chaque noix est sélectionnée à la main selon les critères transmis par ma grand-mère.",
    image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
    signature: "\"L'argan révèle ses secrets à celles qui savent l'écouter.\""
  },
  {
    name: "Sidi Mohammed",
    specialty: "Cultivateur de Roses de Damas",
    region: "Kelâat M'Gouna",
    experience: "28 ans dans les jardins",
    story: "Mes roses sont cueillies avant l'aube, quand la rosée contient encore toute la puissance parfumée de la nuit. C'est un dialogue quotidien avec la nature.",
    image: "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
    signature: "\"Chaque pétale porte l'âme de nos montagnes.\""
  },
  {
    name: "Lalla Aicha",
    specialty: "Experte en Plantes Médicinales",
    region: "Haut Atlas",
    experience: "40 ans de savoir traditionnel",
    story: "Je connais chaque plante de nos montagnes, leurs vertus, leur moment de récolte. Mon savoir vient de ma mère, qui l'avait reçu de la sienne.",
    image: "/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png",
    signature: "\"La montagne nous enseigne la patience et la sagesse.\""
  }
];

const ArtisanSpotlight: React.FC = () => {
  const [currentArtisan, setCurrentArtisan] = useState(0);
  const { theme } = useSeasonalTheme();
  
  const artisan = artisans[currentArtisan];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-seasonal-accent border border-seasonal-primary/20 rounded-full px-6 py-3 mb-8">
            <Heart className="h-5 w-5 text-seasonal-primary mr-3 animate-gentle-float" />
            <span className="text-sm font-medium text-seasonal-dark tracking-wide font-serif">
              Portraits d'Artisans • Savoir-Faire Ancestral
            </span>
          </div>
          
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-seasonal-dark mb-6">
            Nos Maîtres Artisans
          </h2>
          
          <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les visages et les histoires de ceux qui donnent vie à nos produits, 
            gardiens d'un savoir transmis de génération en génération.
          </p>
        </div>

        {/* Main Artisan Spotlight */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            
            {/* Artisan Image */}
            <div className="relative animate-elegant-fade-in">
              <div className="relative overflow-hidden rounded-3xl luxury-shadow group">
                <img 
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Artisan Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display font-bold text-xl text-seasonal-dark mb-2">
                          {artisan.name}
                        </h3>
                        <p className="font-serif text-seasonal-primary font-medium">
                          {artisan.specialty}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div className="flex items-center mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {artisan.region}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {artisan.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artisan Story */}
            <div className="space-y-8 animate-elegant-fade-in" style={{ animationDelay: '0.3s' }}>
              <div>
                <h3 className="font-display font-bold text-3xl text-seasonal-dark mb-6">
                  Une Histoire de Passion
                </h3>
                
                <p className="font-serif text-lg leading-relaxed text-gray-700 mb-8">
                  {artisan.story}
                </p>
                
                <blockquote className="border-l-4 border-seasonal-primary pl-6 italic">
                  <p className="font-serif text-xl text-seasonal-primary">
                    {artisan.signature}
                  </p>
                  <cite className="block text-right text-sm text-gray-500 mt-2">
                    — {artisan.name}
                  </cite>
                </blockquote>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="bg-seasonal-primary hover:bg-seasonal-dark text-white px-8 py-3 rounded-full font-serif tracking-wide transition-all duration-300"
                >
                  Découvrir Ses Créations
                </Button>
              </div>
            </div>
          </div>

          {/* Other Artisans Preview */}
          <div className="flex justify-center space-x-4">
            {artisans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentArtisan(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentArtisan 
                    ? 'bg-seasonal-primary scale-125' 
                    : 'bg-gray-300 hover:bg-seasonal-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSpotlight;
