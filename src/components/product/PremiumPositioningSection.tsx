import { Crown, Users, Sparkles, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PremiumPositioningSection = () => {
  const { language } = useLanguage();

  const comparisons = [
    {
      feature: language === 'fr' ? 'Origine' : 'Origin',
      maisonChapuis: language === 'fr' ? 'Direct des ateliers marocains' : 'Direct from Moroccan workshops',
      massMarket: language === 'fr' ? 'Production de masse en usine' : 'Mass factory production',
      icon: Crown
    },
    {
      feature: language === 'fr' ? 'Fabrication' : 'Craftsmanship',
      maisonChapuis: language === 'fr' ? 'Façonné à la main par maîtres artisans' : 'Hand-crafted by master artisans',
      massMarket: language === 'fr' ? 'Moulage industriel automatisé' : 'Automated industrial molding',
      icon: Users
    },
    {
      feature: language === 'fr' ? 'Durabilité' : 'Durability',
      maisonChapuis: language === 'fr' ? 'Pièces d\'héritage (50+ ans)' : 'Heirloom pieces (50+ years)',
      massMarket: language === 'fr' ? 'Remplacement fréquent (2-5 ans)' : 'Frequent replacement (2-5 years)',
      icon: Sparkles
    },
    {
      feature: language === 'fr' ? 'Valeur' : 'Value',
      maisonChapuis: language === 'fr' ? 'Investissement qui s\'apprécie' : 'Investment that appreciates',
      massMarket: language === 'fr' ? 'Dépréciation immédiate' : 'Immediate depreciation',
      icon: TrendingUp
    }
  ];

  const valuePropositions = [
    {
      titleFr: 'Curation Française',
      titleEn: 'French Curation',
      descriptionFr: 'Sélection exigeante selon les standards du savoir-vivre parisien',
      descriptionEn: 'Rigorous selection according to Parisian savoir-vivre standards'
    },
    {
      titleFr: 'Maîtrise Marocaine',
      titleEn: 'Moroccan Mastery',
      descriptionFr: 'Techniques séculaires transmises de génération en génération',
      descriptionEn: 'Centuries-old techniques passed down through generations'
    },
    {
      titleFr: 'Tables Américaines',
      titleEn: 'American Tables',
      descriptionFr: 'Adaptées aux modes de vie et d\'entertaining contemporains',
      descriptionEn: 'Adapted to contemporary lifestyle and entertaining'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6">
            {language === 'fr' ? 'Pourquoi Choisir Perle de l’Atlas' : 'Why Choose Perle de l’Atlas'}
          </h2>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'La différence entre posséder de la vaisselle et investir dans l\'art de vivre'
              : 'The difference between owning tableware and investing in the art of living'
            }
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {valuePropositions.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">
                {language === 'fr' ? prop.titleFr : prop.titleEn}
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                {language === 'fr' ? prop.descriptionFr : prop.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
          <h3 className="font-serif text-2xl text-stone-900 text-center mb-12">
            {language === 'fr' ? 'Perle de l’Atlas vs. Alternatives' : 'Perle de l’Atlas vs. Alternatives'}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-4 px-6 font-serif text-lg text-stone-900">
                    {language === 'fr' ? 'Critère' : 'Feature'}
                  </th>
                  <th className="text-center py-4 px-6 font-serif text-lg text-stone-900 bg-amber-50 rounded-t-xl">
                    Maison Chapuis
                  </th>
                  <th className="text-center py-4 px-6 font-serif text-lg text-stone-600">
                    {language === 'fr' ? 'Marché de Masse' : 'Mass Market'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, index) => (
                  <tr key={index} className="border-b border-stone-200">
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-3">
                        <comp.icon className="w-5 h-5 text-stone-600" />
                        <span className="font-medium text-stone-900">{comp.feature}</span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center bg-amber-50">
                      <span className="text-stone-900 font-light">{comp.maisonChapuis}</span>
                      <div className="text-2xl text-green-600 mt-2">✓</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="text-stone-600 font-light">{comp.massMarket}</span>
                      <div className="text-2xl text-stone-400 mt-2">○</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Investment Message */}
        <div className="mt-16 bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-12 text-center text-white">
          <h3 className="font-serif text-3xl mb-6">
            {language === 'fr' ? 'Un Investissement, Pas Une Dépense' : 'An Investment, Not an Expense'}
          </h3>
          <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto mb-8">
            {language === 'fr'
              ? 'Nos pièces authentiques prennent de la valeur avec le temps, contrairement aux alternatives industrielles qui se déprécient immédiatement.'
              : 'Our authentic pieces appreciate in value over time, unlike industrial alternatives that depreciate immediately.'
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif text-amber-400 mb-2">€89</div>
              <p className="text-sm font-light">
                {language === 'fr' ? 'Prix moyen par pièce' : 'Average price per piece'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-serif text-amber-400 mb-2">50+</div>
              <p className="text-sm font-light">
                {language === 'fr' ? 'Années de durabilité' : 'Years of durability'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-serif text-amber-400 mb-2">€1.78</div>
              <p className="text-sm font-light">
                {language === 'fr' ? 'Coût par année' : 'Cost per year'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPositioningSection;