import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const Tableware = () => {
  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6">
              Tableware Collection
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Handcrafted ceramic and pottery pieces that bring the warmth of Moroccan hospitality to your table
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Tagine Set', price: '$120' },
              { name: 'Ceramic Bowls', price: '$45' },
              { name: 'Tea Glass Set', price: '$65' },
              { name: 'Serving Platters', price: '$85' },
              { name: 'Moroccan Plates', price: '$55' },
              { name: 'Couscous Pot', price: '$95' }
            ].map((item, index) => (
              <div key={index} className="bg-stone-50 rounded-lg p-6 text-center">
                <div className="h-48 bg-stone-200 rounded-lg mb-4"></div>
                <h3 className="font-serif text-lg font-semibold text-stone-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-stone-600 mb-4">Handcrafted in Morocco</p>
                <div className="text-stone-800 font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Tableware;