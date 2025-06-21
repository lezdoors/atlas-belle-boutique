
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWholesaleForm } from './hooks/useWholesaleForm';
import CompanyInfoFields from './fields/CompanyInfoFields';
import ContactInfoFields from './fields/ContactInfoFields';
import BusinessDetailsFields from './fields/BusinessDetailsFields';
import ProjectDetailsFields from './fields/ProjectDetailsFields';

const WholesaleForm = () => {
  const { language } = useLanguage();
  const { form, isSubmitting, onSubmit } = useWholesaleForm();

  return (
    <section className="py-16 bg-pearl-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="luxury-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-clay-800">
                {language === 'fr' ? 'Demande de Partenariat' : 'Partnership Application'}
              </CardTitle>
              <CardDescription className="text-clay-600">
                {language === 'fr'
                  ? 'Remplissez ce formulaire pour rejoindre notre réseau de partenaires'
                  : 'Fill out this form to join our partner network'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <CompanyInfoFields control={form.control} />
                  <ContactInfoFields control={form.control} />
                  <BusinessDetailsFields control={form.control} />
                  <ProjectDetailsFields control={form.control} />

                  <Button 
                    type="submit" 
                    className="w-full copper-gradient hover-scale luxury-shadow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...')
                      : (language === 'fr' ? 'Envoyer la demande' : 'Send Application')
                    }
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WholesaleForm;
