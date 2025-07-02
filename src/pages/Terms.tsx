import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Conditions Générales de Vente",
      lastUpdated: "Dernière mise à jour : 2 juillet 2025",
      intro: "Les présentes conditions générales régissent l'utilisation de notre site web et l'achat de nos produits artisanaux marocains. En passant commande, vous acceptez ces conditions.",
      sections: [
        {
          title: "1. Informations Légales",
          content: [
            "Raison sociale : Perle de l'Atlas",
            "Siège social : Casablanca, Maroc",
            "Contact : contact@atlasperle.com",
            "Représentation Europe : 822 C Street #11, Hayward, CA 94541, États-Unis"
          ]
        },
        {
          title: "2. Produits et Descriptions",
          content: [
            "Tous nos produits sont artisanaux et fabriqués au Maroc selon des méthodes traditionnelles",
            "Les variations mineures de couleur, texture ou forme font partie du caractère artisanal",
            "Les photos sont contractuelles mais des variations peuvent exister du fait de l'éclairage",
            "Nous nous efforçons de décrire nos produits avec la plus grande précision"
          ]
        },
        {
          title: "3. Commandes et Paiements",
          content: [
            "Paiements sécurisés traités via Stripe (cartes bancaires, portefeuilles numériques)",
            "Prix indiqués TTC (toutes taxes comprises) en euros ou dollars américains",
            "Confirmation de commande envoyée par email après validation du paiement",
            "Nous nous réservons le droit d'annuler une commande en cas d'indisponibilité",
            "Facturation au moment de l'expédition"
          ]
        },
        {
          title: "4. Livraison",
          content: [
            "Expédition depuis le Maroc via DHL Express sous 2-3 jours ouvrés",
            "Délais indicatifs : États-Unis 5-7 jours, Europe 3-5 jours, autres 7-10 jours",
            "Livraison gratuite à partir de 150€ vers les États-Unis",
            "Frais de douane éventuels à la charge du destinataire",
            "Suivi de commande fourni avec numéro de tracking"
          ]
        },
        {
          title: "5. Retours et Remboursements",
          content: [
            "Période de retour : 14 jours calendaires après réception",
            "Articles retournés doivent être dans leur état d'origine",
            "Frais de retour à la charge du client sauf erreur de notre part",
            "Remboursement traité sous 5-7 jours ouvrés après réception",
            "Articles personnalisés non retournables sauf défaut"
          ]
        },
        {
          title: "6. Propriété Intellectuelle",
          content: [
            "Tous les contenus du site sont protégés par le droit d'auteur",
            "Les designs traditionnels marocains sont respectés et valorisés",
            "Reproduction interdite sans autorisation écrite",
            "Les marques et logos sont la propriété de leurs détenteurs respectifs"
          ]
        },
        {
          title: "7. Responsabilité",
          content: [
            "Notre responsabilité est limitée au montant de la commande concernée",
            "Nous ne saurions être tenus responsables des dommages indirects",
            "L'utilisation du site se fait sous votre responsabilité",
            "Garantie légale de conformité selon la législation applicable"
          ]
        },
        {
          title: "8. Droit Applicable et Juridiction",
          content: [
            "Droit marocain applicable pour les questions commerciales",
            "Droit européen pour la protection des consommateurs européens",
            "Droit américain pour les consommateurs américains",
            "Règlement amiable privilégié avant tout recours judiciaire",
            "Juridiction compétente selon le lieu de résidence du consommateur"
          ]
        }
      ]
    },
    en: {
      title: "Terms & Conditions",
      lastUpdated: "Last updated: July 2, 2025",
      intro: "These general conditions govern the use of our website and the purchase of our Moroccan artisanal products. By placing an order, you accept these conditions.",
      sections: [
        {
          title: "1. Legal Information",
          content: [
            "Company name: Perle de l'Atlas",
            "Headquarters: Casablanca, Morocco",
            "Contact: contact@atlasperle.com",
            "European representation: 822 C Street #11, Hayward, CA 94541, United States"
          ]
        },
        {
          title: "2. Products and Descriptions",
          content: [
            "All our products are handcrafted and made in Morocco using traditional methods",
            "Minor variations in color, texture or shape are part of the artisanal character",
            "Photos are contractual but variations may exist due to lighting",
            "We strive to describe our products with the greatest accuracy"
          ]
        },
        {
          title: "3. Orders and Payments",
          content: [
            "Secure payments processed via Stripe (credit cards, digital wallets)",
            "Prices shown inclusive of all taxes in euros or US dollars",
            "Order confirmation sent by email after payment validation",
            "We reserve the right to cancel an order in case of unavailability",
            "Billing at time of shipment"
          ]
        },
        {
          title: "4. Shipping",
          content: [
            "Shipment from Morocco via DHL Express within 2-3 business days",
            "Indicative times: US 5-7 days, Europe 3-5 days, others 7-10 days",
            "Free shipping from $165 to the United States",
            "Possible customs fees at recipient's expense",
            "Order tracking provided with tracking number"
          ]
        },
        {
          title: "5. Returns and Refunds",
          content: [
            "Return period: 14 calendar days after receipt",
            "Returned items must be in their original condition",
            "Return costs at customer's expense unless our error",
            "Refund processed within 5-7 business days after receipt",
            "Personalized items non-returnable except for defects"
          ]
        },
        {
          title: "6. Intellectual Property",
          content: [
            "All site content is protected by copyright",
            "Traditional Moroccan designs are respected and valued",
            "Reproduction prohibited without written authorization",
            "Trademarks and logos are the property of their respective owners"
          ]
        },
        {
          title: "7. Liability",
          content: [
            "Our liability is limited to the amount of the order concerned",
            "We cannot be held responsible for indirect damages",
            "Use of the site is at your own risk",
            "Legal guarantee of conformity according to applicable legislation"
          ]
        },
        {
          title: "8. Applicable Law and Jurisdiction",
          content: [
            "Moroccan law applicable for commercial matters",
            "European law for European consumer protection",
            "American law for American consumers",
            "Amicable settlement preferred before any legal action",
            "Competent jurisdiction according to consumer's place of residence"
          ]
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
              {currentContent.title}
            </h1>
            <p className="text-sm text-stone-500 mb-8">{currentContent.lastUpdated}</p>
            <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
              {currentContent.intro}
            </p>
          </div>
          
          <div className="space-y-12">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="bg-stone-50 rounded-xl p-8">
                <h2 className="text-xl font-serif font-semibold text-stone-800 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-stone-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-stone-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-xl font-serif font-semibold mb-4">
              {language === 'fr' ? 'Questions Juridiques ?' : 'Legal Questions?'}
            </h3>
            <p className="mb-6 text-stone-200">
              {language === 'fr' 
                ? 'Notre équipe juridique peut clarifier toute disposition de ces conditions.'
                : 'Our legal team can clarify any provision in these terms.'
              }
            </p>
            <a
              href="mailto:contact@atlasperle.com"
              className="inline-flex items-center bg-white text-stone-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-stone-100"
            >
              contact@atlasperle.com
            </a>
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Terms;