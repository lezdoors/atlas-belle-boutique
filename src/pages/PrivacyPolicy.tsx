import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 2 juillet 2025",
      sections: [
        {
          title: "Collecte des Données",
          content: "Nous collectons les informations que vous nous fournissez directement, comme lors de la création d'un compte, d'un achat ou de l'inscription à notre newsletter."
        },
        {
          title: "Utilisation des Données",
          content: "Vos données sont utilisées pour traiter vos commandes, améliorer notre service client et vous envoyer des communications marketing avec votre consentement."
        },
        {
          title: "Protection des Données",
          content: "Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé et l'utilisation abusive."
        },
        {
          title: "Vos Droits",
          content: "Vous avez le droit d'accéder, de modifier ou de supprimer vos données personnelles. Contactez-nous pour exercer ces droits."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: July 2, 2025",
      sections: [
        {
          title: "Data Collection",
          content: "We collect information you provide directly to us, such as when creating an account, making a purchase, or subscribing to our newsletter."
        },
        {
          title: "Data Usage",
          content: "Your data is used to process your orders, improve our customer service, and send you marketing communications with your consent."
        },
        {
          title: "Data Protection",
          content: "We implement appropriate security measures to protect your personal information against unauthorized access and misuse."
        },
        {
          title: "Your Rights",
          content: "You have the right to access, modify, or delete your personal data. Contact us to exercise these rights."
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-sm text-stone-500 mb-8">{currentContent.lastUpdated}</p>
          
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-serif font-semibold text-stone-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default PrivacyPolicy;