
const BrandStory = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 rounded-full mb-6"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sand-800 mb-6">
                L'Héritage de la Beauté Marocaine
              </h2>
            </div>

            <div className="space-y-6 text-sand-700 leading-relaxed">
              <p className="text-lg">
                Née au cœur de l'Atlas marocain, Perle d'Atlas puise son inspiration 
                dans les rituels de beauté millénaires transmis de génération en génération. 
                Nos artisans perpétuent des savoir-faire ancestraux pour créer des produits 
                d'exception qui révèlent votre beauté naturelle.
              </p>

              <p className="text-lg">
                Chaque création est le fruit d'une alchimie parfaite entre tradition 
                et innovation, utilisant les trésors de la terre marocaine : l'huile 
                d'argan des coopératives berbères, l'argile de rhassoul des montagnes 
                de l'Atlas, et les essences florales des jardins de Grasse revisitées 
                par nos maîtres parfumeurs.
              </p>

              <p className="text-lg">
                Notre engagement va au-delà de la beauté : nous soutenons les communautés 
                locales et préservons les techniques artisanales qui font la richesse 
                de notre patrimoine culturel.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-amber-700 mb-2">100%</div>
                <div className="text-sm text-sand-600">Naturel</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-amber-700 mb-2">15+</div>
                <div className="text-sm text-sand-600">Années d'expertise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-amber-700 mb-2">50+</div>
                <div className="text-sm text-sand-600">Artisans partenaires</div>
              </div>
            </div>
          </div>

          {/* Images - Updated with new desert image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Main large image - Updated to use the new desert image with people */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl luxury-shadow">
                <img 
                  src="/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png"
                  alt="Désert marocain avec silhouettes - Notre inspiration"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Two smaller images */}
              <div className="relative overflow-hidden rounded-2xl luxury-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=300&h=300&fit=crop&crop=center"
                  alt="Artisanat marocain"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative overflow-hidden rounded-2xl luxury-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=300&fit=crop&crop=center"
                  alt="Architecture traditionnelle marocaine"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-200/40 to-gold-200/40 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-gold-200/40 to-amber-200/40 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
