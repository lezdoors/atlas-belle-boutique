
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { 
  validateEmail, 
  validatePhone, 
  validateName, 
  validateText,
  validateAuthUser,
  sanitizeInput,
  rateLimiter 
} from '@/utils/securityValidation';

interface WholesaleFormData {
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  website?: string;
  address: string;
  business_type: string;
  products_interest: string;
  message?: string;
}

export const useSecureWholesale = () => {
  const { user } = useAuth();

  const submitWholesaleLead = useMutation({
    mutationFn: async (formData: WholesaleFormData) => {
      // Validate authentication
      if (!validateAuthUser(user)) {
        throw new Error('Authentication required for wholesale submissions');
      }

      // Rate limiting check
      const userKey = `wholesale_${user!.id}`;
      if (!rateLimiter.checkLimit(userKey, 2, 3600000)) { // 2 submissions per hour
        throw new Error('Too many submissions. Please wait before trying again.');
      }

      // Validate all input fields
      if (!validateName(formData.company_name)) {
        throw new Error('Invalid company name');
      }

      if (!validateName(formData.contact_name)) {
        throw new Error('Invalid contact name');
      }

      if (!validateEmail(formData.email)) {
        throw new Error('Invalid email address');
      }

      if (!validatePhone(formData.phone)) {
        throw new Error('Invalid phone number');
      }

      if (!validateText(formData.address, 500)) {
        throw new Error('Address too long');
      }

      if (!validateText(formData.products_interest, 1000)) {
        throw new Error('Products interest description too long');
      }

      if (formData.message && !validateText(formData.message, 1000)) {
        throw new Error('Message too long');
      }

      // Prepare properly typed data for insertion
      const insertData = {
        company_name: sanitizeInput(formData.company_name),
        contact_name: sanitizeInput(formData.contact_name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        website: formData.website ? sanitizeInput(formData.website) : null,
        address: sanitizeInput(formData.address),
        business_type: sanitizeInput(formData.business_type),
        products_interest: sanitizeInput(formData.products_interest),
        message: formData.message ? sanitizeInput(formData.message) : null,
      };

      console.log('Submitting secure wholesale lead for user:', user!.id);

      const { data, error } = await supabase
        .from('wholesale_leads')
        .insert(insertData)
        .select()
        .single();

      if (error) {
        console.error('Wholesale submission error:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      toast.success('Demande de partenariat envoyée avec succès');
      console.log('Wholesale lead submitted successfully');
    },
    onError: (error) => {
      console.error('Wholesale submission failed:', error);
      const message = error.message || 'Erreur lors de l\'envoi de la demande';
      toast.error(message);
    },
  });

  return {
    submitWholesaleLead: submitWholesaleLead.mutate,
    isSubmitting: submitWholesaleLead.isPending,
    error: submitWholesaleLead.error,
  };
};
