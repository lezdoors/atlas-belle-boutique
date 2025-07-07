
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  isNew?: boolean;
  isComingSoon?: boolean;
}

const AppleStyleProductGrid = () => {
  const { language } = useLanguage();

  const products: Product[] = [
    {
      id: 1,
      name: language === 'fr' ? 'Tagine de Service Artisanal' : 'Tagine de Service Artisanal',
      subtitle: language === 'fr' ? 'Tajine artisanal de service des artisans de Fès' : 'Handcrafted serving tagine from Fez artisans',
      price: language === 'fr' ? 'À partir de $89' : 'From $89',
      image: '/lovable-uploads/297c8b0f-3221-45a3-8488-e8e023e07fcc.png',
      isNew: true
    },
    {
      id: 2,
      name: language === 'fr' ? 'Service à Thé Traditionnel' : 'Service à Thé Traditionnel',
      subtitle: language === 'fr' ? 'Verres à thé marocains authentiques, parfaits pour les cérémonies' : 'Authentic Moroccan tea glasses, perfect for ceremonies',
      price: language === 'fr' ? 'À partir de $65' : 'From $65',
      image: '/lovable-uploads/4d22e63c-9766-4547-889d-0462b7de47e6.png'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Collection Bols Céramique' : 'Collection Bols Céramique',
      subtitle: language === 'fr' ? 'Bols élégants pour un service moderne' : 'Elegant bowls for modern entertaining',
      price: language === 'fr' ? 'À partir de $45' : 'From $45',
      image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
      isComingSoon: true
    },
    {
      id: 4,
      name: language === 'fr' ? 'Verres à Thé Dorés Premium' : 'Verres à Thé Dorés Premium',
      subtitle: language === 'fr' ? 'Verres à thé dorés, collection de luxe' : 'Gold-rimmed tea glasses, luxury collection',
      price: language === 'fr' ? 'À partir de $35' : 'From $35',
      image: '/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black mb-6 tracking-tight">
            {language === 'fr' ? 'Collections' : 'Collections'}
          </h2>
          <p className="text-xl font-light text-black/60 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Artisanat authentique du Maroc'
              : 'Authentic Moroccan craftsmanship'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-0 bg-gray-50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 overflow-hidden rounded-3xl"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-6 left-6">
                  {product.isNew && (
                    <Badge className="bg-black text-white rounded-full px-3 py-1 text-xs font-light">
                      {language === 'fr' ? 'Nouveau' : 'New'}
                    </Badge>
                  )}
                  {product.isComingSoon && (
                    <Badge className="bg-black/80 text-white rounded-full px-3 py-1 text-xs font-light">
                      {language === 'fr' ? 'Bientôt' : 'Coming Soon'}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-black/60 mb-3">
                  {product.subtitle}
                </p>
                <p className="text-lg font-light text-black/60">
                  {product.price}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppleStyleProductGrid;
