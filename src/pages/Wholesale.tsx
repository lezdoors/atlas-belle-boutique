import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Building2, Users, Globe, Package } from 'lucide-react';

const wholesaleSchema = z.object({
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

type WholesaleFormData = z.infer<typeof wholesaleSchema>;

const Wholesale = () => {
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

  const businessTypes = [
    { value: 'retail', label: language === 'fr' ? 'Commerce de détail' : 'Retail Store' },
    { value: 'spa', label: language === 'fr' ? 'Spa / Centre de bien-être' : 'Spa / Wellness Center' },
    { value: 'salon', label: language === 'fr' ? 'Salon de beauté' : 'Beauty Salon' },
    { value: 'pharmacy', label: language === 'fr' ? 'Pharmacie / Parapharmacie' : 'Pharmacy' },
    { value: 'distributor', label: language === 'fr' ? 'Distributeur' : 'Distributor' },
    { value: 'hotel', label: language === 'fr' ? 'Hôtel / Resort' : 'Hotel / Resort' },
    { value: 'other', label: language === 'fr' ? 'Autre' : 'Other' },
  ];

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-pearl-50">
          <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-title text-clay-800 mb-6">
                {language === 'fr' ? 'Professionnels & Grossistes' : 'Professionals & Wholesalers'}
              </h1>
              <p className="hero-subtitle text-clay-600 mb-8">
                {language === 'fr'
                  ? 'Rejoignez notre réseau de partenaires et offrez l\'excellence marocaine à vos clients'
                  : 'Join our partner network and offer Moroccan excellence to your customers'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-clay-800 mb-12 text-center">
                {language === 'fr' ? 'Pourquoi choisir Perle d\'Atlas ?' : 'Why choose Perle d\'Atlas?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-100 rounded-full text-copper-600 mb-4">
                    <Package className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-clay-800 mb-3">
                    {language === 'fr' ? 'Produits Authentiques' : 'Authentic Products'}
                  </h3>
                  <p className="elegant-text text-clay-600">
                    {language === 'fr'
                      ? 'Directement sourcés auprès de nos coopératives marocaines'
                      : 'Directly sourced from our Moroccan cooperatives'
                    }
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-100 rounded-full text-copper-600 mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-clay-800 mb-3">
                    {language === 'fr' ? 'Support Dédié' : 'Dedicated Support'}
                  </h3>
                  <p className="elegant-text text-clay-600">
                    {language === 'fr'
                      ? 'Accompagnement personnalisé et formation produits'
                      : 'Personalized support and product training'
                    }
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-100 rounded-full text-copper-600 mb-4">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-clay-800 mb-3">
                    {language === 'fr' ? 'Marges Attractives' : 'Attractive Margins'}
                  </h3>
                  <p className="elegant-text text-clay-600">
                    {language === 'fr'
                      ? 'Tarifs dégressifs selon les volumes commandés'
                      : 'Volume-based pricing with attractive margins'
                    }
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-100 rounded-full text-copper-600 mb-4">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-clay-800 mb-3">
                    {language === 'fr' ? 'Livraison Mondiale' : 'Worldwide Shipping'}
                  </h3>
                  <p className="elegant-text text-clay-600">
                    {language === 'fr'
                      ? 'Expédition sécurisée dans le monde entier'
                      : 'Secure shipping worldwide'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
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
                          control={form.control}
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
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
                          control={form.control}
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

                      <FormField
                        control={form.control}
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
                        control={form.control}
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
                        control={form.control}
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

                      <FormField
                        control={form.control}
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
                        control={form.control}
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
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default Wholesale;
