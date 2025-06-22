
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ViewControls from './ViewControls';

interface ProductsToolbarProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  productCount: number;
}

const ProductsToolbar: React.FC<ProductsToolbarProps> = ({
  showFilters,
  setShowFilters,
  viewMode,
  setViewMode,
  productCount
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 border-clay-200 hover:border-clay-400 text-clay-700"
        >
          <Filter className="h-4 w-4" />
          Filtres
        </Button>
        
        <ViewControls viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      
      <p className="text-sm text-clay-600">
        {productCount} produits trouvés
      </p>
    </div>
  );
};

export default ProductsToolbar;
