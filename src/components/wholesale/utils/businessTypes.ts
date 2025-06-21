
import { Language } from '@/contexts/LanguageContext';

export const getBusinessTypes = (language: Language) => [
  { value: 'retail', label: language === 'fr' ? 'Commerce de détail' : 'Retail Store' },
  { value: 'spa', label: language === 'fr' ? 'Spa / Centre de bien-être' : 'Spa / Wellness Center' },
  { value: 'salon', label: language === 'fr' ? 'Salon de beauté' : 'Beauty Salon' },
  { value: 'pharmacy', label: language === 'fr' ? 'Pharmacie / Parapharmacie' : 'Pharmacy' },
  { value: 'distributor', label: language === 'fr' ? 'Distributeur' : 'Distributor' },
  { value: 'hotel', label: language === 'fr' ? 'Hôtel / Resort' : 'Hotel / Resort' },
  { value: 'other', label: language === 'fr' ? 'Autre' : 'Other' },
];
