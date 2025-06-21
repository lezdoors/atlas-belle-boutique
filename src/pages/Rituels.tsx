
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sunrise, Moon, Droplets, Sparkles, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { convertAndFormat } from '@/utils/currencyConverter';

const Rituels = () => {
  const { language, currency } = useLanguage();

  const rituals = [
    {
      id: 1,
      icon: Sunrise,
      name: language === 'fr' ? 'Rituel du Matin' : 'Morning Ritual',
      subtitle: language === 'fr' ? 'Éveil et Éclat' : 'Awakening and Radiance',
      description: language === 'fr'
        ? 'Commencez votre journée avec notre rituel énergisant qui réveille votre peau et révèle son éclat naturel.'
        : 'Start your day with our energizing ritual that awakens your skin and reveals its natural radiance.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600',
      priceMAD: 459,
      originalPriceMAD: 599,
      products: language === 'fr'
        ? ['Huile d\'Argan Premium', 'Eau de Rose Pure', 'Crème Hydratante Jour']
        : ['Premium Argan Oil', 'Pure Rose Water', 'Day Moisturizing Cream'],
      benefits: language === 'fr'
        ? ['Hydratation intense', 'Protection UV naturelle', 'Éclat immédiat']
        : ['Intense hydration', 'Natural UV protection', 'Immediate radiance'],
      duration: language === 'fr' ? '10 minutes' : '10 minutes',
      color: 'from-amber-100 to-orange-100'
    },
    {
      id: 2,
      icon: Droplets,
      name: language === 'fr' ? 'Rituel Hammam' : 'Hammam Ritual',
      subtitle: language === 'fr' ? 'Purification et Détente' : 'Purification and Relaxation',
      description: language === 'fr'
        ? 'Recréez l\'expérience authentique du hammam marocain chez vous pour une purification profonde.'
        : 'Recreate the authentic Moroccan hammam experience at home for deep purification.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600',
      priceMAD: 389,
      originalPriceMAD: 489,
      products: language === 'fr'
        ? ['Savon Noir Traditionnel', 'Masque Ghassoul', 'Huile Nourrissante Corps']
        : ['Traditional Black Soap', 'Ghassoul Mask', 'Nourishing Body Oil'],
      benefits: language === 'fr'
        ? ['Exfoliation douce', 'Purification profonde', 'Relaxation totale']
        : ['Gentle exfoliation', 'Deep purification', 'Total relaxation'],
      duration: language === 'fr' ? '45 minutes' : '45 minutes',
      color: 'from-blue-100 to-teal-100'
    },
    {
      id: 3,
      icon: Moon,
      name: language === 'fr' ? 'Rituel du Soir' : 'Evening Ritual',
      subtitle: language === 'fr' ? 'Régénération Nocturne' : 'Night Regeneration',
      description: language === 'fr'
        ? 'Préparez votre peau à la régénération nocturne avec notre rituel apaisant et nourrissant.'
        : 'Prepare your skin for nighttime regeneration with our soothing and nourishing ritual.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600',
      priceMAD: 419,
      originalPriceMAD: 529,
      products: language === 'fr'
        ? ['Sérum Anti-âge', 'Crème Nuit Régénérante', 'Huile Précieuse Visage']
        : ['Anti-aging Serum', 'Regenerating Night Cream', 'Precious Face Oil'],
      benefits: language === 'fr'
        ? ['Régénération cellulaire', 'Anti-âge naturel', 'Apaisement profond']
        : ['Cellular regeneration', 'Natural anti-aging', 'Deep soothing'],
      duration: language === 'fr' ? '15 minutes' : '15 minutes',
      color: 'from-purple-100 to-indigo-100'
    },
    {
      id: 4,
      icon: Sparkles,
      name: language === 'fr' ? 'Rituel Éclat' : 'Radiance Ritual',
      subtitle: language === 'fr' ? 'Luminosité Instantanée' : 'Instant Luminosity',
      description: language === 'fr'
        ? 'Révélez l\'éclat naturel de votre peau avec ce rituel spécialement conçu pour les occasions spéciales.'
        : 'Reveal your skin\'s natural radiance with this ritual specially designed for special occasions.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600',
      priceMAD: 359,
      originalPriceMAD: 449,
      products: language === 'fr'
        ? ['Masque Éclat Express', 'Sérum Vitamine C', 'Baume Lèvres Rose']
        : ['Express Radiance Mask', 'Vitamin C Serum', 'Rose Lip Balm'],
      benefits: language === 'fr'
        ? ['Éclat immédiat', 'Teint unifié', 'Effet bonne mine']
        : ['Immediate radiance', 'Even complexion', 'Healthy glow effect'],
      duration: language === 'fr' ? '20 minutes' : '20 minutes',
      color: 'from-pink-100 to-rose-100'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-clay-800 mb-6">
              {language === 'fr' ? 'Nos Rituels' : 'Our Rituals'}
            </h1>
            <p className="hero-subtitle text-clay-600 mb-8">
              {language === 'fr' 
                ? 'Découvrez nos collections thématiques inspirées des traditions ancestrales marocaines'
                : 'Discover our thematic collections inspired by ancestral Moroccan traditions'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Rituals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rituals.map((ritual, index) => (
              <Card key={ritual.id} className="overflow-hidden hover-scale luxury-shadow">
                <div className={`bg-gradient-to-br ${ritual.color} p-8`}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <ritual.icon className="h-8 w-8 text-copper-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-clay-800 mb-1">
                        {ritual.name}
                      </h3>
                      <p className="text-copper-600 font-medium">
                        {ritual.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="elegant-text text-clay-700 leading-relaxed">
                    {ritual.description}
                  </p>
                </div>

                <CardContent className="p-8">
                  {/* Ritual Image */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                    <img 
                      src={ritual.image} 
                      alt={ritual.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-copper-600">
                        {convertAndFormat(ritual.priceMAD, currency)}
                      </span>
                      <span className="text-lg text-clay-400 line-through">
                        {convertAndFormat(ritual.originalPriceMAD, currency)}
                      </span>
                    </div>
                    <div className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm font-medium">
                      -{Math.round(((ritual.originalPriceMAD - ritual.priceMAD) / ritual.originalPriceMAD) * 100)}%
                    </div>
                  </div>

                  {/* Products Included */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-clay-800 mb-3">
                      {language === 'fr' ? 'Produits inclus:' : 'Products included:'}
                    </h4>
                    <ul className="space-y-2">
                      {ritual.products.map((product, idx) => (
                        <li key={idx} className="flex items-center text-clay-700">
                          <span className="w-2 h-2 bg-copper-500 rounded-full mr-3"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-clay-800 mb-3">
                      {language === 'fr' ? 'Bienfaits:' : 'Benefits:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {ritual.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="bg-beige-100 text-clay-700 px-3 py-1 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-clay-600">
                      {language === 'fr' ? 'Durée:' : 'Duration:'} <strong>{ritual.duration}</strong>
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full copper-gradient text-white rounded-full min-h-[48px]">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-clay-800 mb-6">
              {language === 'fr' ? 'Comment utiliser nos rituels' : 'How to use our rituals'}
            </h2>
            <p className="elegant-text text-clay-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Suivez nos guides détaillés pour profiter pleinement de chaque rituel'
                : 'Follow our detailed guides to fully enjoy each ritual'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-clay-800 mb-3">
                  {language === 'fr' ? 'Préparation' : 'Preparation'}
                </h3>
                <p className="elegant-text text-clay-600">
                  {language === 'fr'
                    ? 'Préparez votre espace et nettoyez votre peau'
                    : 'Prepare your space and cleanse your skin'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-clay-800 mb-3">
                  {language === 'fr' ? 'Application' : 'Application'}
                </h3>
                <p className="elegant-text text-clay-600">
                  {language === 'fr'
                    ? 'Suivez l\'ordre d\'application recommandé'
                    : 'Follow the recommended application order'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-clay-800 mb-3">
                  {language === 'fr' ? 'Relaxation' : 'Relaxation'}
                </h3>
                <p className="elegant-text text-clay-600">
                  {language === 'fr'
                    ? 'Profitez du moment de détente et de bien-être'
                    : 'Enjoy the moment of relaxation and well-being'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default Rituels;
