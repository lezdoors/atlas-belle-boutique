import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const recommendedProducts = [
  {
    id: 'verre-the-traditionnel',
    name_fr: 'Verres à Thé Traditionnels',
    name_en: 'Traditional Tea Glasses',
    price: 42,
    image: '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
    description: 'Set de 6 verres authentiques pour le thé à la menthe'
  },
  {
    id: 'plateau-service-cuivre',
    name_fr: 'Plateau de Service en Cuivre',
    name_en: 'Copper Serving Tray',
    price: 89,
    image: '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
    description: 'Plateau artisanal gravé à la main'
  },
  {
    id: 'bols-ceramique-fez',
    name_fr: 'Bols en Céramique de Fez',
    name_en: 'Fez Ceramic Bowls',
    price: 38,
    image: '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
    description: 'Set de 4 bols assortis pour accompagner'
  },
  {
    id: 'sous-plat-zellige',
    name_fr: 'Sous-plat en Zellige',
    name_en: 'Zellige Trivet',
    price: 28,
    image: '/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png',
    description: 'Protection élégante pour votre table'
  }
];

const ProductRecommendations = () => {
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const [addingToCart, setAddingToCart] = useState<string | null>(null);

  const handleAddToCart = async (product: typeof recommendedProducts[0]) => {
    setAddingToCart(product.id);

    const productForCart = {
      id: product.id,
      name_fr: product.name_fr,
      name_en: product.name_en,
      price: product.price,
      images: [product.image],
      category: 'accessories' as const,
      in_stock: true,
      created_at: new Date().toISOString()
    };

    await addToCart(productForCart);
    
    toast.success(
      language === 'fr' 
        ? `${product.name_fr} ajouté au panier` 
        : `${product.name_en} added to cart`
    );

    setAddingToCart(null);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-stone-900 mb-4">
          {language === 'fr' ? 'Complétez votre Service' : 'Complete the Set'}
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          {language === 'fr' 
            ? 'Créez une expérience culinaire authentique avec ces pièces complémentaires soigneusement sélectionnées'
            : 'Create an authentic culinary experience with these carefully selected complementary pieces'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((product) => (
          <Card key={product.id} className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative aspect-square bg-stone-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name_fr}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-medium text-stone-900 mb-1">
                {language === 'fr' ? product.name_fr : product.name_en}
              </h3>
              <p className="text-sm text-stone-600 mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-light text-stone-900">
                  ${product.price}
                </span>
                <Button
                  onClick={() => handleAddToCart(product)}
                  disabled={addingToCart === product.id}
                  size="sm"
                  className="bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                >
                  {addingToCart === product.id 
                    ? '...' 
                    : language === 'fr' ? 'Ajouter' : 'Add'
                  }
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-stone-300 text-stone-700 hover:bg-stone-50"
        >
          {language === 'fr' ? 'Voir toutes les collections' : 'View All Collections'}
        </Button>
      </div>
    </div>
  );
};

export default ProductRecommendations;