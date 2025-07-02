
import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Shield, Globe, Clock, Mail, Package } from 'lucide-react';

const ShippingReturns = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-black mb-6 tracking-tight">
            {language === 'fr' ? 'Livraison & Retours' : 'Shipping & Returns'}
          </h1>
          <p className="text-xl font-light text-black/60 leading-relaxed max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Vos créations artisanales voyagent du Maroc jusqu\'à chez vous avec le plus grand soin'
              : 'Your artisanal creations travel from Morocco to your home with the greatest care'
            }
          </p>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Truck className="h-8 w-8 text-black mr-4" />
              <h2 className="text-3xl font-extralight text-black tracking-tight">
                {language === 'fr' ? 'Informations de Livraison' : 'Shipping Information'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <Globe className="h-10 w-10 mx-auto mb-4 text-black/60" />
                <h3 className="text-lg font-light text-black mb-3">
                  {language === 'fr' ? 'Expédié depuis le Maroc' : 'Ships from Morocco'}
                </h3>
                <p className="text-black/60 font-light leading-relaxed">
                  {language === 'fr'
                    ? 'Chaque commande est soigneusement préparée dans nos ateliers de Casablanca'
                    : 'Each order is carefully prepared in our Casablanca workshops'
                  }
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <Clock className="h-10 w-10 mx-auto mb-4 text-black/60" />
                <h3 className="text-lg font-light text-black mb-3">
                  {language === 'fr' ? 'Livraison Express' : 'Express Delivery'}
                </h3>
                <p className="text-black/60 font-light leading-relaxed">
                  {language === 'fr'
                    ? 'Livraison mondiale en 2-5 jours ouvrables typiquement'
                    : 'Worldwide delivery in 2-5 business days typically'
                  }
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <Package className="h-10 w-10 mx-auto mb-4 text-black/60" />
                <h3 className="text-lg font-light text-black mb-3">
                  {language === 'fr' ? 'Livraison Gratuite' : 'Free Shipping'}
                </h3>
                <p className="text-black/60 font-light leading-relaxed">
                  {language === 'fr'
                    ? 'Gratuite à partir de 149€ d\'achat'
                    : 'Free from €149 purchase'
                  }
                </p>
              </div>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8">
              <h3 className="text-xl font-light text-black mb-4">
                {language === 'fr' ? 'Détails de Livraison' : 'Shipping Details'}
              </h3>
              <div className="space-y-4 text-black/70 font-light">
                <p>
                  {language === 'fr'
                    ? '• Toutes nos créations sont emballées à la main avec des matériaux écologiques'
                    : '• All our creations are hand-packed with eco-friendly materials'
                  }
                </p>
                <p>
                  {language === 'fr'
                    ? '• Suivi complet fourni pour chaque commande'
                    : '• Full tracking provided for every order'
                  }
                </p>
                <p>
                  {language === 'fr'
                    ? '• Assurance incluse pour toutes les expéditions internationales'
                    : '• Insurance included for all international shipments'
                  }
                </p>
                <p>
                  {language === 'fr'
                    ? '• Emballage cadeau disponible sur demande'
                    : '• Gift wrapping available upon request'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Returns Policy */}
          <div>
            <div className="flex items-center mb-8">
              <Shield className="h-8 w-8 text-black mr-4" />
              <h2 className="text-3xl font-extralight text-black tracking-tight">
                {language === 'fr' ? 'Politique de Retour' : 'Returns Policy'}
              </h2>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8 mb-8">
              <p className="text-lg font-light text-black/70 leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Nous comprenons que chaque création artisanale est unique et que parfois, elle peut ne pas correspondre exactement à vos attentes. Votre satisfaction est notre priorité.'
                  : 'We understand that each artisanal creation is unique and sometimes may not exactly match your expectations. Your satisfaction is our priority.'
                }
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-black/70 font-light">
                    {language === 'fr'
                      ? 'Si votre article arrive endommagé ou ne correspond pas à la description, contactez-nous dans les 7 jours suivant la réception'
                      : 'If your item arrives damaged or doesn\'t match the description, contact us within 7 days of receipt'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-black/70 font-light">
                    {language === 'fr'
                      ? 'Nous travaillerons ensemble pour trouver une solution équitable et respectueuse'
                      : 'We will work together to find a fair and respectful solution'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-black/70 font-light">
                    {language === 'fr'
                      ? 'Chaque cas est étudié individuellement avec bienveillance et compréhension'
                      : 'Each case is studied individually with kindness and understanding'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Mail className="h-10 w-10 mx-auto mb-4 text-black/60" />
              <h3 className="text-xl font-light text-black mb-4">
                {language === 'fr' ? 'Besoin d\'aide ?' : 'Need help?'}
              </h3>
              <p className="text-black/60 font-light mb-6 leading-relaxed">
                {language === 'fr'
                  ? 'Notre équipe dédiée est là pour vous accompagner à chaque étape'
                  : 'Our dedicated team is here to support you every step of the way'
                }
              </p>
              <a
                href="mailto:support@atlasperle.com"
                className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-light transition-all duration-300 hover:bg-black/90"
              >
                <Mail className="h-5 w-5 mr-2" />
                support@atlasperle.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <ModernElegantFooter />
    </div>
  );
};

export default ShippingReturns;
