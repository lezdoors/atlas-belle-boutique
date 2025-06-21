
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

export interface CartItem {
  id: number;
  name: string;
  priceMAD: number;
  image: string;
  quantity: number;
  variant?: string;
  size?: string;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('perle-atlas-cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('perle-atlas-cart', JSON.stringify(items));
  }, [items]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.priceMAD * item.quantity, 0);

  const addToCart = (product: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setItems(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && 
        item.variant === product.variant && 
        item.size === product.size
      );

      if (existingItem) {
        toast({
          title: language === 'fr' ? 'Produit ajouté' : 'Product added',
          description: language === 'fr' 
            ? 'Quantité mise à jour dans le panier'
            : 'Quantity updated in cart'
        });
        return prev.map(item =>
          item.id === product.id && 
          item.variant === product.variant && 
          item.size === product.size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast({
          title: language === 'fr' ? 'Produit ajouté' : 'Product added',
          description: language === 'fr' 
            ? 'Produit ajouté au panier avec succès'
            : 'Product added to cart successfully'
        });
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prev => prev.filter(item => item.id !== productId));
    toast({
      title: language === 'fr' ? 'Produit retiré' : 'Product removed',
      description: language === 'fr' 
        ? 'Produit retiré du panier'
        : 'Product removed from cart'
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(prev => prev.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: language === 'fr' ? 'Panier vidé' : 'Cart cleared',
      description: language === 'fr' 
        ? 'Tous les produits ont été retirés'
        : 'All products have been removed'
    });
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider value={{
      items,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      openCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
