import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProducts } from '@/hooks/useProducts';
import MobileProductCard from '@/components/mobile/MobileProductCard';
import MobileFilterPanel from '@/components/mobile/MobileFilterPanel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  availability: 'all' | 'in_stock' | 'out_of_stock';
  sortBy: 'name' | 'price_low' | 'price_high' | 'newest' | 'popular';
}

interface SearchResultsProps {
  searchQuery: string;
  isVisible: boolean;
}

const SearchResults = ({ searchQuery, isVisible }: SearchResultsProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    availability: 'all',
    sortBy: 'name'
  });

  const { language } = useLanguage();
  const { data: products = [], isLoading: loading, error } = useProducts();

  // Get unique categories from products
  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean))) as string[];
  
  // Calculate price range from products (using EUR prices)
  const priceRange: [number, number] = products.length > 0 ? [
    Math.floor(Math.min(...products.map(p => p.price_eur))),
    Math.ceil(Math.max(...products.map(p => p.price_eur)))
  ] : [0, 1000];

  // Update price range when products load
  useEffect(() => {
    if (products.length > 0) {
      setFilters(prev => ({
        ...prev,
        priceRange: priceRange
      }));
    }
  }, [products]);

  // Filter and search products
  const filteredProducts = products.filter(product => {
    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const nameMatches = product.name_fr.toLowerCase().includes(searchLower) ||
                         product.name_en.toLowerCase().includes(searchLower);
      const categoryMatches = product.category.toLowerCase().includes(searchLower);
      const descriptionMatches = product.description_fr?.toLowerCase().includes(searchLower) ||
                                product.description_en?.toLowerCase().includes(searchLower);
      
      if (!nameMatches && !categoryMatches && !descriptionMatches) {
        return false;
      }
    }

    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }

    // Price filter (using EUR prices)
    if (product.price_eur < filters.priceRange[0] || product.price_eur > filters.priceRange[1]) {
      return false;
    }

    // Availability filter (using stock_quantity)
    if (filters.availability !== 'all') {
      const inStock = (product.stock_quantity ?? 0) > 0;
      if (filters.availability === 'in_stock' && !inStock) return false;
      if (filters.availability === 'out_of_stock' && inStock) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price_low':
        return a.price_eur - b.price_eur;
      case 'price_high':
        return b.price_eur - a.price_eur;
      case 'newest':
        return new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime();
      case 'popular':
        // Sort by stock status and featured status as proxy for popularity
        const aPopular = Number(a.featured) + Number((a.stock_quantity ?? 0) > 0);
        const bPopular = Number(b.featured) + Number((b.stock_quantity ?? 0) > 0);
        return bPopular - aPopular;
      case 'name':
      default:
        const nameA = language === 'fr' ? a.name_fr : a.name_en;
        const nameB = language === 'fr' ? b.name_fr : b.name_en;
        return nameA.localeCompare(nameB);
    }
  });

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.categories.length > 0) count++;
    if (filters.priceRange[0] !== priceRange[0] || filters.priceRange[1] !== priceRange[1]) count++;
    if (filters.availability !== 'all') count++;
    if (filters.sortBy !== 'name') count++;
    return count;
  };

  if (!isVisible) return null;

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4 bg-stone-50">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
              <div className="aspect-square bg-stone-200" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-stone-200 rounded w-3/4" />
                <div className="h-3 bg-stone-200 rounded w-1/2" />
                <div className="h-8 bg-stone-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 px-4 bg-stone-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-stone-600">
            {language === 'fr' ? 'Erreur lors du chargement des produits' : 'Error loading products'}
          </div>
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
          >
            {language === 'fr' ? 'Réessayer' : 'Retry'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-6 bg-stone-50">
      {/* Search Header */}
      <div className="sticky top-16 z-40 bg-white border-b border-stone-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-stone-500" />
            <span className="text-sm text-stone-600">
              {searchQuery ? (
                language === 'fr' 
                  ? `Résultats pour "${searchQuery}"` 
                  : `Results for "${searchQuery}"`
              ) : (
                language === 'fr' ? 'Tous les produits' : 'All products'
              )}
            </span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2"
          >
            <Filter className="h-4 w-4" />
            <span>{language === 'fr' ? 'Filtres' : 'Filters'}</span>
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-1 bg-copper-100 text-copper-700">
                {getActiveFilterCount()}
              </Badge>
            )}
          </Button>
        </div>

        {/* Results Count */}
        <div className="mt-2 text-xs text-stone-500">
          {sortedProducts.length} {language === 'fr' ? 'produits trouvés' : 'products found'}
        </div>

        {/* Active Filters */}
        {(filters.categories.length > 0 || filters.availability !== 'all' || filters.sortBy !== 'name') && (
          <div className="mt-3 flex flex-wrap gap-2">
            {filters.categories.map(category => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
            {filters.availability !== 'all' && (
              <Badge variant="secondary" className="text-xs">
                {filters.availability === 'in_stock' 
                  ? (language === 'fr' ? 'En stock' : 'In Stock')
                  : (language === 'fr' ? 'Épuisé' : 'Out of Stock')
                }
              </Badge>
            )}
            {filters.sortBy !== 'name' && (
              <Badge variant="secondary" className="text-xs">
                {language === 'fr' ? 'Trié par' : 'Sorted by'}: {
                  filters.sortBy === 'price_low' ? (language === 'fr' ? 'Prix ↑' : 'Price ↑') :
                  filters.sortBy === 'price_high' ? (language === 'fr' ? 'Prix ↓' : 'Price ↓') :
                  filters.sortBy === 'newest' ? (language === 'fr' ? 'Nouveau' : 'Newest') :
                  filters.sortBy === 'popular' ? (language === 'fr' ? 'Populaire' : 'Popular') : ''
                }
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-4">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <div className="text-stone-600">
              {searchQuery ? (
                language === 'fr' 
                  ? 'Aucun produit trouvé pour votre recherche' 
                  : 'No products found for your search'
              ) : (
                language === 'fr' ? 'Aucun produit disponible' : 'No products available'
              )}
            </div>
            <Button 
              variant="outline"
              onClick={() => {
                setFilters({
                  categories: [],
                  priceRange: priceRange,
                  availability: 'all',
                  sortBy: 'name'
                });
              }}
            >
              {language === 'fr' ? 'Effacer les filtres' : 'Clear Filters'}
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {sortedProducts.map(product => {
              // Transform product to match MobileProductCard interface
              const transformedProduct = {
                id: product.id,
                name_fr: product.name_fr,
                name_en: product.name_en,
                price: product.price_eur, // Use EUR price as base
                images: product.images || [],
                category: product.category,
                in_stock: (product.stock_quantity ?? 0) > 0,
                description_fr: product.description_fr,
                description_en: product.description_en,
                created_at: product.created_at || new Date().toISOString()
              };
              return (
                <MobileProductCard key={product.id} product={transformedProduct} />
              );
            })}
          </div>
        )}
      </div>

      {/* Filter Panel */}
      <MobileFilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
        categories={categories}
        priceRange={priceRange}
      />
    </div>
  );
};

export default SearchResults;