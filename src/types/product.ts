export interface Product {
  id: string;
  name_fr: string;
  name_en: string;
  description?: string;
  price_eur: number;
  price_usd: number;
  images: string[];
  category: string;
  stock_quantity: number;
  created_at: string;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  session_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
}

export interface ProductFilters {
  category?: string;
  sortBy?: 'price' | 'name' | 'newest';
  sortOrder?: 'asc' | 'desc';
}