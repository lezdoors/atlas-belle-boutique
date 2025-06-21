
const HeroProductShowcase = () => {
  return (
    <div className="relative order-1 lg:order-2 flex justify-center items-center mb-8 lg:mb-0">
      <div className="relative animate-scale-in-bounce">
        {/* Enhanced Decorative Frame - Mobile Responsive */}
        <div className="absolute -inset-4 sm:-inset-8 copper-gradient rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
        
        {/* Main Product Container - Mobile Optimized */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-12 luxury-shadow border border-white/30">
          
          {/* Product Showcase - Responsive Sizing */}
          <div className="relative z-10 w-64 sm:w-80 h-80 sm:h-96 mx-auto">
            {/* Main Product Mockup - Mobile Responsive */}
            <div className="relative w-36 sm:w-48 h-48 sm:h-64 mx-auto mb-4 sm:mb-6 rounded-2xl luxury-shadow bg-gradient-to-br from-pearl-50 to-copper-100 flex items-center justify-center">
              <div className="text-center">
                {/* Bottle Design - Scaled for Mobile */}
                <div className="w-16 sm:w-20 h-24 sm:h-32 mx-auto mb-3 sm:mb-4 relative">
                  <div className="absolute inset-0 copper-gradient rounded-2xl opacity-90 luxury-shadow"></div>
                  <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-3 sm:h-4 bg-clay-600 rounded-t-lg"></div>
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-serif text-white">
                    Perle d'Atlas
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Details - Mobile Optimized */}
            <div className="text-center">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-clay-800 mb-2">
                Huile d'Argan Précieuse
              </h3>
              <p className="text-clay-600 text-sm elegant-text mb-2">
                Élixir de beauté ancestrale
              </p>
              <div className="text-xs text-copper-600 font-medium">
                Récolte Saisonnière • Atlas
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Product Elements - Responsive */}
        <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 bg-copper-200 rounded-full opacity-60 animate-float blur-sm"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-8 sm:w-12 h-8 sm:h-12 bg-clay-200 rounded-full opacity-50 animate-float blur-sm" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default HeroProductShowcase;
