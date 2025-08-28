import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const BestSellers = () => {
  const { addToCart } = useCart();
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const products = [
    {
      id: 'traditional-tagine',
      name: 'Traditional Tagine',
      description: 'Large, terracotta finish',
      price: 89.00,
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-moden-tagine.jpg.webp',
      color: 'Terracotta'
    },
    {
      id: 'dinner-plates-set',
      name: 'Dinner Plates Set',
      description: 'Set of 4, ivory glaze',
      price: 129.00,
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-plate-orange.webp',
      color: 'Ivory'
    },
    {
      id: 'serving-bowl-large',
      name: 'Large Serving Bowl',
      description: 'Deep blue glaze',
      price: 69.00,
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-bowl-orange1.jpg.webp',
      color: 'Deep Blue'
    },
    {
      id: 'tea-glasses-set',
      name: 'Tea Glasses',
      description: 'Set of 6, amber finish',
      price: 49.00,
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/TASEEMPBLANC-1.jpg.webp',
      color: 'Amber'
    }
  ];

  const handleQuickAdd = async (product: typeof products[0]) => {
    setLoadingStates(prev => ({ ...prev, [product.id]: true }));
    
    try {
      const cartProduct = {
        id: product.id,
        name_fr: product.name,
        name_en: product.name,
        price_eur: product.price,
        price_usd: product.price * 1.08,
        stock_quantity: 10,
        images: [product.image],
        category: 'ceramics',
        created_at: new Date().toISOString()
      };
      
      await addToCart(cartProduct, 1);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoadingStates(prev => ({ ...prev, [product.id]: false }));
    }
  };

  return (
    <section className="py-16 px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
            Our most beloved pieces, chosen by ceramics enthusiasts for their beauty and functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-light text-stone-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-stone-600 mb-2">{product.description}</p>
                  <p className="text-lg font-light text-stone-900">${product.price.toFixed(2)}</p>
                  <p className="text-xs text-stone-500 mt-1">{product.color}</p>
                </div>
                
                <Button
                  onClick={() => handleQuickAdd(product)}
                  disabled={loadingStates[product.id]}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white py-2 px-4 text-sm font-light transition-colors duration-200"
                >
                  {loadingStates[product.id] ? 'Adding...' : 'Quick Add'}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="px-8 py-3 text-base font-light">
            <Link to="/shop">View All Ceramics</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;