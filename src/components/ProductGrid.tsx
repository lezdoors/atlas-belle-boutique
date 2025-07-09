import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid3X3, Rows3 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type DatabaseProduct = Tables<'products'>;

interface ProductGridProps {
  className?: string;
  category?: string;
  featured?: boolean;
}

const ProductGrid = ({ className = "", category, featured }: ProductGridProps) => {
  const { language } = useLanguage();
  const [products, setProducts] = useState<DatabaseProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: language === 'fr' ? 'Tous' : 'All' },
    { id: 'ceramics', name: language === 'fr' ? 'Céramiques' : 'Ceramics' },
    { id: 'glassware', name: language === 'fr' ? 'Verrerie' : 'Glassware' },
    { id: 'tagines', name: 'Tagines' },
    { id: 'tableware', name: language === 'fr' ? 'Art de la Table' : 'Tableware' }
  ];

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, featured]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true);

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      if (featured) {
        query = query.eq('featured', true);
      }

      // Filter for ceramics and glassware specifically
      if (selectedCategory === 'all') {
        query = query.in('category', ['ceramics', 'glassware', 'tagines', 'tableware']);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        return;
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-moroccan-blue"></div>
      </div>
    );
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header with Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-300 px-4 py-2 font-light ${
                selectedCategory === cat.id
                  ? 'bg-moroccan-blue text-white'
                  : 'bg-white text-moroccan-blue border-moroccan-blue/30 hover:bg-moroccan-blue/10'
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </Badge>
          ))}
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-moroccan-sand' : ''}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-moroccan-sand' : ''}`}
            >
              <Rows3 className="h-4 w-4" />
            </Button>
          </div>

          <span className="text-sm text-stone-600 font-light">
            {products.length} {language === 'fr' ? 'produits' : 'products'}
          </span>
        </div>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-stone-600 font-light text-lg">
            {language === 'fr' 
              ? 'Aucun produit trouvé dans cette catégorie.'
              : 'No products found in this category.'
            }
          </p>
        </div>
      ) : (
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2'
        }`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className={viewMode === 'list' ? 'md:flex md:flex-row' : ''}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;