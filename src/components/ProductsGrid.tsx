
import ProductCard from './ProductCard';

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

interface ProductsGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, viewMode }) => {
  return (
    <div className={`grid gap-6 ${
      viewMode === 'grid' 
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
        : 'grid-cols-1'
    }`}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
