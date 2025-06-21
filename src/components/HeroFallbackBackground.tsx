
const HeroFallbackBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Luxury gradient background inspired by Moroccan golden hour */}
      <div className="absolute inset-0 bg-gradient-to-br from-pearl-100 via-copper-100 to-clay-200 animate-gradient bg-[length:400%_400%]"></div>
      
      {/* Mobile-optimized Moroccan geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(184, 134, 11, 0.3) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.2) 2px, transparent 2px),
                           linear-gradient(45deg, transparent 40%, rgba(184, 134, 11, 0.1) 50%, transparent 60%)`,
          backgroundSize: '60px 60px, 100px 100px, 150px 150px'
        }}></div>
      </div>
      
      {/* Enhanced mobile texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-tr from-transparent via-clay-500 to-transparent"></div>
      
      {/* Mobile fallback image overlay for better visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 md:hidden"></div>
    </div>
  );
};

export default HeroFallbackBackground;
