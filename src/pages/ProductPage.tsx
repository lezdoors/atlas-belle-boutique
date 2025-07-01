
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import ProductHero from '@/components/product/ProductHero';
import ProductDetails from '@/components/product/ProductDetails';
import { productData } from '@/data/ProductData';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !productData[slug]) {
    return <Navigate to="/boutique" replace />;
  }

  const product = productData[slug];

  return (
    <div className="min-h-screen bg-white">
      <AppleStyleHeader />
      <ProductHero product={product} />
      <ProductDetails product={product} />
      <AppleStyleFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default ProductPage;
