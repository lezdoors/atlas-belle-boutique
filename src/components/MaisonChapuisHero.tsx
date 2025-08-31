import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const heroImages = [
  {
    src: "/lovable-uploads/185465c0-b6af-4dca-a941-5637f00e74a1.png",
    alt: "Handcrafted ceramic bowl with traditional patterns and herbal tea"
  },
  {
    src: "/lovable-uploads/838ce59f-7886-4c23-92de-58e990093ca6.png", 
    alt: "Blue and white ceramic dinnerware set with Moroccan patterns"
  },
  {
    src: "/lovable-uploads/269906be-3dc2-48e4-bce2-809e861f2a72.png",
    alt: "Colorful hand-painted ceramic plates with traditional motifs"
  },
  {
    src: "/lovable-uploads/9aa76b12-fac3-4f14-b823-aaf5626c6087.png",
    alt: "Ceramic cup with geometric patterns filled with dried herbs"
  }
];

const MaisonChapuisHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30"></div>
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
            size="lg"
            className="bg-white text-stone-900 hover:bg-stone-50 hover:shadow-luxury border-0 px-12 py-4 text-lg font-medium tracking-wide rounded-full transition-all duration-300 hover:scale-105"
          >
            <Link to="/shop">Shop Ceramics</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-stone-900 hover:shadow-luxury px-12 py-4 text-lg font-medium tracking-wide rounded-full transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm"
          >
            <Link to="/story">Our Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaisonChapuisHero;