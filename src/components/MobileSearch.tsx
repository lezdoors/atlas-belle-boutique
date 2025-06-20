
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSearch: React.FC<MobileSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { language } = useLanguage();

  const trendingSearches = language === 'fr' 
    ? ['Huile d\'argan', 'Oud & Rose', 'Masque argile', 'Crème anti-âge']
    : ['Argan oil', 'Oud & Rose', 'Clay mask', 'Anti-aging cream'];

  const handleSearch = (searchQuery: string) => {
    console.log('Mobile search:', searchQuery);
    setQuery(searchQuery);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-0 h-full w-full max-w-none m-0 p-0 bg-white overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-pearl-200">
            <h2 className="font-display font-semibold text-lg text-clay-800">
              {language === 'fr' ? 'Rechercher' : 'Search'}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-10 w-10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Search Input */}
          <div className="p-4">
            <div className="relative">
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={language === 'fr' ? 'Rechercher un produit...' : 'Search products...'}
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-copper-200 focus:border-copper-400"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-clay-400" />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuery('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Trending Searches */}
          <div className="flex-1 p-4">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-5 w-5 text-copper-600 mr-2" />
              <h3 className="font-medium text-clay-800">
                {language === 'fr' ? 'Recherches populaires' : 'Trending searches'}
              </h3>
            </div>
            <div className="space-y-2">
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="w-full text-left p-3 rounded-lg hover:bg-pearl-50 transition-colors"
                >
                  <div className="flex items-center">
                    <Search className="h-4 w-4 text-clay-400 mr-3" />
                    <span className="text-clay-700">{search}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileSearch;
