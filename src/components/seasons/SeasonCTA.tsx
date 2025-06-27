
import { Button } from '@/components/ui/button';

interface SeasonCTAProps {
  language: 'fr' | 'en';
}

const SeasonCTA = ({ language }: SeasonCTAProps) => {
  return (
    <div className="text-center">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 luxury-shadow max-w-2xl mx-auto hover-scale">
        <h3 className="font-display font-bold text-2xl lg:text-3xl text-clay-800 mb-4">
          {language === 'fr' ? 'Votre Beauté au Rythme des Saisons' : 'Your Beauty Following the Seasons'}
        </h3>
        <p className="elegant-text text-clay-600 mb-6 text-lg">
          {language === 'fr' 
            ? 'Laissez-vous guider par la sagesse ancestrale du Maroc et découvrez les rituels adaptés à chaque moment de l\'année'
            : 'Let yourself be guided by the ancestral wisdom of Morocco and discover rituals adapted to each moment of the year'
          }
        </p>
        <Button className="copper-gradient text-white px-8 py-3 rounded-full font-medium tracking-wide border-0 hover-scale">
          {language === 'fr' ? 'Découvrir Tous nos Rituels' : 'Discover All Our Rituals'}
        </Button>
      </div>
    </div>
  );
};

export default SeasonCTA;
