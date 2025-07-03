import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Thermometer, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Regions = () => {
  const { language } = useLanguage();

  const regions = [
    {
      id: 'atlas',
      name: 'Atlas',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200',
      climate: language === 'fr' ? 'Montagnard tempéré' : 'Temperate mountain',
      harvest: language === 'fr' ? 'Été et automne' : 'Summer and autumn',
      story: language === 'fr' 
        ? 'Les montagnes de l\'Atlas abritent l\'arganier, arbre mythique dont les femmes berbères extraient depuis des siècles une huile précieuse. Cette région offre des conditions climatiques uniques qui concentrent tous les bienfaits de ce trésor naturel.'
        : 'The Atlas Mountains are home to the argan tree, a mythical tree from which Berber women have been extracting precious oil for centuries. This region offers unique climatic conditions that concentrate all the benefits of this natural treasure.',
      ingredients: language === 'fr' 
        ? ['Huile d\'Argan', 'Miel de montagne', 'Herbes aromatiques']
        : ['Argan Oil', 'Mountain honey', 'Aromatic herbs'],
      products: [
        {
          name: language === 'fr' ? 'Huile d\'Argan Premium' : 'Premium Argan Oil',
          price: '299 MAD',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300'
        },
        {
          name: language === 'fr' ? 'Crème Nourrissante Atlas' : 'Atlas Nourishing Cream',
          price: '189 MAD',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300'
        }
      ]
    },
    {
      id: 'sahara',
      name: 'Sahara',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=1200',
      climate: language === 'fr' ? 'Désertique aride' : 'Arid desert',
      harvest: language === 'fr' ? 'Printemps et hiver' : 'Spring and winter',
      story: language === 'fr'
        ? 'Le Sahara marocain recèle des trésors botaniques adaptés aux conditions extrêmes. Les figues de barbarie et les plantes grasses développent des propriétés exceptionnelles de résistance et de régénération.'
        : 'The Moroccan Sahara contains botanical treasures adapted to extreme conditions. Prickly pears and succulents develop exceptional resistance and regeneration properties.',
      ingredients: language === 'fr'
        ? ['Figue de barbarie', 'Aloe vera', 'Henné naturel']
        : ['Prickly pear', 'Aloe vera', 'Natural henna'],
      products: [
        {
          name: language === 'fr' ? 'Sérum Figue de Barbarie' : 'Prickly Pear Serum',
          price: '249 MAD',
          image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300'
        }
      ]
    },
    {
      id: 'cote',
      name: language === 'fr' ? 'Côte Atlantique' : 'Atlantic Coast',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
      climate: language === 'fr' ? 'Océanique doux' : 'Mild oceanic',
      harvest: language === 'fr' ? 'Toute l\'année' : 'Year-round',
      story: language === 'fr'
        ? 'La côte atlantique marocaine bénéficie d\'un climat océanique qui favorise la croissance d\'algues marines riches en minéraux et d\'oliviers centenaires produisant une huile d\'exception.'
        : 'The Moroccan Atlantic coast benefits from an oceanic climate that favors the growth of seaweed rich in minerals and century-old olive trees producing exceptional oil.',
      ingredients: language === 'fr'
        ? ['Algues marines', 'Huile d\'olive', 'Sel de mer']
        : ['Seaweed', 'Olive oil', 'Sea salt'],
      products: [
        {
          name: language === 'fr' ? 'Savon Noir Traditionnel' : 'Traditional Black Soap',
          price: '89 MAD',
          image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300'
        }
      ]
    },
    {
      id: 'vallees',
      name: language === 'fr' ? 'Vallées du Sud' : 'Southern Valleys',
      image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=1200',
      climate: language === 'fr' ? 'Semi-aride tempéré' : 'Temperate semi-arid',
      harvest: language === 'fr' ? 'Printemps' : 'Spring',
      story: language === 'fr'
        ? 'Les vallées du Dadès et du Drâa sont réputées pour leurs roseraies et leurs jardins d\'aromates. C\'est ici que pousse la rose de Damas, utilisée depuis l\'Antiquité pour ses vertus apaisantes et régénérantes.'
        : 'The Dadès and Drâa valleys are renowned for their rose gardens and herb gardens. This is where the Damascus rose grows, used since antiquity for its soothing and regenerating properties.',
      ingredients: language === 'fr'
        ? ['Rose de Damas', 'Verveine', 'Lavande sauvage']
        : ['Damascus rose', 'Verbena', 'Wild lavender'],
      products: [
        {
          name: language === 'fr' ? 'Eau de Rose Pure' : 'Pure Rose Water',
          price: '129 MAD',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-100">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-clay-800 mb-6">
              {language === 'fr' ? 'Nos Régions' : 'Our Regions'}
            </h1>
            <p className="hero-subtitle text-clay-600 mb-8">
              {language === 'fr' 
                ? 'Découvrez la richesse botanique du Maroc à travers ses quatre régions emblématiques'
                : 'Discover the botanical richness of Morocco through its four emblematic regions'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Regions Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="atlas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {regions.map((region) => (
                <TabsTrigger 
                  key={region.id} 
                  value={region.id}
                  className="data-[state=active]:copper-gradient data-[state=active]:text-white"
                >
                  {region.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {regions.map((region) => (
              <TabsContent key={region.id} value={region.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Region Image */}
                  <div className="order-2 lg:order-1">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden luxury-shadow">
                      <img 
                        src={region.image} 
                        alt={region.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Region Info */}
                  <div className="order-1 lg:order-2 space-y-6">
                    <div>
                      <h2 className="section-title text-clay-800 mb-4 flex items-center">
                        <MapPin className="h-8 w-8 text-copper-600 mr-3" />
                        {region.name}
                      </h2>
                      
                      {/* Climate & Harvest Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center">
                          <Thermometer className="h-5 w-5 text-copper-600 mr-2" />
                          <div>
                            <div className="text-xs text-clay-500 uppercase tracking-wide">
                              {language === 'fr' ? 'Climat' : 'Climate'}
                            </div>
                            <div className="text-sm font-medium text-clay-700">
                              {region.climate}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-copper-600 mr-2" />
                          <div>
                            <div className="text-xs text-clay-500 uppercase tracking-wide">
                              {language === 'fr' ? 'Récolte' : 'Harvest'}
                            </div>
                            <div className="text-sm font-medium text-clay-700">
                              {region.harvest}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="elegant-text text-clay-700 leading-relaxed mb-6">
                        {region.story}
                      </p>
                    </div>

                    {/* Ingredients */}
                    <div>
                      <h4 className="font-semibold text-clay-800 mb-3">
                        {language === 'fr' ? 'Ingrédients emblématiques:' : 'Signature ingredients:'}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {region.ingredients.map((ingredient, index) => (
                          <span
                            key={index}
                            className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Featured Products */}
                    <div>
                      <h4 className="font-semibold text-clay-800 mb-4">
                        {language === 'fr' ? 'Produits phares:' : 'Featured products:'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {region.products.map((product, index) => (
                          <Card key={index} className="hover-scale">
                            <CardContent className="p-4">
                              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h5 className="font-medium text-clay-800 mb-1">{product.name}</h5>
                              <p className="text-copper-600 font-semibold">{product.price}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default Regions;
