
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { convertAndFormat } from '@/utils/currencyConverter';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    items, 
    totalItems, 
    totalPrice, 
    updateQuantity, 
    removeFromCart, 
    isCartOpen, 
    closeCart 
  } = useCart();
  const { language, currency } = useLanguage();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 luxury-shadow transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-sand-200">
            <h2 className="text-xl font-semibold text-clay-800">
              {language === 'fr' ? 'Mon Panier' : 'My Cart'}
              {totalItems > 0 && (
                <span className="ml-2 text-sm text-copper-600">
                  ({totalItems} {language === 'fr' ? 'articles' : 'items'})
                </span>
              )}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeCart}
              className="text-clay-600 hover:text-clay-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-clay-300 mb-4" />
                <h3 className="text-lg font-medium text-clay-600 mb-2">
                  {language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}
                </h3>
                <p className="text-clay-500 mb-6">
                  {language === 'fr' 
                    ? 'Découvrez nos produits authentiques du Maroc'
                    : 'Discover our authentic products from Morocco'
                  }
                </p>
                <Button
                  onClick={closeCart}
                  className="copper-gradient text-white"
                  asChild
                >
                  <Link to="/boutique">
                    {language === 'fr' ? 'Découvrir' : 'Shop Now'}
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}-${item.size}`} className="flex items-center space-x-4 p-4 border border-sand-200 rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-clay-800 line-clamp-2">
                        {item.name}
                      </h4>
                      {(item.variant || item.size) && (
                        <p className="text-sm text-clay-600">
                          {item.variant} {item.size && `• ${item.size}`}
                        </p>
                      )}
                      <p className="text-copper-600 font-semibold">
                        {convertAndFormat(item.priceMAD, currency)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 ml-2"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-sand-200 p-6 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-clay-800">
                  {language === 'fr' ? 'Sous-total' : 'Subtotal'}
                </span>
                <span className="text-copper-600">
                  {convertAndFormat(totalPrice, currency)}
                </span>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={closeCart}
                  asChild
                >
                  <Link to="/boutique">
                    {language === 'fr' ? 'Continuer mes achats' : 'Continue Shopping'}
                  </Link>
                </Button>
                <Button
                  className="w-full copper-gradient text-white"
                  onClick={closeCart}
                  asChild
                >
                  <Link to="/checkout">
                    {language === 'fr' ? 'Commander' : 'Checkout'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
