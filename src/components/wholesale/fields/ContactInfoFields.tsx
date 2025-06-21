
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { WholesaleFormData } from '../schemas/wholesaleSchema';

interface ContactInfoFieldsProps {
  control: Control<WholesaleFormData>;
}

const ContactInfoFields = ({ control }: ContactInfoFieldsProps) => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Email professionnel *' : 'Business Email *'}
            </FormLabel>
            <FormControl>
              <Input type="email" placeholder="contact@entreprise.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Téléphone *' : 'Phone *'}
            </FormLabel>
            <FormControl>
              <Input placeholder="+33 1 23 45 67 89" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ContactInfoFields;
