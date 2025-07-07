import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const ArtDeVivreSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Left - Lifestyle Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/lovable-uploads/coastal-natural-beauty.jpg')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-50/30"></div>
          </div>

          {/* Right - Content */}
          <div className="flex items-center justify-center p-8 lg:p-16 xl:p-20">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light text-stone-900 mb-8 leading-tight tracking-tight">
                {language === 'fr' ? "L'Art de Vivre à la Française" : "The French Art of Living"}
              </h2>

              <div className="space-y-6 text-stone-700 leading-relaxed">
                <p className="text-lg lg:text-xl font-light">
                  {language === 'fr' 
                    ? "Chez Maison Chapuis, chaque pièce raconte une histoire. Nos céramiques marocaines, sélectionnées avec le raffinement français, transforment vos moments quotidiens en rituels d'exception."
                    : "At Maison Chapuis, each piece tells a story. Our Moroccan ceramics, selected with French refinement, transform your daily moments into exceptional rituals."
                  }
                </p>

                <p className="text-lg lg:text-xl font-light">
                  {language === 'fr'
                    ? "De la table du petit-déjeuner au dîner entre amis, découvrez l'élégance intemporelle née de la rencontre entre tradition berbère et savoir-vivre parisien."
                    : "From the breakfast table to dinner with friends, discover the timeless elegance born from the meeting of Berber tradition and Parisian savoir-vivre."
                  }
                </p>
              </div>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-stone-900 text-white hover:bg-stone-800 px-10 py-4 text-lg font-light tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-stone-900/20"
                  asChild
                >
                  <Link to="/notre-heritage">
                    {language === 'fr' ? 'Découvrir Notre Histoire' : 'Discover Our Story'}
                  </Link>
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="flex items-center mt-12 space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                  <span className="text-sm text-stone-600 font-light">
                    {language === 'fr' ? 'Tradition Artisanale' : 'Artisanal Tradition'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                  <span className="text-sm text-stone-600 font-light">
                    {language === 'fr' ? 'Élégance Française' : 'French Elegance'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDeVivreSection;