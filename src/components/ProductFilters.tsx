
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, X } from 'lucide-react';
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

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        variant="outline"
        className="mb-6"
      >
        <Filter className="h-4 w-4 mr-2" />
        {language === 'fr' ? 'Filtres' : 'Filters'}
      </Button>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">
          {language === 'fr' ? 'Filtres' : 'Filters'}
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onToggle}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            {language === 'fr' ? 'Prix' : 'Price'}: {filters.priceRange[0]} - {filters.priceRange[1]} MAD
          </Label>
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            max={2000}
            min={0}
            step={50}
            className="w-full"
          />
        </div>

        {/* Skin Type */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            {language === 'fr' ? 'Type de peau' : 'Skin Type'}
          </Label>
          <div className="space-y-2">
            {skinTypeOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`skin-${option}`}
                  checked={filters.skinTypes.includes(option)}
                  onCheckedChange={() => handleCheckboxChange('skinTypes', option)}
                />
                <Label htmlFor={`skin-${option}`} className="text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Region */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            {language === 'fr' ? 'Région' : 'Region'}
          </Label>
          <div className="space-y-2">
            {regionOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`region-${option}`}
                  checked={filters.regions.includes(option)}
                  onCheckedChange={() => handleCheckboxChange('regions', option)}
                />
                <Label htmlFor={`region-${option}`} className="text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Ritual */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            {language === 'fr' ? 'Rituel' : 'Ritual'}
          </Label>
          <div className="space-y-2">
            {ritualOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`ritual-${option}`}
                  checked={filters.rituals.includes(option)}
                  onCheckedChange={() => handleCheckboxChange('rituals', option)}
                />
                <Label htmlFor={`ritual-${option}`} className="text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button 
          variant="outline" 
          onClick={clearFilters}
          className="w-full"
        >
          {language === 'fr' ? 'Effacer les filtres' : 'Clear filters'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
