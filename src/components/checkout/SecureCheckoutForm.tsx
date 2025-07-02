
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSecureOrder } from '@/hooks/useSecureOrder';
import AuthGuard from '@/components/security/AuthGuard';
import SecureForm from '@/components/security/SecureForm';
import { validateEmail, validatePhone, validateName } from '@/utils/securityValidation';

interface SecureCheckoutFormProps {
  product: {
    id: number;
    name: string;
    priceMAD: number;
  };
  quantity: number;
  onClose: () => void;
}

const SecureCheckoutForm = ({ product, quantity, onClose }: SecureCheckoutFormProps) => {
  const { language } = useLanguage();
  const { createOrder, isCreatingOrder } = useSecureOrder();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData): boolean => {
    const errors: Record<string, string> = {};
    
    const customerName = formData.get('customer_name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    if (!validateName(customerName)) {
      errors.customer_name = 'Nom invalide';
    }

    if (!validateEmail(email)) {
      errors.email = 'Email invalide';
    }

    if (phone && !validatePhone(phone)) {
      errors.phone = 'Numéro de téléphone invalide';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSecureSubmit = async (formData: FormData, csrfToken: string) => {
    if (!validateForm(formData)) {
      return;
    }

    const orderData = {
      product_id: product.id.toString(),
      quantity,
      price_total: product.priceMAD * quantity,
      currency: 'MAD',
      customer_name: formData.get('customer_name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      shipping_address: formData.get('shipping_address') as string || undefined,
    };

    console.log('Submitting secure order with CSRF token:', csrfToken);
    createOrder(orderData);
  };

  return (
    <AuthGuard requireAuth={true}>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-clay-800">
            {language === 'fr' ? 'Commande Sécurisée' : 'Secure Checkout'}
          </h2>
          <p className="text-clay-600 mt-2">
            {language === 'fr' 
              ? 'Vos informations sont protégées' 
              : 'Your information is protected'
            }
          </p>
        </div>

        <SecureForm onSubmit={handleSecureSubmit} className="space-y-4">
          <div>
            <Label htmlFor="customer_name">
              {language === 'fr' ? 'Nom complet' : 'Full Name'} *
            </Label>
            <Input
              id="customer_name"
              name="customer_name"
              type="text"
              required
              maxLength={100}
              className={formErrors.customer_name ? 'border-red-500' : ''}
            />
            {formErrors.customer_name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.customer_name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">
              {language === 'fr' ? 'Email' : 'Email'} *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              maxLength={255}
              className={formErrors.email ? 'border-red-500' : ''}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">
              {language === 'fr' ? 'Téléphone' : 'Phone'}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              maxLength={20}
              className={formErrors.phone ? 'border-red-500' : ''}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="shipping_address">
              {language === 'fr' ? 'Adresse de livraison' : 'Shipping Address'}
            </Label>
            <Textarea
              id="shipping_address"
              name="shipping_address"
              maxLength={500}
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isCreatingOrder}
              className="flex-1"
            >
              {language === 'fr' ? 'Annuler' : 'Cancel'}
            </Button>
            <Button
              type="submit"
              disabled={isCreatingOrder}
              className="flex-1 bg-copper-600 hover:bg-copper-700"
            >
              {isCreatingOrder
                ? (language === 'fr' ? 'Traitement...' : 'Processing...')
                : (language === 'fr' ? 'Confirmer la commande' : 'Confirm Order')
              }
            </Button>
          </div>
        </SecureForm>
      </div>
    </AuthGuard>
  );
};

export default SecureCheckoutForm;
