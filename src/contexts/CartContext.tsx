import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Product } from '@/types/product';

export interface CartItem {
  id: string;
  product_id: string;
  product: Product;
  quantity: number;
  session_id: string;
}

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  totalItems: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  isCartOpen: boolean;
}

type CartAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ITEMS'; payload: CartItem[] }
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' };

interface CartContextType extends CartState {
  addToCart: (product: Product, quantity?: number) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  clearCart: () => Promise<void>;
  totalPrice: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Tax and shipping configuration
const TAX_RATE = 0.08; // 8% US average
const FREE_SHIPPING_THRESHOLD = 125;
const STANDARD_SHIPPING = 12;
const EXPRESS_SHIPPING = 25;

function calculateCartTotals(items: CartItem[]) {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * TAX_RATE;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  const total = subtotal + tax + shipping;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return { subtotal, tax, shipping, total, totalItems };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ITEMS': {
      const totals = calculateCartTotals(action.payload);
      return {
        ...state,
        items: action.payload,
        ...totals
      };
    }
    
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product_id === action.payload.product_id);
      let newItems;
      
      if (existingItem) {
        newItems = state.items.map(item =>
          item.product_id === action.payload.product_id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }
      
      const totals = calculateCartTotals(newItems);
      return {
        ...state,
        items: newItems,
        ...totals
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      
      const totals = calculateCartTotals(newItems);
      return {
        ...state,
        items: newItems,
        ...totals
      };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const totals = calculateCartTotals(newItems);
      return {
        ...state,
        items: newItems,
        ...totals
      };
    }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        subtotal: 0,
        tax: 0,
        shipping: 0,
        total: 0
      };
    
    case 'OPEN_CART':
      return { ...state, isCartOpen: true };
    
    case 'CLOSE_CART':
      return { ...state, isCartOpen: false };
    
    case 'TOGGLE_CART':
      return { ...state, isCartOpen: !state.isCartOpen };
    
    default:
      return state;
  }
}

function generateSessionId(): string {
  try {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart_session_id');
      if (stored) return stored;
      const newId = 'session_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
      localStorage.setItem('cart_session_id', newId);
      return newId;
    }
  } catch {}
  // Fallback non-persistent id
  return 'session_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isLoading: false,
    totalItems: 0,
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
    isCartOpen: false
  });

  const sessionId = generateSessionId();

  // Load cart from Supabase on mount
  useEffect(() => {
    loadCart();
  }, []);

// Sync to localStorage whenever cart changes
useEffect(() => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart_items', JSON.stringify(state.items));
    }
  } catch {}
}, [state.items]);

const loadCart = async () => {
  try {
    dispatch({ type: 'SET_LOADING', payload: true });

    // First try to load from localStorage for immediate display
    try {
      if (typeof window !== 'undefined') {
        const localCart = localStorage.getItem('cart_items');
        if (localCart) {
          const items = JSON.parse(localCart);
          if (Array.isArray(items) && items.length > 0) {
            dispatch({ type: 'SET_ITEMS', payload: items });
          }
        }
      }
    } catch {}

    // Then sync with Supabase
    const { data: cartItems, error } = await supabase
      .from('cart_items')
      .select(`
        id,
        product_id,
        quantity,
        session_id,
        products (
          id,
          name_fr,
          name_en,
          price,
          images,
          category,
          in_stock
        )
      `)
      .eq('session_id', sessionId);

    if (error) throw error;

    const formattedItems: CartItem[] = cartItems?.map(item => ({
      id: item.id,
      product_id: item.product_id,
      product: item.products as any,
      quantity: item.quantity,
      session_id: item.session_id
    })) || [];

    dispatch({ type: 'SET_ITEMS', payload: formattedItems });

  } catch (error) {
    console.error('Error loading cart:', error);
    // Silent fail on init; set empty state and retry once in background
    dispatch({ type: 'SET_ITEMS', payload: [] });
    setTimeout(() => { loadCart().catch(() => {}); }, 3000);
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false });
  }
};

  const addToCart = async (product: Product, quantity = 1) => {
    try {
      if (!product.in_stock) {
        toast.error('Produit non disponible');
        return;
      }

      // Check if item already exists in Supabase
      const { data: existingItem } = await supabase
        .from('cart_items')
        .select('*')
        .eq('session_id', sessionId)
        .eq('product_id', product.id)
        .single();

      if (existingItem) {
        // Update existing item
        const newQuantity = existingItem.quantity + quantity;
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: newQuantity })
          .eq('id', existingItem.id);

        if (error) throw error;

        dispatch({ 
          type: 'UPDATE_QUANTITY', 
          payload: { id: existingItem.id, quantity: newQuantity } 
        });
      } else {
        // Add new item
        const { data: newItem, error } = await supabase
          .from('cart_items')
          .insert({
            session_id: sessionId,
            product_id: product.id,
            quantity
          })
          .select()
          .single();

        if (error) throw error;

        const cartItem: CartItem = {
          id: newItem.id,
          product_id: product.id,
          product,
          quantity,
          session_id: sessionId
        };

        dispatch({ type: 'ADD_ITEM', payload: cartItem });
      }

      toast.success(`${product.name_fr} ajouté au panier`, {
        description: `Quantité: ${quantity}`,
      });

    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Erreur lors de l\'ajout au panier');
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    try {
      if (quantity <= 0) {
        await removeFromCart(id);
        return;
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', id);

      if (error) throw error;

      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Erreur lors de la mise à jour');
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', id);

      if (error) throw error;

      dispatch({ type: 'REMOVE_ITEM', payload: id });
      toast.success('Produit retiré du panier');

    } catch (error) {
      console.error('Error removing from cart:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const clearCart = async () => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('session_id', sessionId);

      if (error) throw error;

      dispatch({ type: 'CLEAR_CART' });
      localStorage.removeItem('cart_items');
      toast.success('Panier vidé');

    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Erreur lors de la suppression');
    }
  };

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalPrice: state.total,
      openCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}