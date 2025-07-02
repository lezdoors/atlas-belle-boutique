import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const CGV = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Conditions Générales de Vente",
      lastUpdated: "Dernière mise à jour : 2 juillet 2025",
      intro: "Les présentes conditions générales de vente s'appliquent à toutes les commandes passées sur notre boutique en ligne. Elles constituent un contrat entre Perle de l'Atlas et ses clients.",
      sections: [
        {
          title: "1. Objet et Champ d'Application",
          content: [
            "Ces CGV régissent exclusivement les ventes de produits artisanaux marocains via notre site web",
            "Elles s'appliquent à l'exclusion de toutes autres conditions",
            "Toute commande implique l'acceptation pleine et entière de ces conditions",
            "Nous nous réservons le droit de modifier ces CGV à tout moment",
            "La version applicable est celle en vigueur au moment de la commande"
          ]
        },
        {
          title: "2. Produits et Prix",
          content: [
            "Tous nos produits sont authentiques et fabriqués artisanalement au Maroc",
            "Prix indiqués en euros (EUR) et dollars américains (USD), toutes taxes comprises",
            "Les prix peuvent être modifiés à tout moment, seul le prix au moment de la commande fait foi",
            "Frais de port calculés selon la destination et le poids total",
            "Promotions et codes de réduction soumis à conditions spécifiques"
          ]
        },
        {
          title: "3. Commande et Confirmation",
          content: [
            "La commande est validée après vérification de la disponibilité des produits",
            "Un email de confirmation est envoyé après validation du paiement",
            "Nous nous réservons le droit de refuser ou annuler toute commande pour motif légitime",
            "En cas d'indisponibilité, vous serez informé et remboursé intégralement",
            "Modification ou annulation possible uniquement avant expédition"
          ]
        },
        {
          title: "4. Paiement",
          content: [
            "Paiement sécurisé exclusivement via Stripe (cartes bancaires, Apple Pay, Google Pay)",
            "Le débit s'effectue immédiatement à la validation de la commande",
            "Devise de facturation selon votre localisation (EUR pour l'Europe, USD pour les États-Unis)",
            "Aucune donnée bancaire n'est stockée sur nos serveurs",
            "En cas d'échec de paiement, la commande est automatiquement annulée"
          ]
        },
        {
          title: "5. Livraison et Expédition",
          content: [
            "Expédition depuis Casablanca (Maroc) via DHL Express sous 2-3 jours ouvrés",
            "Délais indicatifs : Europe 3-5 jours, États-Unis 5-7 jours, autres destinations 7-10 jours",
            "Livraison gratuite à partir de 150€ (ou équivalent USD) vers l'Europe et les États-Unis",
            "Droits de douane et taxes éventuels à la charge exclusive du destinataire",
            "Numéro de suivi DHL fourni par email dès l'expédition",
            "Livraison en relais colis non disponible (uniquement à domicile)"
          ]
        },
        {
          title: "6. Réception et Vérification",
          content: [
            "Vérifiez l'état du colis à la réception en présence du livreur",
            "Signalez immédiatement tout dommage apparent au transporteur",
            "Conservez l'emballage d'origine en cas de retour nécessaire",
            "Contactez-nous sous 48h pour tout problème constaté",
            "Photos requises pour documenter tout dommage de transport"
          ]
        },
        {
          title: "7. Droit de Rétractation et Retours",
          content: [
            "Délai légal de rétractation : 14 jours calendaires après réception",
            "Produits retournés doivent être dans leur état d'origine avec emballage",
            "Frais de retour à votre charge (recommandé avec assurance et suivi)",
            "Remboursement sous 5-7 jours ouvrés après réception du retour conforme",
            "Articles personnalisés ou sur-mesure non éligibles au retour sauf défaut",
            "Produits alimentaires et cosmétiques entamés non retournables pour des raisons d'hygiène"
          ]
        },
        {
          title: "8. Garanties",
          content: [
            "Garantie légale de conformité (article L217-4 du Code de la consommation français)",
            "Garantie contre les vices cachés (articles 1641 à 1648 du Code civil français)",
            "Durée de garantie : 2 ans pour les produits non alimentaires",
            "Prise en charge des frais de retour en cas de défaut de conformité avéré",
            "Réparation, remplacement ou remboursement selon la nature du défaut"
          ]
        },
        {
          title: "9. Propriété Intellectuelle",
          content: [
            "Respect et valorisation des savoir-faire traditionnels marocains",
            "Collaboration directe avec les artisans créateurs",
            "Toutes les photos et descriptions de produits sont protégées par le droit d'auteur",
            "Reproduction interdite sans autorisation écrite préalable",
            "Marque 'Perle de l'Atlas' déposée et protégée"
          ]
        },
        {
          title: "10. Responsabilité et Force Majeure",
          content: [
            "Notre responsabilité est limitée au montant de la commande concernée",
            "Exclusion de responsabilité pour les dommages indirects ou immatériels",
            "Cas de force majeure : pandémie, catastrophe naturelle, grève des transports",
            "Suspension temporaire du service en cas de force majeure avérée",
            "Information immédiate des clients en cas de perturbation majeure"
          ]
        },
        {
          title: "11. Protection des Données",
          content: [
            "Collecte et traitement conformes au RGPD et à la loi marocaine sur la protection des données",
            "Données utilisées uniquement pour le traitement des commandes et l'amélioration du service",
            "Pas de vente ou transmission de données à des tiers à des fins commerciales",
            "Droit d'accès, rectification et suppression de vos données personnelles",
            "Hébergement sécurisé via Supabase (infrastructure européenne certifiée)"
          ]
        },
        {
          title: "12. Droit Applicable et Résolution des Litiges",
          content: [
            "Droit marocain applicable pour les aspects commerciaux et contractuels",
            "Droit européen pour la protection des consommateurs résidant dans l'UE",
            "Droit américain pour les consommateurs résidant aux États-Unis",
            "Médiation privilégiée via la plateforme européenne de résolution des litiges en ligne",
            "Juridiction compétente : tribunaux du lieu de résidence du consommateur",
            "Langue de procédure : français ou anglais selon la localisation"
          ]
        }
      ]
    },
    en: {
      title: "General Terms and Conditions of Sale",
      lastUpdated: "Last updated: July 2, 2025",
      intro: "These general terms and conditions of sale apply to all orders placed on our online store. They constitute a contract between Perle de l'Atlas and its customers.",
      sections: [
        {
          title: "1. Purpose and Scope",
          content: [
            "These T&C exclusively govern sales of Moroccan artisanal products via our website",
            "They apply to the exclusion of all other conditions",
            "Any order implies full acceptance of these conditions",
            "We reserve the right to modify these T&C at any time",
            "The applicable version is the one in effect at the time of order"
          ]
        },
        {
          title: "2. Products and Prices",
          content: [
            "All our products are authentic and handcrafted in Morocco",
            "Prices listed in euros (EUR) and US dollars (USD), all taxes included",
            "Prices may be modified at any time, only the price at time of order is binding",
            "Shipping costs calculated based on destination and total weight",
            "Promotions and discount codes subject to specific conditions"
          ]
        },
        {
          title: "3. Order and Confirmation",
          content: [
            "Order is validated after verification of product availability",
            "Confirmation email sent after payment validation",
            "We reserve the right to refuse or cancel any order for legitimate reasons",
            "In case of unavailability, you will be informed and fully refunded",
            "Modification or cancellation possible only before shipment"
          ]
        },
        {
          title: "4. Payment",
          content: [
            "Secure payment exclusively via Stripe (credit cards, Apple Pay, Google Pay)",
            "Charge occurs immediately upon order validation",
            "Billing currency according to your location (EUR for Europe, USD for United States)",
            "No banking data stored on our servers",
            "In case of payment failure, order is automatically cancelled"
          ]
        },
        {
          title: "5. Delivery and Shipping",
          content: [
            "Shipment from Casablanca (Morocco) via DHL Express within 2-3 business days",
            "Indicative times: Europe 3-5 days, United States 5-7 days, other destinations 7-10 days",
            "Free shipping from €150 (or USD equivalent) to Europe and United States",
            "Customs duties and possible taxes exclusively at recipient's expense",
            "DHL tracking number provided by email upon shipment",
            "Pickup point delivery not available (home delivery only)"
          ]
        },
        {
          title: "6. Receipt and Verification",
          content: [
            "Check package condition upon receipt in presence of delivery person",
            "Immediately report any apparent damage to carrier",
            "Keep original packaging in case return is necessary",
            "Contact us within 48h for any problems noticed",
            "Photos required to document any shipping damage"
          ]
        },
        {
          title: "7. Right of Withdrawal and Returns",
          content: [
            "Legal withdrawal period: 14 calendar days after receipt",
            "Returned products must be in original condition with packaging",
            "Return costs at your expense (recommended with insurance and tracking)",
            "Refund within 5-7 business days after receipt of compliant return",
            "Personalized or custom-made items not eligible for return except for defects",
            "Opened food and cosmetic products non-returnable for hygiene reasons"
          ]
        },
        {
          title: "8. Warranties",
          content: [
            "Legal warranty of conformity (article L217-4 of French Consumer Code)",
            "Warranty against hidden defects (articles 1641 to 1648 of French Civil Code)",
            "Warranty period: 2 years for non-food products",
            "Return costs covered in case of proven conformity defect",
            "Repair, replacement or refund according to nature of defect"
          ]
        },
        {
          title: "9. Intellectual Property",
          content: [
            "Respect and valorization of traditional Moroccan know-how",
            "Direct collaboration with artisan creators",
            "All product photos and descriptions are protected by copyright",
            "Reproduction prohibited without prior written authorization",
            "'Perle de l'Atlas' trademark registered and protected"
          ]
        },
        {
          title: "10. Liability and Force Majeure",
          content: [
            "Our liability is limited to the amount of the order concerned",
            "Exclusion of liability for indirect or intangible damages",
            "Force majeure cases: pandemic, natural disaster, transport strikes",
            "Temporary service suspension in case of proven force majeure",
            "Immediate customer information in case of major disruption"
          ]
        },
        {
          title: "11. Data Protection",
          content: [
            "Collection and processing compliant with GDPR and Moroccan data protection law",
            "Data used only for order processing and service improvement",
            "No sale or transmission of data to third parties for commercial purposes",
            "Right of access, rectification and deletion of your personal data",
            "Secure hosting via Supabase (certified European infrastructure)"
          ]
        },
        {
          title: "12. Applicable Law and Dispute Resolution",
          content: [
            "Moroccan law applicable for commercial and contractual aspects",
            "European law for consumer protection for EU residents",
            "American law for consumers residing in the United States",
            "Mediation preferred via European online dispute resolution platform",
            "Competent jurisdiction: courts of consumer's place of residence",
            "Procedure language: French or English according to location"
          ]
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-stone-50">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 w-full">
        <div className="w-full px-6 lg:px-12 xl:px-16 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
              {currentContent.title}
            </h1>
            <p className="text-sm text-stone-500 mb-8">{currentContent.lastUpdated}</p>
            <p className="text-lg text-stone-600 leading-relaxed">
              {currentContent.intro}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-stone-200">
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-stone-800 mb-6">
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

          <div className="mt-16 bg-stone-800 text-white rounded-xl p-8 lg:p-12 text-center">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4">
              {language === 'fr' ? 'Questions sur nos CGV ?' : 'Questions about our T&C?'}
            </h3>
            <p className="mb-6 text-stone-200 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Notre service client peut clarifier toute disposition de ces conditions générales de vente.'
                : 'Our customer service can clarify any provision in these general terms and conditions of sale.'
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

export default CGV;