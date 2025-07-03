import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Cadeaux = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'fr' 
      ? 'Cadeaux Authentiques Marocains | Perle de l\'Atlas' 
      : 'Authentic Moroccan Gifts | Perle de l\'Atlas';
  }, [language]);

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Coffret Cadeau Déluxe' : 'Deluxe Gift Set',
      price: 'À partir de 450 MAD',
      originalPrice: '600 MAD',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//buttle-roses-inside.jpg',
      description: language === 'fr' ? 'Coffret luxueux avec huiles d\'argan, eau de rose et savon noir traditionnel' : 'Luxury gift set with argan oils, rose water and traditional black soap',
      rating: 4.9,
      reviews: 145,
      badge: 'bestseller'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Panier Artisanal Berbère' : 'Berber Artisanal Basket',
      price: 'À partir de 280 MAD',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      description: language === 'fr' ? 'Panier tressé à la main avec sélection de produits locaux authentiques' : 'Hand-woven basket with selection of authentic local products',
      rating: 4.7,
      reviews: 89,
      badge: 'limited'
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
              {language === 'fr' ? 'Cadeaux Authentiques' : 'Authentic Gifts'}
            </h1>
            <p className="text-lg text-stone-600 mb-8">
              {language === 'fr' 
                ? 'Offrez l\'authenticité du Maroc avec nos coffrets cadeaux soigneusement composés, parfaits pour toutes les occasions.'
                : 'Gift the authenticity of Morocco with our carefully curated gift sets, perfect for all occasions.'
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

export default Cadeaux;