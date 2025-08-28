import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MaisonChapuisHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/fez-ceramic-black1.jpg.webp"
          alt="Handmade Moroccan ceramics arranged on rustic wooden table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
          French-Curated<br />
          <span className="italic">Moroccan Ceramics</span>
        </h1>
        
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Small-batch tableware and tagines, handmade in the Atlas, curated in France, shipped across the U.S.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-3 text-base font-light"
          >
            <Link to="/shop">Shop Ceramics</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3 text-base font-light"
          >
            <Link to="/about">Our Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaisonChapuisHero;