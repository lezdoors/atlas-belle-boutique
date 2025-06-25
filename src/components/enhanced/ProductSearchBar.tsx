
import { useState, useEffect } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchResult {
  id: string;
  name_fr: string;
  name_en: string;
  category: string;
  images: string[];
}

interface ProductSearchBarProps {
  onResults: (results: SearchResult[]) => void;
  onSearch: (query: string) => void;
  className?: string;
}

const ProductSearchBar = ({ onResults, onSearch, className = '' }: ProductSearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const { language } = useLanguage();
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      searchProducts(debouncedQuery);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [debouncedQuery, language]);

  const searchProducts = async (searchQuery: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('products')
        .select('id, name_fr, name_en, category, images')
        .eq('is_active', true)
        .or(`name_fr.ilike.%${searchQuery}%,name_en.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`)
        .limit(8);

      if (error) throw error;

      const searchResults = data || [];
      setResults(searchResults);
      setShowResults(true);
      onResults(searchResults);
      
      // Track search analytics
      await supabase
        .from('search_analytics')
        .insert({
          query: searchQuery,
          results_count: searchResults.length,
          session_id: crypto.randomUUID()
        });

    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setShowResults(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
    onResults([]);
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-clay-500 h-4 w-4" />
          <Input
            type="text"
            placeholder={
              language === 'fr' 
                ? 'Rechercher des produits...' 
                : 'Search products...'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-12 py-3 border-2 border-clay-200 rounded-xl focus:border-copper-400 focus:ring-2 focus:ring-copper-100"
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-clay-200 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-sm text-clay-600 mb-2 px-3">
              {results.length} {language === 'fr' ? 'résultats trouvés' : 'results found'}
            </div>
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => {
                  onSearch(result.id);
                  setShowResults(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-clay-50 transition-colors text-left"
              >
                <img
                  src={result.images[0] || '/placeholder.svg'}
                  alt={language === 'fr' ? result.name_fr : result.name_en}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div>
                  <div className="font-medium text-clay-800">
                    {language === 'fr' ? result.name_fr : result.name_en}
                  </div>
                  <div className="text-sm text-clay-600">{result.category}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-clay-200 rounded-xl shadow-lg z-50 p-4 text-center">
          <div className="text-clay-600">
            {language === 'fr' ? 'Recherche en cours...' : 'Searching...'}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearchBar;
