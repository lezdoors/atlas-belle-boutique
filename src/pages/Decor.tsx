import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const Decor = () => {
  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6">
              Home Décor
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Transform your space with authentic Moroccan decorative pieces that tell stories of ancient craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Berber Rug', price: '$340' },
              { name: 'Brass Lanterns', price: '$125' },
              { name: 'Ceramic Vases', price: '$75' },
              { name: 'Wall Hangings', price: '$95' },
              { name: 'Poufs', price: '$185' },
              { name: 'Mirrors', price: '$145' }
            ].map((item, index) => (
              <div key={index} className="bg-stone-50 rounded-lg p-6 text-center">
                <div className="h-48 bg-stone-200 rounded-lg mb-4"></div>
                <h3 className="font-serif text-lg font-semibold text-stone-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-stone-600 mb-4">Authentic Moroccan craft</p>
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

export default Decor;