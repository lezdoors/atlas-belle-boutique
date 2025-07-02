
import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Shield, Globe, Clock, Mail, Package } from 'lucide-react';

const ShippingReturns = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Livraison & Retours",
      subtitle: "Vos créations artisanales voyagent du Maroc jusqu'à chez vous avec le plus grand soin",
      shipping: {
        title: "Informations de Livraison",
        fromMorocco: "Expédié depuis le Maroc",
        fromMoroccoDesc: "Chaque commande est soigneusement préparée dans nos ateliers partenaires de Casablanca et expédiée directement vers votre destination.",
        deliveryTimes: "Délais de Livraison",
        deliveryTimesDesc: "États-Unis : 5-7 jours ouvrés | Europe : 3-5 jours ouvrés | Autres destinations : 7-10 jours ouvrés",
        freeShipping: "Livraison Gratuite",
        freeShippingDesc: "Gratuite à partir de 150€ d'achat vers les États-Unis",
        details: "Détails de Livraison",
        detailsList: [
          "Toutes nos créations sont emballées à la main avec des matériaux écologiques",
          "Suivi complet fourni pour chaque commande via DHL Express",
          "Assurance incluse pour toutes les expéditions internationales",
          "Emballage cadeau disponible sur demande",
          "Frais de douane peuvent s'appliquer selon la destination"
        ]
      },
      returns: {
        title: "Politique de Retour",
        intro: "Votre satisfaction est notre priorité absolue. Nous comprenons que l'achat en ligne d'articles artisanaux peut parfois ne pas correspondre exactement à vos attentes.",
        period: "Période de Retour",
        periodDesc: "Vous disposez de 14 jours calendaires à compter de la réception de votre commande pour nous contacter si vous souhaitez effectuer un retour.",
        conditions: "Conditions de Retour",
        conditionsList: [
          "Les articles doivent être dans leur état d'origine, non utilisés et non endommagés",
          "Les emballages d'origine doivent être conservés",
          "Les articles personnalisés ou sur mesure ne peuvent être retournés",
          "Contactez-nous avant de retourner tout article"
        ],
        process: "Processus de Retour",
        processList: [
          "Contactez notre service client à contact@atlasperle.com",
          "Décrivez la raison du retour et joignez des photos si nécessaire",
          "Nous vous fournirons une étiquette de retour prépayée si le retour est justifié",
          "Les frais de retour sont à la charge du client sauf en cas d'erreur de notre part",
          "Remboursement traité sous 5-7 jours ouvrés après réception"
        ],
        damages: "Articles Endommagés ou Incorrects",
        damagesDesc: "Si votre article arrive endommagé ou ne correspond pas à votre commande, nous prendrons en charge tous les frais de retour et de remplacement."
      },
      contact: {
        title: "Service Client",
        description: "Notre équipe dédiée répond sous 24h maximum",
        responseTime: "Temps de réponse : 2-24 heures"
      }
    },
    en: {
      title: "Shipping & Returns",
      subtitle: "Your artisanal creations travel from Morocco to your home with the greatest care",
      shipping: {
        title: "Shipping Information",
        fromMorocco: "Ships from Morocco",
        fromMoroccoDesc: "Each order is carefully prepared in our partner workshops in Casablanca and shipped directly to your destination.",
        deliveryTimes: "Delivery Times",
        deliveryTimesDesc: "United States: 5-7 business days | Europe: 3-5 business days | Other destinations: 7-10 business days",
        freeShipping: "Free Shipping",
        freeShippingDesc: "Free shipping to the United States on orders over $165",
        details: "Shipping Details",
        detailsList: [
          "All our creations are hand-packed with eco-friendly materials",
          "Full tracking provided for every order via DHL Express",
          "Insurance included for all international shipments",
          "Gift wrapping available upon request",
          "Customs fees may apply depending on destination"
        ]
      },
      returns: {
        title: "Returns Policy",
        intro: "Your satisfaction is our absolute priority. We understand that purchasing artisanal items online may sometimes not exactly match your expectations.",
        period: "Return Period",
        periodDesc: "You have 14 calendar days from receipt of your order to contact us if you wish to make a return.",
        conditions: "Return Conditions",
        conditionsList: [
          "Items must be in their original condition, unused and undamaged",
          "Original packaging must be retained",
          "Personalized or custom-made items cannot be returned",
          "Contact us before returning any item"
        ],
        process: "Return Process",
        processList: [
          "Contact our customer service at contact@atlasperle.com",
          "Describe the reason for return and attach photos if necessary",
          "We will provide a prepaid return label if the return is justified",
          "Return shipping costs are the customer's responsibility unless our error",
          "Refund processed within 5-7 business days after receipt"
        ],
        damages: "Damaged or Incorrect Items",
        damagesDesc: "If your item arrives damaged or does not match your order, we will cover all return and replacement costs."
      },
      contact: {
        title: "Customer Service",
        description: "Our dedicated team responds within 24 hours maximum",
        responseTime: "Response time: 2-24 hours"
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 tracking-tight">
            {currentContent.title}
          </h1>
          <p className="text-lg font-light text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Truck className="h-8 w-8 text-stone-800 mr-4" />
              <h2 className="text-3xl font-serif font-semibold text-stone-800">
                {currentContent.shipping.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-stone-50 rounded-xl p-6 text-center">
                <Globe className="h-10 w-10 mx-auto mb-4 text-stone-600" />
                <h3 className="text-lg font-semibold text-stone-800 mb-3">
                  {currentContent.shipping.fromMorocco}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm">
                  {currentContent.shipping.fromMoroccoDesc}
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl p-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-4 text-stone-600" />
                <h3 className="text-lg font-semibold text-stone-800 mb-3">
                  {currentContent.shipping.deliveryTimes}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm">
                  {currentContent.shipping.deliveryTimesDesc}
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl p-6 text-center">
                <Package className="h-10 w-10 mx-auto mb-4 text-stone-600" />
                <h3 className="text-lg font-semibold text-stone-800 mb-3">
                  {currentContent.shipping.freeShipping}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm">
                  {currentContent.shipping.freeShippingDesc}
                </p>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-stone-800 mb-6">
                {currentContent.shipping.details}
              </h3>
              <div className="space-y-3">
                {currentContent.shipping.detailsList.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-stone-600 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Returns Policy */}
          <div>
            <div className="flex items-center mb-8">
              <Shield className="h-8 w-8 text-stone-800 mr-4" />
              <h2 className="text-3xl font-serif font-semibold text-stone-800">
                {currentContent.returns.title}
              </h2>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-8 mb-8">
              <p className="text-lg font-light text-stone-600 leading-relaxed mb-8">
                {currentContent.returns.intro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-4">
                    {currentContent.returns.period}
                  </h4>
                  <p className="text-stone-600 font-light">
                    {currentContent.returns.periodDesc}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-4">
                    {currentContent.returns.damages}
                  </h4>
                  <p className="text-stone-600 font-light">
                    {currentContent.returns.damagesDesc}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-4">
                    {currentContent.returns.conditions}
                  </h4>
                  <div className="space-y-2">
                    {currentContent.returns.conditionsList.map((condition, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 font-light">{condition}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-4">
                    {currentContent.returns.process}
                  </h4>
                  <div className="space-y-2">
                    {currentContent.returns.processList.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-stone-600 font-light">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-stone-50 rounded-xl p-8 text-center">
              <Mail className="h-10 w-10 mx-auto mb-4 text-stone-600" />
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                {currentContent.contact.title}
              </h3>
              <p className="text-stone-600 font-light mb-6">
                {currentContent.contact.description}
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:contact@atlasperle.com"
                  className="inline-flex items-center bg-stone-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-stone-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contact@atlasperle.com
                </a>
                <p className="text-sm text-stone-500">
                  {currentContent.contact.responseTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModernElegantFooter />
    </div>
  );
};

export default ShippingReturns;
