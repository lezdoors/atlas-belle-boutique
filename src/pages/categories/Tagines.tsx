import React from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flame, ChefHat, Heart, ShoppingCart, Star, Utensils } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Tagines = () => {
  const { language } = useLanguage();

  const seoContent = {
    title: "Authentic Moroccan Tagines | Handcrafted Terracotta Cooking Vessels",
    description: "Discover our collection of authentic Moroccan tagines, handcrafted by skilled artisans in the Atlas Mountains. Perfect for slow-cooking traditional dishes.",
    keywords: [
      "moroccan tagine",
      "handcrafted tagine",
      "terracotta tagine",
      "authentic moroccan cookware",
      "traditional tagine",
      "ceramic tagine",
      "moroccan cooking",
      "slow cooking",
      "atlas mountains",
      "artisan cookware"
    ]
  };

  const tagines = [
    {
      name: "Atlas Traditional Tagine 30cm",
      price: "$89",
      originalPrice: "$120",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-moden-tagine.jpg.webp',
      features: ["Authentic terracotta", "Hand-painted motifs", "30cm diameter", "Atlas Mountain clay"],
      popular: true
    },
    {
      name: "Royal Berber Tagine 35cm",
      price: "$125",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-moden-tagine.jpg.webp',
      features: ["Large family size", "Intricate zellige patterns", "35cm diameter", "Premium glazing"],
      premium: true
    },
    {
      name: "Fès Artisan Tagine 28cm",
      price: "$75",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-moden-tagine.jpg.webp',
      features: ["Classic design", "Natural earth tones", "28cm diameter", "Food-safe glazing"]
    },
    {
      name: "Copper Accent Tagine 32cm",
      price: "$110",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-moden-tagine.jpg.webp',
      features: ["Copper accents", "Geometric patterns", "32cm diameter", "Heat retention"]
    },
    {
      name: "Miniature Tagine Set",
      price: "$45",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-moden-tagine.jpg.webp',
      features: ["Set of 3 mini tagines", "Perfect for serving", "15cm diameter each", "Individual portions"]
    },
    {
      name: "Rustic Village Tagine 34cm",
      price: "$95",
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-moden-tagine.jpg.webp',
      features: ["Rustic finish", "Village pottery style", "34cm diameter", "Authentic character"]
    }
  ];

  const cookingTips = [
    {
      icon: <Flame className="h-6 w-6" />,
      title: "Low Heat Cooking",
      description: "Always use low to medium heat for optimal flavor development and to protect your tagine."
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: "Seasoning Process",
      description: "Season your new tagine by soaking and gradual heating to ensure longevity."
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Traditional Recipes",
      description: "Perfect for lamb, chicken, vegetable tagines, and traditional Moroccan stews."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title={seoContent.title}
        description={seoContent.description}
        keywords={seoContent.keywords}
        type="website"
        schemaType="WebPage"
      />
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-amber-600 text-white hover:bg-amber-700">
                Traditional Cookware
              </Badge>
              <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-800 mb-6">
                Authentic Moroccan Tagines
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
                Handcrafted in the Atlas Mountains, our tagines bring centuries of culinary tradition to your kitchen. 
                Perfect for slow-cooking aromatic dishes that capture the essence of Morocco.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-stone-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-amber-500 mr-1" />
                  <span>Handcrafted</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-amber-500 mr-1" />
                  <span>Authentic Clay</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-amber-500 mr-1" />
                  <span>Traditional Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cooking Tips Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl font-light text-stone-800 mb-12 text-center">
                Tagine Cooking Mastery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cookingTips.map((tip, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4">
                      <div className="text-amber-600">
                        {tip.icon}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-light text-stone-800 mb-4">
                  Our Tagine Collection
                </h2>
                <p className="text-stone-600 max-w-2xl mx-auto">
                  Each tagine is carefully selected from master artisans who have perfected their craft over generations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tagines.map((tagine, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300 group bg-white">
                    <div className="relative h-64">
                      <img
                        src={tagine.image}
                        alt={tagine.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {tagine.popular && (
                          <Badge className="bg-red-500 text-white">
                            Most Popular
                          </Badge>
                        )}
                        {tagine.premium && (
                          <Badge className="bg-amber-600 text-white">
                            Premium
                          </Badge>
                        )}
                        {tagine.originalPrice && (
                          <Badge variant="outline" className="bg-white/90">
                            Sale
                          </Badge>
                        )}
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-medium text-stone-800 mb-3">
                        {tagine.name}
                      </h3>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tagine.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="text-2xl font-bold text-stone-800">
                            {tagine.price}
                          </div>
                          {tagine.originalPrice && (
                            <div className="text-lg text-stone-400 line-through">
                              {tagine.originalPrice}
                            </div>
                          )}
                        </div>
                        <Button size="sm" className="bg-stone-800 hover:bg-stone-900">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-light text-stone-800 mb-8 text-center">
                Tagine Care & Maintenance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-stone-50 p-8 rounded-lg">
                  <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">
                    Before First Use
                  </h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• Soak in water for 2-3 hours</li>
                    <li>• Season with oil and low heat</li>
                    <li>• Allow to cool gradually</li>
                    <li>• Rinse and dry completely</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-8 rounded-lg">
                  <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">
                    Ongoing Care
                  </h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>• Hand wash with mild soap</li>
                    <li>• Avoid sudden temperature changes</li>
                    <li>• Air dry completely before storing</li>
                    <li>• Re-season periodically</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-stone-800">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-light text-white mb-4">
                Start Your Culinary Journey
              </h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                Experience the magic of Moroccan cooking with an authentic tagine. Each piece comes with traditional recipes 
                and cooking instructions to help you master this ancient art.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-stone-800 hover:bg-stone-100">
                  Browse All Tagines
                </Button>
                <Link to="/care-instructions">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-stone-800">
                    Care Instructions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Tagines;