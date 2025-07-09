import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown, Palette, DollarSign, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  regions: string[];
  materials: string[];
  sustainabilityBadges: string[];
}

interface ProductFiltersProps {
  filterOptions: FilterOptions;
  onFilterChange: (filters: any) => void;
  className?: string;
}

const filterCategories = [
  { id: 'all', label: 'Tout', icon: Sparkles },
  { id: 'ceramics', label: 'Céramiques', icon: Palette },
  { id: 'glassware', label: 'Verrerie', icon: Sparkles },
  { id: 'textiles', label: 'Textiles', icon: Palette },
  { id: 'jewelry', label: 'Bijoux', icon: Sparkles },
  { id: 'spices', label: 'Épices', icon: Palette },
];

const priceRanges = [
  { label: 'Tous les prix', min: 0, max: 1000 },
  { label: 'Moins de 50€', min: 0, max: 50 },
  { label: '50€ - 100€', min: 50, max: 100 },
  { label: '100€ - 200€', min: 100, max: 200 },
  { label: 'Plus de 200€', min: 200, max: 1000 },
];

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filterOptions,
  onFilterChange,
  className
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateFilters({ category });
  };

  const handlePriceChange = (range: number[]) => {
    setSelectedPriceRange(range);
    updateFilters({ priceRange: range });
  };

  const toggleRegion = (region: string) => {
    const newRegions = selectedRegions.includes(region)
      ? selectedRegions.filter(r => r !== region)
      : [...selectedRegions, region];
    setSelectedRegions(newRegions);
    updateFilters({ regions: newRegions });
  };

  const toggleMaterial = (material: string) => {
    const newMaterials = selectedMaterials.includes(material)
      ? selectedMaterials.filter(m => m !== material)
      : [...selectedMaterials, material];
    setSelectedMaterials(newMaterials);
    updateFilters({ materials: newMaterials });
  };

  const updateFilters = (newFilters: any) => {
    const filters = {
      category: selectedCategory,
      priceRange: selectedPriceRange,
      regions: selectedRegions,
      materials: selectedMaterials,
      ...newFilters
    };
    
    // Update active filters for display
    const active = [];
    if (filters.category !== 'all') active.push(filters.category);
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) active.push('Prix');
    if (filters.regions.length > 0) active.push(...filters.regions);
    if (filters.materials.length > 0) active.push(...filters.materials);
    
    setActiveFilters(active);
    onFilterChange(filters);
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange([0, 1000]);
    setSelectedRegions([]);
    setSelectedMaterials([]);
    setActiveFilters([]);
    onFilterChange({
      category: 'all',
      priceRange: [0, 1000],
      regions: [],
      materials: []
    });
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Main Category Filter - Always Visible */}
      <div className="mb-8">
        <motion.div 
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {filterCategories.map((category, index) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={isSelected ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "relative group transition-all duration-300 px-6 py-3 text-sm font-medium",
                    isSelected 
                      ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-luxury border-none" 
                      : "bg-white/80 hover:bg-white text-foreground border-border hover:border-primary/30 shadow-elegant hover:shadow-refined"
                  )}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                  {isSelected && (
                    <motion.div
                      layoutId="categoryIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-md -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center space-x-2 bg-white/80 hover:bg-white shadow-elegant hover:shadow-refined transition-all duration-300"
        >
          <Filter className="w-4 h-4" />
          <span>Filtres avancés</span>
          <motion.div
            animate={{ rotate: isFilterOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </Button>

        {/* Active Filters & Clear Button */}
        {activeFilters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="flex flex-wrap gap-2">
              {activeFilters.slice(0, 3).map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {filter}
                </Badge>
              ))}
              {activeFilters.length > 3 && (
                <Badge variant="outline" className="text-muted-foreground">
                  +{activeFilters.length - 3}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              Effacer
            </Button>
          </motion.div>
        )}
      </div>

      {/* Advanced Filters Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-elegant border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Price Range */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground">Prix</h3>
                  </div>
                  <div className="space-y-4">
                    <Slider
                      value={selectedPriceRange}
                      onValueChange={handlePriceChange}
                      max={500}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{selectedPriceRange[0]}€</span>
                      <span>{selectedPriceRange[1]}€</span>
                    </div>
                  </div>
                </div>

                {/* Regions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground">Régions</h3>
                  </div>
                  <div className="space-y-2">
                    {['Fès', 'Salé', 'Meknès', 'Essaouira', 'Marrakech'].map((region) => (
                      <motion.button
                        key={region}
                        onClick={() => toggleRegion(region)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm",
                          selectedRegions.includes(region)
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        )}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {region}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground">Matériaux</h3>
                  </div>
                  <div className="space-y-2">
                    {['Terre cuite', 'Verre soufflé', 'Laine', 'Argent', 'Cuir'].map((material) => (
                      <motion.button
                        key={material}
                        onClick={() => toggleMaterial(material)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm",
                          selectedMaterials.includes(material)
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        )}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {material}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};