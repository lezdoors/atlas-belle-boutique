
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface CheckoutOptionsProps {
  onExpressCheckout: () => void;
}

const CheckoutOptions = ({ onExpressCheckout }: CheckoutOptionsProps) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-clay-800">
        {language === 'fr' ? 'Options de commande' : 'Checkout Options'}
      </h2>
      
      <div className="space-y-4">
        <Button
          className="w-full copper-gradient text-white text-left justify-start h-auto p-4"
          onClick={onExpressCheckout}
        >
          <div>
            <div className="font-semibold">
              {language === 'fr' ? 'Commande Express' : 'Express Checkout'}
            </div>
            <div className="text-sm opacity-90">
              {language === 'fr' 
                ? 'Passez votre commande rapidement'
                : 'Place your order quickly'
              }
            </div>
          </div>
        </Button>
        
        <Button
          variant="outline"
          className="w-full text-left justify-start h-auto p-4"
          disabled
        >
          <div>
            <div className="font-semibold">
              {language === 'fr' ? 'Créer un compte' : 'Create Account'}
            </div>
            <div className="text-sm text-clay-600">
              {language === 'fr' 
                ? 'Bientôt disponible'
                : 'Coming soon'
              }
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutOptions;
