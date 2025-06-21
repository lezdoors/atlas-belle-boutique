
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface CheckoutFormProps {
  product: {
    id: number;
    name: string;
    priceMAD: number;
  };
  quantity: number;
  onClose: () => void;
}

const CheckoutForm = ({ product, quantity, onClose }: CheckoutFormProps) => {
  const { language, currency } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          productName: product.name,
          priceMAD: product.priceMAD,
          currency: currency,
          customerInfo: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            shippingAddress: formData.address
          },
          productId: product.id.toString(),
          quantity: quantity
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        variant: "destructive",
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' 
          ? "Une erreur est survenue lors de la création de la commande"
          : "An error occurred while creating the order"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const exchangeRates = { EUR: 0.093, USD: 0.099 };
  const convertedPrice = Math.round(product.priceMAD * exchangeRates[currency]);
  const totalPrice = convertedPrice * quantity;
  const symbol = currency === 'EUR' ? '€' : '$';

  return (
    <div className="space-y-6">
      <div className="text-center pb-6 border-b border-sand-200">
        <h3 className="text-xl font-semibold text-clay-800 mb-2">
          {language === 'fr' ? 'Finaliser la commande' : 'Complete Order'}
        </h3>
        <div className="text-copper-600">
          <p className="font-medium">{product.name}</p>
          <p className="text-sm">
            {language === 'fr' ? 'Quantité' : 'Quantity'}: {quantity}
          </p>
          <p className="text-lg font-bold">
            {language === 'fr' ? 'Total' : 'Total'}: {totalPrice}{symbol}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">
            {language === 'fr' ? 'Nom complet' : 'Full Name'} *
          </Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-sand-300 focus:border-copper-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            {language === 'fr' ? 'Email' : 'Email'} *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-sand-300 focus:border-copper-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            {language === 'fr' ? 'Téléphone' : 'Phone'}
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border-sand-300 focus:border-copper-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">
            {language === 'fr' ? 'Adresse de livraison' : 'Shipping Address'}
          </Label>
          <Textarea
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="border-sand-300 focus:border-copper-500 min-h-[80px]"
            placeholder={language === 'fr' 
              ? 'Adresse complète de livraison...'
              : 'Complete shipping address...'
            }
          />
        </div>

        <div className="flex space-x-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1"
            disabled={isLoading}
          >
            {language === 'fr' ? 'Annuler' : 'Cancel'}
          </Button>
          <Button
            type="submit"
            className="flex-1 copper-gradient text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <ShoppingCart className="h-4 w-4 mr-2" />
            )}
            {language === 'fr' ? 'Payer maintenant' : 'Pay Now'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
