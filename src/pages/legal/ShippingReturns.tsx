import MaisonChapuisHeader from '@/components/navigation/MaisonChapuisHeader';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const ShippingReturns = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <MaisonChapuisHeader />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-stone-900 mb-4">
              {language === 'fr' ? 'Livraison & Retours' : 'Shipping & Returns'}
            </h1>
            <p className="text-lg text-stone-600">
              {language === 'fr' 
                ? 'Informations sur notre politique de livraison et de retours'
                : 'Information about our shipping and returns policy'
              }
            </p>
          </div>

          <div className="prose prose-stone max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Shipping Information */}
              <div>
                <h2 className="text-2xl font-medium text-stone-900 mb-6">
                  {language === 'fr' ? 'Livraison' : 'Shipping'}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">
                      {language === 'fr' ? 'Livraison Gratuite' : 'Free Shipping'}
                    </h3>
                    <p className="text-stone-600">
                      {language === 'fr' 
                        ? 'Livraison gratuite aux États-Unis pour toute commande de $125 ou plus. Expédition sous 1-2 jours ouvrés via FedEx Ground.'
                        : 'Free shipping within the United States on orders of $125 or more. Ships within 1-2 business days via FedEx Ground.'
                      }
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">
                      {language === 'fr' ? 'Livraison Standard' : 'Standard Shipping'}
                    </h3>
                    <p className="text-stone-600">
                      {language === 'fr' 
                        ? 'Tarif fixe de $12 pour les commandes inférieures à $125. Délai de livraison: 3-5 jours ouvrés.'
                        : 'Flat rate of $12 for orders under $125. Delivery time: 3-5 business days.'
                      }
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">
                      {language === 'fr' ? 'Livraison Express' : 'Express Shipping'}
                    </h3>
                    <p className="text-stone-600">
                      {language === 'fr' 
                        ? 'Livraison en 1-2 jours ouvrés pour $25. Disponible pour les commandes passées avant 14h EST.'
                        : '1-2 business day delivery for $25. Available for orders placed before 2 PM EST.'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Returns Information */}
              <div>
                <h2 className="text-2xl font-medium text-stone-900 mb-6">
                  {language === 'fr' ? 'Retours' : 'Returns'}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">
                      {language === 'fr' ? 'Politique de Retour 30 Jours' : '30-Day Return Policy'}
                    </h3>
                    <p className="text-stone-600">
                      {language === 'fr' 
                        ? 'Retours gratuits dans les 30 jours suivant la réception. Les articles doivent être non utilisés et dans leur emballage d\'origine.'
                        : 'Free returns within 30 days of receipt. Items must be unused and in original packaging.'
                      }
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">
                      {language === 'fr' ? 'Processus de Retour' : 'Return Process'}
                    </h3>
                    <p className="text-stone-600">
                      {language === 'fr' 
                        ? 'Contactez notre service client à returns@maisonchapuis.com pour initier un retour. Nous fournirons une étiquette de retour prépayée.'
                        : 'Contact our customer service at returns@maisonchapuis.com to initiate a return. We will provide a prepaid return label.'
                      }
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">
                      {language === 'fr' ? 'Remboursements' : 'Refunds'}
                    </h3>
                    <p className="text-stone-600">
                      {language === 'fr' 
                        ? 'Les remboursements sont traités sous 3-5 jours ouvrés après réception de l\'article retourné.'
                        : 'Refunds are processed within 3-5 business days after receiving the returned item.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-t border-stone-200 pt-12">
              <h2 className="text-2xl font-medium text-stone-900 mb-6">
                {language === 'fr' ? 'Informations Importantes' : 'Important Information'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">
                    {language === 'fr' ? 'Emballage Sécurisé' : 'Secure Packaging'}
                  </h3>
                  <p className="text-stone-600">
                    {language === 'fr' 
                      ? 'Chaque pièce céramique est soigneusement emballée avec des matériaux de protection pour garantir une livraison en parfait état.'
                      : 'Each ceramic piece is carefully packaged with protective materials to ensure safe delivery.'
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">
                    {language === 'fr' ? 'Articles Endommagés' : 'Damaged Items'}
                  </h3>
                  <p className="text-stone-600">
                    {language === 'fr' 
                      ? 'Si vous recevez un article endommagé, contactez-nous immédiatement avec des photos. Nous procéderons à un remplacement ou un remboursement intégral.'
                      : 'If you receive a damaged item, contact us immediately with photos. We will arrange for a replacement or full refund.'
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">
                    {language === 'fr' ? 'Livraison Internationale' : 'International Shipping'}
                  </h3>
                  <p className="text-stone-600">
                    {language === 'fr' 
                      ? 'Actuellement, nous livrons uniquement aux États-Unis. Pour les demandes internationales, contactez-nous à international@maisonchapuis.com'
                      : 'Currently, we only ship within the United States. For international inquiries, contact us at international@maisonchapuis.com'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-stone-200 pt-12 text-center">
              <h2 className="text-2xl font-medium text-stone-900 mb-4">
                {language === 'fr' ? 'Questions ?' : 'Questions?'}
              </h2>
              <p className="text-stone-600 mb-6">
                {language === 'fr' 
                  ? 'Notre équipe du service client est là pour vous aider.'
                  : 'Our customer service team is here to help.'
                }
              </p>
              <div className="space-y-2">
                <p className="text-stone-900 font-medium">Email: hello@maisonchapuis.com</p>
                <p className="text-stone-900 font-medium">Phone: 1-800-CHAPUIS (1-800-242-7847)</p>
                <p className="text-stone-600 text-sm">
                  {language === 'fr' 
                    ? 'Disponible du lundi au vendredi, 9h-17h EST'
                    : 'Available Monday-Friday, 9 AM - 5 PM EST'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModernElegantFooter />
    </div>
  );
};

export default ShippingReturns;