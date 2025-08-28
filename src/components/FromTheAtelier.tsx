import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FromTheAtelier = () => {
  const features = [
    'Handmade in Morocco',
    'Small-batch Production', 
    'US Shipping Included',
    '30-Day Returns'
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-8">
          From the Atelier
        </h2>
        
        <div className="prose prose-lg prose-stone mx-auto mb-8">
          <p className="text-lg font-light leading-relaxed text-stone-700 mb-6">
            Each piece in our collection is born from centuries of Moroccan craftsmanship, carefully curated in France, and brought to American tables with love and respect for tradition.
          </p>
          
          <p className="text-lg font-light leading-relaxed text-stone-700">
            Our ceramics are created in the workshops of Salé, where master artisans shape clay from the Bou Regreg river into vessels that carry the soul of Morocco. Every glaze tells a story, every curve speaks of hands that have perfected their craft across generations.
          </p>
        </div>
        
        <Button asChild variant="outline" className="mb-12 px-8 py-3 text-base font-light">
          <Link to="/about">Our Story</Link>
        </Button>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
              </div>
              <p className="text-sm font-light text-stone-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromTheAtelier;