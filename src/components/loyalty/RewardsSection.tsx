
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface RewardsSectionProps {
  userPoints: number;
}

const RewardsSection = ({ userPoints }: RewardsSectionProps) => {
  const { language } = useLanguage();

  const rewards = [
    {
      name: language === 'fr' ? 'Échantillon Huile d\'Argan' : 'Argan Oil Sample',
      points: 100,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300',
      available: true
    },
    {
      name: language === 'fr' ? 'Masque Ghassoul Deluxe' : 'Deluxe Ghassoul Mask',
      points: 250,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300',
      available: true
    },
    {
      name: language === 'fr' ? 'Rituel Hammam Complet' : 'Complete Hammam Ritual',
      points: 500,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300',
      available: userPoints >= 500
    },
    {
      name: language === 'fr' ? 'Consultation Beauté Privée' : 'Private Beauty Consultation',
      points: 750,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300',
      available: userPoints >= 750
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Récompenses Disponibles' : 'Available Rewards'}
          </h2>
          <p className="elegant-text text-clay-600 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Échangez vos points contre nos créations artisanales et expériences uniques'
              : 'Exchange your points for our artisanal creations and unique experiences'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, index) => (
            <Card key={index} className="overflow-hidden luxury-shadow border-0 rounded-2xl">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={reward.image} 
                  alt={reward.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-clay-800 mb-2">{reward.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-copper-600 font-bold">{reward.points} pts</span>
                  <Button 
                    size="sm"
                    disabled={!reward.available}
                    className={`rounded-full ${
                      reward.available 
                        ? 'copper-gradient text-white' 
                        : 'bg-pearl-300 text-clay-500'
                    }`}
                  >
                    {language === 'fr' ? 'Échanger' : 'Redeem'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
