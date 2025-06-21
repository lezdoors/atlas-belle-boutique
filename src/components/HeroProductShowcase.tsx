const HeroProductShowcase = () => {
  return <div className="relative order-1 lg:order-2 flex justify-center items-center mb-8 lg:mb-0">
      <div className="relative animate-scale-in-bounce">
        {/* Enhanced Decorative Frame - Mobile Responsive */}
        <div className="absolute -inset-4 sm:-inset-8 copper-gradient rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
        
        {/* Main Product Container - Mobile Optimized */}
        
        
        {/* Floating Product Elements - Responsive */}
        <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 bg-copper-200 rounded-full opacity-60 animate-float blur-sm"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-8 sm:w-12 h-8 sm:h-12 bg-clay-200 rounded-full opacity-50 animate-float blur-sm" style={{
        animationDelay: '1.5s'
      }}></div>
      </div>
    </div>;
};
export default HeroProductShowcase;