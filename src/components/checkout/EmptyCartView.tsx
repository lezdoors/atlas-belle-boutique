
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const EmptyCartView = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <ShoppingCart className="h-16 w-16 text-clay-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-clay-800 mb-4">
          {language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}
        </h1>
        <p className="text-clay-600 mb-6">
          {language === 'fr' 
            ? 'Ajoutez des produits à votre panier pour continuer'
            : 'Add products to your cart to continue'
          }
        </p>
        <Button asChild className="copper-gradient text-white">
          <Link to="/boutique">
            {language === 'fr' ? 'Découvrir nos produits' : 'Shop our products'}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyCartView;
