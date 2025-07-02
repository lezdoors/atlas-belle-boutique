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
      intro: "Chez Perle de l'Atlas, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.",
      sections: [
        {
          title: "1. Informations que Nous Collectons",
          content: [
            "Informations d'identification : nom, prénom, adresse email, numéro de téléphone",
            "Informations de livraison : adresse postale, ville, code postal, pays",
            "Informations de paiement : traitées sécurisément via Stripe (nous ne stockons jamais vos données bancaires)",
            "Données de navigation : cookies, adresse IP, type de navigateur, pages visitées",
            "Préférences : langue, devise, préférences marketing"
          ]
        },
        {
          title: "2. Comment Nous Utilisons Vos Données",
          content: [
            "Traitement et suivi de vos commandes",
            "Communication concernant vos achats et notre service client",
            "Amélioration de notre site web et de nos services (via Vercel Analytics)",
            "Envoi de newsletters marketing (avec votre consentement explicite)",
            "Respect de nos obligations légales et fiscales"
          ]
        },
        {
          title: "3. Stockage et Sécurité",
          content: [
            "Vos données sont stockées de manière sécurisée via Supabase (infrastructure européenne)",
            "Chiffrement SSL/TLS pour toutes les transmissions de données",
            "Accès limité aux données par notre personnel autorisé uniquement",
            "Sauvegardes régulières et mesures de récupération en cas d'incident",
            "Conservation des données pendant 7 ans après votre dernière commande (obligation légale)"
          ]
        },
        {
          title: "4. Partage de Données",
          content: [
            "Nous ne vendons jamais vos données personnelles à des tiers",
            "Partage limité avec nos partenaires de confiance : transporteurs (DHL), processeur de paiement (Stripe)",
            "Divulgation possible si requise par la loi ou autorités compétentes",
            "Transferts sécurisés vers le Maroc pour la préparation et l'expédition des commandes"
          ]
        },
        {
          title: "5. Vos Droits",
          content: [
            "Droit d'accès : consultez les données que nous détenons sur vous",
            "Droit de rectification : corrigez vos informations inexactes",
            "Droit à l'effacement : supprimez vos données (sous certaines conditions)",
            "Droit à la portabilité : récupérez vos données dans un format structuré",
            "Droit d'opposition : refusez le traitement de vos données marketing",
            "Pour exercer ces droits, contactez-nous à contact@atlasperle.com"
          ]
        },
        {
          title: "6. Cookies et Technologies de Suivi",
          content: [
            "Cookies essentiels : nécessaires au fonctionnement du site (panier, préférences)",
            "Cookies analytiques : Vercel Analytics pour comprendre l'utilisation du site",
            "Cookies marketing : avec votre consentement pour personnaliser votre expérience",
            "Vous pouvez gérer vos préférences cookies via notre bannière de consentement"
          ]
        },
        {
          title: "7. Contact et Réclamations",
          content: [
            "Pour toute question concernant cette politique : contact@atlasperle.com",
            "Temps de réponse : 48 heures maximum",
            "Droit de réclamation auprès de la CNIL (France) ou autorité compétente de votre pays"
          ]
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: July 2, 2025",
      intro: "At Perle de l'Atlas, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information.",
      sections: [
        {
          title: "1. Information We Collect",
          content: [
            "Identification information: first name, last name, email address, phone number",
            "Shipping information: postal address, city, postal code, country",
            "Payment information: processed securely via Stripe (we never store your banking details)",
            "Browsing data: cookies, IP address, browser type, pages visited",
            "Preferences: language, currency, marketing preferences"
          ]
        },
        {
          title: "2. How We Use Your Data",
          content: [
            "Processing and tracking your orders",
            "Communication regarding your purchases and customer service",
            "Improving our website and services (via Vercel Analytics)",
            "Sending marketing newsletters (with your explicit consent)",
            "Compliance with our legal and tax obligations"
          ]
        },
        {
          title: "3. Storage and Security",
          content: [
            "Your data is securely stored via Supabase (European infrastructure)",
            "SSL/TLS encryption for all data transmissions",
            "Limited data access by authorized personnel only",
            "Regular backups and incident recovery measures",
            "Data retention for 7 years after your last order (legal obligation)"
          ]
        },
        {
          title: "4. Data Sharing",
          content: [
            "We never sell your personal data to third parties",
            "Limited sharing with trusted partners: carriers (DHL), payment processor (Stripe)",
            "Possible disclosure if required by law or competent authorities",
            "Secure transfers to Morocco for order preparation and shipping"
          ]
        },
        {
          title: "5. Your Rights",
          content: [
            "Right of access: view the data we hold about you",
            "Right of rectification: correct your inaccurate information",
            "Right to erasure: delete your data (under certain conditions)",
            "Right to portability: retrieve your data in a structured format",
            "Right to object: refuse processing of your marketing data",
            "To exercise these rights, contact us at contact@atlasperle.com"
          ]
        },
        {
          title: "6. Cookies and Tracking Technologies",
          content: [
            "Essential cookies: necessary for site operation (cart, preferences)",
            "Analytics cookies: Vercel Analytics to understand site usage",
            "Marketing cookies: with your consent to personalize your experience",
            "You can manage your cookie preferences via our consent banner"
          ]
        },
        {
          title: "7. Contact and Complaints",
          content: [
            "For any questions about this policy: contact@atlasperle.com",
            "Response time: 48 hours maximum",
            "Right to complaint with CNIL (France) or competent authority in your country"
          ]
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 w-full">
        <div className="w-full px-6 lg:px-12 xl:px-16 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
              {currentContent.title}
            </h1>
            <p className="text-sm text-stone-500 mb-8">{currentContent.lastUpdated}</p>
            <p className="text-lg text-stone-600 leading-relaxed">
              {currentContent.intro}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
              {language === 'fr' ? 'Questions ou Préoccupations ?' : 'Questions or Concerns?'}
            </h3>
            <p className="mb-6 text-stone-200">
              {language === 'fr' 
                ? 'Notre équipe est là pour vous aider à comprendre et exercer vos droits.'
                : 'Our team is here to help you understand and exercise your rights.'
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

export default PrivacyPolicy;