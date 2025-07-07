import { useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
import { ceramicsProducts } from '@/data/ceramicsProducts';
import { Product } from '@/types/product';
import MaisonChapuisHeader from '@/components/navigation/MaisonChapuisHeader';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const CatalogWithCart = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickView = (product: Product) => {
    // Here you would typically open a modal with product details
    toast.info(`Aperçu rapide: ${product.name_fr}`, {
      description: 'Fonctionnalité en développement',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <MaisonChapuisHeader />
      <div className="pt-32"> {/* Add padding to account for fixed header */}
        <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/20">
          <ProductGrid
            products={ceramicsProducts}
            isLoading={isLoading}
            onQuickView={handleQuickView}
          />
        </div>
      </div>
      <ModernElegantFooter />
    </div>
  );
};

export default CatalogWithCart;