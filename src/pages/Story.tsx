import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const Story = () => {
  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6">
                Our Story
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Born in the heart of the Atlas Mountains, our story is one of tradition, craftsmanship, and the timeless beauty of Moroccan artistry.
              </p>
            </div>
            
            <div className="prose prose-lg prose-stone max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-4">
                    Heritage & Tradition
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    For generations, Moroccan artisans have passed down the sacred knowledge of their craft. From the ancient pottery wheels of Safi to the intricate metalwork of Fez, each piece tells a story of cultural heritage.
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    We honor these traditions by working directly with skilled craftspeople, ensuring that every item reflects the authenticity and quality of true Moroccan artisanship.
                  </p>
                </div>
                <div className="h-64 bg-stone-200 rounded-lg"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <div className="h-64 bg-stone-200 rounded-lg"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-4">
                    Sustainable Practices
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    Our commitment extends beyond beautiful objects to meaningful impact. We ensure fair compensation for artisans and use sustainable materials that respect both people and planet.
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Each purchase supports traditional crafts and helps preserve cultural knowledge for future generations.
                  </p>
                </div>
              </div>
              
              <div className="text-center bg-stone-50 rounded-lg p-12">
                <h2 className="text-2xl font-serif font-semibold text-stone-800 mb-4">
                  Bringing Morocco to Your Home
                </h2>
                <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
                  Every piece in our collection is chosen with care, representing the very best of Moroccan craftsmanship. We invite you to discover the warmth, beauty, and soul of Morocco through these timeless creations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Story;