
import * as z from 'zod';

export const wholesaleSchema = z.object({
  company_name: z.string()
    .min(2, 'Le nom de l\'entreprise est requis')
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ0-9\s\-&.,()]+$/, 'Caractères invalides dans le nom de l\'entreprise'),
  contact_name: z.string()
    .min(2, 'Le nom de contact est requis')
    .max(100, 'Le nom de contact ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, 'Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes'),
  email: z.string()
    .email('Email invalide')
    .max(255, 'L\'email ne peut pas dépasser 255 caractères'),
  phone: z.string()
    .min(10, 'Numéro de téléphone requis')
    .max(20, 'Le numéro de téléphone ne peut pas dépasser 20 caractères')
    .regex(/^\+?[1-9]\d{1,14}$/, 'Format de numéro de téléphone invalide'),
  website: z.string()
    .max(255, 'L\'URL ne peut pas dépasser 255 caractères')
    .refine((val) => !val || /^https?:\/\/.+/.test(val), 'URL invalide')
    .optional().or(z.literal('')),
  address: z.string()
    .min(10, 'Adresse complète requise')
    .max(500, 'L\'adresse ne peut pas dépasser 500 caractères'),
  business_type: z.string()
    .min(1, 'Type d\'activité requis')
    .max(50, 'Le type d\'activité ne peut pas dépasser 50 caractères'),
  products_interest: z.string()
    .min(10, 'Veuillez préciser votre intérêt')
    .max(2000, 'La description ne peut pas dépasser 2000 caractères'),
  message: z.string()
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères')
    .optional(),
});

export type WholesaleFormData = z.infer<typeof wholesaleSchema>;
