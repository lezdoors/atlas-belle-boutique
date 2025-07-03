
import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const ConditionsVente = () => {
  const { language } = useLanguage();

  const sections = [
    {
      title: language === 'fr' ? 'Objet' : 'Purpose',
      content: language === 'fr' ? `
        Les présentes conditions générales de vente s'appliquent à toutes les commandes passées sur le site www.perle-atlas.com exploité par Perle d'Atlas.
        
        Toute commande implique l'acceptation sans réserve des présentes conditions générales de vente.
        
        Ces conditions peuvent être modifiées à tout moment. Les conditions applicables sont celles en vigueur au moment de la commande.
      ` : `
        These general terms and conditions of sale apply to all orders placed on the www.perle-atlas.com website operated by Perle d'Atlas.
        
        Any order implies unreserved acceptance of these general terms and conditions of sale.
        
        These conditions may be modified at any time. The applicable conditions are those in force at the time of the order.
      `
    },
    {
      title: language === 'fr' ? 'Produits' : 'Products',
      content: language === 'fr' ? `
        • Tous nos produits sont des cosmétiques artisanaux marocains authentiques
        • Les produits sont fabriqués selon les traditions séculaires berbères
        • Chaque produit est élaboré à partir d'ingrédients naturels soigneusement sélectionnés
        • Les descriptions et photos sont aussi fidèles que possible à la réalité
        • De légères variations peuvent exister en raison du caractère artisanal des produits
        • Nous nous réservons le droit de modifier nos gammes sans préavis
      ` : `
        • All our products are authentic Moroccan artisanal cosmetics
        • Products are manufactured according to centuries-old Berber traditions
        • Each product is made from carefully selected natural ingredients
        • Descriptions and photos are as faithful as possible to reality
        • Slight variations may exist due to the artisanal nature of the products
        • We reserve the right to modify our ranges without notice
      `
    },
    {
      title: language === 'fr' ? 'Prix' : 'Prices',
      content: language === 'fr' ? `
        • Les prix sont indiqués en euros (EUR) toutes taxes comprises (TTC)
        • Les prix peuvent être modifiés à tout moment sans préavis
        • Le prix applicable est celui affiché au moment de la validation de la commande
        • Les frais de livraison sont indiqués avant la finalisation de la commande
        • En cas d'erreur manifeste sur le prix, nous nous réservons le droit d'annuler la commande
        • Les promotions sont valables dans la limite des stocks disponibles
      ` : `
        • Prices are indicated in euros (EUR) all taxes included (TTC)
        • Prices may be changed at any time without notice
        • The applicable price is that displayed at the time of order validation
        • Delivery charges are indicated before finalizing the order
        • In case of obvious error on the price, we reserve the right to cancel the order
        • Promotions are valid while stocks last
      `
    },
    {
      title: language === 'fr' ? 'Commandes' : 'Orders',
      content: language === 'fr' ? `
        • Les commandes sont passées exclusivement sur notre site internet
        • Toute commande est définitive après validation du paiement
        • Nous accusons réception de votre commande par email
        • En cas de rupture de stock, nous vous en informons dans les plus brefs délais
        • Nous nous réservons le droit de refuser une commande en cas de litige antérieur
        • Les informations de livraison doivent être exactes et complètes
      ` : `
        • Orders are placed exclusively on our website
        • Any order is final after payment validation
        • We acknowledge receipt of your order by email
        • In case of stock shortage, we inform you as soon as possible
        • We reserve the right to refuse an order in case of prior dispute
        • Delivery information must be accurate and complete
      `
    },
    {
      title: language === 'fr' ? 'Paiement' : 'Payment',
      content: language === 'fr' ? `
        • Le paiement s'effectue au moment de la commande
        • Moyens de paiement acceptés : carte bancaire, PayPal
        • Toutes les transactions sont sécurisées et cryptées
        • En cas de paiement refusé, la commande est automatiquement annulée
        • Aucune donnée bancaire n'est conservée sur nos serveurs
        • Les factures sont envoyées par email après confirmation du paiement
      ` : `
        • Payment is made at the time of order
        • Accepted payment methods: credit card, PayPal
        • All transactions are secure and encrypted
        • In case of refused payment, the order is automatically canceled
        • No banking data is stored on our servers
        • Invoices are sent by email after payment confirmation
      `
    },
    {
      title: language === 'fr' ? 'Livraison' : 'Delivery',
      content: language === 'fr' ? `
        • Livraison en France métropolitaine et en Europe
        • Délais de livraison : 3 à 7 jours ouvrés selon la destination
        • Expédition sous 24-48h après confirmation du paiement
        • Suivi de colis fourni par email
        • Livraison à l'adresse indiquée lors de la commande uniquement
        • En cas d'absence, un avis de passage sera laissé par le transporteur
        • Vérifiez l'état de votre colis à la réception
      ` : `
        • Delivery in mainland France and Europe
        • Delivery time: 3 to 7 working days depending on destination
        • Shipping within 24-48h after payment confirmation
        • Package tracking provided by email
        • Delivery only to the address specified when ordering
        • In case of absence, a delivery notice will be left by the carrier
        • Check the condition of your package upon receipt
      `
    },
    {
      title: language === 'fr' ? 'Droit de rétractation' : 'Right of withdrawal',
      content: language === 'fr' ? `
        • Vous disposez de 14 jours pour vous rétracter après réception de votre commande
        • Les produits doivent être retournés dans leur emballage d'origine, non ouverts
        • Les frais de retour sont à votre charge
        • Le remboursement s'effectue dans les 14 jours suivant la réception du retour
        • Certains produits personnalisés ne peuvent pas être retournés
        • Pour exercer votre droit de rétractation, contactez-nous à : contact@atlasperle.com
      ` : `
        • You have 14 days to withdraw after receiving your order
        • Products must be returned in their original packaging, unopened
        • Return costs are at your expense
        • Refund is made within 14 days following receipt of the return
        • Some personalized products cannot be returned
        • To exercise your right of withdrawal, contact us at: contact@atlasperle.com
      `
    },
    {
      title: language === 'fr' ? 'Données personnelles' : 'Personal data',
      content: language === 'fr' ? `
        • Vos données personnelles sont collectées uniquement pour traiter votre commande
        • Elles ne sont jamais vendues ou cédées à des tiers
        • Vous pouvez accéder, modifier ou supprimer vos données à tout moment
        • Conservation des données : 3 ans après votre dernière commande
        • Conformité RGPD respectée
        • Pour plus d'informations, consultez notre politique de confidentialité
      ` : `
        • Your personal data is collected only to process your order
        • It is never sold or transferred to third parties
        • You can access, modify or delete your data at any time
        • Data retention: 3 years after your last order
        • GDPR compliance respected
        • For more information, see our privacy policy
      `
    },
    {
      title: language === 'fr' ? 'Loi applicable' : 'Applicable law',
      content: language === 'fr' ? `
        • Les présentes conditions générales sont régies par le droit français
        • Tout litige sera de la compétence exclusive des tribunaux français
        • En cas de traduction des présentes conditions, seule la version française fait foi
        • Les parties s'efforceront de résoudre à l'amiable tout différend
        • À défaut d'accord amiable, les tribunaux compétents seront saisis
      ` : `
        • These general conditions are governed by French law
        • Any dispute will be under the exclusive jurisdiction of French courts
        • In case of translation of these conditions, only the French version is authentic
        • The parties will endeavor to resolve any dispute amicably
        • Failing an amicable agreement, the competent courts will be seized
      `
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-br from-pearl-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-clay-800 mb-6">
                {language === 'fr' ? 'Conditions Générales de Vente' : 'Terms and Conditions of Sale'}
              </h1>
              <p className="font-serif text-lg text-clay-600 leading-relaxed">
                {language === 'fr'
                  ? 'Conditions régissant la vente de nos produits artisanaux marocains'
                  : 'Conditions governing the sale of our Moroccan artisanal products'
                }
              </p>
            </div>
          </div>
        </section>

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

              {/* Contact Information */}
              <div className="mt-16 bg-copper-50 rounded-2xl p-8 border border-copper-200 text-center">
                <h3 className="font-serif font-bold text-xl text-clay-800 mb-4">
                  {language === 'fr' ? 'Questions ?' : 'Questions?'}
                </h3>
                <p className="font-serif text-clay-600 mb-6">
                  {language === 'fr'
                    ? 'Pour toute question concernant nos conditions de vente, n\'hésitez pas à nous contacter.'
                    : 'For any questions regarding our terms of sale, please do not hesitate to contact us.'
                  }
                </p>
                <a 
                  href="mailto:contact@atlasperle.com"
                  className="inline-flex items-center bg-copper-600 hover:bg-copper-700 text-white px-8 py-4 rounded-full font-serif font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  contact@atlasperle.com
                </a>
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

export default ConditionsVente;
