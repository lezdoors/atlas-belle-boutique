
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

export interface Product {
  id: string;
  name_fr: string;
  name_en: string;
  description_fr?: string;
  description_en?: string;
  price_eur: number;
  price_usd: number;
  sku: string;
  category: string;
  subcategory?: string;
  stock_quantity?: number;
  featured: boolean;
  images: string[];
  ingredients: string[];
  origin_region?: string;
  artisan_story?: string;
  sustainability_badges: string[];
  seasonal_availability: string[];
  created_at?: string;
  updated_at?: string;
  is_active?: boolean;
}

export const useProducts = (featured?: boolean, category?: string) => {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['products', featured, category],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true);

      if (featured) {
        query = query.eq('featured', true);
      }

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }

      return data as Product[];
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
        throw error;
      }

      return data as Product;
    },
    enabled: !!id,
  });
};
