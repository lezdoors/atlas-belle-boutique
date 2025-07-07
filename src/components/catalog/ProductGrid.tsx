import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import ProductCard from './ProductCard';
import { Product, ProductFilters } from '@/types/product';
import { Filter } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  onAddToCart: (productId: string) => void;
  onQuickView: (product: Product) => void;
}

const ProductGrid = ({ products, isLoading = false, onAddToCart, onQuickView }: ProductGridProps) => {
  const [filters, setFilters] = useState<ProductFilters>({
    category: '',
    sortBy: 'newest',
    sortOrder: 'desc'
  });

  const categories = [
    { value: '', label: 'Toutes les catégories' },
    { value: 'tagines', label: 'Tagines' },
    { value: 'tea-glasses', label: 'Verres à Thé' },
    { value: 'bowls', label: 'Bols' },
    { value: 'accessories', label: 'Accessoires' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Nouveautés' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix décroissant' },
    { value: 'name', label: 'Nom A-Z' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price':
          const priceOrder = filters.sortOrder === 'asc' ? 1 : -1;
          return (a.price - b.price) * priceOrder;
        case 'name':
          return a.name_fr.localeCompare(b.name_fr);
        case 'newest':
        default:
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
    });

    return filtered;
  }, [products, filters]);

  const handleSortChange = (value: string) => {
    if (value === 'price-asc') {
      setFilters(prev => ({ ...prev, sortBy: 'price', sortOrder: 'asc' }));
    } else if (value === 'price-desc') {
      setFilters(prev => ({ ...prev, sortBy: 'price', sortOrder: 'desc' }));
    } else {
      setFilters(prev => ({ ...prev, sortBy: value as 'name' | 'newest', sortOrder: 'desc' }));
    }
  };

  const getCurrentSortValue = () => {
    if (filters.sortBy === 'price') {
      return filters.sortOrder === 'asc' ? 'price-asc' : 'price-desc';
    }
    return filters.sortBy;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="aspect-square rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
          Collection Maison Chapuis
        </h1>
        <p className="text-stone-600 font-light text-lg max-w-2xl mx-auto">
          Découvrez notre collection exclusive de céramiques artisanales, 
          créées avec passion et savoir-faire traditionnel.
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-stone-50 rounded-2xl">
        <div className="flex items-center gap-2 text-stone-700">
          <Filter className="w-5 h-5" />
          <span className="font-medium">Filtrer & Trier</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:ml-auto">
          <Select 
            value={filters.category} 
            onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
          >
            <SelectTrigger className="w-full sm:w-48 bg-white">
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={getCurrentSortValue()} 
            onValueChange={handleSortChange}
          >
            <SelectTrigger className="w-full sm:w-48 bg-white">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8">
        <p className="text-stone-600 font-light">
          {filteredAndSortedProducts.length} produit{filteredAndSortedProducts.length > 1 ? 's' : ''} trouvé{filteredAndSortedProducts.length > 1 ? 's' : ''}
          {filters.category && (
            <span> dans la catégorie "{categories.find(c => c.value === filters.category)?.label}"</span>
          )}
        </p>
      </div>

      {/* Product Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-stone-400 mb-4">
            <div className="w-24 h-24 mx-auto mb-4 bg-stone-100 rounded-full flex items-center justify-center">
              <Filter className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-xl font-serif text-stone-700 mb-2">
            Aucun produit trouvé
          </h3>
          <p className="text-stone-500 mb-6">
            Essayez de modifier vos filtres ou explorez d'autres catégories.
          </p>
          <Button
            onClick={() => setFilters({ category: '', sortBy: 'newest', sortOrder: 'desc' })}
            variant="outline"
          >
            Réinitialiser les filtres
          </Button>
        </div>
      )}

      {/* Load More Button (placeholder for pagination) */}
      {filteredAndSortedProducts.length > 0 && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-stone-300 text-stone-700 hover:bg-stone-50"
          >
            Voir plus de produits
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;