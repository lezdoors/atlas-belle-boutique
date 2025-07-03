import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Decoration = () => {
  const { language } = useLanguage();

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Lampe Berbère' : 'Berber Lamp',
      price: 'À partir de 400 MAD',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Tente-light.jpg',
      description: language === 'fr' ? 'Lampe artisanale en cuivre' : 'Handcrafted copper lamp'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Miroir Traditionnel' : 'Traditional Mirror',
      price: 'À partir de 600 MAD',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      description: language === 'fr' ? 'Miroir orné de motifs berbères' : 'Mirror adorned with Berber motifs'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-100 to-stone-200 py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6">
              {language === 'fr' ? 'Décoration Berbère' : 'Berber Decoration'}
            </h1>
            <p className="text-lg text-stone-600 mb-8">
              {language === 'fr' 
                ? 'Transformez votre intérieur avec nos objets décoratifs authentiques, inspirés de l\'artisanat berbère traditionnel.'
                : 'Transform your interior with our authentic decorative objects, inspired by traditional Berber craftsmanship.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-600 mb-4">
                    {product.description}
                  </p>
                  <p className="text-amber-600 font-medium mb-4">
                    {product.price}
                  </p>
                  <Link
                    to="/boutique"
                    className="inline-block bg-stone-800 text-white px-6 py-2 rounded-lg hover:bg-stone-700 transition-colors"
                  >
                    {language === 'fr' ? 'Voir détails' : 'View details'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Decoration;