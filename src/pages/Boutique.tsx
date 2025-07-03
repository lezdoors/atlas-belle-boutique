import { useState } from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const Boutique = () => {
  const { language } = useLanguage();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  // Mock products data
  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Huile d\'Argan Premium' : 'Premium Argan Oil',
      priceMAD: 299,
      originalPriceMAD: 399,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      rating: 4.8,
      reviews: 156,
      badge: { type: 'bestseller' as const },
      description: language === 'fr' 
        ? 'Huile d\'argan pure extraite des kernels des arganiers de l\'Atlas'
        : 'Pure argan oil extracted from Atlas argan tree kernels',
      region: 'Atlas'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Crème Hydratante Rose' : 'Rose Hydrating Cream',
      priceMAD: 189,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
      rating: 4.6,
      reviews: 89,
      badge: { type: 'new' as const },
      description: language === 'fr' 
        ? 'Crème nourrissante à base de pétales de rose de Kelâa des Mgouna'
        : 'Nourishing cream with rose petals from Kelâa des Mgouna',
      region: 'Vallées'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Masque Purifiant Ghassoul' : 'Ghassoul Purifying Mask',
      priceMAD: 149,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400',
      rating: 4.7,
      reviews: 203,
      badge: { type: 'limited' as const },
      description: language === 'fr' 
        ? 'Masque d\'argile naturelle du Moyen Atlas aux propriétés purifiantes'
        : 'Natural clay mask from Middle Atlas with purifying properties',
      region: 'Atlas'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Parfum Oud & Jasmin' : 'Oud & Jasmine Perfume',
      priceMAD: 459,
      originalPriceMAD: 559,
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
      rating: 4.9,
      reviews: 78,
      badge: { type: 'discount' as const, discount: 18 },
      description: language === 'fr' 
        ? 'Fragrance envoûtante mêlant oud précieux et jasmin de Grasse'
        : 'Enchanting fragrance blending precious oud and Grasse jasmine',
      region: 'Sahara'
    },
    {
      id: 5,
      name: language === 'fr' ? 'Savon Noir Traditionnel' : 'Traditional Black Soap',
      priceMAD: 89,
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400',
      rating: 4.5,
      reviews: 145,
      badge: { type: 'bestseller' as const },
      description: language === 'fr' 
        ? 'Savon noir artisanal aux olives de Meknès pour le hammam'
        : 'Artisanal black soap with Meknes olives for hammam',
      region: 'Côte'
    },
    {
      id: 6,
      name: language === 'fr' ? 'Sérum Anti-âge Cactus' : 'Anti-aging Cactus Serum',
      priceMAD: 249,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400',
      rating: 4.4,
      reviews: 67,
      badge: { type: 'new' as const },
      description: language === 'fr' 
        ? 'Sérum régénérant à l\'extrait de figue de barbarie du Sud'
        : 'Regenerating serum with prickly pear extract from the South',
      region: 'Sahara'
    }
  ];

  const handleFiltersChange = (filters: any) => {
    console.log('Filters changed:', filters);
    // Here you would implement the actual filtering logic
  };

  return (
    <div className="min-h-screen bg-pearl-100">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-clay-800 mb-6">
              {language === 'fr' ? 'Notre Boutique' : 'Our Shop'}
            </h1>
            <p className="hero-subtitle text-clay-600 mb-8">
              {language === 'fr' 
                ? 'Découvrez notre collection de produits de beauté authentiques, inspirés des traditions ancestrales du Maroc'
                : 'Discover our collection of authentic beauty products, inspired by the ancestral traditions of Morocco'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <ProductFilters 
                onFiltersChange={handleFiltersChange}
                isOpen={filtersOpen}
                onToggle={() => setFiltersOpen(!filtersOpen)}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Sort Options */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-clay-600">
                  {language === 'fr' ? `${products.length} produits` : `${products.length} products`}
                </p>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-sand-300 rounded-lg px-4 py-2 bg-white"
                >
                  <option value="name">
                    {language === 'fr' ? 'Trier par nom' : 'Sort by name'}
                  </option>
                  <option value="price-low">
                    {language === 'fr' ? 'Prix croissant' : 'Price low to high'}
                  </option>
                  <option value="price-high">
                    {language === 'fr' ? 'Prix décroissant' : 'Price high to low'}
                  </option>
                  <option value="rating">
                    {language === 'fr' ? 'Mieux notés' : 'Highest rated'}
                  </option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link key={product.id} to={`/produit/${product.id}`}>
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="copper-gradient text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                  {language === 'fr' ? 'Charger plus de produits' : 'Load more products'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default Boutique;
