
import { Button } from '@/components/ui/button';

interface ProductFiltersPanelProps {
  showFilters: boolean;
}

const ProductFiltersPanel: React.FC<ProductFiltersPanelProps> = ({ showFilters }) => {
  if (!showFilters) return null;

  return (
    <div className="bg-white rounded-xl p-6 mb-8 luxury-shadow border border-clay-100">
      <h4 className="font-serif text-lg font-semibold text-clay-800 mb-4">Filtrer par :</h4>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-clay-700 mb-1">Catégorie :</label>
          <select className="w-full bg-pearl-50 border border-clay-200 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm text-clay-600">
            <option>Toutes les catégories</option>
            <option>Huiles</option>
            <option>Soins du Visage</option>
            <option>Soins du Corps</option>
            <option>Soins Capillaires</option>
            <option>Soins des Lèvres</option>
            <option>Toniques</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-clay-700 mb-1">Prix :</label>
          <div className="flex items-center space-x-2">
            <input 
              type="number" 
              placeholder="Min" 
              className="w-24 bg-pearl-50 border border-clay-200 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm text-clay-600" 
            />
            <span className="text-sm text-clay-500">à</span>
            <input 
              type="number" 
              placeholder="Max" 
              className="w-24 bg-pearl-50 border border-clay-200 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm text-clay-600" 
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-clay-700 mb-1">Note :</label>
          <div className="flex items-center space-x-3">
            <input type="radio" id="rating-4" name="rating" className="focus:ring-amber-500 h-4 w-4 text-amber-500 border-clay-300" />
            <label htmlFor="rating-4" className="text-sm text-clay-600">4 étoiles et plus</label>
          </div>
          <div className="flex items-center space-x-3">
            <input type="radio" id="rating-3" name="rating" className="focus:ring-amber-500 h-4 w-4 text-amber-500 border-clay-300" />
            <label htmlFor="rating-3" className="text-sm text-clay-600">3 étoiles et plus</label>
          </div>
        </div>
        
        <Button variant="outline" className="w-full border-clay-300 text-clay-700 hover:bg-clay-50 hover:border-clay-400">
          Appliquer les filtres
        </Button>
      </div>
    </div>
  );
};

export default ProductFiltersPanel;
