
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Mail, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!sessionId) {
        setIsLoading(false);
        return;
      }

      try {
        // Fetch order details from Supabase
        const { data: order, error } = await supabase
          .from('orders')
          .select('*')
          .eq('stripe_session_id', sessionId)
          .single();

        if (error) {
          console.error('Error fetching order:', error);
          return;
        }

        if (order) {
          setOrderDetails(order);
          
          // Update order status to paid
          await supabase
            .from('orders')
            .update({ payment_status: 'paid' })
            .eq('id', order.id);

          // Send confirmation email
          const symbol = order.currency === 'EUR' ? '€' : '$';
          const totalPrice = `${Math.round(order.price_total / 100)}${symbol}`;
          
          await supabase.functions.invoke('send-order-confirmation', {
            body: {
              customerName: order.customer_name,
              customerEmail: order.email,
              productName: `Produit #${order.product_id}`,
              quantity: order.quantity,
              totalPrice: totalPrice,
              orderId: order.id,
              language: language
            }
          });
        }
      } catch (error) {
        console.error('Error processing order:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [sessionId, language]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-pearl-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-copper-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="luxury-shadow border-0">
            <CardContent className="p-8 text-center">
              {/* Success Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="section-title text-clay-800 mb-2">
                  {language === 'fr' ? 'Commande confirmée !' : 'Order Confirmed!'}
                </h1>
                <p className="elegant-text text-clay-600 text-lg">
                  {language === 'fr' 
                    ? 'Merci pour votre confiance. Votre commande a été traitée avec succès.'
                    : 'Thank you for your trust. Your order has been processed successfully.'
                  }
                </p>
              </div>

              {/* Order Details */}
              {orderDetails && (
                <div className="bg-beige-50 rounded-lg p-6 mb-6 text-left">
                  <h3 className="font-semibold text-clay-800 mb-4">
                    {language === 'fr' ? 'Détails de la commande' : 'Order Details'}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-clay-600">
                        {language === 'fr' ? 'N° de commande:' : 'Order ID:'}
                      </span>
                      <span className="font-medium text-clay-800">
                        {orderDetails.id.slice(0, 8)}...
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-clay-600">
                        {language === 'fr' ? 'Client:' : 'Customer:'}
                      </span>
                      <span className="font-medium text-clay-800">
                        {orderDetails.customer_name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-clay-600">
                        {language === 'fr' ? 'Quantité:' : 'Quantity:'}
                      </span>
                      <span className="font-medium text-clay-800">
                        {orderDetails.quantity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-clay-600">
                        {language === 'fr' ? 'Total:' : 'Total:'}
                      </span>
                      <span className="font-medium text-copper-600 text-lg">
                        {Math.round(orderDetails.price_total / 100)}
                        {orderDetails.currency === 'EUR' ? '€' : '$'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Next Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-copper-100 rounded-full mb-3">
                    <Mail className="h-6 w-6 text-copper-600" />
                  </div>
                  <h4 className="font-medium text-clay-800 mb-1">
                    {language === 'fr' ? 'Email de confirmation' : 'Confirmation Email'}
                  </h4>
                  <p className="text-sm text-clay-600">
                    {language === 'fr' 
                      ? 'Envoyé à votre adresse email'
                      : 'Sent to your email address'
                    }
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-copper-100 rounded-full mb-3">
                    <Package className="h-6 w-6 text-copper-600" />
                  </div>
                  <h4 className="font-medium text-clay-800 mb-1">
                    {language === 'fr' ? 'Préparation' : 'Preparation'}
                  </h4>
                  <p className="text-sm text-clay-600">
                    {language === 'fr' 
                      ? 'Préparée par nos artisans'
                      : 'Prepared by our artisans'
                    }
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-copper-100 rounded-full mb-3">
                    <Package className="h-6 w-6 text-copper-600" />
                  </div>
                  <h4 className="font-medium text-clay-800 mb-1">
                    {language === 'fr' ? 'Expédition' : 'Shipping'}
                  </h4>
                  <p className="text-sm text-clay-600">
                    {language === 'fr' 
                      ? '2-3 jours ouvrables'
                      : '2-3 business days'
                    }
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
                  </Link>
                </Button>
                <Button className="flex-1 copper-gradient text-white" asChild>
                  <Link to="/boutique">
                    {language === 'fr' ? 'Continuer mes achats' : 'Continue Shopping'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
