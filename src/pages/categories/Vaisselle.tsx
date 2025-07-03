import { useLanguage } from '@/contexts/LanguageContext';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Vaisselle = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'fr' 
      ? 'Vaisselle Artisanale Marocaine | Perle de l\'Atlas' 
      : 'Moroccan Artisanal Tableware | Perle de l\'Atlas';
  }, [language]);

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Tajine Traditionnel en Terre Cuite' : 'Traditional Clay Tajine',
      price: 'À partir de 250 MAD',
      originalPrice: '320 MAD',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//fakkhar-tajine-white.JPG',
      description: language === 'fr' ? 'Tajine artisanal en terre cuite de Salé, parfait pour la cuisson lente' : 'Handcrafted clay tajine from Salé, perfect for slow cooking',
      rating: 4.8,
      reviews: 124,
      badge: 'bestseller'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Verre Beldi Multicolore' : 'Multicolor Beldi Glass',
      price: 'À partir de 80 MAD',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//beldi-glass-multicolor.JPG',
      description: language === 'fr' ? 'Verre soufflé traditionnel de Fès, aux couleurs vives et authentiques' : 'Traditional blown glass from Fès, with vibrant and authentic colors',
      rating: 4.6,
      reviews: 89,
      badge: 'new'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Service à Thé Complet' : 'Complete Tea Service',
      price: 'À partir de 450 MAD',
      originalPrice: '550 MAD',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400',
      description: language === 'fr' ? 'Service à thé traditionnel marocain avec plateau en cuivre gravé' : 'Traditional Moroccan tea service with engraved copper tray',
      rating: 4.9,
      reviews: 67,
      badge: 'limited'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Assiettes en Céramique Peintes' : 'Hand-Painted Ceramic Plates',
      price: 'À partir de 180 MAD',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      description: language === 'fr' ? 'Assiettes en céramique peintes à la main, motifs berbères authentiques' : 'Hand-painted ceramic plates with authentic Berber motifs',
      rating: 4.7,
      reviews: 156,
      badge: null
    },
    {
      id: 5,
      name: language === 'fr' ? 'Bols à Couscous Traditionnels' : 'Traditional Couscous Bowls',
      price: 'À partir de 120 MAD',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
      description: language === 'fr' ? 'Bols en terre cuite émaillée, idéaux pour servir le couscous' : 'Glazed clay bowls, ideal for serving couscous',
      rating: 4.5,
      reviews: 203,
      badge: null
    },
    {
      id: 6,
      name: language === 'fr' ? 'Plateau de Service en Cuivre' : 'Copper Serving Tray',
      price: 'À partir de 320 MAD',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400',
      description: language === 'fr' ? 'Plateau de service en cuivre martelé à la main par nos artisans' : 'Hand-hammered copper serving tray by our artisans',
      rating: 4.8,
      reviews: 91,
      badge: 'artisan-made'
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
        <MaisonStyleHeaderNew />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-stone-100 to-stone-200 py-20 mt-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6">
                {language === 'fr' ? 'Vaisselle Artisanale' : 'Artisanal Tableware'}
              </h1>
              <p className="text-lg text-stone-600 mb-8">
                {language === 'fr' 
                  ? 'Découvrez notre collection de vaisselle traditionnelle marocaine, façonnée par nos artisans dans le respect des traditions ancestrales. Chaque pièce raconte l\'histoire de l\'artisanat berbère.'
                  : 'Discover our collection of traditional Moroccan tableware, crafted by our artisans with respect for ancestral traditions. Each piece tells the story of Berber craftsmanship.'
                }
              </p>
              <div className="flex justify-center space-x-4 text-sm text-stone-500">
                <span>✓ {language === 'fr' ? 'Fait main' : 'Handmade'}</span>
                <span>✓ {language === 'fr' ? 'Matériaux naturels' : 'Natural materials'}</span>
                <span>✓ {language === 'fr' ? 'Commerce équitable' : 'Fair trade'}</span>
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
                {language === 'fr' ? 'Vous ne trouvez pas ce que vous cherchez ?' : 'Can\'t find what you\'re looking for?'}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                {language === 'fr' ? 'Contactez nos artisans' : 'Contact our artisans'}
              </Link>
            </div>
          </div>
        </section>

      <ModernElegantFooter />
    </div>
  );
};

export default Vaisselle;