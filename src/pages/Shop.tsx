import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6">
              Shop All
            </h1>
            <p className="text-lg text-stone-600 mb-8">
              Discover our complete collection of Moroccan artisanal products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product placeholder cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-stone-50 rounded-lg p-6 text-center">
                <div className="h-48 bg-stone-200 rounded-lg mb-4"></div>
                <h3 className="font-serif text-lg font-semibold text-stone-800 mb-2">
                  Product {item}
                </h3>
                <p className="text-stone-600 mb-4">Artisanal Moroccan craft</p>
                <div className="text-stone-800 font-semibold">$45.00</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Shop;