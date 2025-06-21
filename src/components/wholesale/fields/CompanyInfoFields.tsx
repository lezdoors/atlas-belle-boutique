
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { WholesaleFormData } from '../schemas/wholesaleSchema';

interface CompanyInfoFieldsProps {
  control: Control<WholesaleFormData>;
}

const CompanyInfoFields = ({ control }: CompanyInfoFieldsProps) => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="company_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Nom de l\'entreprise *' : 'Company Name *'}
            </FormLabel>
            <FormControl>
              <Input placeholder={language === 'fr' ? 'Votre entreprise' : 'Your company'} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="contact_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Nom de contact *' : 'Contact Name *'}
            </FormLabel>
            <FormControl>
              <Input placeholder={language === 'fr' ? 'Votre nom' : 'Your name'} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CompanyInfoFields;
