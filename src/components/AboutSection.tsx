
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Leaf, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-copper-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Banner - Left Side */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl luxury-shadow">
              <video
                src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/videos//ai-women-oil.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Elegant overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 flex space-x-2">
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-copper-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-pearl-400 rounded-full animate-pulse delay-200"></div>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-90">
                  {language === 'fr' ? 'Tradition & Élégance' : 'Tradition & Elegance'}
                </p>
                <p className="text-xs opacity-70">
                  {language === 'fr' ? 'Depuis des générations' : 'For generations'}
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center opacity-80">
              <Heart className="h-6 w-6 text-amber-600" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-copper-100 rounded-full flex items-center justify-center opacity-80">
              <Leaf className="h-5 w-5 text-copper-600" />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
                <Star className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium tracking-wide">
                  {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
                </span>
              </div>
              
              <h2 className="section-title text-clay-800 mb-6">
                {language === 'fr' 
                  ? 'Perle de l\'Atlas' 
                  : 'Pearl of the Atlas'
                }
              </h2>
              
              <p className="elegant-text text-clay-600 text-lg leading-relaxed">
                {language === 'fr'
                  ? 'Née au cœur des montagnes de l\'Atlas, notre marque puise dans la richesse des traditions marocaines pour créer des produits de beauté d\'exception. Chaque création raconte l\'histoire millénaire des femmes berbères et de leurs secrets de beauté transmis de génération en génération.'
                  : 'Born in the heart of the Atlas Mountains, our brand draws from the richness of Moroccan traditions to create exceptional beauty products. Each creation tells the millennial story of Berber women and their beauty secrets passed down through generations.'
                }
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-clay-800 mb-1">
                    {language === 'fr' ? 'Ingrédients Naturels' : 'Natural Ingredients'}
                  </h4>
                  <p className="text-sm text-clay-600">
                    {language === 'fr' 
                      ? '100% naturels et biologiques'
                      : '100% natural and organic'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-copper-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-5 w-5 text-copper-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-clay-800 mb-1">
                    {language === 'fr' ? 'Savoir-faire Artisanal' : 'Artisanal Craftsmanship'}
                  </h4>
                  <p className="text-sm text-clay-600">
                    {language === 'fr' 
                      ? 'Méthodes traditionnelles préservées'
                      : 'Preserved traditional methods'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/a-propos">
                <Button 
                  size="lg" 
                  className="copper-gradient hover-scale text-white border-0 w-full sm:w-auto"
                >
                  {language === 'fr' ? 'Découvrir notre histoire' : 'Discover our story'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              
              <Link to="/ingredients">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-clay-300 text-clay-700 hover:bg-clay-50 w-full sm:w-auto"
                >
                  {language === 'fr' ? 'Nos ingrédients' : 'Our ingredients'}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-clay-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-clay-800 mb-1">50+</div>
                <div className="text-sm text-clay-600">
                  {language === 'fr' ? 'Ans d\'expérience' : 'Years of experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-clay-800 mb-1">100%</div>
                <div className="text-sm text-clay-600">
                  {language === 'fr' ? 'Naturel' : 'Natural'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-clay-800 mb-1">1000+</div>
                <div className="text-sm text-clay-600">
                  {language === 'fr' ? 'Clientes satisfaites' : 'Happy customers'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
