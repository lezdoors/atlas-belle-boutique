
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Droplets, Heart, Sun } from 'lucide-react';

const Rituels = () => {
  const { language } = useLanguage();

  const rituals = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: language === 'fr' ? 'Rituel du Hammam' : 'Hammam Ritual',
      description: language === 'fr'
        ? 'La purification traditionnelle qui prépare la peau à recevoir les bienfaits de nos huiles précieuses.'
        : 'Traditional purification that prepares the skin to receive the benefits of our precious oils.',
      products: language === 'fr' ? 'Savon noir, gant de gommage, huile d\'argan' : 'Black soap, exfoliating glove, argan oil',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: language === 'fr' ? 'Rituel de Beauté' : 'Beauty Ritual',
      description: language === 'fr'
        ? 'Les secrets ancestraux de beauté marocains pour une peau éclatante et des cheveux soyeux.'
        : 'Ancient Moroccan beauty secrets for radiant skin and silky hair.',
      products: language === 'fr' ? 'Huile de rose, ghassoul, eau de fleur d\'oranger' : 'Rose oil, rhassoul clay, orange blossom water',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: language === 'fr' ? 'Rituel de Relaxation' : 'Relaxation Ritual',
      description: language === 'fr'
        ? 'Un moment de paix inspiré des traditions de bien-être du désert marocain.'
        : 'A moment of peace inspired by Moroccan desert wellness traditions.',
      products: language === 'fr' ? 'Huile de massage, encens naturel, thé à la menthe' : 'Massage oil, natural incense, mint tea',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: language === 'fr' ? 'Rituel Saisonnier' : 'Seasonal Ritual',
      description: language === 'fr'
        ? 'Adapté aux changements saisonniers selon la sagesse berbère ancestrale.'
        : 'Adapted to seasonal changes according to ancient Berber wisdom.',
      products: language === 'fr' ? 'Mélanges saisonniers, huiles adaptées' : 'Seasonal blends, adapted oils',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const secrets = [
    {
      title: language === 'fr' ? 'L\'Art du Gommage' : 'The Art of Exfoliation',
      description: language === 'fr'
        ? 'Utilisez notre gant de crin avec des mouvements circulaires, toujours de bas en haut, pour activer la circulation.'
        : 'Use our horsehair glove with circular movements, always from bottom to top, to activate circulation.'
    },
    {
      title: language === 'fr' ? 'Le Secret de l\'Huile d\'Argan' : 'The Secret of Argan Oil',
      description: language === 'fr'
        ? 'Chauffez quelques gouttes entre vos paumes avant application pour optimiser l\'absorption.'
        : 'Warm a few drops between your palms before application to optimize absorption.'
    },
    {
      title: language === 'fr' ? 'La Magie du Ghassoul' : 'The Magic of Rhassoul',
      description: language === 'fr'
        ? 'Mélangez avec de l\'eau de rose pour un masque purifiant doux et nourrissant.'
        : 'Mix with rose water for a gentle and nourishing purifying mask.'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-100">
      <MaisonStyleHeaderNew />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-pearl-50">
          <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-title text-clay-800 mb-6">
                {language === 'fr' ? 'Nos Rituels Ancestraux' : 'Our Ancestral Rituals'}
              </h1>
              <p className="hero-subtitle text-clay-600 mb-8">
                {language === 'fr'
                  ? 'Découvrez les traditions millénaires de beauté et de bien-être du Maroc'
                  : 'Discover the thousand-year-old traditions of beauty and wellness from Morocco'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Rituals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {rituals.map((ritual, index) => (
                  <div key={index} className="bg-white rounded-lg luxury-shadow overflow-hidden hover-scale">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={ritual.image}
                        alt={ritual.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-copper-100 rounded-full flex items-center justify-center text-copper-600 mr-4">
                          {ritual.icon}
                        </div>
                        <h3 className="font-serif font-semibold text-xl text-clay-800">
                          {ritual.title}
                        </h3>
                      </div>
                      <p className="elegant-text text-clay-600 mb-4">
                        {ritual.description}
                      </p>
                      <div className="border-t border-pearl-200 pt-4">
                        <p className="text-sm font-medium text-copper-600 mb-1">
                          {language === 'fr' ? 'Produits utilisés :' : 'Products used:'}
                        </p>
                        <p className="text-sm elegant-text text-clay-500">
                          {ritual.products}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-16 bg-pearl-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-clay-800 mb-12 text-center">
                {language === 'fr' ? 'Comment Utiliser Nos Produits' : 'How to Use Our Products'}
              </h2>
              <div className="bg-white rounded-lg luxury-shadow p-8">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <p className="elegant-text text-clay-600 text-lg">
                      {language === 'fr'
                        ? 'Suivez ces étapes simples pour profiter pleinement de vos rituels de beauté marocains'
                        : 'Follow these simple steps to fully enjoy your Moroccan beauty rituals'
                      }
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-copper-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-serif font-bold">
                        1
                      </div>
                      <h4 className="font-serif font-semibold text-clay-800 mb-2">
                        {language === 'fr' ? 'Préparez' : 'Prepare'}
                      </h4>
                      <p className="elegant-text text-clay-600 text-sm">
                        {language === 'fr'
                          ? 'Créez un environnement calme et chauffez légèrement vos produits'
                          : 'Create a calm environment and gently warm your products'
                        }
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-copper-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-serif font-bold">
                        2
                      </div>
                      <h4 className="font-serif font-semibold text-clay-800 mb-2">
                        {language === 'fr' ? 'Appliquez' : 'Apply'}
                      </h4>
                      <p className="elegant-text text-clay-600 text-sm">
                        {language === 'fr'
                          ? 'Utilisez des gestes lents et circulaires en respirant profondément'
                          : 'Use slow, circular gestures while breathing deeply'
                        }
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-copper-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-serif font-bold">
                        3
                      </div>
                      <h4 className="font-serif font-semibold text-clay-800 mb-2">
                        {language === 'fr' ? 'Savourez' : 'Savor'}
                      </h4>
                      <p className="elegant-text text-clay-600 text-sm">
                        {language === 'fr'
                          ? 'Prenez le temps de ressentir les bienfaits et de vous détendre'
                          : 'Take time to feel the benefits and relax'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secrets Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-clay-800 mb-12 text-center">
                {language === 'fr' ? 'Secrets de Nos Ancêtres' : 'Secrets of Our Ancestors'}
              </h2>
              <div className="space-y-6">
                {secrets.map((secret, index) => (
                  <div key={index} className="bg-white rounded-lg luxury-shadow p-6">
                    <h3 className="font-serif font-semibold text-lg text-clay-800 mb-3">
                      {secret.title}
                    </h3>
                    <p className="elegant-text text-clay-600">
                      {secret.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default Rituels;
