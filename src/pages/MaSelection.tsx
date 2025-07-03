import { useState } from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import ProductCard from '@/components/ProductCard';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Trash2, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSelection } from '@/contexts/SelectionContext';
import { useCart } from '@/contexts/CartContext';

const MaSelection = () => {
  const { language } = useLanguage();
  const { selectedItems, removeFromSelection, clearSelection } = useSelection();
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState('recent');

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      priceMAD: product.priceMAD,
      image: product.image
    });
  };

  const handleAddAllToCart = () => {
    selectedItems.forEach(product => {
      addToCart({
        id: product.id,
        name: product.name,
        priceMAD: product.priceMAD,
        image: product.image
      });
    });
  };

  const sortedItems = [...selectedItems].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return a.priceMAD - b.priceMAD;
      case 'price-high':
        return b.priceMAD - a.priceMAD;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0; // Keep original order for 'recent'
    }
  });

  return (
    <div className="min-h-screen bg-pearl-100">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-copper-600 mr-3" />
              <h1 className="hero-title text-clay-800">
                {language === 'fr' ? 'Ma Sélection' : 'My Selection'}
              </h1>
            </div>
            <p className="hero-subtitle text-clay-600 mb-8">
              {language === 'fr' 
                ? 'Retrouvez tous vos produits préférés enregistrés pour plus tard'
                : 'Find all your favorite products saved for later'
              }
            </p>
            {selectedItems.length > 0 && (
              <div className="flex items-center justify-center space-x-4">
                <Button 
                  onClick={handleAddAllToCart}
                  className="copper-gradient text-white rounded-full luxury-shadow border-0 font-medium tracking-wide"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  {language === 'fr' ? 'Tout ajouter au panier' : 'Add all to cart'}
                </Button>
                <Button 
                  onClick={clearSelection}
                  variant="outline"
                  className="rounded-full border-clay-300 text-clay-600 hover:border-red-400 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  {language === 'fr' ? 'Vider la sélection' : 'Clear selection'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Selection Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedItems.length === 0 ? (
            /* Empty State */
            <div className="text-center py-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 luxury-shadow max-w-2xl mx-auto">
                <Heart className="h-16 w-16 text-clay-300 mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-clay-800 mb-4">
                  {language === 'fr' ? 'Aucun produit enregistré pour le moment' : 'No products saved yet'}
                </h3>
                <p className="elegant-text text-clay-600 mb-8">
                  {language === 'fr' 
                    ? 'Découvrez notre collection et enregistrez vos produits préférés pour les retrouver facilement'
                    : 'Discover our collection and save your favorite products to find them easily'
                  }
                </p>
                <Link to="/boutique">
                  <Button 
                    size="lg"
                    className="copper-gradient text-white px-12 py-4 text-lg font-medium rounded-full hover-scale luxury-shadow border-0 tracking-wide"
                  >
                    {language === 'fr' ? 'Découvrir la boutique' : 'Discover the shop'}
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            /* Products Display */
            <>
              {/* Filter and Sort Bar */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex items-center space-x-4">
                  <p className="text-clay-600 font-medium">
                    {language === 'fr' 
                      ? `${selectedItems.length} produit${selectedItems.length > 1 ? 's' : ''} enregistré${selectedItems.length > 1 ? 's' : ''}`
                      : `${selectedItems.length} product${selectedItems.length > 1 ? 's' : ''} saved`
                    }
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-sand-300 rounded-lg px-4 py-2 bg-white text-sm"
                  >
                    <option value="recent">
                      {language === 'fr' ? 'Plus récents' : 'Most recent'}
                    </option>
                    <option value="name">
                      {language === 'fr' ? 'Nom A-Z' : 'Name A-Z'}
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
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedItems.map((product) => (
                  <div key={product.id} className="relative group">
                    <Link to={`/produit/${product.id}`}>
                      <ProductCard product={product} />
                    </Link>
                    
                    {/* Selection Actions Overlay */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-10">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 luxury-shadow border border-sand-200">
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            onClick={() => handleAddToCart(product)}
                            className="flex-1 copper-gradient text-white rounded-full font-medium text-sm"
                          >
                            <ShoppingBag className="h-3 w-3 mr-2" />
                            {language === 'fr' ? 'Ajouter' : 'Add to cart'}
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => removeFromSelection(product.id)}
                            className="rounded-full border-red-300 text-red-600 hover:border-red-400 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default MaSelection;
