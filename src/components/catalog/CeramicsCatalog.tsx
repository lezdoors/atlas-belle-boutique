import { useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
import { ceramicsProducts } from '@/data/ceramicsProducts';
import { Product } from '@/types/product';

const CeramicsCatalog = () => {
  const [isLoading, setIsLoading] = useState(false);

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
        onQuickView={handleQuickView}
      />
    </div>
  );
};

export default CeramicsCatalog;