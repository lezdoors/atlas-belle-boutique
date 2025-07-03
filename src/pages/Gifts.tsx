import React from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Heart, Users, Star, ShoppingCart, Package } from 'lucide-react';

const Gifts = () => {
  const { language } = useLanguage();

  const giftCategories = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: language === 'fr' ? 'Pour Elle' : 'For Her',
      description: language === 'fr' 
        ? 'Des cadeaux précieux inspirés par la beauté marocaine.'
        : 'Precious gifts inspired by Moroccan beauty.',
      gifts: [
        {
          name: language === 'fr' ? 'Coffret Bien-être Atlas' : 'Atlas Wellness Set',
          price: 'MAD 650',
          description: language === 'fr' ? 'Huile d\'argan, savon noir, gommage' : 'Argan oil, black soap, scrub',
          image: '/lovable-uploads/wellness-set.jpg',
          ribbon: language === 'fr' ? 'Populaire' : 'Popular'
        },
        {
          name: language === 'fr' ? 'Bijoux Berbères' : 'Berber Jewelry',
          price: 'MAD 320',
          description: language === 'fr' ? 'Collier et boucles d\'oreilles argentés' : 'Silver necklace and earrings',
          image: '/lovable-uploads/berber-jewelry.jpg',
          ribbon: language === 'fr' ? 'Artisanal' : 'Handcrafted'
        }
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: language === 'fr' ? 'Pour le Foyer' : 'For the Home',
      description: language === 'fr'
        ? 'Créez une ambiance chaleureuse avec nos coffrets déco.'
        : 'Create a warm atmosphere with our decoration sets.',
      gifts: [
        {
          name: language === 'fr' ? 'Collection Thé Marocain' : 'Moroccan Tea Collection',
          price: 'MAD 890',
          description: language === 'fr' ? 'Service complet avec thé premium' : 'Complete service with premium tea',
          image: '/lovable-uploads/tea-collection.jpg',
          ribbon: language === 'fr' ? 'Complet' : 'Complete'
        },
        {
          name: language === 'fr' ? 'Éclairage d\'Ambiance' : 'Ambient Lighting',
          price: 'MAD 780',
          description: language === 'fr' ? 'Lanternes et bougies parfumées' : 'Lanterns and scented candles',
          image: '/lovable-uploads/ambient-lighting.jpg',
          ribbon: language === 'fr' ? 'Romantique' : 'Romantic'
        }
      ]
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: language === 'fr' ? 'Cadeaux d\'Exception' : 'Exceptional Gifts',
      description: language === 'fr'
        ? 'Pour les occasions spéciales et les moments uniques.'
        : 'For special occasions and unique moments.',
      gifts: [
        {
          name: language === 'fr' ? 'Tapis Beni Ouarain' : 'Beni Ouarain Rug',
          price: 'MAD 2,400',
          description: language === 'fr' ? 'Tapis berbère authentique fait main' : 'Authentic handmade Berber rug',
          image: '/lovable-uploads/beni-ouarain-gift.jpg',
          ribbon: language === 'fr' ? 'Luxe' : 'Luxury'
        },
        {
          name: language === 'fr' ? 'Coffret Maître Artisan' : 'Master Artisan Set',
          price: 'MAD 1,200',
          description: language === 'fr' ? 'Sélection d\'objets d\'art uniques' : 'Selection of unique art objects',
          image: '/lovable-uploads/master-artisan-set.jpg',
          ribbon: language === 'fr' ? 'Exclusif' : 'Exclusive'
        }
      ]
    }
  ];

  const occasions = [
    {
      title: language === 'fr' ? 'Mariage' : 'Wedding',
      suggestions: language === 'fr' ? 'Service à thé, tapis, décoration' : 'Tea service, rugs, decoration'
    },
    {
      title: language === 'fr' ? 'Anniversaire' : 'Birthday',
      suggestions: language === 'fr' ? 'Bijoux, parfums, objets d\'art' : 'Jewelry, perfumes, art objects'
    },
    {
      title: language === 'fr' ? 'Pendaison de crémaillère' : 'Housewarming',
      suggestions: language === 'fr' ? 'Éclairage, textiles, vaisselle' : 'Lighting, textiles, tableware'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Gift className="h-16 w-16 text-stone-600 mx-auto mb-6" />
              <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-800 mb-6">
                {language === 'fr' ? 'Offrir le Maroc' : 'Gift Morocco'}
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
                {language === 'fr'
                  ? 'Partagez la magie de l\'artisanat marocain avec des cadeaux pensés pour émouvoir et inspirer.'
                  : 'Share the magic of Moroccan craftsmanship with gifts designed to move and inspire.'
                }
              </p>
              <Button size="lg" className="bg-stone-800 hover:bg-stone-900 text-white">
                {language === 'fr' ? 'Trouver le Cadeau Parfait' : 'Find the Perfect Gift'}
              </Button>
            </div>
          </div>
        </section>

        {/* Gift Categories */}
        {giftCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-stone-800 rounded-full mx-auto mb-4">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h2 className="font-serif text-3xl font-light text-stone-800 mb-4">
                  {category.title}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {category.gifts.map((gift, giftIndex) => (
                  <Card key={giftIndex} className="overflow-hidden hover:shadow-luxury transition-all duration-300 group">
                    <div className="relative h-64 bg-stone-200">
                      <Badge className="absolute top-4 left-4 z-10 bg-stone-800 text-white">
                        {gift.ribbon}
                      </Badge>
                      <div className="absolute top-4 right-4 z-10">
                        <Package className="h-6 w-6 text-stone-600" />
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">
                        {gift.name}
                      </h3>
                      
                      <p className="text-stone-600 text-sm mb-4">
                        {gift.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-stone-800">
                          {gift.price}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="p-2">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-stone-800 hover:bg-stone-900">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            {language === 'fr' ? 'Offrir' : 'Gift'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Occasions Section */}
        <section className="py-16 bg-stone-800">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl font-light text-white mb-4">
                {language === 'fr' ? 'Cadeaux par Occasion' : 'Gifts by Occasion'}
              </h2>
              <p className="text-stone-300 leading-relaxed">
                {language === 'fr'
                  ? 'Trouvez l\'inspiration selon l\'événement que vous célébrez.'
                  : 'Find inspiration according to the event you are celebrating.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {occasions.map((occasion, index) => (
                <Card key={index} className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-serif text-xl font-medium text-white mb-3">
                      {occasion.title}
                    </h3>
                    <p className="text-stone-300 text-sm leading-relaxed">
                      {occasion.suggestions}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-stone-800 mr-4">
                {language === 'fr' ? 'Guide des Cadeaux' : 'Gift Guide'}
              </Button>
              <Link to="/contact">
                <Button className="bg-white text-stone-800 hover:bg-stone-100">
                  {language === 'fr' ? 'Conseil Personnalisé' : 'Personal Advice'}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gift Wrapping CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Package className="h-12 w-12 text-stone-600 mx-auto mb-6" />
              <h2 className="font-serif text-3xl font-light text-stone-800 mb-4">
                {language === 'fr' ? 'Emballage Cadeau Offert' : 'Free Gift Wrapping'}
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {language === 'fr'
                  ? 'Chaque commande est soigneusement emballée dans notre papier artisanal avec un ruban traditionnel.'
                  : 'Each order is carefully wrapped in our artisan paper with a traditional ribbon.'
                }
              </p>
              <Button size="lg" className="bg-stone-800 hover:bg-stone-900 text-white">
                {language === 'fr' ? 'Commander Maintenant' : 'Order Now'}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Gifts;