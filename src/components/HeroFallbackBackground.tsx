
const HeroFallbackBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* High-end luxury gradient background inspired by Moroccan golden hour */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-copper-100 to-clay-200 animate-gradient bg-[length:400%_400%]"></div>
      
      {/* Sophisticated Moroccan geometric pattern overlay */}
      <div className="absolute inset-0 opacity-8">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(184, 134, 11, 0.15) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.12) 2px, transparent 2px),
                           linear-gradient(45deg, transparent 40%, rgba(184, 134, 11, 0.08) 50%, transparent 60%)`,
          backgroundSize: '80px 80px, 120px 120px, 200px 200px'
        }}></div>
      </div>
      
      {/* Luxury texture overlay for depth */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-transparent via-clay-500 to-transparent"></div>
      
      {/* Mobile-optimized poster image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 md:opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>
      
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
    </div>
  );
};

export default HeroFallbackBackground;
