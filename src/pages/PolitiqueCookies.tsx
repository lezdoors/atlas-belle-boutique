import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const PolitiqueCookies = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Politique de Cookies",
      lastUpdated: "Dernière mise à jour : 2 juillet 2025",
      intro: "Cette politique explique comment Perle de l'Atlas utilise les cookies et technologies similaires sur notre site web pour améliorer votre expérience utilisateur tout en respectant votre vie privée.",
      sections: [
        {
          title: "1. Qu'est-ce qu'un Cookie ?",
          content: [
            "Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone)",
            "Il permet au site web de mémoriser vos actions et préférences sur une période donnée",
            "Les cookies facilitent votre navigation et personnalisent votre expérience sur notre site",
            "Ils ne peuvent pas endommager votre appareil ni contenir de virus",
            "La plupart des navigateurs acceptent automatiquement les cookies, mais vous pouvez les configurer"
          ]
        },
        {
          title: "2. Types de Cookies Utilisés",
          content: [
            "🔹 Cookies Essentiels (Strictement Nécessaires)",
            "Ces cookies sont indispensables au fonctionnement de notre site :",
            "  • Gestion du panier d'achat et de la session utilisateur",
            "  • Mémorisation de vos préférences de langue et devise",
            "  • Sécurisation de la navigation et prévention des attaques CSRF",
            "  • Authentification et maintien de votre connexion",
            "🔹 Cookies de Préférences",
            "Ces cookies mémorisent vos choix pour améliorer votre confort :",
            "  • Langue d'affichage préférée (français/anglais)",
            "  • Devise d'affichage (EUR/USD)",
            "  • Consentements donnés pour les cookies",
            "  • Préférences d'accessibilité"
          ]
        },
        {
          title: "3. Cookies d'Analyse (Vercel Analytics)",
          content: [
            "Nous utilisons Vercel Analytics pour comprendre comment vous utilisez notre site",
            "Ces cookies nous aident à améliorer l'expérience utilisateur et les performances",
            "Données collectées de manière anonyme et agrégée :",
            "  • Pages visitées et temps passé sur chaque page",
            "  • Parcours de navigation et actions effectuées",
            "  • Type d'appareil, navigateur et résolution d'écran",
            "  • Pays de provenance (sans localisation précise)",
            "Respect de la vie privée : pas d'identification personnelle, pas de tracking inter-sites",
            "Durée de conservation : 13 mois maximum",
            "Vous pouvez désactiver ces cookies sans affecter le fonctionnement du site"
          ]
        },
        {
          title: "4. Cookies que Nous N'Utilisons PAS",
          content: [
            "❌ Cookies publicitaires ou de marketing comportemental",
            "❌ Cookies de réseaux sociaux externes (tracking Facebook, Google, etc.)",
            "❌ Cookies de profilage commercial ou de ciblage publicitaire",
            "❌ Cookies de partage de données avec des tiers à des fins commerciales",
            "❌ Cookies de géolocalisation précise",
            "❌ Pixels de tracking ou balises invisibles",
            "❌ Fingerprinting ou identification d'appareil unique",
            "Notre approche respecte votre vie privée et limite la collecte de données"
          ]
        },
        {
          title: "5. Gestion de Vos Préférences",
          content: [
            "🎛️ Bannière de Consentement",
            "Lors de votre première visite, nous affichons une bannière vous permettant de :",
            "  • Accepter tous les cookies (essentiels + analytics)",
            "  • Accepter uniquement les cookies essentiels",
            "  • Paramétrer vos préférences en détail",
            "🔧 Modification Ultérieure",
            "Vous pouvez modifier vos choix à tout moment :",
            "  • Via les paramètres de votre navigateur",
            "  • En nous contactant à privacy@atlasperle.com",
            "  • Les cookies seront supprimés selon vos nouvelles préférences"
          ]
        },
        {
          title: "6. Configuration de Votre Navigateur",
          content: [
            "🌐 Chrome : Paramètres > Confidentialité et sécurité > Cookies et autres données de sites",
            "🦊 Firefox : Paramètres > Vie privée et sécurité > Cookies et données de sites",
            "🧭 Safari : Préférences > Confidentialité > Gérer les données de sites web",
            "📱 Edge : Paramètres > Cookies et autorisations de site",
            "⚠️ Attention : Désactiver tous les cookies peut affecter le fonctionnement du site",
            "💡 Recommandation : Gardez les cookies essentiels activés pour une expérience optimale"
          ]
        },
        {
          title: "7. Cookies Tiers",
          content: [
            "🔒 Stripe (Paiements Sécurisés)",
            "Lors du processus de commande, Stripe utilise ses propres cookies :",
            "  • Sécurisation des transactions et prévention de la fraude",
            "  • Conformité PCI DSS pour la protection des données bancaires",
            "  • Durée limitée à la session de paiement",
            "  • Politique de confidentialité Stripe : stripe.com/privacy",
            "🚚 DHL (Suivi de Livraison)",
            "Les liens de suivi DHL peuvent utiliser des cookies :",
            "  • Uniquement lors de l'utilisation de leurs services de tracking",
            "  • Soumis à la politique de confidentialité de DHL"
          ]
        },
        {
          title: "8. Cookies sur Mobile",
          content: [
            "📱 Applications Mobiles",
            "Notre site étant une application web responsive, les mêmes règles s'appliquent",
            "Stockage local similaire aux cookies pour les préférences utilisateur",
            "🔋 Optimisation",
            "Cookies allégés pour préserver la batterie et les données mobiles",
            "Pas de suivi géolocalisé via les cookies (sauf choix explicite utilisateur)",
            "⚙️ Gestion",
            "Paramètres accessibles via le menu de votre navigateur mobile"
          ]
        },
        {
          title: "9. Durée de Vie des Cookies",
          content: [
            "🕐 Cookies de Session",
            "Supprimés automatiquement à la fermeture de votre navigateur :",
            "  • Panier d'achat temporaire",
            "  • Session d'authentification",
            "📅 Cookies Persistants",
            "Conservés selon la durée définie :",
            "  • Préférences de langue : 1 an",
            "  • Consentements cookies : 1 an",
            "  • Analytics Vercel : 13 mois maximum",
            "🔄 Renouvellement",
            "Les cookies sont renouvelés à chaque visite active"
          ]
        },
        {
          title: "10. Sécurité des Cookies",
          content: [
            "🔐 Mesures de Protection",
            "Tous nos cookies sont sécurisés par :",
            "  • Transmission chiffrée SSL/TLS obligatoire",
            "  • Protection CSRF (Cross-Site Request Forgery)",
            "  • Attributs Secure et SameSite pour éviter les attaques",
            "  • Expiration automatique et rotation régulière",
            "🛡️ Pas de Données Sensibles",
            "Aucune information confidentielle stockée dans les cookies :",
            "  • Jamais de mots de passe ou données bancaires",
            "  • Identifiants de session chiffrés uniquement",
            "  • Données personnelles minimales"
          ]
        },
        {
          title: "11. Vos Droits",
          content: [
            "✅ Droit à l'Information : Cette politique détaillée sur nos pratiques",
            "⚙️ Droit au Paramétrage : Choix granulaire de vos préférences cookies",
            "🗑️ Droit à la Suppression : Effacement des cookies à tout moment",
            "🔄 Droit au Retrait : Modification de vos consentements sans conséquence",
            "📧 Droit à l'Assistance : Support technique pour gérer vos préférences",
            "Pour exercer ces droits : privacy@atlasperle.com ou contact@atlasperle.com"
          ]
        },
        {
          title: "12. Évolutions de Cette Politique",
          content: [
            "📝 Mises à Jour",
            "Cette politique peut évoluer pour refléter :",
            "  • Nouvelles fonctionnalités ou services",
            "  • Évolutions réglementaires (RGPD, lois locales)",
            "  • Améliorations technologiques",
            "  • Retours et suggestions utilisateurs",
            "🔔 Notification",
            "Nous vous informerons des changements importants :",
            "  • Mise à jour de la date en haut de cette page",
            "  • Notification par email si impact sur vos droits",
            "  • Nouvelle demande de consentement si nécessaire"
          ]
        }
      ]
    },
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: July 2, 2025",
      intro: "This policy explains how Perle de l'Atlas uses cookies and similar technologies on our website to improve your user experience while respecting your privacy.",
      sections: [
        {
          title: "1. What is a Cookie?",
          content: [
            "A cookie is a small text file stored on your device (computer, tablet, smartphone)",
            "It allows the website to remember your actions and preferences over a given period",
            "Cookies facilitate your navigation and personalize your experience on our site",
            "They cannot damage your device or contain viruses",
            "Most browsers automatically accept cookies, but you can configure them"
          ]
        },
        {
          title: "2. Types of Cookies Used",
          content: [
            "🔹 Essential Cookies (Strictly Necessary)",
            "These cookies are essential for our site to function:",
            "  • Shopping cart and user session management",
            "  • Language and currency preference memory",
            "  • Navigation security and CSRF attack prevention",
            "  • Authentication and connection maintenance",
            "🔹 Preference Cookies",
            "These cookies remember your choices to improve your comfort:",
            "  • Preferred display language (French/English)",
            "  • Display currency (EUR/USD)",
            "  • Consents given for cookies",
            "  • Accessibility preferences"
          ]
        },
        {
          title: "3. Analytics Cookies (Vercel Analytics)",
          content: [
            "We use Vercel Analytics to understand how you use our site",
            "These cookies help us improve user experience and performance",
            "Data collected anonymously and aggregated:",
            "  • Pages visited and time spent on each page",
            "  • Navigation paths and actions performed",
            "  • Device type, browser and screen resolution",
            "  • Country of origin (without precise location)",
            "Privacy respect: no personal identification, no cross-site tracking",
            "Retention period: 13 months maximum",
            "You can disable these cookies without affecting site functionality"
          ]
        },
        {
          title: "4. Cookies We Do NOT Use",
          content: [
            "❌ Advertising or behavioral marketing cookies",
            "❌ External social media cookies (Facebook, Google tracking, etc.)",
            "❌ Commercial profiling or advertising targeting cookies",
            "❌ Third-party data sharing cookies for commercial purposes",
            "❌ Precise geolocation cookies",
            "❌ Tracking pixels or invisible beacons",
            "❌ Fingerprinting or unique device identification",
            "Our approach respects your privacy and limits data collection"
          ]
        },
        {
          title: "5. Managing Your Preferences",
          content: [
            "🎛️ Consent Banner",
            "On your first visit, we display a banner allowing you to:",
            "  • Accept all cookies (essential + analytics)",
            "  • Accept only essential cookies",
            "  • Set your preferences in detail",
            "🔧 Later Modification",
            "You can change your choices at any time:",
            "  • Via your browser settings",
            "  • By contacting us at privacy@atlasperle.com",
            "  • Cookies will be deleted according to your new preferences"
          ]
        },
        {
          title: "6. Browser Configuration",
          content: [
            "🌐 Chrome: Settings > Privacy and security > Cookies and other site data",
            "🦊 Firefox: Settings > Privacy & Security > Cookies and Site Data",
            "🧭 Safari: Preferences > Privacy > Manage Website Data",
            "📱 Edge: Settings > Cookies and site permissions",
            "⚠️ Warning: Disabling all cookies may affect site functionality",
            "💡 Recommendation: Keep essential cookies enabled for optimal experience"
          ]
        },
        {
          title: "7. Third-Party Cookies",
          content: [
            "🔒 Stripe (Secure Payments)",
            "During the order process, Stripe uses its own cookies:",
            "  • Transaction security and fraud prevention",
            "  • PCI DSS compliance for banking data protection",
            "  • Duration limited to payment session",
            "  • Stripe privacy policy: stripe.com/privacy",
            "🚚 DHL (Delivery Tracking)",
            "DHL tracking links may use cookies:",
            "  • Only when using their tracking services",
            "  • Subject to DHL's privacy policy"
          ]
        },
        {
          title: "8. Mobile Cookies",
          content: [
            "📱 Mobile Applications",
            "Our site being a responsive web application, the same rules apply",
            "Local storage similar to cookies for user preferences",
            "🔋 Optimization",
            "Lightweight cookies to preserve battery and mobile data",
            "No geolocated tracking via cookies (except explicit user choice)",
            "⚙️ Management",
            "Settings accessible via your mobile browser menu"
          ]
        },
        {
          title: "9. Cookie Lifespan",
          content: [
            "🕐 Session Cookies",
            "Automatically deleted when you close your browser:",
            "  • Temporary shopping cart",
            "  • Authentication session",
            "📅 Persistent Cookies",
            "Kept according to defined duration:",
            "  • Language preferences: 1 year",
            "  • Cookie consents: 1 year",
            "  • Vercel Analytics: 13 months maximum",
            "🔄 Renewal",
            "Cookies are renewed on each active visit"
          ]
        },
        {
          title: "10. Cookie Security",
          content: [
            "🔐 Protection Measures",
            "All our cookies are secured by:",
            "  • Mandatory SSL/TLS encrypted transmission",
            "  • CSRF (Cross-Site Request Forgery) protection",
            "  • Secure and SameSite attributes to prevent attacks",
            "  • Automatic expiration and regular rotation",
            "🛡️ No Sensitive Data",
            "No confidential information stored in cookies:",
            "  • Never passwords or banking data",
            "  • Encrypted session identifiers only",
            "  • Minimal personal data"
          ]
        },
        {
          title: "11. Your Rights",
          content: [
            "✅ Right to Information: This detailed policy on our practices",
            "⚙️ Right to Configuration: Granular choice of your cookie preferences",
            "🗑️ Right to Deletion: Cookie erasure at any time",
            "🔄 Right to Withdrawal: Modification of your consents without consequence",
            "📧 Right to Assistance: Technical support to manage your preferences",
            "To exercise these rights: privacy@atlasperle.com or contact@atlasperle.com"
          ]
        },
        {
          title: "12. Changes to This Policy",
          content: [
            "📝 Updates",
            "This policy may evolve to reflect:",
            "  • New features or services",
            "  • Regulatory changes (GDPR, local laws)",
            "  • Technological improvements",
            "  • User feedback and suggestions",
            "🔔 Notification",
            "We will inform you of important changes:",
            "  • Updated date at the top of this page",
            "  • Email notification if impact on your rights",
            "  • New consent request if necessary"
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
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
              {currentContent.title}
            </h1>
            <p className="text-sm text-stone-500 mb-8">{currentContent.lastUpdated}</p>
            <p className="text-lg text-stone-600 leading-relaxed max-w-4xl mx-auto">
              {currentContent.intro}
            </p>
          </div>
          
          <div className="space-y-12">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-stone-200">
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-stone-800 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-stone-600 leading-relaxed whitespace-pre-line">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-stone-800 text-white rounded-xl p-8 lg:p-12 text-center">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4">
              {language === 'fr' ? 'Questions sur les Cookies ?' : 'Questions about Cookies?'}
            </h3>
            <p className="mb-6 text-stone-200 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Notre équipe technique peut vous aider à configurer vos préférences cookies et répondre à vos questions.'
                : 'Our technical team can help you configure your cookie preferences and answer your questions.'
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

export default PolitiqueCookies;