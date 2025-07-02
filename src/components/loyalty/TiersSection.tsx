import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Crown, Diamond } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TiersSectionProps {
  currentTier: string;
  userPoints: number;
}

const TiersSection = ({ currentTier, userPoints }: TiersSectionProps) => {
  const { language } = useLanguage();

  const tiers = [
    {
      name: language === 'fr' ? 'Perle' : 'Pearl',
      threshold: 0,
      icon: Sparkles,
      spending: language === 'fr' ? 'Dépense 0,85 €' : 'Spend €0.85',
      benefits: language === 'fr' 
        ? ['1 x Point par Multiple', '100 Points de Bonus', '10 Points par Entry']
        : ['1 x Point Multiple', '100 Bonus Points', '10 Points per Entry']
    },
    {
      name: language === 'fr' ? 'Saphir' : 'Sapphire',
      threshold: 250,
      icon: Crown,
      spending: language === 'fr' ? 'Dépense 250,82 €' : 'Spend €250.82',
      benefits: language === 'fr'
        ? ['1.25 x Points Multiples', '500 Points de Bonus', '50 Points par Entry', 'Livraison UE Gratuite']
        : ['1.25 x Points Multiple', '500 Bonus Points', '50 Points per Entry', 'Free EU Shipping']
    },
    {
      name: language === 'fr' ? 'Diamant' : 'Diamond',
      threshold: 750,
      icon: Diamond,
      spending: language === 'fr' ? 'Dépense 426,37 €' : 'Spend €426.37',
      benefits: language === 'fr'
        ? ['1.5 x Points Multiples', '800 Points de Bonus', '100 Points par Entry', 'Livraison UE Gratuite', 'Plantes et Pots Exclusifs']
        : ['1.5 x Points Multiple', '800 Bonus Points', '100 Points per Entry', 'Free EU Shipping', 'Exclusive Plants and Flowerpots']
    }
  ];

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-refined">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-6">
            {language === 'fr' ? 'Niveaux de Récompenses' : 'Reward Tiers'}
          </h2>
          <p className="body-text text-lg max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Plus vous explorez nos créations, plus vous accédez à des privilèges exclusifs'
              : 'The more you explore our creations, the more exclusive privileges you unlock'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            const isCurrentTier = tier.name.toLowerCase() === currentTier.toLowerCase();
            const isUnlocked = userPoints >= tier.threshold;

            return (
              <Card 
                key={tier.name} 
                className={`card-editorial relative transition-all duration-300 ${
                  isCurrentTier ? 'ring-1 ring-stone-300 shadow-luxury' : 'hover:shadow-refined'
                } ${isUnlocked ? '' : 'opacity-60'}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <IconComponent className="h-8 w-8 text-stone-500 mx-auto mb-4" />
                    <h3 className="heading-display text-2xl text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-refined">
                      {tier.spending}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-start text-sm text-refined">
                        <div className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-left">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {isCurrentTier && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-stone-800 text-white px-3 py-1 text-xs font-light">
                        {language === 'fr' ? 'Actuel' : 'Current'}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How to use points section */}
        <div className="mt-20 text-center fade-in-up">
          <p className="body-text text-lg mb-4">
            {language === 'fr' ? 'Comment utiliser vos points' : 'How to use your points'}
          </p>
          <p className="text-refined text-sm">
            {language === 'fr'
              ? 'Gagnez 1 Point par 0,85 € Dépensé'
              : 'Earn 1 Point per €0.85 Spent'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default TiersSection;