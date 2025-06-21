
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Users, Calendar, Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorksSection = () => {
  const { language } = useLanguage();

  const steps = [
    {
      icon: ShoppingBag,
      title: language === 'fr' ? 'Achetez' : 'Shop',
      desc: language === 'fr' ? 'Gagnez 1 point par euro dépensé' : 'Earn 1 point per euro spent'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Parrainez' : 'Refer',
      desc: language === 'fr' ? 'Invitez vos amis et gagnez 50 points' : 'Invite friends and earn 50 points'
    },
    {
      icon: Calendar,
      title: language === 'fr' ? 'Célébrez' : 'Celebrate',
      desc: language === 'fr' ? 'Recevez un cadeau pour votre anniversaire' : 'Receive a gift on your birthday'
    },
    {
      icon: Gift,
      title: language === 'fr' ? 'Échangez' : 'Redeem',
      desc: language === 'fr' ? 'Utilisez vos points pour des récompenses' : 'Use your points for rewards'
    }
  ];

  return (
    <section className="py-16 bg-copper-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Comment ça fonctionne' : 'How it works'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-clay-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="elegant-text text-clay-600">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
