
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Users, Globe, Package } from 'lucide-react';

const WholesaleBenefits = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: Package,
      title: language === 'fr' ? 'Produits Authentiques' : 'Authentic Products',
      description: language === 'fr'
        ? 'Directement sourcés auprès de nos coopératives marocaines'
        : 'Directly sourced from our Moroccan cooperatives'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Support Dédié' : 'Dedicated Support',
      description: language === 'fr'
        ? 'Accompagnement personnalisé et formation produits'
        : 'Personalized support and product training'
    },
    {
      icon: Building2,
      title: language === 'fr' ? 'Marges Attractives' : 'Attractive Margins',
      description: language === 'fr'
        ? 'Tarifs dégressifs selon les volumes commandés'
        : 'Volume-based pricing with attractive margins'
    },
    {
      icon: Globe,
      title: language === 'fr' ? 'Livraison Mondiale' : 'Worldwide Shipping',
      description: language === 'fr'
        ? 'Expédition sécurisée dans le monde entier'
        : 'Secure shipping worldwide'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-clay-800 mb-12 text-center">
            {language === 'fr' ? 'Pourquoi choisir Perle d\'Atlas ?' : 'Why choose Perle d\'Atlas?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-100 rounded-full text-copper-600 mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-clay-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="elegant-text text-clay-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleBenefits;
