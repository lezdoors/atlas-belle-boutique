
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Filter, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FilterOptions {
  skinTypes: string[];
  regions: string[];
  rituals: string[];
  priceRange: [number, number];
}

interface ProductFiltersProps {
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFiltersChange, isOpen, onToggle }) => {
  const { language } = useLanguage();
  
  const [filters, setFilters] = useState<FilterOptions>({
    skinTypes: [],
    regions: [],
    rituals: [],
    priceRange: [0, 2000]
  });

  const skinTypeOptions = language === 'fr' 
    ? ['Peau sèche', 'Peau grasse', 'Peau mixte', 'Peau sensible', 'Peau mature']
    : ['Dry skin', 'Oily skin', 'Combination skin', 'Sensitive skin', 'Mature skin'];

  const regionOptions = language === 'fr'
    ? ['Marrakech', 'Fès', 'Casablanca', 'Essaouira', 'Atlas']
    : ['Marrakech', 'Fes', 'Casablanca', 'Essaouira', 'Atlas'];

  const ritualOptions = language === 'fr'
    ? ['Hydratation', 'Anti-âge', 'Purification', 'Éclat', 'Relaxation']
    : ['Hydration', 'Anti-aging', 'Purification', 'Radiance', 'Relaxation'];

  const handleCheckboxChange = (category: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters };
    const categoryArray = newFilters[category] as string[];
    
    if (categoryArray.includes(value)) {
      newFilters[category] = categoryArray.filter(item => item !== value) as any;
    } else {
      newFilters[category] = [...categoryArray, value] as any;
    }
    
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: value as [number, number] };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      skinTypes: [],
      regions: [],
      rituals: [],
      priceRange: [0, 2000] as [number, number]
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = filters.skinTypes.length > 0 || 
                          filters.regions.length > 0 || 
                          filters.rituals.length > 0 || 
                          filters.priceRange[0] > 0 || 
                          filters.priceRange[1] < 2000;

  if (!isOpen) {
    return (
      <div className="mb-4">
        <Button
          onClick={onToggle}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          {language === 'fr' ? 'Filtres' : 'Filters'}
          {hasActiveFilters && (
            <span className="bg-copper-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {filters.skinTypes.length + filters.regions.length + filters.rituals.length}
            </span>
          )}
        </Button>
      </div>
    );
  }

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between py-3">
        <CardTitle className="text-base font-medium">
          {language === 'fr' ? 'Filtres' : 'Filters'}
        </CardTitle>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
              {language === 'fr' ? 'Effacer' : 'Clear'}
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={onToggle} className="h-6 w-6">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 py-0 pb-4">
        {/* Price Range */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto font-normal">
              <Label className="text-sm font-medium">
                {language === 'fr' ? 'Prix' : 'Price'}: {filters.priceRange[0]} - {filters.priceRange[1]} MAD
              </Label>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              max={2000}
              min={0}
              step={50}
              className="w-full"
            />
          </CollapsibleContent>
        </Collapsible>

        {/* Skin Type */}
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto font-normal">
              <Label className="text-sm font-medium">
                {language === 'fr' ? 'Type de peau' : 'Skin Type'}
                {filters.skinTypes.length > 0 && (
                  <span className="ml-1 text-xs text-copper-600">({filters.skinTypes.length})</span>
                )}
              </Label>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="grid grid-cols-1 gap-1">
              {skinTypeOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`skin-${option}`}
                    checked={filters.skinTypes.includes(option)}
                    onCheckedChange={() => handleCheckboxChange('skinTypes', option)}
                  />
                  <Label htmlFor={`skin-${option}`} className="text-xs leading-4">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Region */}
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto font-normal">
              <Label className="text-sm font-medium">
                {language === 'fr' ? 'Région' : 'Region'}
                {filters.regions.length > 0 && (
                  <span className="ml-1 text-xs text-copper-600">({filters.regions.length})</span>
                )}
              </Label>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="grid grid-cols-1 gap-1">
              {regionOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`region-${option}`}
                    checked={filters.regions.includes(option)}
                    onCheckedChange={() => handleCheckboxChange('regions', option)}
                  />
                  <Label htmlFor={`region-${option}`} className="text-xs leading-4">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Ritual */}
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto font-normal">
              <Label className="text-sm font-medium">
                {language === 'fr' ? 'Rituel' : 'Ritual'}
                {filters.rituals.length > 0 && (
                  <span className="ml-1 text-xs text-copper-600">({filters.rituals.length})</span>
                )}
              </Label>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="grid grid-cols-1 gap-1">
              {ritualOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`ritual-${option}`}
                    checked={filters.rituals.includes(option)}
                    onCheckedChange={() => handleCheckboxChange('rituals', option)}
                  />
                  <Label htmlFor={`ritual-${option}`} className="text-xs leading-4">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
