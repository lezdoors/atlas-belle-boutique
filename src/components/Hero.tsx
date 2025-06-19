
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F5F0E7' }}>
      {/* Moroccan Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="moroccan-pattern h-full w-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Section - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in">
            {/* Decorative Element */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#D4A373' }}></div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight" style={{ color: '#2E2E2E' }}>
              Découvrez l'Essence du Maroc
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl mb-8 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0" style={{ color: '#2E2E2E' }}>
              Parfums, huiles et soins haut de gamme inspirés des rituels ancestraux
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="font-medium px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-sans"
              style={{ 
                backgroundColor: '#BA7A63',
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A86B56';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#BA7A63';
              }}
            >
              Explorer la collection
            </Button>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce flex justify-center lg:justify-start">
              <ArrowDown className="h-6 w-6" style={{ color: '#D4A373' }} />
            </div>
          </div>

          {/* Right Section - Product Image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative animate-scale-in">
              {/* Decorative Moroccan Frame */}
              <div className="absolute inset-0 transform rotate-6 rounded-3xl opacity-20" style={{ backgroundColor: '#D4A373', filter: 'blur(20px)' }}></div>
              
              {/* Product Mockup Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl">
                {/* Geometric Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="moroccan" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="2" fill="#D4A373"/>
                        <circle cx="0" cy="0" r="1" fill="#D4A373"/>
                        <circle cx="20" cy="20" r="1" fill="#D4A373"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#moroccan)"/>
                  </svg>
                </div>
                
                {/* Product Image Placeholder */}
                <div className="relative z-10 w-64 h-80 md:w-80 md:h-96 mx-auto bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    {/* Bottle/Jar Mockup */}
                    <div className="w-32 h-40 md:w-40 md:h-48 mx-auto mb-4 rounded-2xl shadow-xl relative" style={{ backgroundColor: '#F5F0E7' }}>
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-6 rounded-t-lg" style={{ backgroundColor: '#D4A373' }}></div>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-serif" style={{ color: '#2E2E2E' }}>
                        Perle d'Atlas
                      </div>
                    </div>
                    <p className="text-sm font-serif" style={{ color: '#2E2E2E' }}>
                      Huile d'Argan Précieuse
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full opacity-60 animate-pulse" style={{ backgroundColor: '#D4A373' }}></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full opacity-40 animate-pulse" style={{ backgroundColor: '#BA7A63' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full blur-xl opacity-30" style={{ backgroundColor: '#D4A373' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-xl opacity-30" style={{ backgroundColor: '#BA7A63' }}></div>
    </section>
  );
};

export default Hero;
