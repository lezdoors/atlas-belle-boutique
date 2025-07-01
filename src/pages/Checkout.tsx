
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import EmptyCartView from '@/components/checkout/EmptyCartView';
import CheckoutBreadcrumb from '@/components/checkout/CheckoutBreadcrumb';
import OrderSummary from '@/components/checkout/OrderSummary';
import CheckoutOptions from '@/components/checkout/CheckoutOptions';
import CheckoutFormSection from '@/components/checkout/CheckoutFormSection';

const Checkout = () => {
  const { items, clearCart } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-pearl-100">
        <Header />
        <EmptyCartView />
        <Footer />
      </div>
    );
  }

  const handleOrderComplete = () => {
    clearCart();
    setShowCheckoutForm(false);
  };

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        <CheckoutBreadcrumb />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="space-y-6">
              <OrderSummary />
            </div>

            {/* Checkout Form */}
            <div className="bg-white rounded-2xl p-6 luxury-shadow">
              {!showCheckoutForm ? (
                <CheckoutOptions onExpressCheckout={() => setShowCheckoutForm(true)} />
              ) : (
                <CheckoutFormSection
                  onBack={() => setShowCheckoutForm(false)}
                  onComplete={handleOrderComplete}
                />
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
