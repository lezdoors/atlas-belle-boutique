
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Huile d'Argan Précieuse",
      category: "Huiles",
      price: "89€",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop&crop=center",
      description: "Huile d'argan pure du Sud marocain pour une peau nourrie et éclatante",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Parfum Oud & Rose",
      category: "Parfums",
      price: "125€",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center",
      description: "Fragrance envoûtante alliant la noblesse de l'oud aux pétales de rose",
      badge: "Nouveau"
    },
    {
      id: 3,
      name: "Masque au Rhassoul",
      category: "Masques",
      price: "45€",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center",
      description: "Argile volcanique du Moyen Atlas pour un teint purifié et lumineux",
      badge: ""
    },
    {
      id: 4,
      name: "Crème Régénérante",
      category: "Crèmes",
      price: "75€",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
      description: "Formule riche aux extraits de figue de barbarie et miel d'eucalyptus",
      badge: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sand-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 mx-auto rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sand-800 mb-4">
            Nos Produits Phares
          </h2>
          <p className="text-lg text-sand-600 max-w-2xl mx-auto">
            Une sélection exclusive de nos créations les plus appréciées, 
            inspirées des rituels de beauté traditionnels du Maroc
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 luxury-shadow bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white ${
                      product.badge === 'Nouveau' ? 'bg-amber-500' : 'bg-gold-600'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button className="bg-white text-sand-800 hover:bg-sand-50 rounded-full px-6">
                      Voir le produit
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="text-sm text-amber-600 font-medium mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-sand-800 mb-3 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-sand-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-700">
                      {product.price}
                    </span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-amber-500 text-amber-700 hover:bg-amber-50 rounded-full"
                    >
                      Ajouter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
          >
            Voir toute la collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
