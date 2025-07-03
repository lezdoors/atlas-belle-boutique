
import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const MentionsLegales = () => {
  const { language } = useLanguage();

  const sections = [
    {
      title: language === 'fr' ? 'Éditeur du site' : 'Site Editor',
      content: language === 'fr' ? `
        Perle d'Atlas
        Activité : Vente de produits artisanaux marocains
        Localisation : Maroc
        
        Email : contact@atlasperle.com
        
        Directeur de la publication : Perle d'Atlas
      ` : `
        Perle d'Atlas
        Activity: Sale of Moroccan artisanal products
        Location: Morocco
        
        Email: contact@atlasperle.com
        
        Publication Director: Perle d'Atlas
      `
    },
    {
      title: language === 'fr' ? 'Hébergement' : 'Hosting',
      content: language === 'fr' ? `
        Ce site est hébergé par Vercel Inc.
        340 S Lemon Ave #4133
        Walnut, CA 91789
        États-Unis
        
        Les données sont hébergées dans des centres de données sécurisés respectant les normes internationales de sécurité.
      ` : `
        This site is hosted by Vercel Inc.
        340 S Lemon Ave #4133
        Walnut, CA 91789
        United States
        
        Data is hosted in secure data centers complying with international security standards.
      `
    },
    {
      title: language === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property',
      content: language === 'fr' ? `
        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
        
        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        
        La reproduction de tout ou partie de ce site sur un support électronique quelconque est formellement interdite sauf autorisation expresse du directeur de la publication.
        
        Les marques et logos reproduits sur ce site sont déposés par les sociétés qui en sont propriétaires.
      ` : `
        This entire site is subject to French and international legislation on copyright and intellectual property.
        
        All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.
        
        The reproduction of all or part of this site on any electronic medium is strictly prohibited without express authorization from the publication director.
        
        The trademarks and logos reproduced on this site are registered by the companies that own them.
      `
    },
    {
      title: language === 'fr' ? 'Données personnelles (Conformité RGPD)' : 'Personal Data (GDPR Compliance)',
      content: language === 'fr' ? `
        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles.
        
        Ces droits peuvent être exercés en nous contactant à l'adresse : contact@atlasperle.com
        
        Nous nous engageons à ne jamais communiquer vos données personnelles à des tiers sans votre consentement préalable.
        
        Les données collectées sur ce site sont utilisées uniquement pour la gestion de votre commande et l'amélioration de nos services.
        
        Durée de conservation des données :
        • Données de commande : 3 ans
        • Données de navigation : 13 mois maximum
        • Données de contact : jusqu'à désinscription
      ` : `
        In accordance with the General Data Protection Regulation (GDPR) and the "Data Protection and Freedom of Information" law of January 6, 1978 as amended, you have the right to access, rectify, delete and oppose the processing of your personal data.
        
        These rights can be exercised by contacting us at: contact@atlasperle.com
        
        We undertake never to communicate your personal data to third parties without your prior consent.
        
        Data collected on this site is used only for managing your order and improving our services.
        
        Data retention period:
        • Order data: 3 years
        • Navigation data: 13 months maximum
        • Contact data: until unsubscription
      `
    },
    {
      title: language === 'fr' ? 'Cookies' : 'Cookies',
      content: language === 'fr' ? `
        Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site.
        
        Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter le fonctionnement de certaines fonctionnalités du site.
        
        Types de cookies utilisés :
        • Cookies techniques nécessaires au fonctionnement du site
        • Cookies d'analyse pour améliorer nos services
        • Cookies de préférences pour mémoriser vos choix
      ` : `
        This site uses cookies to improve your browsing experience and analyze site usage.
        
        You can disable cookies in your browser settings, but this may affect the operation of certain site features.
        
        Types of cookies used:
        • Technical cookies necessary for site operation
        • Analytics cookies to improve our services
        • Preference cookies to remember your choices
      `
    },
    {
      title: language === 'fr' ? 'Limitation de responsabilité' : 'Limitation of Liability',
      content: language === 'fr' ? `
        Les informations contenues dans ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année.
        
        Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès de Perle d'Atlas et signaler toute erreur ou omission.
        
        Perle d'Atlas ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site.
        
        Perle d'Atlas décline toute responsabilité quant aux éventuels virus qui pourraient infecter l'ordinateur ou tout matériel informatique de l'internaute, suite à une utilisation, à l'accès, ou au téléchargement provenant de ce site.
      ` : `
        The information contained in this site is as accurate as possible and the site is updated at different periods of the year.
        
        However, errors or omissions may occur. The user must therefore ensure the accuracy of information with Perle d'Atlas and report any error or omission.
        
        Perle d'Atlas cannot be held responsible for direct and indirect damage caused to the user's equipment when accessing the site.
        
        Perle d'Atlas declines all responsibility for any viruses that could infect the computer or any computer equipment of the user, following use, access, or download from this site.
      `
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-pearl-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-clay-800 mb-6 tracking-tight">
                {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
              </h1>
              <p className="font-serif text-lg text-clay-600 leading-relaxed">
                {language === 'fr'
                  ? 'Informations légales et conditions d\'utilisation du site Perle d\'Atlas'
                  : 'Legal information and terms of use of the Perle d\'Atlas website'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {sections.map((section, index) => (
                  <div key={index} className="bg-pearl-50 rounded-2xl p-8 border border-pearl-200">
                    <h2 className="font-serif font-bold text-2xl text-clay-800 mb-6 pb-4 border-b border-copper-200">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <pre className="font-serif text-base text-clay-600 leading-relaxed whitespace-pre-wrap font-sans">
                        {section.content.trim()}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>

              {/* Last Update */}
              <div className="mt-16 text-center">
                <p className="text-sm text-clay-500 font-serif">
                  {language === 'fr' 
                    ? 'Dernière mise à jour : ' + new Date().toLocaleDateString('fr-FR')
                    : 'Last updated: ' + new Date().toLocaleDateString('en-US')
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default MentionsLegales;
