
import React from 'react';
import { Truck } from 'lucide-react';
import { ProductData } from '@/data/ProductData';

interface ProductDetailsProps {
  product: ProductData;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Why We Love It */}
        <div className="mb-16">
          <h2 className="text-3xl font-extralight text-black mb-6 tracking-tight">
            Pourquoi nous l'adorons
          </h2>
          <p className="text-lg font-light text-black/70 leading-relaxed">
            {product.whyWeLoveIt}
          </p>
        </div>

        {/* How It's Made */}
        <div className="mb-16">
          <h2 className="text-3xl font-extralight text-black mb-6 tracking-tight">
            Comment c'est fait
          </h2>
          <p className="text-lg font-light text-black/70 leading-relaxed mb-4">
            {product.howItsMade}
          </p>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-sm font-medium text-black/60">
                Région d'origine: {product.region}
              </span>
            </div>
          </div>
        </div>

        {/* Care & Use */}
        <div className="mb-16">
          <h2 className="text-3xl font-extralight text-black mb-6 tracking-tight">
            Entretien & Utilisation
          </h2>
          <p className="text-lg font-light text-black/70 leading-relaxed">
            {product.careAndUse}
          </p>
        </div>

        {/* Shipping Note */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <Truck className="h-8 w-8 mx-auto mb-4 text-black/60" />
          <h3 className="text-xl font-light text-black mb-2">
            Livraison internationale gratuite
          </h3>
          <p className="text-black/60">
            Expédition gratuite à partir de 149€ — Expédié depuis le Maroc
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
