
import { Card, CardContent } from '@/components/ui/card';

const Categories = () => {
  const categories = [
    {
      name: "Parfums",
      description: "Fragrances envoûtantes inspirées des souks et jardins marocains",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop&crop=center",
      href: "/parfums",
      count: "12 produits"
    },
    {
      name: "Huiles",
      description: "Huiles précieuses d'argan et essences naturelles du Maroc",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop&crop=center",
      href: "/huiles",
      count: "8 produits"
    },
    {
      name: "Crèmes",
      description: "Soins nourrissants aux actifs botaniques du terroir marocain",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
      href: "/cremes",
      count: "15 produits"
    },
    {
      name: "Masques",
      description: "Rituels purifiants à l'argile de rhassoul et aux plantes",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=300&fit=crop&crop=center",
      href: "/masques",
      count: "6 produits"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50/30 to-sand-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 mx-auto rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sand-800 mb-4">
            Nos Collections
          </h2>
          <p className="text-lg text-sand-600 max-w-2xl mx-auto">
            Explorez nos gammes de produits, chacune conçue pour révéler 
            la beauté authentique selon les traditions ancestrales du Maroc
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.name}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 luxury-shadow bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Category Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Name Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-serif font-bold mb-1">
                      {category.name}
                    </h3>
                    <div className="text-sm opacity-90">
                      {category.count}
                    </div>
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <p className="text-sand-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-amber-600 font-medium text-sm group-hover:text-amber-700 transition-colors">
                    Découvrir
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-amber-100 to-gold-100 rounded-3xl p-12 luxury-shadow">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-sand-800 mb-4">
            Restez connectée à nos rituels
          </h3>
          <p className="text-sand-600 mb-8 max-w-md mx-auto">
            Recevez en exclusivité nos conseils beauté et découvrez nos nouveautés
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-full border border-sand-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-gold-500 text-white rounded-full hover:from-amber-600 hover:to-gold-600 transition-all duration-300 font-medium">
              S'inscrire
            </button>
          </div>
          
          <p className="text-xs text-sand-500 mt-4">
            En vous inscrivant, vous acceptez de recevoir nos communications marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
