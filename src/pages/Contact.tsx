
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Mail, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const { language } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = '+33663068980';
    const message = encodeURIComponent('Bonjour! Je souhaite obtenir plus d\'informations sur vos produits Perle d\'Atlas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      description: language === 'fr' ? 'Réponse rapide' : 'Quick response',
      contact: '+33 6 63 06 89 80',
      action: handleWhatsAppClick,
      primary: true
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      description: language === 'fr' ? 'Support détaillé' : 'Detailed support',
      contact: 'contact@perle-atlas.com',
      action: () => window.location.href = 'mailto:contact@perle-atlas.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: language === 'fr' ? 'Téléphone' : 'Phone',
      description: language === 'fr' ? 'Consultation personnalisée' : 'Personal consultation',
      contact: '+33 6 63 06 89 80',
      action: () => window.location.href = 'tel:+33663068980'
    }
  ];

  const faqItems = [
    {
      question: language === 'fr' ? 'Quelle est l\'origine de vos produits ?' : 'What is the origin of your products?',
      answer: language === 'fr' 
        ? 'Tous nos produits sont sourcés directement au Maroc, principalement dans les régions de l\'Atlas et de l\'Anti-Atlas, auprès de coopératives locales.'
        : 'All our products are sourced directly from Morocco, mainly in the Atlas and Anti-Atlas regions, from local cooperatives.'
    },
    {
      question: language === 'fr' ? 'Vos produits sont-ils certifiés bio ?' : 'Are your products certified organic?',
      answer: language === 'fr'
        ? 'Nos produits suivent des méthodes de production traditionnelles et naturelles. Les certifications officielles sont en cours.'
        : 'Our products follow traditional and natural production methods. Official certifications are in progress.'
    },
    {
      question: language === 'fr' ? 'Quels sont vos délais de livraison ?' : 'What are your delivery times?',
      answer: language === 'fr'
        ? 'Livraison en 3-5 jours ouvrés en France, 7-10 jours ouvrés pour l\'international.'
        : 'Delivery in 3-5 business days in France, 7-10 business days internationally.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-pearl-50">
          <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-title text-clay-800 mb-6">
                {language === 'fr' ? 'Contactez-Nous' : 'Contact Us'}
              </h1>
              <p className="hero-subtitle text-clay-600 mb-8">
                {language === 'fr'
                  ? 'Nous sommes là pour vous accompagner dans votre découverte des trésors du Maroc'
                  : 'We are here to accompany you in your discovery of Morocco\'s treasures'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-clay-800 mb-12 text-center">
                {language === 'fr' ? 'Comment Nous Joindre' : 'How to Reach Us'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className={`hover-scale cursor-pointer transition-all duration-300 ${method.primary ? 'ring-2 ring-copper-600 bg-copper-50' : 'hover:shadow-lg'}`} onClick={method.action}>
                    <CardHeader className="text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-4 ${method.primary ? 'bg-copper-600 text-white' : 'bg-clay-100 text-clay-600'}`}>
                        {method.icon}
                      </div>
                      <CardTitle className={`font-serif ${method.primary ? 'text-copper-800' : 'text-clay-800'}`}>
                        {method.title}
                      </CardTitle>
                      <CardDescription className={method.primary ? 'text-copper-600' : ''}>
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className={`font-medium ${method.primary ? 'text-copper-700' : 'text-clay-700'}`}>
                        {method.contact}
                      </p>
                      {method.primary && (
                        <div className="mt-4">
                          <span className="inline-flex items-center text-sm text-copper-600 font-medium">
                            <Clock className="h-4 w-4 mr-1" />
                            {language === 'fr' ? 'Réponse immédiate' : 'Immediate response'}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-pearl-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-clay-800 mb-12 text-center">
                {language === 'fr' ? 'Nos Bureaux' : 'Our Offices'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* USA Office */}
                <Card className="hover-scale">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-copper-600" />
                      <CardTitle className="font-serif text-clay-800">
                        {language === 'fr' ? 'Bureau États-Unis' : 'USA Office'}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-clay-600">
                      <p className="font-medium">822 C Street #11</p>
                      <p>Hayward, CA 94541</p>
                      <p>{language === 'fr' ? 'États-Unis' : 'United States'}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-pearl-200">
                      <p className="text-sm text-clay-500">
                        {language === 'fr' ? 'Bureau principal' : 'Main office'}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Morocco Office */}
                <Card className="hover-scale">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-copper-600" />
                      <CardTitle className="font-serif text-clay-800">
                        Bureau Maroc
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-clay-600">
                      <p className="font-medium">Casablanca</p>
                      <p>Maroc</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-pearl-200">
                      <p className="text-sm text-clay-500">
                        {language === 'fr' ? 'Centre de sourcing' : 'Sourcing center'}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* France Office - Coming Soon */}
                <Card className="bg-pearl-100 border-2 border-dashed border-copper-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-copper-400" />
                      <CardTitle className="font-serif text-clay-600">
                        Bureau France
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-clay-500">
                      <p className="italic">{language === 'fr' ? 'Bientôt disponible' : 'Coming soon'}</p>
                      <p className="text-sm">
                        {language === 'fr'
                          ? 'Nous préparons l\'ouverture de notre bureau français pour vous offrir un service de proximité.'
                          : 'We are preparing the opening of our French office to offer you local service.'
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-clay-800 mb-12 text-center">
                {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <Card key={index} className="hover-scale">
                    <CardHeader>
                      <CardTitle className="font-serif text-lg text-clay-800">
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="elegant-text text-clay-600">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-copper-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title text-clay-800 mb-6">
                {language === 'fr' ? 'Prêt à Découvrir ?' : 'Ready to Discover?'}
              </h2>
              <p className="elegant-text text-clay-600 mb-8">
                {language === 'fr'
                  ? 'Contactez-nous dès maintenant pour commencer votre voyage vers la beauté authentique du Maroc.'
                  : 'Contact us now to start your journey towards the authentic beauty of Morocco.'
                }
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="copper-gradient text-white px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {language === 'fr' ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <ModernElegantFooter />
    </div>
  );
};

export default Contact;
