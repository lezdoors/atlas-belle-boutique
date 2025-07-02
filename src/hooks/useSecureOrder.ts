
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { validateQuantity, validatePrice, validateAuthUser, rateLimiter } from '@/utils/securityValidation';

interface SecureOrderData {
  product_id: string;
  quantity: number;
  price_total: number;
  currency: string;
  customer_name: string;
  email: string;
  phone?: string;
  shipping_address?: string;
}

export const useSecureOrder = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const createOrder = useMutation({
    mutationFn: async (orderData: SecureOrderData) => {
      // Validate authentication
      if (!validateAuthUser(user)) {
        throw new Error('Authentication required');
      }

      // Rate limiting check
      const userKey = `order_${user!.id}`;
      if (!rateLimiter.checkLimit(userKey, 3, 300000)) { // 3 orders per 5 minutes
        throw new Error('Too many order attempts. Please wait before trying again.');
      }

      // Validate input data
      if (!validateQuantity(orderData.quantity)) {
        throw new Error('Invalid quantity');
      }

      if (!validatePrice(orderData.price_total)) {
        throw new Error('Invalid price');
      }

      // Prepare secure order data
      const secureOrderData = {
        ...orderData,
        user_id: user!.id, // Ensure user_id is set from authenticated user
        payment_status: 'pending',
        created_at: new Date().toISOString(),
      };

      console.log('Creating secure order:', { 
        product_id: secureOrderData.product_id,
        quantity: secureOrderData.quantity,
        user_id: secureOrderData.user_id 
      });

      const { data, error } = await supabase
        .from('orders')
        .insert(secureOrderData)
        .select()
        .single();

      if (error) {
        console.error('Order creation error:', error);
        throw error;
      }

      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Commande créée avec succès');
      console.log('Order created successfully:', data.id);
    },
    onError: (error) => {
      console.error('Order creation failed:', error);
      const message = error.message || 'Erreur lors de la création de la commande';
      toast.error(message);
    },
  });

  return {
    createOrder: createOrder.mutate,
    isCreatingOrder: createOrder.isPending,
    orderError: createOrder.error,
  };
};
