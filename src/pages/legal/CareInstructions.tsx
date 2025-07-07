import MaisonChapuisHeader from '@/components/navigation/MaisonChapuisHeader';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const CareInstructions = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonChapuisHeader />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-stone-900 mb-4">
              {language === 'fr' ? 'Guide d\'Entretien' : 'Care Instructions'}
            </h1>
            <p className="text-lg text-stone-600">
              {language === 'fr' 
                ? 'Comment prendre soin de vos céramiques marocaines'
                : 'How to care for your Moroccan ceramics'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Tagines */}
            <div className="bg-stone-50 rounded-xl p-8">
              <h2 className="text-2xl font-medium text-stone-900 mb-6">
                {language === 'fr' ? 'Tagines' : 'Tagines'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">
                    {language === 'fr' ? 'Premier Usage' : 'First Use'}
                  </h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• {language === 'fr' ? 'Rincer à l\'eau tiède avant la première utilisation' : 'Rinse with warm water before first use'}</li>
                    <li>• {language === 'fr' ? 'Sécher complètement avant le rangement' : 'Dry completely before storing'}</li>
                    <li>• {language === 'fr' ? 'Éviter les chocs thermiques brutaux' : 'Avoid sudden temperature changes'}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">
                    {language === 'fr' ? 'Nettoyage' : 'Cleaning'}
                  </h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• {language === 'fr' ? 'Laver à la main uniquement' : 'Hand wash only'}</li>
                    <li>• {language === 'fr' ? 'Utiliser de l\'eau tiède et du savon doux' : 'Use warm water and mild soap'}</li>
                    <li>• {language === 'fr' ? 'Éviter les détergents abrasifs' : 'Avoid abrasive cleaners'}</li>
                    <li>• {language === 'fr' ? 'Ne pas utiliser au lave-vaisselle' : 'Not dishwasher safe'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tea Glasses */}
            <div className="bg-stone-50 rounded-xl p-8">
              <h2 className="text-2xl font-medium text-stone-900 mb-6">
                {language === 'fr' ? 'Verres à Thé' : 'Tea Glasses'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">
                    {language === 'fr' ? 'Utilisation' : 'Usage'}
                  </h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• {language === 'fr' ? 'Parfait pour le thé chaud et les boissons chaudes' : 'Perfect for hot tea and warm beverages'}</li>
                    <li>• {language === 'fr' ? 'Tenir par le rebord pour éviter la chaleur' : 'Hold by the rim to avoid heat'}</li>
                    <li>• {language === 'fr' ? 'Préchauffer le verre avant d\'ajouter le thé chaud' : 'Preheat glass before adding hot tea'}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">
                    {language === 'fr' ? 'Entretien' : 'Maintenance'}
                  </h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• {language === 'fr' ? 'Rincer immédiatement après usage' : 'Rinse immediately after use'}</li>
                    <li>• {language === 'fr' ? 'Laver délicatement à la main' : 'Wash gently by hand'}</li>
                    <li>• {language === 'fr' ? 'Sécher avec un linge doux' : 'Dry with a soft cloth'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* General Care */}
          <div className="prose prose-stone max-w-none">
            <h2 className="text-2xl font-medium text-stone-900 mb-6">
              {language === 'fr' ? 'Conseils Généraux d\'Entretien' : 'General Care Guidelines'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-4">
                  {language === 'fr' ? 'À Faire' : 'Do'}
                </h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    {language === 'fr' 
                      ? 'Manipuler avec précaution - chaque pièce est unique' 
                      : 'Handle with care - each piece is unique'
                    }
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    {language === 'fr' 
                      ? 'Ranger dans un endroit sec et à température stable' 
                      : 'Store in a dry place at stable temperature'
                    }
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    {language === 'fr' 
                      ? 'Utiliser des sous-plats pour protéger les surfaces' 
                      : 'Use trivets to protect surfaces'
                    }
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    {language === 'fr' 
                      ? 'Apprécier les variations naturelles de la céramique artisanale' 
                      : 'Appreciate natural variations in handmade ceramics'
                    }
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-4">
                  {language === 'fr' ? 'À Éviter' : 'Don\'t'}
                </h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    {language === 'fr' 
                      ? 'Utiliser au micro-ondes ou au four' 
                      : 'Use in microwave or oven'
                    }
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    {language === 'fr' 
                      ? 'Exposer à des changements de température extrêmes' 
                      : 'Expose to extreme temperature changes'
                    }
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    {language === 'fr' 
                      ? 'Utiliser des produits chimiques agressifs' 
                      : 'Use harsh chemicals'
                    }
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    {language === 'fr' 
                      ? 'Frapper ou cogner contre des surfaces dures' 
                      : 'Hit or knock against hard surfaces'
                    }
                  </li>
                </ul>
              </div>
            </div>

            {/* Special Notes */}
            <div className="border-t border-stone-200 pt-12 mt-12">
              <h2 className="text-2xl font-medium text-stone-900 mb-6">
                {language === 'fr' ? 'Notes Importantes' : 'Important Notes'}
              </h2>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-amber-800 mb-2">
                  {language === 'fr' ? 'Caractère Artisanal' : 'Handcrafted Nature'}
                </h3>
                <p className="text-amber-700">
                  {language === 'fr' 
                    ? 'Nos céramiques sont entièrement faites à la main. Les petites imperfections, variations de couleur et asymétries légères sont normales et témoignent de l\'authenticité artisanale de chaque pièce.'
                    : 'Our ceramics are entirely handmade. Small imperfections, color variations, and slight asymmetries are normal and testify to the artisanal authenticity of each piece.'
                  }
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-800 mb-2">
                  {language === 'fr' ? 'Longévité' : 'Longevity'}
                </h3>
                <p className="text-blue-700">
                  {language === 'fr' 
                    ? 'Avec un entretien approprié, vos céramiques Maison Chapuis vous accompagneront pendant des décennies, développant une patine unique avec le temps.'
                    : 'With proper care, your Maison Chapuis ceramics will last for decades, developing a unique patina over time.'
                  }
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center mt-12 pt-8 border-t border-stone-200">
              <h3 className="text-lg font-medium text-stone-900 mb-4">
                {language === 'fr' ? 'Besoin d\'Aide ?' : 'Need Help?'}
              </h3>
              <p className="text-stone-600 mb-4">
                {language === 'fr' 
                  ? 'Notre équipe d\'experts est disponible pour répondre à vos questions sur l\'entretien.'
                  : 'Our team of experts is available to answer your care questions.'
                }
              </p>
              <p className="text-stone-900 font-medium">Email: care@maisonchapuis.com</p>
            </div>
          </div>
        </div>
      </div>

      <ModernElegantFooter />
    </div>
  );
};

export default CareInstructions;