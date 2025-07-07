import { useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
import { ceramicsProducts } from '@/data/ceramicsProducts';
import { Product } from '@/types/product';

const CeramicsCatalog = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (productId: string) => {
    const product = ceramicsProducts.find(p => p.id === productId);
    if (product) {
      // Here you would typically call your cart API
      toast.success(`${product.name_fr} ajouté au panier`, {
        description: 'Continuez vos achats ou consultez votre panier',
      });
    }
  };

  const handleQuickView = (product: Product) => {
    // Here you would typically open a modal with product details
    toast.info(`Aperçu rapide: ${product.name_fr}`, {
      description: 'Fonctionnalité en développement',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/20">
      <ProductGrid
        products={ceramicsProducts}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
      />
    </div>
  );
};

export default CeramicsCatalog;