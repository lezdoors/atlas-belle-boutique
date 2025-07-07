
import { Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { convertAndFormat } from '@/utils/currencyConverter';
import { calculateShipping, formatShippingCost, getFreeShippingThreshold } from '@/utils/shippingCalculator';

const OrderSummary = () => {
  const { items, totalPrice } = useCart();
  const { language, currency } = useLanguage();

  // Calculate shipping
  const convertedTotalPrice = currency === 'EUR' ? Math.round(totalPrice * 0.093) : Math.round(totalPrice * 0.099);
  const shippingCost = calculateShipping(convertedTotalPrice, currency);
  const freeShippingThreshold = getFreeShippingThreshold(currency);
  const finalTotal = convertedTotalPrice + shippingCost;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - convertedTotalPrice);

  return (
    <div className="bg-white rounded-2xl p-6 luxury-shadow">
      <h2 className="text-xl font-semibold text-clay-800 mb-6">
        {language === 'fr' ? 'Récapitulatif de commande' : 'Order Summary'}
      </h2>
      
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <img
              src={item.product.images?.[0] || '/placeholder.svg'}
              alt={item.product.name_fr}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-medium text-clay-800">{item.product.name_fr}</h4>
              <p className="text-sm text-clay-600">{item.product.name_en}</p>
              <p className="text-sm text-clay-600">
                {language === 'fr' ? 'Qté' : 'Qty'}: {item.quantity}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-copper-600">
                {convertAndFormat(item.product.price * item.quantity, currency)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Information */}
      <div className="border-t border-sand-200 pt-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-clay-700">
            {language === 'fr' ? 'Sous-total' : 'Subtotal'}
          </span>
          <span className="font-medium text-clay-800">
            {convertAndFormat(totalPrice, currency)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Truck className="h-4 w-4 text-clay-600" />
            <span className="text-clay-700">
              {language === 'fr' ? 'Livraison' : 'Shipping'}
            </span>
          </div>
          <span className={`font-medium ${shippingCost === 0 ? 'text-green-600' : 'text-clay-800'}`}>
            {formatShippingCost(shippingCost, currency)}
          </span>
        </div>

        {/* Free shipping progress */}
        {amountNeededForFreeShipping > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-sm text-amber-700">
              {language === 'fr' 
                ? `Ajoutez ${currency === 'EUR' ? '€' : '$'}${amountNeededForFreeShipping.toFixed(2)} pour la livraison gratuite!`
                : `Add ${currency === 'EUR' ? '€' : '$'}${amountNeededForFreeShipping.toFixed(2)} for free shipping!`
              }
            </p>
          </div>
        )}

        <div className="border-t border-sand-200 pt-3">
          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-clay-800">
              {language === 'fr' ? 'Total' : 'Total'}
            </span>
            <span className="text-copper-600">
              {currency === 'EUR' ? '€' : '$'}{finalTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
