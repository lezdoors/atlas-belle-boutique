
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { validateQuantity, validatePrice, validateAuthUser } from '@/utils/securityValidation';
import { ServerSideRateLimiter, RateLimiters } from '@/utils/serverSideRateLimiting';

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

      // Server-side rate limiting check
      const rateLimitResult = await ServerSideRateLimiter.checkLimit(RateLimiters.ORDER_CREATION);
      if (!rateLimitResult.allowed) {
        const message = rateLimitResult.blocked 
          ? 'Too many order attempts. You are temporarily blocked. Please try again later.'
          : `Too many order attempts. ${rateLimitResult.remainingAttempts || 0} attempts remaining.`;
        throw new Error(message);
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

      // Record the rate limit attempt
      await ServerSideRateLimiter.recordAttempt(RateLimiters.ORDER_CREATION.action);

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
