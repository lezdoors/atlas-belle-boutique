
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PolitiqueConfidentialite = () => {
  const { language } = useLanguage();

  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: language === 'fr' ? 'Collecte des données' : 'Data Collection',
      content: language === 'fr' ? 
        'Nous collectons uniquement les données nécessaires au traitement de vos commandes et à l\'amélioration de nos services. Ces données incluent vos informations de contact, de livraison et de paiement.' :
        'We only collect data necessary for processing your orders and improving our services. This data includes your contact, delivery and payment information.'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: language === 'fr' ? 'Protection des données' : 'Data Protection',
      content: language === 'fr' ?
        'Toutes vos données sont protégées par des mesures de sécurité avancées. Nous utilisons le chiffrement SSL et stockons vos informations sur des serveurs sécurisés.' :
        'All your data is protected by advanced security measures. We use SSL encryption and store your information on secure servers.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: language === 'fr' ? 'Partage des données' : 'Data Sharing',
      content: language === 'fr' ?
        'Nous ne vendons, n\'échangeons ni ne louons vos données personnelles à des tiers. Vos informations ne sont partagées qu\'avec nos partenaires de confiance nécessaires au traitement de vos commandes.' :
        'We do not sell, trade or rent your personal data to third parties. Your information is only shared with trusted partners necessary for processing your orders.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: language === 'fr' ? 'Vos droits' : 'Your Rights',
      content: language === 'fr' ?
        'Conformément au RGPD, vous disposez du droit d\'accès, de rectification, de suppression et de portabilité de vos données. Contactez-nous pour exercer ces droits.' :
        'In accordance with GDPR, you have the right to access, rectify, delete and port your data. Contact us to exercise these rights.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-br from-pearl-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-clay-800 mb-6">
                {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
              </h1>
              <p className="font-serif text-lg text-clay-600 leading-relaxed">
                {language === 'fr'
                  ? 'Votre confidentialité est notre priorité. Découvrez comment nous protégeons vos données.'
                  : 'Your privacy is our priority. Learn how we protect your data.'
                }
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {sections.map((section, index) => (
                  <div key={index} className="bg-pearl-50 rounded-2xl p-6 border border-pearl-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-copper-600 rounded-full flex items-center justify-center text-white mr-4">
                        {section.icon}
                      </div>
                      <h3 className="font-serif font-bold text-xl text-clay-800">
                        {section.title}
                      </h3>
                    </div>
                    <p className="font-serif text-clay-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PolitiqueConfidentialite;
