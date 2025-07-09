import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ProductMasonryGrid } from './ProductMasonryGrid';
import { ProductFilters } from './ProductFilters';
import { Loader2 } from 'lucide-react';

interface Product {
  id: string;
  name_en: string;
  name_fr: string;
  description_en?: string | null;
  description_fr?: string | null;
  price_eur: number;
  price_usd: number;
  images: string[];
  category: string;
  origin_region?: string | null;
  cooperative_region?: string | null;
  artisan_story?: string | null;
  sustainability_badges: string[];
  featured: boolean;
  material?: string | null;
  is_active: boolean;
}

export const ProductShowcase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
    loadWishlist();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedProducts: Product[] = data?.map(product => ({
        ...product,
        images: Array.isArray(product.images) 
          ? (product.images as string[]).filter(Boolean)
          : product.images 
            ? [String(product.images)].filter(Boolean)
            : [],
        sustainability_badges: Array.isArray(product.sustainability_badges) 
          ? (product.sustainability_badges as string[])
          : []
      })) || [];

      setProducts(formattedProducts);
      setFilteredProducts(formattedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les produits",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadWishlist = () => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      setWishlistItems(JSON.parse(saved));
    }
  };

  const handleFilterChange = (filters: any) => {
    let filtered = [...products];

    // Category filter
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price_eur >= filters.priceRange[0] && 
        product.price_eur <= filters.priceRange[1]
      );
    }

    // Region filter
    if (filters.regions && filters.regions.length > 0) {
      filtered = filtered.filter(product => 
        filters.regions.some((region: string) => 
          product.origin_region?.toLowerCase().includes(region.toLowerCase()) ||
          product.cooperative_region?.toLowerCase().includes(region.toLowerCase())
        )
      );
    }

    // Material filter
    if (filters.materials && filters.materials.length > 0) {
      filtered = filtered.filter(product => 
        filters.materials.some((material: string) => 
          product.material?.toLowerCase().includes(material.toLowerCase())
        )
      );
    }

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (productId: string) => {
    // Get current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if product already exists in cart
    const existingItem = currentCart.find((item: any) => item.product_id === productId);
    
    if (existingItem) {
      // Increase quantity
      existingItem.quantity += 1;
    } else {
      // Add new item
      currentCart.push({
        product_id: productId,
        quantity: 1,
        session_id: 'local-session' // For now, using local session
      });
    }
    
    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    const product = products.find(p => p.id === productId);
    toast({
      title: "Ajouté au panier",
      description: `${product?.name_fr} a été ajouté à votre panier`,
    });
  };

  const handleToggleWishlist = (productId: string) => {
    const newWishlist = wishlistItems.includes(productId)
      ? wishlistItems.filter(id => id !== productId)
      : [...wishlistItems, productId];
    
    setWishlistItems(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    
    const product = products.find(p => p.id === productId);
    const action = newWishlist.includes(productId) ? 'ajouté à' : 'retiré de';
    
    toast({
      title: newWishlist.includes(productId) ? "Ajouté aux favoris" : "Retiré des favoris",
      description: `${product?.name_fr} a été ${action} vos favoris`,
    });
  };

  const filterOptions = {
    categories: Array.from(new Set(products.map(p => p.category))),
    priceRange: [
      Math.min(...products.map(p => p.price_eur)),
      Math.max(...products.map(p => p.price_eur))
    ] as [number, number],
    regions: Array.from(new Set([
      ...products.map(p => p.origin_region).filter(Boolean),
      ...products.map(p => p.cooperative_region).filter(Boolean)
    ])),
    materials: Array.from(new Set(products.map(p => p.material).filter(Boolean))),
    sustainabilityBadges: Array.from(new Set(
      products.flatMap(p => p.sustainability_badges)
    ))
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="w-8 h-8 text-primary" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Collection Artisanale
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Découvrez nos créations authentiques, façonnées par les mains expertes 
          d'artisans marocains dans le respect des traditions séculaires.
        </p>
      </motion.div>

      {/* Filters */}
      <ProductFilters
        filterOptions={filterOptions}
        onFilterChange={handleFilterChange}
      />

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <ProductMasonryGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />
      </motion.div>

      {/* No Results State */}
      {filteredProducts.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-24 space-y-4"
        >
          <h3 className="text-2xl font-bold text-foreground">Aucun produit trouvé</h3>
          <p className="text-muted-foreground">
            Essayez de modifier vos filtres pour voir plus de produits.
          </p>
        </motion.div>
      )}
    </div>
  );
};