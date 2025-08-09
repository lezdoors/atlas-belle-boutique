import { useState } from 'react';
import { Check, Package, Plane, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ShippingStep {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  icon: React.ComponentType<{ className?: string }>;
  estimatedDays: string;
  completed?: boolean;
  current?: boolean;
}

const PremiumShippingTracker = ({ orderStatus = 'crafting' }: { orderStatus?: string }) => {
  const { language } = useLanguage();

  const shippingSteps: ShippingStep[] = [
    {
      id: 'crafting',
      titleFr: 'Création Artisanale',
      titleEn: 'Artisan Crafting',
      descriptionFr: 'Votre pièce est façonnée à la main par nos maîtres artisans marocains',
      descriptionEn: 'Your piece is being hand-crafted by our master Moroccan artisans',
      icon: ({ className }) => (
        <div className={`rounded-full bg-amber-100 p-3 ${className}`}>
          <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      ),
      estimatedDays: '3-5 jours',
      completed: orderStatus !== 'crafting',
      current: orderStatus === 'crafting'
    },
    {
      id: 'packaging',
      titleFr: 'Emballage Protégé',
      titleEn: 'Protected Packaging',
      descriptionFr: 'Emballé à la main au Maroc avec notre protection spéciale céramique',
      descriptionEn: 'Hand-wrapped in Morocco with our special ceramic protection',
      icon: Package,
      estimatedDays: '1 jour',
      completed: ['shipped', 'delivered'].includes(orderStatus),
      current: orderStatus === 'packaging'
    },
    {
      id: 'shipped',
      titleFr: 'En Route',
      titleEn: 'En Route',
      descriptionFr: 'Votre trésor voyage vers votre foyer avec suivi premium',
      descriptionEn: 'Your treasure is traveling to your home with premium tracking',
      icon: Plane,
      estimatedDays: '3-4 jours',
      completed: orderStatus === 'delivered',
      current: orderStatus === 'shipped'
    },
    {
      id: 'delivered',
      titleFr: 'Chez Vous',
      titleEn: 'At Your Home',
      descriptionFr: 'Prêt à enrichir votre art de vivre quotidien',
      descriptionEn: 'Ready to enrich your daily art of living',
      icon: Home,
      estimatedDays: 'Arrivé',
      completed: orderStatus === 'delivered',
      current: false
    }
  ];

  return (
    <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl text-stone-900 mb-3">
          {language === 'fr' ? 'Votre Voyage Artisanal' : 'Your Artisan Journey'}
        </h3>
        <p className="text-stone-600 font-light leading-relaxed">
          {language === 'fr'
            ? 'Chaque pièce Perle de l’Atlas suit un parcours de création unique, de l\'atelier marocain à votre table.'
            : 'Each Perle de l’Atlas piece follows a unique creation journey, from the Moroccan workshop to your table.'
          }
        </p>
      </div>

      <div className="space-y-6">
        {shippingSteps.map((step, index) => (
          <div key={step.id} className="flex items-start space-x-4">
            {/* Icon */}
            <div className="flex-shrink-0 relative">
              {step.completed ? (
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
              ) : step.current ? (
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center animate-pulse">
                  <step.icon className="w-6 h-6 text-amber-600" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-stone-400" />
                </div>
              )}
              
              {/* Connecting Line */}
              {index < shippingSteps.length - 1 && (
                <div className="absolute top-12 left-6 w-px h-8 bg-stone-200"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-stone-900">
                  {language === 'fr' ? step.titleFr : step.titleEn}
                </h4>
                <span className="text-sm text-stone-500 font-light">
                  {step.estimatedDays}
                </span>
              </div>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                {language === 'fr' ? step.descriptionFr : step.descriptionEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Message */}
      <div className="mt-8 pt-6 border-t border-stone-200">
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-amber-900">
                {language === 'fr' ? 'Garantie Protection Céramique' : 'Ceramic Protection Guarantee'}
              </p>
              <p className="text-xs text-amber-700 font-light">
                {language === 'fr'
                  ? 'Emballage spécialisé éco-responsable • Remplacement gratuit si casse'
                  : 'Eco-responsible specialized packaging • Free replacement if broken'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumShippingTracker;