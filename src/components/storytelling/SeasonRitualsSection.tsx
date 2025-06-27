
import React from 'react';
import { useSeasonalTheme } from '../seasonal/SeasonalThemeProvider';
import { Button } from '@/components/ui/button';
import { Sparkles, Leaf, Sun, MapPin } from 'lucide-react';

const SeasonRitualsSection: React.FC = () => {
  const { currentSeason, theme } = useSeasonalTheme();

  const seasonalRituals = {
    spring: {
      icon: Leaf,
      ritual: "Rituel de Renaissance",
      description: "Purification à l'eau de rose damascena cueillie à l'aube dans les jardins de Kelâat M'Gouna",
      steps: [
        "Nettoyage doux à l'eau de rose",
        "Gommage aux pétales de rose séchées",
        "Masque revitalisant au miel de thym"
      ],
      philosophy: "Comme la nature qui renaît, votre peau retrouve sa fraîcheur printanière."
    },
    summer: {
      icon: Sun,
      ritual: "Rituel de Protection",
      description: "Bouclier naturel à l'huile d'argan et à l'aloe vera des oasis du Sud",
      steps: [
        "Préparation à l'huile d'argan pure",
        "Application d'aloe vera frais",
        "Scellement aux huiles essentielles"
      ],
      philosophy: "Protection et nourrissement sous le soleil généreux du Maroc."
    },
    autumn: {
      icon: MapPin,
      ritual: "Rituel de Récolte",
      description: "Régénération aux fruits de saison et aux épices précieuses d'Orient",
      steps: [
        "Exfoliation aux graines de figue de barbarie",
        "Masque nourrissant au miel et cannelle",
        "Huile réparatrice aux amandes douces"
      ],
      philosophy: "Comme les récoltes d'automne, votre peau accumule richesse et profondeur."
    },
    winter: {
      icon: Sparkles,
      ritual: "Rituel de Contemplation",
      description: "Cocooning profond aux baumes précieux et aux essences méditerranéennes",
      steps: [
        "Baume nourrissant au beurre de karité",
        "Sérum réparateur à l'huile d'olive",
        "Masque de nuit aux essences de lavande"
      ],
      philosophy: "Dans le silence de l'hiver, votre peau trouve sa sérénité parfaite."
    }
  };

  const currentRitual = seasonalRituals[currentSeason];
  const IconComponent = currentRitual.icon;

  return (
    <section className="py-24 bg-seasonal-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-seasonal-accent border border-seasonal-primary/20 rounded-full px-6 py-3 mb-8">
            <IconComponent className="h-5 w-5 text-seasonal-primary mr-3 animate-gentle-float" />
            <span className="text-sm font-medium text-seasonal-dark tracking-wide font-serif">
              Les Rituels de Saison • {theme.mood}
            </span>
          </div>
          
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-seasonal-dark mb-6 animate-elegant-fade-in">
            {currentRitual.ritual}
          </h2>
          
          <p className="font-serif text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-4 animate-elegant-fade-in" 
             style={{ animationDelay: '0.2s' }}>
            {currentRitual.description}
          </p>
          
          <p className="font-serif italic text-lg text-seasonal-primary max-w-2xl mx-auto animate-elegant-fade-in"
             style={{ animationDelay: '0.4s' }}>
            "{currentRitual.philosophy}"
          </p>
        </div>

        {/* Ritual Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {currentRitual.steps.map((step, index) => (
              <div 
                key={index}
                className="premium-card rounded-3xl p-8 text-center hover-sophisticate animate-elegant-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-seasonal-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-seasonal-dark mb-4">
                  Étape {index + 1}
                </h3>
                <p className="font-serif text-gray-600 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-elegant-fade-in" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg"
              className="bg-seasonal-primary hover:bg-seasonal-dark text-white px-12 py-4 rounded-full font-serif text-lg tracking-wide transition-all duration-300 hover:shadow-2xl"
            >
              Découvrir le Rituel Complet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonRitualsSection;
