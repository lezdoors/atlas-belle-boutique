
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  priceMAD: number;
  image: string;
  rating: number;
  reviews: number;
  badge: { type: 'new' | 'bestseller' | 'limited' | 'discount' };
  description: string;
}

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-clay-800 text-center mb-12">
          {language === 'fr' ? 'Produits recommandés' : 'Recommended products'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/produit/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
