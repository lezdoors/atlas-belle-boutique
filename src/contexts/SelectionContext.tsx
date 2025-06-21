
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface SelectionItem {
  id: number;
  name: string;
  priceMAD: number;
  originalPriceMAD?: number;
  image: string;
  rating: number;
  reviews: number;
  badge: { type: 'new' | 'bestseller' | 'limited' | 'discount'; discount?: number };
  description: string;
  region?: string;
}

interface SelectionContextType {
  selectedItems: SelectionItem[];
  addToSelection: (product: SelectionItem) => void;
  removeFromSelection: (productId: number) => void;
  isInSelection: (productId: number) => boolean;
  totalItems: number;
  clearSelection: () => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }
  return context;
};

interface SelectionProviderProps {
  children: ReactNode;
}

export const SelectionProvider: React.FC<SelectionProviderProps> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<SelectionItem[]>([]);
  const { toast } = useToast();
  const { language } = useLanguage();

  // Load from localStorage on mount
  useEffect(() => {
    const savedSelection = localStorage.getItem('perle-atlas-selection');
    if (savedSelection) {
      try {
        const parsedSelection = JSON.parse(savedSelection);
        setSelectedItems(parsedSelection);
      } catch (error) {
        console.error('Error parsing saved selection:', error);
      }
    }
  }, []);

  // Save to localStorage whenever selectedItems changes
  useEffect(() => {
    localStorage.setItem('perle-atlas-selection', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const addToSelection = (product: SelectionItem) => {
    if (!isInSelection(product.id)) {
      setSelectedItems(prev => [...prev, product]);
      toast({
        title: language === 'fr' ? 'Produit ajouté à Ma Sélection' : 'Product added to My Selection',
        description: `${product.name} ${language === 'fr' ? 'a été ajouté à votre sélection' : 'has been added to your selection'}`,
      });
    }
  };

  const removeFromSelection = (productId: number) => {
    const product = selectedItems.find(item => item.id === productId);
    setSelectedItems(prev => prev.filter(item => item.id !== productId));
    if (product) {
      toast({
        title: language === 'fr' ? 'Produit retiré de Ma Sélection' : 'Product removed from My Selection',
        description: `${product.name} ${language === 'fr' ? 'a été retiré de votre sélection' : 'has been removed from your selection'}`,
      });
    }
  };

  const isInSelection = (productId: number) => {
    return selectedItems.some(item => item.id === productId);
  };

  const clearSelection = () => {
    setSelectedItems([]);
    toast({
      title: language === 'fr' ? 'Sélection vidée' : 'Selection cleared',
      description: language === 'fr' ? 'Tous les produits ont été retirés de votre sélection' : 'All products have been removed from your selection',
    });
  };

  return (
    <SelectionContext.Provider value={{
      selectedItems,
      addToSelection,
      removeFromSelection,
      isInSelection,
      totalItems: selectedItems.length,
      clearSelection
    }}>
      {children}
    </SelectionContext.Provider>
  );
};
