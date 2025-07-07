import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { Truck, Zap } from 'lucide-react';

interface CartSummaryProps {
  onCheckout: () => void;
}

const CartSummary = ({ onCheckout }: CartSummaryProps) => {
  const { subtotal, tax, shipping, total, totalItems } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const freeShippingThreshold = 125;
  const remainingForFreeShipping = freeShippingThreshold - subtotal;
  const qualifiesForFreeShipping = remainingForFreeShipping <= 0;

  return (
    <div className="bg-stone-50 rounded-xl p-6 space-y-4">
      {/* Free Shipping Indicator */}
      {!qualifiesForFreeShipping && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-amber-700">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">
              Ajoutez {formatPrice(remainingForFreeShipping)} pour la livraison gratuite
            </span>
          </div>
          <div className="mt-2 bg-amber-200 rounded-full h-2">
            <div 
              className="bg-amber-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      {qualifiesForFreeShipping && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-green-700">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">
              🎉 Livraison gratuite incluse !
            </span>
          </div>
        </div>
      )}

      {/* Summary Lines */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-stone-600">
            Sous-total ({totalItems} article{totalItems > 1 ? 's' : ''})
          </span>
          <span className="font-medium text-stone-900">
            {formatPrice(subtotal)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-stone-600">TVA (8%)</span>
          <span className="font-medium text-stone-900">
            {formatPrice(tax)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1">
            <span className="text-stone-600">Livraison</span>
            {shipping === 0 && (
              <span className="text-xs text-green-600 font-medium">
                (Gratuite)
              </span>
            )}
          </div>
          <span className="font-medium text-stone-900">
            {shipping === 0 ? 'Gratuite' : formatPrice(shipping)}
          </span>
        </div>

        <Separator />

        <div className="flex justify-between text-base font-semibold">
          <span className="text-stone-900">Total</span>
          <span className="text-stone-900">{formatPrice(total)}</span>
        </div>
      </div>

      {/* Shipping Options */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-stone-900">Options de livraison</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 border border-stone-200 rounded-lg bg-white">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-stone-500" />
              <div>
                <p className="text-sm font-medium text-stone-900">Standard</p>
                <p className="text-xs text-stone-500">5-7 jours ouvrés</p>
              </div>
            </div>
            <span className="text-sm font-medium">
              {qualifiesForFreeShipping ? 'Gratuite' : '$12'}
            </span>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-stone-200 rounded-lg">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <div>
                <p className="text-sm font-medium text-stone-900">Express</p>
                <p className="text-xs text-stone-500">2-3 jours ouvrés</p>
              </div>
            </div>
            <span className="text-sm font-medium">$25</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <Button 
        onClick={onCheckout}
        className="w-full bg-stone-900 text-white hover:bg-stone-800 transition-colors py-3 text-base font-medium"
        disabled={totalItems === 0}
      >
        Procéder au paiement
      </Button>

      {/* Security Note */}
      <p className="text-xs text-stone-500 text-center">
        🔒 Paiement sécurisé avec chiffrement SSL
      </p>
    </div>
  );
};

export default CartSummary;