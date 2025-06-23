
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { validateEmail, validatePhone, validateName, sanitizeInput } from '@/utils/inputValidation';
import { formRateLimiter, getUserIdentifier } from '@/utils/rateLimiter';

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

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      address: ''
    };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = language === 'fr' ? 'Le nom est requis' : 'Name is required';
    } else if (!validateName(formData.name)) {
      newErrors.name = language === 'fr' ? 'Nom invalide' : 'Invalid name';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = language === 'fr' ? 'L\'email est requis' : 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'fr' ? 'Email invalide' : 'Invalid email';
    }

    // Validate phone if provided
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = language === 'fr' ? 'Numéro de téléphone invalide' : 'Invalid phone number';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    const userIdentifier = getUserIdentifier();
    const rateLimitResult = formRateLimiter.checkLimit(userIdentifier);
    
    if (!rateLimitResult.allowed) {
      toast({
        variant: "destructive",
        title: language === 'fr' ? "Trop de tentatives" : "Too many attempts",
        description: language === 'fr' 
          ? "Veuillez attendre avant de réessayer"
          : "Please wait before trying again"
      });
      return;
    }

    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: language === 'fr' ? "Erreur de validation" : "Validation Error",
        description: language === 'fr' 
          ? "Veuillez corriger les erreurs dans le formulaire"
          : "Please correct the errors in the form"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Sanitize all inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name).slice(0, 100), // Apply length limit
        email: sanitizeInput(formData.email).slice(0, 255),
        phone: sanitizeInput(formData.phone).slice(0, 20),
        address: sanitizeInput(formData.address).slice(0, 500)
      };

      // Validate quantity and price constraints
      if (quantity <= 0 || quantity > 1000) {
        throw new Error(language === 'fr' ? 'Quantité invalide' : 'Invalid quantity');
      }

      const totalPrice = product.priceMAD * quantity;
      if (totalPrice <= 0 || totalPrice > 1000000) {
        throw new Error(language === 'fr' ? 'Prix invalide' : 'Invalid price');
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          productName: sanitizeInput(product.name),
          priceMAD: product.priceMAD,
          currency: currency,
          customerInfo: sanitizedData,
          productId: product.id.toString().slice(0, 50), // Apply length limit
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
            maxLength={100}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`border-sand-300 focus:border-copper-500 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            {language === 'fr' ? 'Email' : 'Email'} *
          </Label>
          <Input
            id="email"
            type="email"
            required
            maxLength={255}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`border-sand-300 focus:border-copper-500 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            {language === 'fr' ? 'Téléphone' : 'Phone'}
          </Label>
          <Input
            id="phone"
            type="tel"
            maxLength={20}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`border-sand-300 focus:border-copper-500 ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">
            {language === 'fr' ? 'Adresse de livraison' : 'Shipping Address'}
          </Label>
          <Textarea
            id="address"
            maxLength={500}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className={`border-sand-300 focus:border-copper-500 min-h-[80px] ${errors.address ? 'border-red-500' : ''}`}
            placeholder={language === 'fr' 
              ? 'Adresse complète de livraison...'
              : 'Complete shipping address...'
            }
          />
          {errors.address && (
            <p className="text-sm text-red-600">{errors.address}</p>
          )}
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
