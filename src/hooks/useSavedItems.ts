
import { useState, useEffect } from 'react';

interface SavedItem {
  id: number;
  name: string;
  price: number;
  image: string;
  savedAt: number;
}

export const useSavedItems = () => {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  // Load saved items from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('perle-atlas-saved-items');
    if (stored) {
      try {
        setSavedItems(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading saved items:', error);
      }
    }
  }, []);

  // Save to localStorage whenever savedItems changes
  useEffect(() => {
    localStorage.setItem('perle-atlas-saved-items', JSON.stringify(savedItems));
  }, [savedItems]);

  const saveItem = (item: Omit<SavedItem, 'savedAt'>) => {
    const savedItem: SavedItem = {
      ...item,
      savedAt: Date.now()
    };
    
    setSavedItems(prev => {
      // Check if item already exists
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev;
      
      return [...prev, savedItem];
    });
  };

  const removeSavedItem = (id: number) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };

  const isItemSaved = (id: number) => {
    return savedItems.some(item => item.id === id);
  };

  const moveToCart = (id: number, addToCart: (item: any) => void) => {
    const item = savedItems.find(i => i.id === id);
    if (item) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      });
      removeSavedItem(id);
    }
  };

  return {
    savedItems,
    saveItem,
    removeSavedItem,
    isItemSaved,
    moveToCart
  };
};
