
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { wholesaleSchema, type WholesaleFormData } from '../schemas/wholesaleSchema';

export const useWholesaleForm = () => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WholesaleFormData>({
    resolver: zodResolver(wholesaleSchema),
    defaultValues: {
      company_name: '',
      contact_name: '',
      email: '',
      phone: '',
      website: '',
      address: '',
      business_type: '',
      products_interest: '',
      message: '',
    },
  });

  const onSubmit = async (data: WholesaleFormData) => {
    setIsSubmitting(true);
    try {
      // Transform the data to match Supabase expected format
      const supabaseData = {
        company_name: data.company_name,
        contact_name: data.contact_name,
        email: data.email,
        phone: data.phone,
        website: data.website || null, // Convert empty string to null for optional field
        address: data.address,
        business_type: data.business_type,
        products_interest: data.products_interest,
        message: data.message || null, // Convert empty string to null for optional field
      };

      const { error } = await supabase
        .from('wholesale_leads')
        .insert([supabaseData]);

      if (error) throw error;

      toast.success(
        language === 'fr' 
          ? 'Votre demande a été envoyée avec succès! Nous vous contacterons bientôt.'
          : 'Your request has been sent successfully! We will contact you soon.'
      );
      
      form.reset();
    } catch (error) {
      console.error('Error submitting wholesale form:', error);
      toast.error(
        language === 'fr'
          ? 'Erreur lors de l\'envoi. Veuillez réessayer.'
          : 'Error sending form. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit,
  };
};
