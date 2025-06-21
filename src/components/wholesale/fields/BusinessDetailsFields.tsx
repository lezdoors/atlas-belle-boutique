
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { WholesaleFormData } from '../schemas/wholesaleSchema';
import { getBusinessTypes } from '../utils/businessTypes';

interface BusinessDetailsFieldsProps {
  control: Control<WholesaleFormData>;
}

const BusinessDetailsFields = ({ control }: BusinessDetailsFieldsProps) => {
  const { language } = useLanguage();
  const businessTypes = getBusinessTypes(language);

  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Site web' : 'Website'}
            </FormLabel>
            <FormControl>
              <Input placeholder="https://www.votre-site.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Adresse complète *' : 'Full Address *'}
            </FormLabel>
            <FormControl>
              <Textarea 
                placeholder={language === 'fr' ? 'Adresse complète de votre établissement' : 'Complete address of your establishment'} 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="business_type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Type d\'activité *' : 'Business Type *'}
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'fr' ? 'Sélectionnez votre activité' : 'Select your business type'} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {businessTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default BusinessDetailsFields;
