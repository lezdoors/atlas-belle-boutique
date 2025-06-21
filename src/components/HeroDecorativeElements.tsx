
const HeroDecorativeElements = () => {
  return (
    <>
      {/* Floating Decorative Elements - Moroccan inspired */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-copper-200 opacity-20 animate-float blur-xl z-30"></div>
      <div className="absolute bottom-32 right-8 sm:right-16 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-clay-200 opacity-25 animate-float blur-lg z-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-copper-300 opacity-15 animate-float blur-md z-30" style={{ animationDelay: '2s' }}></div>
    </>
  );
};

export default HeroDecorativeElements;
