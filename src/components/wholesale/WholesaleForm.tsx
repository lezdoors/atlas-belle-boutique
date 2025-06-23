
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWholesaleForm } from './hooks/useWholesaleForm';
import CompanyInfoFields from './fields/CompanyInfoFields';
import ContactInfoFields from './fields/ContactInfoFields';
import BusinessDetailsFields from './fields/BusinessDetailsFields';
import ProjectDetailsFields from './fields/ProjectDetailsFields';
import { sanitizeInput, validateEmail, validateName } from '@/utils/inputValidation';
import { formRateLimiter, getUserIdentifier } from '@/utils/rateLimiter';
import { useToast } from '@/hooks/use-toast';

const WholesaleForm = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const { form, isSubmitting, onSubmit } = useWholesaleForm();

  const handleSecureSubmit = (data: any) => {
    // Rate limiting check
    const userIdentifier = getUserIdentifier();
    const rateLimitResult = formRateLimiter.checkLimit(userIdentifier);
    
    if (!rateLimitResult.allowed) {
      toast({
        variant: "destructive",
        title: language === 'fr' ? "Trop de tentatives" : "Too many attempts",
        description: language === 'fr' 
          ? "Veuillez attendre avant de réessayer"
          : "Please wait before trying again"
      });
      return;
    }

    // Additional validation
    if (!validateEmail(data.email)) {
      toast({
        variant: "destructive",
        title: language === 'fr' ? "Email invalide" : "Invalid email",
        description: language === 'fr' 
          ? "Veuillez entrer un email valide"
          : "Please enter a valid email"
      });
      return;
    }

    if (!validateName(data.contact_name)) {
      toast({
        variant: "destructive",
        title: language === 'fr' ? "Nom invalide" : "Invalid name",
        description: language === 'fr' 
          ? "Veuillez entrer un nom valide"
          : "Please enter a valid name"
      });
      return;
    }

    // Sanitize all text inputs before submission with length limits
    const sanitizedData = {
      ...data,
      company_name: sanitizeInput(data.company_name).slice(0, 100),
      contact_name: sanitizeInput(data.contact_name).slice(0, 100),
      email: sanitizeInput(data.email).slice(0, 255),
      phone: sanitizeInput(data.phone).slice(0, 20),
      website: data.website ? sanitizeInput(data.website).slice(0, 255) : '',
      address: sanitizeInput(data.address).slice(0, 500),
      business_type: sanitizeInput(data.business_type).slice(0, 50),
      products_interest: sanitizeInput(data.products_interest).slice(0, 2000),
      message: data.message ? sanitizeInput(data.message).slice(0, 1000) : ''
    };
    
    onSubmit(sanitizedData);
  };

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
                <form onSubmit={form.handleSubmit(handleSecureSubmit)} className="space-y-6">
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
