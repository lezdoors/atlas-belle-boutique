
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TiersSectionProps {
  currentTier: string;
  userPoints: number;
}

const TiersSection = ({ currentTier, userPoints }: TiersSectionProps) => {
  const { language } = useLanguage();

  const tiers = [
    {
      name: language === 'fr' ? 'Argan' : 'Argan',
      threshold: 0,
      icon: Sparkles,
      color: 'from-amber-100 to-amber-200',
      benefits: language === 'fr' 
        ? ['5% de réduction', 'Échantillons gratuits', 'Livraison offerte dès 50€']
        : ['5% discount', 'Free samples', 'Free shipping from €50']
    },
    {
      name: language === 'fr' ? 'Ambre' : 'Amber',
      threshold: 250,
      icon: Crown,
      color: 'from-copper-100 to-copper-200',
      benefits: language === 'fr'
        ? ['10% de réduction', 'Accès prioritaire aux nouveautés', 'Cadeau d\'anniversaire', 'Consultations beauté gratuites']
        : ['10% discount', 'Priority access to new products', 'Birthday gift', 'Free beauty consultations']
    },
    {
      name: language === 'fr' ? 'Sahara' : 'Sahara',
      threshold: 750,
      icon: Star,
      color: 'from-clay-100 to-clay-200',
      benefits: language === 'fr'
        ? ['15% de réduction', 'Produits exclusifs', 'Livraison express gratuite', 'Événements VIP', 'Conseillère beauté dédiée']
        : ['15% discount', 'Exclusive products', 'Free express delivery', 'VIP events', 'Dedicated beauty advisor']
    }
  ];

  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Nos Niveaux de Privilèges' : 'Our Privilege Levels'}
          </h2>
          <p className="elegant-text text-clay-600 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Plus vous explorez nos trésors, plus vous accédez à des privilèges exclusifs'
              : 'The more you explore our treasures, the more you access exclusive privileges'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            const isCurrentTier = tier.name === currentTier;
            const isUnlocked = userPoints >= tier.threshold;
            
            return (
              <Card 
                key={tier.name} 
                className={`relative overflow-hidden luxury-shadow border-0 ${
                  isCurrentTier ? 'ring-2 ring-copper-400 scale-105' : ''
                } ${isUnlocked ? '' : 'opacity-75'}`}
              >
                <div className={`bg-gradient-to-br ${tier.color} p-6`}>
                  <div className="text-center mb-4">
                    <IconComponent className={`h-12 w-12 mx-auto mb-3 ${
                      isUnlocked ? 'text-copper-600' : 'text-clay-400'
                    }`} />
                    <h3 className="font-display font-bold text-xl text-clay-800">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-clay-600">
                      {language === 'fr' ? 'À partir de' : 'From'} {tier.threshold} {language === 'fr' ? 'points' : 'points'}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-clay-700">
                        <span className="w-2 h-2 bg-copper-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  {isCurrentTier && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-copper-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {language === 'fr' ? 'Actuel' : 'Current'}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TiersSection;
