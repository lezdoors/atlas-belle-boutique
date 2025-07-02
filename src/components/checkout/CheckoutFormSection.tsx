
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CheckoutForm from '@/components/CheckoutForm';
import { useLanguage, Currency } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import AuthGuard from '@/components/security/AuthGuard';

interface CheckoutFormSectionProps {
  onBack: () => void;
  onComplete: () => void;
}

const CheckoutFormSection = ({ onBack, onComplete }: CheckoutFormSectionProps) => {
  const { language, currency } = useLanguage();
  const { totalPrice } = useCart();

  // Calculate final total (this should match the calculation in OrderSummary)
  const convertedTotalPrice = currency === 'EUR' ? Math.round(totalPrice * 0.093) : Math.round(totalPrice * 0.099);
  const shippingCost = currency === 'EUR' 
    ? (convertedTotalPrice >= 139 ? 0 : 18.50)
    : (convertedTotalPrice >= 149 ? 0 : 19.90);
  const finalTotal = convertedTotalPrice + shippingCost;

  return (
    <AuthGuard requireAuth={true}>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-clay-800">
            {language === 'fr' ? 'Informations de livraison' : 'Shipping Information'}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Retour' : 'Back'}
          </Button>
        </div>
        
        <CheckoutForm
          product={{
            id: 0,
            name: language === 'fr' ? 'Commande multiple' : 'Multiple items',
            priceMAD: finalTotal * (currency === 'EUR' ? 10.75 : 10.1) // Convert back to MAD for form
          }}
          quantity={1}
          onClose={onComplete}
        />
      </div>
    </AuthGuard>
  );
};

export default CheckoutFormSection;
