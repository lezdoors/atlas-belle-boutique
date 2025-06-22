import { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import FeaturedProductsHeader from './FeaturedProductsHeader';
import FeaturedProductsInfoBar from './FeaturedProductsInfoBar';
import DynamicBeautyBanner from './DynamicBeautyBanner';

interface Product {
  id: number;
  name: string;
  description: string;
  priceMAD: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge: { type: 'new' | 'bestseller' | 'limited' | 'discount'; discount?: number };
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Huile d'Argan Premium",
    description: "L'huile d'argan pure, pressée à froid, pour une peau nourrie et éclatante.",
    priceMAD: 299,
    image: "/lovable-uploads/073dee32-d52c-4b0f-9910-d5d85832b4ef.png",
    category: "Huiles",
    rating: 4.8,
    reviews: 125,
    badge: { type: 'bestseller' }
  },
  {
    id: 2,
    name: "Savon Noir Beldi",
    description: "Un savon traditionnel marocain pour exfolier et purifier la peau en douceur.",
    priceMAD: 179,
    image: "/lovable-uploads/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png",
    category: "Soins du Corps",
    rating: 4.5,
    reviews: 90,
    badge: { type: 'new' }
  },
  {
    id: 3,
    name: "Ghassoul Volcanique",
    description: "Un masque purifiant à l'argile volcanique pour nettoyer et revitaliser la peau.",
    priceMAD: 239,
    image: "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
    category: "Soins du Visage",
    rating: 4.7,
    reviews: 110,
    badge: { type: 'limited' }
  },
  {
    id: 4,
    name: "Eau de Rose de Dadès",
    description: "Une eau florale rafraîchissante pour tonifier et hydrater la peau.",
    priceMAD: 149,
    image: "/lovable-uploads/073dee32-d52c-4b0f-9910-d5d85832b4ef.png",
    category: "Toniques",
    rating: 4.6,
    reviews: 80,
    badge: { type: 'bestseller' }
  },
  {
    id: 5,
    name: "Crème de Jour Éclat",
    description: "Une crème hydratante légère pour illuminer et protéger la peau.",
    priceMAD: 329,
    image: "/lovable-uploads/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png",
    category: "Soins du Visage",
    rating: 4.9,
    reviews: 150,
    badge: { type: 'new' }
  },
  {
    id: 6,
    name: "Huile Capillaire Fortifiante",
    description: "Un mélange d'huiles précieuses pour renforcer et faire briller les cheveux.",
    priceMAD: 209,
    image: "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
    category: "Soins Capillaires",
    rating: 4.4,
    reviews: 70,
    badge: { type: 'limited' }
  },
  {
    id: 7,
    name: "Baume à Lèvres Nourrissant",
    description: "Un baume riche en beurre de karité et huile d'argan pour des lèvres douces et hydratées.",
    priceMAD: 119,
    image: "/lovable-uploads/073dee32-d52c-4b0f-9910-d5d85832b4ef.png",
    category: "Soins des Lèvres",
    rating: 4.7,
    reviews: 100,
    badge: { type: 'bestseller' }
  },
  {
    id: 8,
    name: "Sérum Anti-Âge Revitalisant",
    description: "Un sérum concentré en actifs anti-âge pour lisser les rides et raffermir la peau.",
    priceMAD: 419,
    image: "/lovable-uploads/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png",
    category: "Soins du Visage",
    rating: 4.8,
    reviews: 130,
    badge: { type: 'discount', discount: 15 }
  }
];

const FeaturedProducts = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section id="featured-products" className="py-16 bg-gradient-to-b from-pearl-50 to-white">
      <div className="container mx-auto px-4">
        <FeaturedProductsHeader />
        <FeaturedProductsInfoBar />
        
        {/* Filters and View Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border-clay-200 hover:border-clay-400 text-clay-700"
            >
              <Filter className="h-4 w-4" />
              Filtres
            </Button>
            
            <div className="hidden lg:flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="p-2"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="p-2"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-clay-600">
            {mockProducts.length} produits trouvés
          </p>
        </div>

        {/* Dynamic Beauty Banner - Using the space under filters */}
        <DynamicBeautyBanner />

        {/* Filter Panel */}
        {showFilters && (
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
        )}

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {mockProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
