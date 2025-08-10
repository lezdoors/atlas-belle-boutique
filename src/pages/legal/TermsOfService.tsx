import MaisonChapuisHeader from '@/components/navigation/MaisonChapuisHeader';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfService = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonChapuisHeader />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-stone-900 mb-4">
              {language === 'fr' ? 'Conditions de Service' : 'Terms of Service'}
            </h1>
            <p className="text-lg text-stone-600">
              {language === 'fr' 
                ? 'Dernière mise à jour: 7 janvier 2025'
                : 'Last updated: January 7, 2025'
              }
            </p>
          </div>

          <div className="prose prose-stone max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '1. Acceptation des Conditions' : '1. Acceptance of Terms'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'En accédant et en utilisant le site web de Perle de l’Atlas, vous acceptez d\'être lié par les présentes conditions de service et toutes les lois et réglementations applicables.'
                  : 'By accessing and using the Perle de l’Atlas website, you agree to be bound by these terms of service and all applicable laws and regulations.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '2. Utilisation du Site' : '2. Use of Website'}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {language === 'fr' 
                  ? 'Vous pouvez utiliser notre site web pour:'
                  : 'You may use our website to:'
                }
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-600">
                <li>{language === 'fr' ? 'Parcourir et acheter nos produits céramiques artisanaux' : 'Browse and purchase our artisanal ceramic products'}</li>
                <li>{language === 'fr' ? 'Créer un compte client' : 'Create a customer account'}</li>
                <li>{language === 'fr' ? 'Accéder aux informations sur nos produits et services' : 'Access information about our products and services'}</li>
                <li>{language === 'fr' ? 'Contacter notre service client' : 'Contact our customer service'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '3. Commandes et Paiements' : '3. Orders and Payments'}
              </h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  {language === 'fr' 
                    ? 'Toutes les commandes sont soumises à acceptation et à la disponibilité des produits. Nous nous réservons le droit de refuser toute commande.'
                    : 'All orders are subject to acceptance and product availability. We reserve the right to refuse any order.'
                  }
                </p>
                <p>
                  {language === 'fr' 
                    ? 'Les prix sont affichés en dollars américains (USD) et incluent toutes les taxes applicables.'
                    : 'Prices are displayed in US dollars (USD) and include all applicable taxes.'
                  }
                </p>
                <p>
                  {language === 'fr' 
                    ? 'Le paiement doit être effectué au moment de la commande via les méthodes de paiement acceptées.'
                    : 'Payment must be made at the time of order through accepted payment methods.'
                  }
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '4. Authenticité des Produits' : '4. Product Authenticity'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Tous nos produits céramiques sont authentiques et fabriqués à la main par des artisans qualifiés au Maroc. Chaque pièce est unique et peut présenter de légères variations naturelles qui témoignent de son caractère artisanal.'
                  : 'All our ceramic products are authentic and handcrafted by skilled artisans in Morocco. Each piece is unique and may show slight natural variations that testify to its artisanal character.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '5. Propriété Intellectuelle' : '5. Intellectual Property'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Tout le contenu de ce site web, y compris les textes, images, logos et design, est la propriété de Perle de l’Atlas et est protégé par les lois sur le droit d\'auteur.'
                  : 'All content on this website, including text, images, logos, and design, is the property of Perle de l’Atlas and is protected by copyright laws.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '6. Limitation de Responsabilité' : '6. Limitation of Liability'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Perle de l’Atlas ne sera pas responsable des dommages indirects, accessoires ou consécutifs résultant de l\'utilisation de notre site web ou de nos produits.'
                  : 'Perle de l’Atlas shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or products.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '7. Modifications des Conditions' : '7. Changes to Terms'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet immédiatement lors de leur publication sur le site.'
                  : 'We reserve the right to modify these terms at any time. Changes will take effect immediately upon posting on the website.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '8. Droit Applicable' : '8. Governing Law'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Ces conditions sont régies par les lois de l\'État de New York, États-Unis.'
                  : 'These terms are governed by the laws of the State of New York, United States.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '9. Contact' : '9. Contact'}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {language === 'fr' 
                  ? 'Pour toute question concernant ces conditions de service, contactez-nous:'
                  : 'For any questions regarding these terms of service, contact us:'
                }
              </p>
              <div className="bg-stone-50 p-6 rounded-lg">
                <p className="text-stone-900 font-medium">Perle de l’Atlas</p>
                <p className="text-stone-600">Email: legal@maisonchapuis.com</p>
                <p className="text-stone-600">Phone: 1-800-CHAPUIS (1-800-242-7847)</p>
                <p className="text-stone-600">Address: 123 Madison Avenue, New York, NY 10016</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <ModernElegantFooter />
    </div>
  );
};

export default TermsOfService;