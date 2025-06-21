
import * as z from 'zod';

export const wholesaleSchema = z.object({
  company_name: z.string().min(2, 'Le nom de l\'entreprise est requis'),
  contact_name: z.string().min(2, 'Le nom de contact est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone requis'),
  website: z.string().url('URL invalide').optional().or(z.literal('')),
  address: z.string().min(10, 'Adresse complète requise'),
  business_type: z.string().min(1, 'Type d\'activité requis'),
  products_interest: z.string().min(10, 'Veuillez préciser votre intérêt'),
  message: z.string().optional(),
});

export type WholesaleFormData = z.infer<typeof wholesaleSchema>;
