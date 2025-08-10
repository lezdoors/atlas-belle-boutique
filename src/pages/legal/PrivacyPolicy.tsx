import MaisonChapuisHeader from '@/components/navigation/MaisonChapuisHeader';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonChapuisHeader />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-stone-900 mb-4">
              {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
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
                {language === 'fr' ? '1. Collecte d\'Informations' : '1. Information Collection'}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {language === 'fr' 
                  ? 'Nous collectons les informations que vous nous fournissez directement, notamment:'
                  : 'We collect information you provide directly to us, including:'
                }
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-600">
                <li>{language === 'fr' ? 'Nom, adresse email et informations de contact' : 'Name, email address, and contact information'}</li>
                <li>{language === 'fr' ? 'Adresse de livraison et de facturation' : 'Shipping and billing addresses'}</li>
                <li>{language === 'fr' ? 'Informations de paiement (traitées de manière sécurisée)' : 'Payment information (processed securely)'}</li>
                <li>{language === 'fr' ? 'Historique des commandes et préférences' : 'Order history and preferences'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '2. Utilisation des Informations' : '2. Use of Information'}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {language === 'fr' 
                  ? 'Nous utilisons vos informations pour:'
                  : 'We use your information to:'
                }
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-600">
                <li>{language === 'fr' ? 'Traiter et expédier vos commandes' : 'Process and ship your orders'}</li>
                <li>{language === 'fr' ? 'Communiquer avec vous concernant vos commandes' : 'Communicate with you about your orders'}</li>
                <li>{language === 'fr' ? 'Fournir un service client' : 'Provide customer service'}</li>
                <li>{language === 'fr' ? 'Améliorer notre site web et nos services' : 'Improve our website and services'}</li>
                <li>{language === 'fr' ? 'Envoyer des communications marketing (avec votre consentement)' : 'Send marketing communications (with your consent)'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '3. Partage d\'Informations' : '3. Information Sharing'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers, sauf dans les cas suivants: traitement des paiements, expédition des commandes, conformité légale, ou avec votre consentement explicite.'
                  : 'We do not sell, rent, or share your personal information with third parties, except in the following cases: payment processing, order shipping, legal compliance, or with your explicit consent.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '4. Sécurité des Données' : '4. Data Security'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l\'accès non autorisé, l\'altération, la divulgation ou la destruction.'
                  : 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '5. Cookies et Technologies de Suivi' : '5. Cookies and Tracking Technologies'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site, analyser l\'utilisation du site et personnaliser le contenu.'
                  : 'We use cookies and similar technologies to enhance your experience on our site, analyze site usage, and personalize content.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '6. Droits des Résidents de Californie (CCPA)' : '6. California Residents Rights (CCPA)'}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {language === 'fr' 
                  ? 'Si vous êtes résident de Californie, vous avez le droit de:'
                  : 'If you are a California resident, you have the right to:'
                }
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-600">
                <li>{language === 'fr' ? 'Connaître les informations personnelles que nous collectons' : 'Know what personal information we collect'}</li>
                <li>{language === 'fr' ? 'Demander la suppression de vos informations personnelles' : 'Request deletion of your personal information'}</li>
                <li>{language === 'fr' ? 'Refuser la vente de vos informations personnelles' : 'Opt-out of the sale of your personal information'}</li>
                <li>{language === 'fr' ? 'Ne pas être discriminé pour avoir exercé ces droits' : 'Not be discriminated against for exercising these rights'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '7. Conservation des Données' : '7. Data Retention'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services, respecter nos obligations légales, et résoudre les litiges.'
                  : 'We retain your personal information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '8. Modifications de la Politique' : '8. Policy Changes'}
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page.'
                  : 'We may update this privacy policy periodically. We will notify you of any changes by posting the new policy on this page.'
                }
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? '9. Nous Contacter' : '9. Contact Us'}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {language === 'fr' 
                  ? 'Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous:'
                  : 'For any questions about this privacy policy or to exercise your rights, contact us:'
                }
              </p>
              <div className="bg-stone-50 p-6 rounded-lg">
                <p className="text-stone-900 font-medium">Perle de l’Atlas - Privacy Officer</p>
                <p className="text-stone-600">Email: privacy@maisonchapuis.com</p>
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

export default PrivacyPolicy;