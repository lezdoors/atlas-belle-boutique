
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProducts } from '@/hooks/useProducts';
import FragranceShowcaseHeader from '@/components/fragrance/FragranceShowcaseHeader';
import FragranceViewAllButton from '@/components/fragrance/FragranceViewAllButton';
import EnhancedProductCard from './EnhancedProductCard';
import ProductSearchBar from './ProductSearchBar';
import { Skeleton } from '@/components/ui/skeleton';
import type { Product } from '@/hooks/useProducts';

const EnhancedFragranceShowcase = () => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const { data: featuredProducts, isLoading } = useProducts(true);
  const { data: allProducts } = useProducts();

  const handleSearchResults = (results: any[]) => {
    setSearchResults(results);
    setIsSearching(results.length > 0);
  };

  const handleSearch = (query: string) => {
    console.log('Search performed:', query);
    // This could navigate to a dedicated search page
  };

  const displayedProducts = isSearching 
    ? searchResults 
    : showAll 
      ? allProducts?.slice(0, 12) || []
      : featuredProducts?.slice(0, 6) || [];

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pearl-50 to-beige-50">
        <div className="container mx-auto px-4">
          <FragranceShowcaseHeader />
          
          {/* Search Bar Skeleton */}
          <div className="max-w-2xl mx-auto mb-12">
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>

          {/* Products Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        <FragranceShowcaseHeader />
        
        {/* Enhanced Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <ProductSearchBar
            onResults={handleSearchResults}
            onSearch={handleSearch}
            className="w-full"
          />
        </div>

        {/* Search Results Header */}
        {isSearching && (
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-clay-800 mb-2">
              {language === 'fr' ? 'Résultats de recherche' : 'Search Results'}
            </h3>
            <p className="text-clay-600">
              {searchResults.length} {language === 'fr' ? 'produits trouvés' : 'products found'}
            </p>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProducts.map((product) => (
            <EnhancedProductCard 
              key={product.id} 
              product={product as Product}
              onQuickView={(product) => {
                console.log('Quick view for:', product.name_fr);
                // This would open a quick view modal
              }}
            />
          ))}
        </div>

        {/* No Results Message */}
        {isSearching && searchResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-clay-600 text-lg">
              {language === 'fr' 
                ? 'Aucun produit trouvé pour cette recherche.' 
                : 'No products found for this search.'}
            </p>
          </div>
        )}

        {/* View All Button */}
        {!isSearching && !showAll && (featuredProducts?.length || 0) > 6 && (
          <div className="text-center mt-12 lg:mt-16">
            <FragranceViewAllButton 
              onClick={() => setShowAll(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedFragranceShowcase;
