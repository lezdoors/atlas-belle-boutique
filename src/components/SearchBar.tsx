
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchResult {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const { language } = useLanguage();

  // Mock search results
  const mockResults: SearchResult[] = [
    { id: 1, name: language === 'fr' ? 'Huile d\'Argan Bio' : 'Organic Argan Oil', category: language === 'fr' ? 'Huiles' : 'Oils', image: '/placeholder.svg' },
    { id: 2, name: language === 'fr' ? 'Parfum Oud & Rose' : 'Oud & Rose Perfume', category: language === 'fr' ? 'Parfums' : 'Perfumes', image: '/placeholder.svg' },
    { id: 3, name: language === 'fr' ? 'Masque à l\'Argile Rouge' : 'Red Clay Mask', category: language === 'fr' ? 'Masques' : 'Masks', image: '/placeholder.svg' },
  ];

  const handleInputChange = (value: string) => {
    setQuery(value);
    
    if (value.length > 2) {
      // Filter mock results based on query
      const filtered = mockResults.filter(item => 
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    setIsOpen(false);
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.name);
    setIsOpen(false);
    if (onSearch) {
      onSearch(result.name);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={language === 'fr' ? 'Rechercher un produit...' : 'Search products...'}
          className="pl-10 pr-16"
          onFocus={() => query.length > 2 && setIsOpen(true)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-clay-400" />
        
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={clearSearch}
              className="h-6 w-6"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearch}
            className="h-6 w-6"
          >
            <Search className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-80 overflow-y-auto">
          <div className="p-2">
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result)}
                className="w-full flex items-center space-x-3 p-3 hover:bg-pearl-50 rounded-lg transition-colors text-left"
              >
                <img 
                  src={result.image} 
                  alt={result.name}
                  className="w-10 h-10 object-cover rounded-lg"
                />
                <div>
                  <div className="font-medium text-clay-800">{result.name}</div>
                  <div className="text-sm text-clay-500">{result.category}</div>
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
