
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Categories = () => {
  const { language } = useLanguage();

  const categories = [
    {
      name: language === 'fr' ? "Éléments Architecturaux" : "Architectural Elements",
      description: language === 'fr' 
        ? "Boiseries, ferronnerie et éléments décoratifs traditionnels marocains"
        : "Woodwork, metalwork and traditional Moroccan decorative elements",
      image: "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
      href: "/catalog/architectural",
      count: language === 'fr' ? "15+ produits" : "15+ products"
    },
    {
      name: language === 'fr' ? "Éclairage" : "Lighting",
      description: language === 'fr' 
        ? "Lustres, appliques et luminaires artisanaux du Maroc"
        : "Chandeliers, sconces and handcrafted lighting from Morocco",
      image: "/lovable-uploads/4d22e63c-9766-4547-889d-0462b7de47e6.png",
      href: "/catalog/lighting",
      count: language === 'fr' ? "20+ produits" : "20+ products"
    },
    {
      name: language === 'fr' ? "Mobilier" : "Furniture",
      description: language === 'fr' 
        ? "Tables, commodes et mobilier traditionnel marocain"
        : "Tables, dressers and traditional Moroccan furniture",
      image: "/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png",
      href: "/catalog/furniture",
      count: language === 'fr' ? "25+ produits" : "25+ products"
    },
    {
      name: language === 'fr' ? "Décoration" : "Decor",
      description: language === 'fr' 
        ? "Plateaux, miroirs et objets décoratifs artisanaux"
        : "Trays, mirrors and handcrafted decorative objects",
      image: "/lovable-uploads/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png",
      href: "/catalog/decor",
      count: language === 'fr' ? "18+ produits" : "18+ products"
    },
    {
      name: language === 'fr' ? "Textiles & Coussins" : "Textiles & Cushions",
      description: language === 'fr' 
        ? "Coussins et textiles traditionnels aux motifs berbères"
        : "Traditional pillows and textiles with Berber patterns",
      image: "/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png",
      href: "/catalog/textiles",
      count: language === 'fr' ? "12+ produits" : "12+ products"
    },
    {
      name: language === 'fr' ? "Mobilier d'Extérieur" : "Outdoor Furniture",
      description: language === 'fr' 
        ? "Tables de jardin, fontaines et mobilier d'extérieur"
        : "Garden tables, fountains and outdoor furniture",
      image: "/lovable-uploads/067468dd-a766-407e-b2dc-50ccb8510454.png",
      href: "/catalog/outdoor",
      count: language === 'fr' ? "14+ produits" : "14+ products"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50/30 to-sand-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 mx-auto rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sand-800 mb-4">
            {language === 'fr' ? 'Nos Collections' : 'Our Collections'}
          </h2>
          <p className="text-lg text-sand-600 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Explorez nos gammes de produits, chacune conçue pour révéler la beauté authentique selon les traditions ancestrales du Maroc'
              : 'Explore our product ranges, each designed to reveal authentic beauty according to Morocco\'s ancestral traditions'
            }
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.name}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 luxury-shadow bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Category Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Name Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-serif font-bold mb-1">
                      {category.name}
                    </h3>
                    <div className="text-sm opacity-90">
                      {category.count}
                    </div>
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <p className="text-sand-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-amber-600 font-medium text-sm group-hover:text-amber-700 transition-colors">
                    {language === 'fr' ? 'Découvrir' : 'Discover'}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-amber-100 to-gold-100 rounded-3xl p-12 luxury-shadow">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-sand-800 mb-4">
            {language === 'fr' ? 'Restez connectée à nos créations' : 'Stay connected to our creations'}
          </h3>
          <p className="text-sand-600 mb-8 max-w-md mx-auto">
            {language === 'fr' 
              ? 'Recevez en exclusivité nos nouvelles collections et découvrez nos pièces artisanales'
              : 'Receive exclusive access to our new collections and discover our artisanal pieces'
            }
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
              className="flex-1 px-6 py-3 rounded-full border border-sand-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-gold-500 text-white rounded-full hover:from-amber-600 hover:to-gold-600 transition-all duration-300 font-medium">
              {language === 'fr' ? "S'inscrire" : 'Subscribe'}
            </button>
          </div>
          
          <p className="text-xs text-sand-500 mt-4">
            {language === 'fr' 
              ? 'En vous inscrivant, vous acceptez de recevoir nos communications marketing.'
              : 'By subscribing, you agree to receive our marketing communications.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
