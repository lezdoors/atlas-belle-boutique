import { Shield, Phone, RotateCcw, Award, Leaf, Utensils } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustBadges = () => {
  const { language } = useLanguage();

  const badges = [
    {
      icon: Shield,
      titleFr: 'Authenticité Garantie',
      titleEn: 'Authenticity Guaranteed',
      descriptionFr: 'Certificat d\'origine avec chaque pièce',
      descriptionEn: 'Certificate of origin with each piece',
      color: 'emerald'
    },
    {
      icon: Utensils,
      titleFr: 'Sans Danger Alimentaire',
      titleEn: 'Food Safe Certified',
      descriptionFr: 'Glaçures non-toxiques, conformes UE',
      descriptionEn: 'Non-toxic glazes, EU compliant',
      color: 'blue'
    },
    {
      icon: RotateCcw,
      titleFr: 'Retour 14 Jours',
      titleEn: '14-Day Returns',
      descriptionFr: 'Protection casse incluse',
      descriptionEn: 'Breakage protection included',
      color: 'amber'
    },
    {
      icon: Phone,
      titleFr: 'Support US Dédié',
      titleEn: 'Dedicated US Support',
      descriptionFr: '+1 (555) 123-CERAMIC',
      descriptionEn: '+1 (555) 123-CERAMIC',
      color: 'purple'
    },
    {
      icon: Leaf,
      titleFr: 'Emballage Eco',
      titleEn: 'Eco Packaging',
      descriptionFr: 'Matériaux recyclables uniquement',
      descriptionEn: 'Recyclable materials only',
      color: 'green'
    },
    {
      icon: Award,
      titleFr: 'Direct Artisan',
      titleEn: 'Direct from Artisan',
      descriptionFr: 'Aucun intermédiaire',
      descriptionEn: 'No middleman markup',
      color: 'rose'
    }
  ];

  return (
    <div className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-stone-900 mb-4">
            {language === 'fr' ? 'Notre Engagement Qualité' : 'Our Quality Commitment'}
          </h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Chaque pièce Perle de l’Atlas est accompagnée de garanties qui reflètent notre engagement envers l\'excellence artisanale.'
              : 'Every Perle de l’Atlas piece comes with guarantees that reflect our commitment to artisanal excellence.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${badge.color}-100 flex items-center justify-center`}>
                <badge.icon className={`w-8 h-8 text-${badge.color}-600`} />
              </div>
              <h3 className="font-serif text-lg text-stone-900 mb-2">
                {language === 'fr' ? badge.titleFr : badge.titleEn}
              </h3>
              <p className="text-sm text-stone-600 font-light">
                {language === 'fr' ? badge.descriptionFr : badge.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Positioning Message */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-stone-900 mb-4">
              {language === 'fr' ? 'L\'Excellence Sans Compromis' : 'Excellence Without Compromise'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-serif text-amber-600 mb-2">200+</div>
                <p className="text-sm text-stone-600 font-light">
                  {language === 'fr' ? 'Familles d\'artisans partenaires' : 'Partner artisan families'}
                </p>
              </div>
              <div>
                <div className="text-2xl font-serif text-amber-600 mb-2">50+</div>
                <p className="text-sm text-stone-600 font-light">
                  {language === 'fr' ? 'Années de tradition céramique' : 'Years of ceramic tradition'}
                </p>
              </div>
              <div>
                <div className="text-2xl font-serif text-amber-600 mb-2">99.8%</div>
                <p className="text-sm text-stone-600 font-light">
                  {language === 'fr' ? 'Livraisons sans casse' : 'Breakage-free deliveries'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;