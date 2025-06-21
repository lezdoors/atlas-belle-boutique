
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: language === 'fr' ? 'Message envoyé!' : 'Message sent!',
      description: language === 'fr' 
        ? 'Nous vous répondrons dans les plus brefs délais.'
        : 'We will respond to you as soon as possible.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'fr' ? 'Adresse' : 'Address',
      content: language === 'fr' 
        ? '123 Avenue Mohammed V\nQuartier Gueliz, Marrakech\nMaroc'
        : '123 Mohammed V Avenue\nGueliz District, Marrakech\nMorocco'
    },
    {
      icon: Phone,
      title: language === 'fr' ? 'Téléphone' : 'Phone',
      content: '+212 524 123 456'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@perledatlas.ma'
    },
    {
      icon: Clock,
      title: language === 'fr' ? 'Horaires' : 'Hours',
      content: language === 'fr' 
        ? 'Lun - Ven: 9h - 18h\nSam: 9h - 17h\nDim: Fermé'
        : 'Mon - Fri: 9am - 6pm\nSat: 9am - 5pm\nSun: Closed'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/perledatlas',
      handle: '@perledatlas'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://facebook.com/perledatlas',
      handle: 'Perle d\'Atlas'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/perledatlas',
      handle: 'Perle d\'Atlas'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-clay-800 mb-6">
              {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
            </h1>
            <p className="hero-subtitle text-clay-600 mb-8">
              {language === 'fr' 
                ? 'Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre voyage beauté'
                : 'We are here to answer all your questions and accompany you on your beauty journey'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="luxury-shadow">
              <CardContent className="p-8">
                <h2 className="section-title text-clay-800 mb-6">
                  {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">
                        {language === 'fr' ? 'Nom complet *' : 'Full name *'}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">
                        {language === 'fr' ? 'Adresse email *' : 'Email address *'}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">
                      {language === 'fr' ? 'Sujet' : 'Subject'}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder={language === 'fr' ? 'Sujet de votre message' : 'Subject of your message'}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      {language === 'fr' ? 'Message *' : 'Message *'}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2 resize-none"
                      placeholder={language === 'fr' 
                        ? 'Décrivez votre demande en détail...'
                        : 'Describe your request in detail...'
                      }
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full copper-gradient text-white rounded-full min-h-[48px]"
                  >
                    {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 copper-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-clay-800 mb-2">{info.title}</h3>
                          <p className="text-clay-600 text-sm leading-relaxed whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="luxury-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display font-semibold text-xl text-clay-800 mb-6">
                    {language === 'fr' ? 'Suivez-nous' : 'Follow us'}
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 rounded-lg border border-sand-200 hover:border-copper-300 hover:bg-copper-50 transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 bg-copper-100 group-hover:bg-copper-200 rounded-full flex items-center justify-center mr-4">
                          <social.icon className="h-5 w-5 text-copper-600" />
                        </div>
                        <div>
                          <div className="font-medium text-clay-800">{social.name}</div>
                          <div className="text-sm text-clay-600">{social.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="copper-gradient text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="font-display font-semibold text-xl mb-4">
                    {language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
                  </h3>
                  <p className="mb-6 opacity-90">
                    {language === 'fr'
                      ? 'Consultez notre FAQ pour des réponses rapides à vos questions'
                      : 'Check our FAQ for quick answers to your questions'
                    }
                  </p>
                  <Button variant="secondary" className="bg-white text-copper-600 hover:bg-white/90">
                    {language === 'fr' ? 'Voir la FAQ' : 'View FAQ'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-clay-800 mb-6">
              {language === 'fr' ? 'Trouvez-nous' : 'Find us'}
            </h2>
            <p className="elegant-text text-clay-600">
              {language === 'fr'
                ? 'Visitez notre boutique au cœur de Marrakech'
                : 'Visit our shop in the heart of Marrakech'
              }
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden luxury-shadow bg-gradient-to-br from-beige-200 to-sand-300">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-copper-600 mx-auto mb-4" />
                <p className="text-clay-700 font-medium">
                  {language === 'fr' 
                    ? 'Carte interactive disponible prochainement'
                    : 'Interactive map coming soon'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default Contact;
