
import { Heart } from 'lucide-react';

const MissionHero = () => {
  return (
    <section className="bg-gradient-to-br from-pearl-100 via-beige-50 to-copper-50 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Mission Statement */}
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-6 w-6 text-copper-600 mr-3" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-clay-800">
              Notre Mission
            </h2>
            <Heart className="h-6 w-6 text-copper-600 ml-3" />
          </div>
          
          <p className="font-serif text-xl md:text-2xl text-clay-700 mb-8 italic">
            Du Maroc avec Amour
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 luxury-shadow">
            <p className="text-lg md:text-xl text-clay-600 leading-relaxed mb-6">
              Nous révélons la beauté authentique du Maroc à travers des rituels ancestraux, 
              transmis de génération en génération par nos artisanes berbères.
            </p>
            
            <p className="text-base md:text-lg text-clay-500 leading-relaxed">
              Chaque produit Perle de l'Atlas porte en lui l'âme généreuse de notre terre, 
              l'expertise de nos traditions millénaires et l'amour inconditionnel pour la beauté naturelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionHero;
