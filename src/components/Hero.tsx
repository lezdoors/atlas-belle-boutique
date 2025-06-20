
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pearl-100">
      {/* Enhanced Moroccan Pattern Background */}
      <div className="absolute inset-0 moroccan-pattern opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-copper-200 opacity-20 animate-float blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-clay-200 opacity-25 animate-float blur-lg" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-copper-300 opacity-15 animate-float blur-md" style={{ animationDelay: '2s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Section - Enhanced Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            {/* Decorative Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 luxury-shadow">
              <Sparkles className="h-4 w-4 text-copper-600 mr-2" />
              <span className="text-sm font-medium text-clay-700 tracking-wide">
                {language === 'fr' ? 'Luxe Authentique Marocain' : 'Authentic Moroccan Luxury'}
              </span>
            </div>

            {/* Main Title with Enhanced Typography */}
            <h1 className="hero-title text-clay-800 mb-6">
              {language === 'fr' 
                ? 'Découvrez l\'Essence du Maroc'
                : 'Discover the Essence of Morocco'
              }
            </h1>
            
            {/* Elegant Subtitle */}
            <p className="hero-subtitle text-clay-600 max-w-xl mx-auto lg:mx-0 mb-8">
              {language === 'fr' 
                ? 'Parfums, huiles et soins haut de gamme inspirés des rituels ancestraux des terres magiques du Maroc'
                : 'Premium perfumes, oils and treatments inspired by ancestral rituals from the magical lands of Morocco'
              }
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                onClick={scrollToProducts}
                className="copper-gradient text-white px-8 py-4 text-lg font-medium rounded-full hover-scale luxury-shadow border-0 font-sans tracking-wide"
              >
                {language === 'fr' ? 'Explorer la Collection' : 'Explore Collection'}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/80 backdrop-blur-sm text-clay-700 border-2 border-copper-200 px-8 py-4 text-lg font-medium rounded-full hover:bg-copper-50 hover:border-copper-300 transition-all duration-300 font-sans tracking-wide"
              >
                {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce flex justify-center lg:justify-start">
              <ArrowDown className="h-6 w-6 text-copper-500" />
            </div>
          </div>

          {/* Right Section - Enhanced Product Showcase */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative animate-scale-in-bounce">
              {/* Enhanced Decorative Frame */}
              <div className="absolute -inset-8 copper-gradient rounded-3xl opacity-10 blur-2xl animate-pulse"></div>
              
              {/* Main Product Container */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-12 luxury-shadow border border-copper-100">
                {/* Elegant Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                  <div className="moroccan-pattern w-full h-full"></div>
                </div>
                
                {/* Product Showcase */}
                <div className="relative z-10 w-80 h-96 mx-auto">
                  {/* Main Product Mockup */}
                  <div className="relative w-48 h-64 mx-auto mb-6 rounded-2xl luxury-shadow bg-gradient-to-br from-pearl-50 to-beige-100 flex items-center justify-center">
                    <div className="text-center">
                      {/* Bottle Design */}
                      <div className="w-20 h-32 mx-auto mb-4 relative">
                        <div className="absolute inset-0 copper-gradient rounded-2xl opacity-90"></div>
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-clay-600 rounded-t-lg"></div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-serif text-white">
                          Perle d'Atlas
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="text-center">
                    <h3 className="font-serif text-xl font-semibold text-clay-800 mb-2">
                      {language === 'fr' ? 'Huile d\'Argan Précieuse' : 'Precious Argan Oil'}
                    </h3>
                    <p className="text-clay-600 text-sm elegant-text">
                      {language === 'fr' ? 'Élixir de beauté ancestrale' : 'Ancestral beauty elixir'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Product Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-copper-200 rounded-full opacity-60 animate-float blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-clay-200 rounded-full opacity-50 animate-float blur-sm" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
