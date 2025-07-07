import { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/contexts/LanguageContext';

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  availability: 'all' | 'in_stock' | 'out_of_stock';
  sortBy: 'name' | 'price_low' | 'price_high' | 'newest' | 'popular';
}

interface MobileFilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  categories: string[];
  priceRange: [number, number];
}

const MobileFilterPanel = ({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
  categories,
  priceRange
}: MobileFilterPanelProps) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    availability: true,
    sort: true
  });
  const { language } = useLanguage();

  if (!isOpen) return null;

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFiltersChange({
      ...filters,
      categories: newCategories
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: priceRange,
      availability: 'all',
      sortBy: 'name'
    });
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.categories.length > 0) count++;
    if (filters.priceRange[0] !== priceRange[0] || filters.priceRange[1] !== priceRange[1]) count++;
    if (filters.availability !== 'all') count++;
    if (filters.sortBy !== 'name') count++;
    return count;
  };

  const FilterSection = ({ 
    title, 
    isExpanded, 
    onToggle, 
    children 
  }: { 
    title: string; 
    isExpanded: boolean; 
    onToggle: () => void; 
    children: React.ReactNode; 
  }) => (
    <div className="border-b border-stone-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <h3 className="font-medium text-stone-900">{title}</h3>
        {isExpanded ? 
          <ChevronUp className="h-5 w-5 text-stone-500" /> : 
          <ChevronDown className="h-5 w-5 text-stone-500" />
        }
      </button>
      {isExpanded && (
        <div className="pb-4 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-stone-200">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-medium text-stone-900">
                {language === 'fr' ? 'Filtres' : 'Filters'}
              </h2>
              {getActiveFilterCount() > 0 && (
                <Badge variant="secondary" className="bg-copper-100 text-copper-700">
                  {getActiveFilterCount()}
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-0">
            {/* Categories */}
            <FilterSection
              title={language === 'fr' ? 'Catégories' : 'Categories'}
              isExpanded={expandedSections.categories}
              onToggle={() => toggleSection('categories')}
            >
              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="rounded border-stone-300 text-copper-600 focus:ring-copper-500"
                    />
                    <span className="text-sm text-stone-700 group-hover:text-stone-900 transition-colors capitalize">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Price Range */}
            <FilterSection
              title={language === 'fr' ? 'Gamme de prix' : 'Price Range'}
              isExpanded={expandedSections.price}
              onToggle={() => toggleSection('price')}
            >
              <div className="space-y-4">
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => onFiltersChange({
                    ...filters,
                    priceRange: value as [number, number]
                  })}
                  min={priceRange[0]}
                  max={priceRange[1]}
                  step={10}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>{filters.priceRange[0]} MAD</span>
                  <span>{filters.priceRange[1]} MAD</span>
                </div>
              </div>
            </FilterSection>

            {/* Availability */}
            <FilterSection
              title={language === 'fr' ? 'Disponibilité' : 'Availability'}
              isExpanded={expandedSections.availability}
              onToggle={() => toggleSection('availability')}
            >
              <div className="space-y-3">
                {[
                  { value: 'all', label: language === 'fr' ? 'Tous' : 'All' },
                  { value: 'in_stock', label: language === 'fr' ? 'En stock' : 'In Stock' },
                  { value: 'out_of_stock', label: language === 'fr' ? 'Épuisé' : 'Out of Stock' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="availability"
                      value={option.value}
                      checked={filters.availability === option.value}
                      onChange={(e) => onFiltersChange({
                        ...filters,
                        availability: e.target.value as typeof filters.availability
                      })}
                      className="border-stone-300 text-copper-600 focus:ring-copper-500"
                    />
                    <span className="text-sm text-stone-700 group-hover:text-stone-900 transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Sort Options */}
            <FilterSection
              title={language === 'fr' ? 'Trier par' : 'Sort By'}
              isExpanded={expandedSections.sort}
              onToggle={() => toggleSection('sort')}
            >
              <div className="space-y-3">
                {[
                  { value: 'name', label: language === 'fr' ? 'Nom' : 'Name' },
                  { value: 'price_low', label: language === 'fr' ? 'Prix croissant' : 'Price: Low to High' },
                  { value: 'price_high', label: language === 'fr' ? 'Prix décroissant' : 'Price: High to Low' },
                  { value: 'newest', label: language === 'fr' ? 'Plus récent' : 'Newest' },
                  { value: 'popular', label: language === 'fr' ? 'Populaire' : 'Popular' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={filters.sortBy === option.value}
                      onChange={(e) => onFiltersChange({
                        ...filters,
                        sortBy: e.target.value as typeof filters.sortBy
                      })}
                      className="border-stone-300 text-copper-600 focus:ring-copper-500"
                    />
                    <span className="text-sm text-stone-700 group-hover:text-stone-900 transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-stone-200 space-y-3">
            <Button
              variant="outline"
              onClick={clearFilters}
              className="w-full"
              disabled={getActiveFilterCount() === 0}
            >
              {language === 'fr' ? 'Effacer les filtres' : 'Clear Filters'}
            </Button>
            <Button
              onClick={onClose}
              className="w-full bg-copper-600 hover:bg-copper-700 text-white"
            >
              {language === 'fr' ? 'Appliquer les filtres' : 'Apply Filters'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterPanel;