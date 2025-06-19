
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Moroccan pattern */}
      <div className="absolute inset-0 moroccan-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-50/90 via-amber-50/80 to-gold-50/90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Decorative Element */}
          <div className="mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 mx-auto rounded-full"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-sand-800 mb-6 leading-tight">
            Perle d'Atlas
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-amber-700 font-medium mb-4 font-serif italic">
            La beauté ancestrale du Maroc, réinventée
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-sand-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos rituels de beauté authentiques inspirés des traditions 
            séculaires du Maroc. Des parfums envoûtants aux huiles précieuses, 
            chaque produit raconte l'histoire d'un savoir-faire ancestral.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-gold-500 hover:from-amber-600 hover:to-gold-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Découvrir la collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
            >
              Nos rituels de beauté
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-amber-600 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-gold-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-gold-200/30 to-amber-200/30 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
