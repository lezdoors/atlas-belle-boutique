
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useSavedItems } from '@/hooks/useSavedItems';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

const SavedItemsSection = () => {
  const { savedItems, removeSavedItem, moveToCart } = useSavedItems();
  const { addToCart } = useCart();
  const { language } = useLanguage();

  if (savedItems.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4 text-clay-800">
        {language === 'fr' ? 'Articles sauvegardés' : 'Saved Items'}
        <span className="text-sm font-normal text-clay-600 ml-2">
          ({savedItems.length})
        </span>
      </h3>
      
      <div className="space-y-3">
        {savedItems.map((item) => (
          <Card key={item.id} className="border-clay-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h4 className="font-medium text-clay-800">{item.name}</h4>
                  <p className="text-copper-600 font-semibold">{item.price}€</p>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    onClick={() => moveToCart(item.id, addToCart)}
                    className="copper-gradient text-white hover:opacity-90"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    {language === 'fr' ? 'Ajouter' : 'Add'}
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => removeSavedItem(item.id)}
                    className="border-clay-300 text-clay-600 hover:bg-clay-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SavedItemsSection;
