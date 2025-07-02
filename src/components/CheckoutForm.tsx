
import SecureCheckoutForm from '@/components/checkout/SecureCheckoutForm';

interface CheckoutFormProps {
  product: {
    id: number;
    name: string;
    priceMAD: number;
  };
  quantity: number;
  onClose: () => void;
}

const CheckoutForm = (props: CheckoutFormProps) => {
  return <SecureCheckoutForm {...props} />;
};

export default CheckoutForm;
