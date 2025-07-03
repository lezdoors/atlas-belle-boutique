
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface CheckoutOptionsProps {
  onExpressCheckout: () => void;
}

const CheckoutOptions = ({ onExpressCheckout }: CheckoutOptionsProps) => {
  const { language } = useLanguage();
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStripeCheckout = async () => {
    setIsProcessing(true);
    try {
      // Mock customer info for demo - in production, get from form or user profile
      const customerInfo = {
        name: "Test Customer",
        email: "test@example.com",
        phone: "+212600000000",
        shippingAddress: "123 Test Address, Casablanca, Morocco"
      };

      const { data, error } = await supabase.functions.invoke('cart-checkout', {
        body: {
          items: items,
          currency: 'EUR', // or 'USD' based on user preference
          customerInfo: customerInfo
        }
      });

      if (error) {
        throw error;
      }

      if (data?.url) {
        // Open Stripe checkout in a new tab (default behavior)
        window.open(data.url, '_blank');
        
        // Show success message
        toast.success(language === 'fr' 
          ? 'Redirection vers le paiement sécurisé...' 
          : 'Redirecting to secure payment...'
        );
        
        // Clear cart after successful checkout initiation
        setTimeout(() => {
          clearCart();
        }, 1000);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error(language === 'fr' 
        ? 'Erreur lors du paiement. Veuillez réessayer.' 
        : 'Payment error. Please try again.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-clay-800">
        {language === 'fr' ? 'Options de commande' : 'Checkout Options'}
      </h2>
      
      <div className="space-y-4">
        <Button
          className="w-full copper-gradient text-white text-left justify-start h-auto p-4"
          onClick={handleStripeCheckout}
          disabled={isProcessing || items.length === 0}
        >
          <div>
            <div className="font-semibold">
              {isProcessing 
                ? (language === 'fr' ? 'Traitement...' : 'Processing...') 
                : (language === 'fr' ? 'Payer avec Stripe' : 'Pay with Stripe')
              }
            </div>
            <div className="text-sm opacity-90">
              {language === 'fr' 
                ? 'Paiement sécurisé par carte bancaire'
                : 'Secure card payment'
              }
            </div>
          </div>
        </Button>
        
        <Button
          variant="outline"
          className="w-full text-left justify-start h-auto p-4"
          onClick={onExpressCheckout}
        >
          <div>
            <div className="font-semibold">
              {language === 'fr' ? 'Commande Express' : 'Express Checkout'}
            </div>
            <div className="text-sm text-clay-600">
              {language === 'fr' 
                ? 'Formulaire de commande rapide'
                : 'Quick order form'
              }
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutOptions;
