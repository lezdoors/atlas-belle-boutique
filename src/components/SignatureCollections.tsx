import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const SignatureCollections = () => {
  const { language } = useLanguage();

  const products = [
    {
      id: 1,
      name: "Tagine Signature Chapuis",
      subtitle: "Handcrafted Serving Tagine",
      price: "$89",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//tagine3.jpg.webp',
      href: '/product/tagine-signature'
    },
    {
      id: 2,
      name: "Service à Thé Royal",
      subtitle: "Premium Tea Glass Collection",
      price: "$125",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//fakhar-glass-white1.JPG',
      href: '/product/service-the-royal'
    },
    {
      id: 3,
      name: "Bols Collection Moderne",
      subtitle: "Contemporary Ceramic Bowls",
      price: "$65",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//ceramic-making.jpg',
      href: '/product/bols-collection'
    },
    {
      id: 4,
      name: "Céramiques d'Exception",
      subtitle: "Exclusive Artisan Pieces",
      price: "$150",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//women%20making%20clay%20pots.jpg',
      href: '/product/ceramiques-exception'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-stone-900 mb-6 tracking-tight leading-tight">
            {language === 'fr' ? 'Nos Créations Signature' : 'Our Signature Creations'}
          </h2>
          <div className="w-16 h-px bg-stone-300 mx-auto mb-8"></div>
          <p className="text-lg lg:text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            {language === 'fr' 
              ? 'Une sélection raffinée de pièces d\'exception, alliant tradition marocaine et élégance française'
              : 'A refined selection of exceptional pieces, blending Moroccan tradition with French elegance'
            }
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Product Card */}
              <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="aspect-square relative overflow-hidden bg-stone-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="ghost"
                      className="bg-white/90 backdrop-blur-sm text-stone-900 hover:bg-white hover:text-stone-700 px-8 py-3 rounded-full font-light tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      asChild
                    >
                      <Link to={product.href}>
                        {language === 'fr' ? 'Découvrir' : 'Discover'}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8 text-center">
                  <h3 className="font-serif text-xl lg:text-2xl font-light text-stone-900 mb-3 tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm lg:text-base text-stone-600 font-light mb-4 leading-relaxed">
                    {product.subtitle}
                  </p>
                  <div className="text-lg lg:text-xl font-serif text-stone-900 font-medium">
                    {product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-stone-400 px-12 py-4 text-lg font-light tracking-wide rounded-full transition-all duration-300"
            asChild
          >
            <Link to="/collections">
              {language === 'fr' ? 'Voir Toutes Nos Collections' : 'View All Collections'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollections;