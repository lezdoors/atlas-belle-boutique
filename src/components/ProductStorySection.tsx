
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Users, Leaf, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductStorySectionProps {
  productId: number;
  productName: string;
}

const ProductStorySection: React.FC<ProductStorySectionProps> = ({ productId, productName }) => {
  const [activeTab, setActiveTab] = useState('story');
  const { language } = useLanguage();

  const storyContent = {
    story: {
      title: language === 'fr' ? 'L\'Histoire Derrière ce Produit' : 'The Story Behind This Product',
      content: language === 'fr'
        ? 'Dans les montagnes de l\'Atlas, où l\'air pur et les sols riches créent un environnement parfait, nos artisans perpétuent une tradition millénaire. Chaque goutte de cette huile précieuse raconte l\'histoire d\'un savoir-faire transmis de génération en génération.'
        : 'In the Atlas mountains, where pure air and rich soils create a perfect environment, our artisans perpetuate a thousand-year-old tradition. Each drop of this precious oil tells the story of know-how passed down from generation to generation.',
      image: '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png'
    },
    artisans: {
      title: language === 'fr' ? 'Comment nos Artisans le Créent' : 'How Our Artisans Make It',
      content: language === 'fr'
        ? 'Fatima et son équipe commencent avant l\'aube, cueillant délicatement chaque pétale de rose au moment où la rosée matinale concentre les essences. La distillation traditionnelle à la vapeur d\'eau, perfectionnée sur des siècles, préserve toute la pureté de ce trésor floral.'
        : 'Fatima and her team start before dawn, delicately picking each rose petal when morning dew concentrates the essences. Traditional steam distillation, perfected over centuries, preserves all the purity of this floral treasure.',
      image: '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png'
    },
    tradition: {
      title: language === 'fr' ? 'Usage Traditionnel' : 'Traditional Use',
      content: language === 'fr'
        ? 'Depuis des siècles, les femmes berbères utilisent cette essence précieuse dans leurs rituels de beauté quotidiens. Appliquée pure ou mélangée à d\'autres huiles sacrées, elle symbolise la féminité et la beauté éternelle dans la culture marocaine.'
        : 'For centuries, Berber women have used this precious essence in their daily beauty rituals. Applied pure or mixed with other sacred oils, it symbolizes femininity and eternal beauty in Moroccan culture.',
      image: '/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png'
    }
  };

  const tabs = [
    { id: 'story', label: language === 'fr' ? 'Histoire' : 'Story', icon: Book },
    { id: 'artisans', label: language === 'fr' ? 'Artisans' : 'Artisans', icon: Users },
    { id: 'tradition', label: language === 'fr' ? 'Tradition' : 'Tradition', icon: Leaf }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 luxury-shadow">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`rounded-full px-6 py-3 mx-1 transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'copper-gradient text-white shadow-lg' 
                      : 'text-clay-600 hover:text-copper-600'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-3xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={storyContent[activeTab as keyof typeof storyContent].image} 
                  alt={storyContent[activeTab as keyof typeof storyContent].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:from-transparent lg:to-black/20"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-clay-800 mb-6">
                  {storyContent[activeTab as keyof typeof storyContent].title}
                </h3>
                <p className="elegant-text text-clay-600 text-lg leading-relaxed mb-8">
                  {storyContent[activeTab as keyof typeof storyContent].content}
                </p>

                {/* Call to Action */}
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    className="border-copper-300 text-copper-600 hover:bg-copper-50 rounded-full px-6"
                  >
                    {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Context Banner */}
        <div className="mt-12 text-center">
          <Card className="bg-copper-50 border-0 rounded-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 className="font-display font-semibold text-lg text-copper-700 mb-3">
                {language === 'fr' ? 'Saviez-vous que...' : 'Did you know...'}
              </h4>
              <p className="elegant-text text-copper-600">
                {language === 'fr'
                  ? 'La distillation de rose au Maroc remonte au Xe siècle et était considérée comme un art royal, pratiqué exclusivement dans les palais impériaux.'
                  : 'Rose distillation in Morocco dates back to the 10th century and was considered a royal art, practiced exclusively in imperial palaces.'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductStorySection;
