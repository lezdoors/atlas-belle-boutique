import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Conditions Générales",
      lastUpdated: "Dernière mise à jour : 2 juillet 2025",
      sections: [
        {
          title: "Acceptation des Conditions",
          content: "En utilisant notre site web et nos services, vous acceptez d'être lié par ces conditions générales d'utilisation."
        },
        {
          title: "Produits et Services",
          content: "Nous nous efforçons de présenter nos produits avec précision. Cependant, de légères variations peuvent exister en raison de la nature artisanale de nos créations."
        },
        {
          title: "Commandes et Paiements",
          content: "Toutes les commandes sont soumises à acceptation. Les prix sont indiqués TTC et peuvent être modifiés sans préavis."
        },
        {
          title: "Responsabilité",
          content: "Notre responsabilité est limitée au montant payé pour les produits concernés, sauf en cas de négligence grave de notre part."
        }
      ]
    },
    en: {
      title: "Terms & Conditions",
      lastUpdated: "Last updated: July 2, 2025",
      sections: [
        {
          title: "Acceptance of Terms",
          content: "By using our website and services, you agree to be bound by these terms and conditions of use."
        },
        {
          title: "Products and Services",
          content: "We strive to present our products accurately. However, slight variations may exist due to the artisanal nature of our creations."
        },
        {
          title: "Orders and Payments",
          content: "All orders are subject to acceptance. Prices are shown including tax and may be modified without notice."
        },
        {
          title: "Liability",
          content: "Our liability is limited to the amount paid for the products concerned, except in cases of gross negligence on our part."
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

export default Terms;