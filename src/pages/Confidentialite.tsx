import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const Confidentialite = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 2 juillet 2025",
      intro: "Chez Perle de l'Atlas, nous respectons votre vie privée et nous engageons à protéger vos données personnelles. Cette politique explique en détail comment nous collectons, utilisons et protégeons vos informations.",
      sections: [
        {
          title: "1. Responsable du Traitement",
          content: [
            "Responsable : Perle de l'Atlas",
            "Siège social : Casablanca, Royaume du Maroc",
            "Email : contact@atlasperle.com ou privacy@atlasperle.com",
            "Représentant européen : [Si applicable selon le RGPD]",
            "Délégué à la protection des données : Nous consulter pour toute question relative à vos données"
          ]
        },
        {
          title: "2. Données Collectées",
          content: [
            "Données d'identification : nom, prénom, adresse email, numéro de téléphone",
            "Informations de livraison : adresse postale complète, ville, code postal, pays",
            "Données de paiement : informations bancaires traitées exclusivement par Stripe (jamais stockées)",
            "Données de navigation : cookies, adresse IP, type de navigateur, pages visitées, durée de session",
            "Préférences utilisateur : langue, devise, consentements marketing, préférences de communication",
            "Historique des commandes : produits achetés, montants, dates, statuts de livraison"
          ]
        },
        {
          title: "3. Finalités du Traitement",
          content: [
            "Traitement et suivi de vos commandes (base légale : exécution du contrat)",
            "Gestion de la relation client et service après-vente (base légale : intérêt légitime)",
            "Communication concernant vos achats et notre service client (base légale : exécution du contrat)",
            "Amélioration de notre site web et de nos services via Vercel Analytics (base légale : intérêt légitime)",
            "Envoi de newsletters marketing uniquement avec votre consentement explicite (base légale : consentement)",
            "Respect de nos obligations légales, comptables et fiscales (base légale : obligation légale)",
            "Prévention de la fraude et sécurisation des transactions (base légale : intérêt légitime)"
          ]
        },
        {
          title: "4. Base Légale des Traitements",
          content: [
            "Exécution du contrat : traitement des commandes, livraison, facturation",
            "Consentement : newsletters, cookies non essentiels, marketing personnalisé",
            "Intérêt légitime : amélioration des services, prévention de la fraude, analytics",
            "Obligation légale : conservation comptable, déclarations fiscales, lutte anti-blanchiment",
            "Vous pouvez retirer votre consentement à tout moment sans affecter la licéité du traitement"
          ]
        },
        {
          title: "5. Destinataires des Données",
          content: [
            "Personnel autorisé de Perle de l'Atlas (accès strictement limité et sécurisé)",
            "Prestataires de services essentiels :",
            "  • DHL Express (transporteur pour la livraison de vos commandes)",
            "  • Stripe Inc. (processeur de paiements sécurisés, certifié PCI DSS)",
            "  • Supabase (hébergement sécurisé des données, infrastructure européenne)",
            "  • Vercel (hébergement du site web et analytics respectueux de la vie privée)",
            "Nous ne vendons jamais vos données personnelles à des tiers",
            "Divulgation possible uniquement si requise par la loi ou autorités compétentes"
          ]
        },
        {
          title: "6. Transferts Internationaux",
          content: [
            "Données traitées principalement dans l'Union Européenne (Supabase)",
            "Transferts sécurisés vers le Maroc pour la préparation et l'expédition des commandes",
            "Transferts vers les États-Unis uniquement avec des prestataires certifiés (Stripe, Vercel)",
            "Garanties appropriées : clauses contractuelles types de la Commission européenne",
            "Niveau de protection équivalent au RGPD pour tous les transferts",
            "Possibilité d'obtenir une copie des garanties mises en place sur demande"
          ]
        },
        {
          title: "7. Durée de Conservation",
          content: [
            "Données de commande : 10 ans maximum (obligations comptables et fiscales)",
            "Données client actif : pendant toute la durée de la relation commerciale + 3 ans",
            "Données de prospection : 3 ans après le dernier contact pour les prospects",
            "Cookies analytics : 13 mois maximum",
            "Cookies de préférences : jusqu'à retrait du consentement",
            "Données supprimées automatiquement à l'expiration des délais légaux",
            "Suppression immédiate possible sur demande motivée (droit à l'effacement)"
          ]
        },
        {
          title: "8. Sécurité des Données",
          content: [
            "Chiffrement SSL/TLS pour toutes les transmissions de données sensibles",
            "Hébergement sécurisé via Supabase (certifications SOC 2 Type 2, ISO 27001)",
            "Authentification forte et accès limité aux données par notre personnel",
            "Sauvegardes automatiques quotidiennes avec chiffrement des données",
            "Surveillance continue de la sécurité et détection des incidents",
            "Plan de continuité d'activité et procédures de récupération d'urgence",
            "Formation régulière de notre équipe aux bonnes pratiques de sécurité"
          ]
        },
        {
          title: "9. Vos Droits",
          content: [
            "Droit d'accès : consultez toutes les données que nous détenons sur vous",
            "Droit de rectification : corrigez vos informations inexactes ou incomplètes",
            "Droit à l'effacement : supprimez vos données sous certaines conditions légales",
            "Droit à la limitation : suspendez temporairement le traitement de vos données",
            "Droit à la portabilité : récupérez vos données dans un format structuré et lisible",
            "Droit d'opposition : refusez le traitement de vos données marketing ou profilage",
            "Droit de retrait du consentement : révocation à tout moment pour les traitements basés sur le consentement",
            "Droit de définir des directives post-mortem concernant vos données",
            "Pour exercer ces droits : contact@atlasperle.com avec justificatif d'identité"
          ]
        },
        {
          title: "10. Cookies et Technologies de Suivi",
          content: [
            "Cookies essentiels : strictement nécessaires au fonctionnement (panier, session, préférences de langue)",
            "Cookies analytiques : Vercel Analytics pour comprendre l'utilisation du site (anonymisés)",
            "Cookies de préférences : mémorisation de vos choix (langue, devise, consentements)",
            "Pas de cookies publicitaires ou de tracking inter-sites",
            "Gestion de vos préférences via notre bannière de consentement",
            "Durée de vie : session pour les cookies essentiels, 13 mois max pour les analytics",
            "Possibilité de configurer votre navigateur pour refuser les cookies non essentiels"
          ]
        },
        {
          title: "11. Mineurs",
          content: [
            "Notre site et nos services ne sont pas destinés aux mineurs de moins de 16 ans",
            "Nous ne collectons pas sciemment de données personnelles de mineurs",
            "Si vous êtes parent et découvrez que votre enfant nous a fourni des données, contactez-nous",
            "Suppression immédiate des données de mineurs portées à notre connaissance",
            "Vérification de l'âge lors de la création de compte si nécessaire"
          ]
        },
        {
          title: "12. Contact et Réclamations",
          content: [
            "Questions sur cette politique : privacy@atlasperle.com ou contact@atlasperle.com",
            "Temps de réponse garanti : 72 heures maximum pour les demandes urgentes",
            "Accusé de réception immédiat pour toute demande d'exercice de droits",
            "Traitement des demandes dans un délai d'un mois (prolongeable de 2 mois si complexe)",
            "Droit de réclamation auprès de la CNIL (France) : www.cnil.fr",
            "Droit de réclamation auprès de l'autorité compétente de votre pays de résidence",
            "Médiation possible via le médiateur de la consommation en cas de litige"
          ]
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: July 2, 2025",
      intro: "At Perle de l'Atlas, we respect your privacy and are committed to protecting your personal data. This policy explains in detail how we collect, use, and protect your information.",
      sections: [
        {
          title: "1. Data Controller",
          content: [
            "Controller: Perle de l'Atlas",
            "Headquarters: Casablanca, Kingdom of Morocco",
            "Email: contact@atlasperle.com or privacy@atlasperle.com",
            "European representative: [If applicable under GDPR]",
            "Data Protection Officer: Contact us for any questions regarding your data"
          ]
        },
        {
          title: "2. Data Collected",
          content: [
            "Identification data: first name, last name, email address, phone number",
            "Shipping information: complete postal address, city, postal code, country",
            "Payment data: banking information processed exclusively by Stripe (never stored)",
            "Browsing data: cookies, IP address, browser type, pages visited, session duration",
            "User preferences: language, currency, marketing consents, communication preferences",
            "Order history: products purchased, amounts, dates, delivery statuses"
          ]
        },
        {
          title: "3. Processing Purposes",
          content: [
            "Processing and tracking your orders (legal basis: contract performance)",
            "Customer relationship management and after-sales service (legal basis: legitimate interest)",
            "Communication regarding your purchases and customer service (legal basis: contract performance)",
            "Website and service improvement via Vercel Analytics (legal basis: legitimate interest)",
            "Marketing newsletters only with your explicit consent (legal basis: consent)",
            "Compliance with legal, accounting and tax obligations (legal basis: legal obligation)",
            "Fraud prevention and transaction security (legal basis: legitimate interest)"
          ]
        },
        {
          title: "4. Legal Basis for Processing",
          content: [
            "Contract performance: order processing, delivery, billing",
            "Consent: newsletters, non-essential cookies, personalized marketing",
            "Legitimate interest: service improvement, fraud prevention, analytics",
            "Legal obligation: accounting retention, tax declarations, anti-money laundering",
            "You can withdraw your consent at any time without affecting the lawfulness of processing"
          ]
        },
        {
          title: "5. Data Recipients",
          content: [
            "Authorized Perle de l'Atlas personnel (strictly limited and secure access)",
            "Essential service providers:",
            "  • DHL Express (carrier for order delivery)",
            "  • Stripe Inc. (secure payment processor, PCI DSS certified)",
            "  • Supabase (secure data hosting, European infrastructure)",
            "  • Vercel (website hosting and privacy-friendly analytics)",
            "We never sell your personal data to third parties",
            "Disclosure possible only if required by law or competent authorities"
          ]
        },
        {
          title: "6. International Transfers",
          content: [
            "Data processed mainly in the European Union (Supabase)",
            "Secure transfers to Morocco for order preparation and shipping",
            "Transfers to United States only with certified providers (Stripe, Vercel)",
            "Appropriate safeguards: European Commission standard contractual clauses",
            "GDPR-equivalent protection level for all transfers",
            "Possibility to obtain a copy of safeguards in place upon request"
          ]
        },
        {
          title: "7. Retention Period",
          content: [
            "Order data: 10 years maximum (accounting and tax obligations)",
            "Active customer data: throughout commercial relationship + 3 years",
            "Prospecting data: 3 years after last contact for prospects",
            "Analytics cookies: 13 months maximum",
            "Preference cookies: until consent withdrawal",
            "Data automatically deleted upon expiry of legal deadlines",
            "Immediate deletion possible upon justified request (right to erasure)"
          ]
        },
        {
          title: "8. Data Security",
          content: [
            "SSL/TLS encryption for all sensitive data transmissions",
            "Secure hosting via Supabase (SOC 2 Type 2, ISO 27001 certifications)",
            "Strong authentication and limited data access by our personnel",
            "Daily automatic backups with data encryption",
            "Continuous security monitoring and incident detection",
            "Business continuity plan and emergency recovery procedures",
            "Regular training of our team in security best practices"
          ]
        },
        {
          title: "9. Your Rights",
          content: [
            "Right of access: view all data we hold about you",
            "Right of rectification: correct your inaccurate or incomplete information",
            "Right to erasure: delete your data under certain legal conditions",
            "Right to restriction: temporarily suspend processing of your data",
            "Right to portability: retrieve your data in a structured, readable format",
            "Right to object: refuse processing of your marketing data or profiling",
            "Right to withdraw consent: revocation at any time for consent-based processing",
            "Right to define post-mortem directives regarding your data",
            "To exercise these rights: contact@atlasperle.com with proof of identity"
          ]
        },
        {
          title: "10. Cookies and Tracking Technologies",
          content: [
            "Essential cookies: strictly necessary for operation (cart, session, language preferences)",
            "Analytics cookies: Vercel Analytics to understand site usage (anonymized)",
            "Preference cookies: memorization of your choices (language, currency, consents)",
            "No advertising cookies or cross-site tracking",
            "Manage your preferences via our consent banner",
            "Lifespan: session for essential cookies, 13 months max for analytics",
            "Possibility to configure your browser to refuse non-essential cookies"
          ]
        },
        {
          title: "11. Minors",
          content: [
            "Our site and services are not intended for minors under 16",
            "We do not knowingly collect personal data from minors",
            "If you are a parent and discover your child has provided us with data, contact us",
            "Immediate deletion of minor data brought to our attention",
            "Age verification during account creation if necessary"
          ]
        },
        {
          title: "12. Contact and Complaints",
          content: [
            "Questions about this policy: privacy@atlasperle.com or contact@atlasperle.com",
            "Guaranteed response time: 72 hours maximum for urgent requests",
            "Immediate acknowledgment for any rights exercise request",
            "Request processing within one month (extendable by 2 months if complex)",
            "Right to complaint with CNIL (France): www.cnil.fr",
            "Right to complaint with competent authority in your country of residence",
            "Mediation possible via consumer mediator in case of dispute"
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
              {language === 'fr' ? 'Questions sur vos Données ?' : 'Questions about your Data?'}
            </h3>
            <p className="mb-6 text-stone-200 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Notre équipe de protection des données est à votre disposition pour toute question relative à vos droits.'
                : 'Our data protection team is available for any questions regarding your rights.'
              }
            </p>
            <a
              href="mailto:privacy@atlasperle.com"
              className="inline-flex items-center bg-white text-stone-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-stone-100"
            >
              privacy@atlasperle.com
            </a>
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Confidentialite;