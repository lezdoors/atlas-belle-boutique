
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/CheckoutForm';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { convertAndFormat } from '@/utils/currencyConverter';
import { calculateShipping, formatShippingCost, getFreeShippingThreshold } from '@/utils/shippingCalculator';
import { ShoppingCart, ArrowLeft, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { language, currency } = useLanguage();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // Calculate shipping
  const convertedTotalPrice = currency === 'EUR' ? Math.round(totalPrice * 0.093) : Math.round(totalPrice * 0.099);
  const shippingCost = calculateShipping(convertedTotalPrice, currency);
  const freeShippingThreshold = getFreeShippingThreshold(currency);
  const finalTotal = convertedTotalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-pearl-100">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingCart className="h-16 w-16 text-clay-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-clay-800 mb-4">
              {language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}
            </h1>
            <p className="text-clay-600 mb-6">
              {language === 'fr' 
                ? 'Ajoutez des produits à votre panier pour continuer'
                : 'Add products to your cart to continue'
              }
            </p>
            <Button asChild className="copper-gradient text-white">
              <Link to="/boutique">
                {language === 'fr' ? 'Découvrir nos produits' : 'Shop our products'}
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleOrderComplete = () => {
    clearCart();
    setShowCheckoutForm(false);
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - convertedTotalPrice);

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-clay-600 mb-8">
          <Link to="/" className="hover:text-copper-600">
            {language === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <span>/</span>
          <Link to="/boutique" className="hover:text-copper-600">
            {language === 'fr' ? 'Boutique' : 'Shop'}
          </Link>
          <span>/</span>
          <span className="text-clay-800">
            {language === 'fr' ? 'Commande' : 'Checkout'}
          </span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 luxury-shadow">
                <h2 className="text-xl font-semibold text-clay-800 mb-6">
                  {language === 'fr' ? 'Récapitulatif de commande' : 'Order Summary'}
                </h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-clay-800">{item.name}</h4>
                        {item.size && (
                          <p className="text-sm text-clay-600">{item.size}</p>
                        )}
                        <p className="text-sm text-clay-600">
                          {language === 'fr' ? 'Qté' : 'Qty'}: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-copper-600">
                          {convertAndFormat(item.priceMAD * item.quantity, currency)}
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
            </div>

            {/* Checkout Form */}
            <div className="bg-white rounded-2xl p-6 luxury-shadow">
              {!showCheckoutForm ? (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-clay-800">
                    {language === 'fr' ? 'Options de commande' : 'Checkout Options'}
                  </h2>
                  
                  <div className="space-y-4">
                    <Button
                      className="w-full copper-gradient text-white text-left justify-start h-auto p-4"
                      onClick={() => setShowCheckoutForm(true)}
                    >
                      <div>
                        <div className="font-semibold">
                          {language === 'fr' ? 'Commande Express' : 'Express Checkout'}
                        </div>
                        <div className="text-sm opacity-90">
                          {language === 'fr' 
                            ? 'Passez votre commande rapidement'
                            : 'Place your order quickly'
                          }
                        </div>
                      </div>
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="w-full text-left justify-start h-auto p-4"
                      disabled
                    >
                      <div>
                        <div className="font-semibold">
                          {language === 'fr' ? 'Créer un compte' : 'Create Account'}
                        </div>
                        <div className="text-sm text-clay-600">
                          {language === 'fr' 
                            ? 'Bientôt disponible'
                            : 'Coming soon'
                          }
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-clay-800">
                      {language === 'fr' ? 'Informations de livraison' : 'Shipping Information'}
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowCheckoutForm(false)}
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
                    onClose={handleOrderComplete}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
