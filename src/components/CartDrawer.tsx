
import { X, Minus, Plus, ShoppingBag, ArrowRight, Truck, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
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

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent side="right" className="w-full sm:max-w-lg bg-white p-0">
        <SheetHeader className="px-6 py-4 border-b border-stone-200">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-light text-stone-800">
              {language === 'fr' ? 'Mon Panier' : 'My Cart'}
              {totalItems > 0 && (
                <span className="ml-2 text-sm text-stone-500 font-normal">
                  ({totalItems} {language === 'fr' ? 'articles' : 'items'})
                </span>
              )}
            </SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeCart}
              className="text-stone-500 hover:text-stone-700 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            // Empty Cart State
            <div className="flex-1 flex flex-col px-6 py-8">
              <div className="text-center mb-8">
                <ShoppingBag className="h-16 w-16 text-stone-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-stone-700 mb-2">
                  {language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <Button
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-light"
                  onClick={closeCart}
                  asChild
                >
                  <Link to="/boutique">
                    {language === 'fr' ? 'Continuer mes achats' : 'Continue Shopping'}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-stone-300 text-stone-700 hover:bg-stone-50 font-light"
                  onClick={closeCart}
                  asChild
                >
                  <Link to="/auth">
                    {language === 'fr' ? 'Se connecter' : 'Login'}
                  </Link>
                </Button>
              </div>

              <Separator className="mb-8" />

              {/* The Friends of the Maison Section */}
              <div className="mb-8">
                <h4 className="font-medium text-stone-800 mb-3">
                  {language === 'fr' ? 'Les amis de la maison' : 'The friends of the maison'}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {language === 'fr' 
                    ? 'Rejoignez notre communauté d\'amateurs d\'artisanat authentique et découvrez les traditions céramiques transmises depuis des générations dans l\'Atlas marocain.'
                    : 'Join our community of authentic craft enthusiasts and discover the ceramic traditions passed down for generations in the Moroccan Atlas.'
                  }
                </p>
                <Link 
                  to="/about" 
                  className="text-sm text-stone-800 hover:text-stone-600 underline font-medium"
                  onClick={closeCart}
                >
                  {language === 'fr' ? 'Découvrir plus' : 'Discover more'}
                </Link>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Truck className="h-5 w-5 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-stone-800">
                      {language === 'fr' ? 'Livraison gratuite avec FedEx Ground' : 'Free shipping with FedEx Ground'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Gift className="h-5 w-5 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-stone-800">
                      {language === 'fr' ? 'Échantillons gratuits' : 'Complimentary samples'}
                    </p>
                    <p className="text-xs text-stone-500">
                      {language === 'fr' ? '(avec conditions)' : '(with conditions)'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-stone-800">
                      {language === 'fr' ? 'Marque d\'appréciation pour les commandes de plus de 125€' : 'Token of appreciation for orders over $125'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-auto pt-8">
                <div className="text-center">
                  <div className="font-script text-2xl text-stone-600 mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    Perle de l’Atlas
                  </div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">
                    {language === 'fr' ? 'Artisanat Authentique' : 'Authentic Craftsmanship'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Cart with Items
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 p-4 border border-stone-200 rounded-lg hover:shadow-sm transition-shadow">
                      <img
                        src={item.product.images?.[0] || '/placeholder.svg'}
                        alt={item.product.name_fr}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-stone-800 text-sm line-clamp-2 mb-1">
                          {item.product.name_fr}
                        </h4>
                        <p className="text-xs text-stone-500 mb-2">
                          {item.product.name_en}
                        </p>
                        <p className="text-stone-800 font-medium text-sm mb-3">
                          {convertAndFormat(item.product.price_eur, currency)}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 border-stone-300"
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
                            className="h-7 w-7 border-stone-300"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-stone-400 hover:text-red-500 h-8 w-8"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-stone-200 p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-stone-800">
                    {language === 'fr' ? 'Sous-total' : 'Subtotal'}
                  </span>
                  <span className="text-lg font-medium text-stone-800">
                    {convertAndFormat(totalPrice, currency)}
                  </span>
                </div>
                
                {/* Checkout Button */}
                <Button
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-light h-12"
                  onClick={closeCart}
                  asChild
                >
                  <Link to="/checkout">
                    {language === 'fr' ? 'Commander' : 'Checkout'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
