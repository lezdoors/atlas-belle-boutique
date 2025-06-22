
import { useState } from 'react';
import FeaturedProductsHeader from './FeaturedProductsHeader';
import FeaturedProductsInfoBar from './FeaturedProductsInfoBar';
import DynamicBeautyBanner from './DynamicBeautyBanner';
import ProductsToolbar from './ProductsToolbar';
import ProductFiltersPanel from './ProductFiltersPanel';
import ProductsGrid from './ProductsGrid';

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
        
        <ProductsToolbar
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          viewMode={viewMode}
          setViewMode={setViewMode}
          productCount={mockProducts.length}
        />

        <DynamicBeautyBanner />

        <ProductFiltersPanel showFilters={showFilters} />

        <ProductsGrid products={mockProducts} viewMode={viewMode} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
