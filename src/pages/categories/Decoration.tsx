import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Decoration = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'fr' 
      ? 'Décoration Berbère Authentique | Perle de l\'Atlas' 
      : 'Authentic Berber Decoration | Perle de l\'Atlas';
  }, [language]);

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Lampe Berbère en Cuivre Martelé' : 'Hammered Copper Berber Lamp',
      price: 'À partir de 650 MAD',
      originalPrice: '800 MAD',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Tente-light.jpg',
      description: language === 'fr' ? 'Lampe artisanale en cuivre martelé avec motifs géométriques traditionnels' : 'Handcrafted hammered copper lamp with traditional geometric motifs',
      rating: 4.9,
      reviews: 87,
      badge: 'limited'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Miroir Rond Traditionnel' : 'Traditional Round Mirror',
      price: 'À partir de 420 MAD',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      description: language === 'fr' ? 'Miroir artisanal orné de motifs berbères, cadre en métal patiné' : 'Handcrafted mirror adorned with Berber motifs, patinated metal frame',
      rating: 4.7,
      reviews: 156,
      badge: 'bestseller'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Tapis Berbère Traditionnel' : 'Traditional Berber Rug',
      price: 'À partir de 1200 MAD',
      originalPrice: '1500 MAD',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      description: language === 'fr' ? 'Tapis tissé à la main par les femmes berbères, laine naturelle' : 'Hand-woven rug by Berber women, natural wool',
      rating: 4.8,
      reviews: 203,
      badge: 'artisan-made'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Coussin Brodé Main' : 'Hand-Embroidered Cushion',
      price: 'À partir de 180 MAD',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
      description: language === 'fr' ? 'Coussin en coton brodé à la main avec fils de soie colorés' : 'Hand-embroidered cotton cushion with colorful silk threads',
      rating: 4.5,
      reviews: 124,
      badge: null
    },
    {
      id: 5,
      name: language === 'fr' ? 'Pouf en Cuir Marocain' : 'Moroccan Leather Pouf',
      price: 'À partir de 350 MAD',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      description: language === 'fr' ? 'Pouf traditionnel en cuir tanné naturellement, coutures main' : 'Traditional pouf in naturally tanned leather, hand-stitched',
      rating: 4.6,
      reviews: 89,
      badge: 'new'
    },
    {
      id: 6,
      name: language === 'fr' ? 'Lanterne Marocaine Sculptée' : 'Carved Moroccan Lantern',
      price: 'À partir de 280 MAD',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      description: language === 'fr' ? 'Lanterne en métal sculpté à la main, jeux d\'ombres enchanteurs' : 'Hand-carved metal lantern, enchanting shadow play',
      rating: 4.7,
      reviews: 167,
      badge: null
    }
  ];

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'bestseller': return 'bg-amber-500 text-white';
      case 'new': return 'bg-green-500 text-white';
      case 'limited': return 'bg-red-500 text-white';
      case 'artisan-made': return 'bg-blue-500 text-white';
      default: return '';
    }
  };

  const getBadgeText = (badge: string | null) => {
    if (!badge) return '';
    switch (badge) {
      case 'bestseller': return language === 'fr' ? 'Bestseller' : 'Bestseller';
      case 'new': return language === 'fr' ? 'Nouveau' : 'New';
      case 'limited': return language === 'fr' ? 'Édition Limitée' : 'Limited Edition';
      case 'artisan-made': return language === 'fr' ? 'Fait Main' : 'Handmade';
      default: return '';
    }
  };

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
                ? 'Transformez votre intérieur avec nos objets décoratifs authentiques, inspirés de l\'artisanat berbère traditionnel. Chaque pièce apporte chaleur et authenticité à votre foyer.'
                : 'Transform your interior with our authentic decorative objects, inspired by traditional Berber craftsmanship. Each piece brings warmth and authenticity to your home.'
              }
            </p>
            <div className="flex justify-center space-x-4 text-sm text-stone-500">
              <span>✓ {language === 'fr' ? 'Design authentique' : 'Authentic design'}</span>
              <span>✓ {language === 'fr' ? 'Artisanat local' : 'Local craftsmanship'}</span>
              <span>✓ {language === 'fr' ? 'Pièces uniques' : 'Unique pieces'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-full ${getBadgeColor(product.badge)}`}>
                      {getBadgeText(product.badge)}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-stone-500 ml-2">({product.reviews} avis)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-amber-600 font-medium">
                        {product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-stone-400 line-through text-sm">
                          {product.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>

                  <Link
                    to="/boutique"
                    className="w-full inline-block text-center bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors font-medium"
                  >
                    {language === 'fr' ? 'Voir détails' : 'View details'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-stone-600 mb-6">
              {language === 'fr' ? 'Besoin d\'aide pour décorer votre espace ?' : 'Need help decorating your space?'}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              {language === 'fr' ? 'Conseil déco gratuit' : 'Free decoration advice'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Decoration;