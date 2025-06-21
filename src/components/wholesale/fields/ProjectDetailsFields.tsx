
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { WholesaleFormData } from '../schemas/wholesaleSchema';

interface ProjectDetailsFieldsProps {
  control: Control<WholesaleFormData>;
}

const ProjectDetailsFields = ({ control }: ProjectDetailsFieldsProps) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="products_interest"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Produits d\'intérêt *' : 'Products of Interest *'}
            </FormLabel>
            <FormControl>
              <Textarea 
                placeholder={language === 'fr' 
                  ? 'Quels produits vous intéressent ? Volumes estimés ?'
                  : 'Which products interest you? Estimated volumes?'
                } 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {language === 'fr' ? 'Message complémentaire' : 'Additional Message'}
            </FormLabel>
            <FormControl>
              <Textarea 
                placeholder={language === 'fr' 
                  ? 'Parlez-nous de votre projet...'
                  : 'Tell us about your project...'
                } 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ProjectDetailsFields;
