
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from './productData';

interface ProductCarouselCardProps {
  product: Product;
}

const ProductCarouselCard: React.FC<ProductCarouselCardProps> = ({ product }) => {
  const { language } = useLanguage();

  return (
    <Link
      key={product.id}
      to={product.href}
      className="group block"
    >
      <article
        className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        itemScope
        itemType="https://schema.org/Product"
      >
        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name} - ${language === 'fr' ? 'Artisanat marocain authentique' : 'Authentic Moroccan craftsmanship'}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            itemProp="image"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 
            className="text-white font-light text-lg mb-2 line-clamp-1"
            itemProp="name"
          >
            {product.name}
          </h3>
          <p 
            className="text-white/80 text-sm font-light leading-relaxed line-clamp-2"
            itemProp="description"
          >
            {product.description}
          </p>
          
          {/* Hidden Schema.org data */}
          <meta itemProp="category" content={product.category} />
          <meta itemProp="url" content={product.href} />
        </div>
      </article>
    </Link>
  );
};

export default ProductCarouselCard;
