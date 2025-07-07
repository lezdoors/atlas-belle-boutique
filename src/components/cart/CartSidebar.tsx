import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, totalItems, isLoading, updateQuantity, removeFromCart, clearCart } = useCart();

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    // Here you would typically navigate to checkout page
    console.log('Proceeding to checkout...');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full sm:w-96 lg:w-[420px]`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-stone-700" />
              <h2 className="text-lg font-serif text-stone-900">
                Panier ({totalItems})
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-2 border-stone-300 border-t-stone-600 rounded-full mx-auto mb-2" />
                <p className="text-stone-500">Chargement...</p>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-stone-400" />
                </div>
                <h3 className="text-lg font-serif text-stone-700 mb-2">
                  Votre panier est vide
                </h3>
                <p className="text-stone-500 mb-6 text-sm">
                  Découvrez notre collection de céramiques artisanales
                </p>
                <Button
                  onClick={onClose}
                  className="bg-stone-900 text-white hover:bg-stone-800"
                >
                  Continuer mes achats
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="p-6 space-y-0">
                    {items.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeFromCart}
                      />
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Clear Cart Button */}
              {items.length > 0 && (
                <div className="px-6 pb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                    className="w-full text-stone-600 hover:text-red-600 hover:border-red-300"
                  >
                    Vider le panier
                  </Button>
                </div>
              )}

              <Separator />

              {/* Cart Summary */}
              <div className="p-6">
                <CartSummary onCheckout={handleCheckout} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;