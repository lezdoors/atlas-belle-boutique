
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
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
      name: language === 'fr' ? 'Luminaires Artisanaux' : 'Artisanal Lighting',
      price: 'À partir de 2,500 MAD',
      image: 'https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//moroccan-lighting.jpg',
      isNew: true
    },
    {
      id: 2,
      name: language === 'fr' ? 'Mobilier Traditionnel' : 'Traditional Furniture',
      price: 'À partir de 4,000 MAD',
      image: '/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Décoration Berbère' : 'Berber Decoration',
      price: 'À partir de 800 MAD',
      image: '/lovable-uploads/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png',
      isComingSoon: true
    },
    {
      id: 4,
      name: language === 'fr' ? 'Textiles Marocains' : 'Moroccan Textiles',
      price: 'À partir de 350 MAD',
      image: '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png'
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
