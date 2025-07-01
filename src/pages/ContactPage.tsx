
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success(
        language === 'fr' 
          ? 'Message envoyé avec succès !' 
          : 'Message sent successfully!'
      );
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(
        language === 'fr' 
          ? 'Erreur lors de l\'envoi du message' 
          : 'Error sending message'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+33663068980';
    const message = encodeURIComponent('Bonjour! Je souhaite obtenir plus d\'informations sur vos produits Perle d\'Atlas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const svgPattern = `data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23B8860B" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-pearl-100">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-50">
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("${svgPattern}")`,
                backgroundRepeat: 'repeat'
              }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif font-bold text-5xl md:text-6xl text-clay-800 mb-4 tracking-tight">
                {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
              </h1>
              <p className="font-serif text-xl text-clay-600 leading-relaxed">
                {language === 'fr' ? 'Notre équipe vous répond sous 24h.' : 'Our team responds within 24 hours.'}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Left Column - Contact Form */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="font-serif font-semibold text-2xl text-clay-800 mb-6">
                    {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-serif font-medium text-clay-700 mb-2">
                        {language === 'fr' ? 'Nom complet' : 'Full name'}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-copper-200 rounded-2xl focus:border-copper-500 focus:ring-2 focus:ring-copper-200 transition-all duration-300"
                        placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-serif font-medium text-clay-700 mb-2">
                        {language === 'fr' ? 'Adresse email' : 'Email address'}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-copper-200 rounded-2xl focus:border-copper-500 focus:ring-2 focus:ring-copper-200 transition-all duration-300"
                        placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-serif font-medium text-clay-700 mb-2">
                        {language === 'fr' ? 'Message' : 'Message'}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-copper-200 rounded-2xl focus:border-copper-500 focus:ring-2 focus:ring-copper-200 transition-all duration-300 resize-none"
                        placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-copper-600 hover:bg-copper-700 text-white py-4 rounded-2xl font-serif font-medium text-lg transition-all duration-300 hover:scale-105"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          {language === 'fr' ? 'Envoi...' : 'Sending...'}
                        </div>
                      ) : (
                        <>
                          <Mail className="h-5 w-5 mr-2" />
                          {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Right Column - Store Info */}
              <div className="space-y-8">
                
                {/* WhatsApp CTA */}
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-serif font-semibold text-xl text-clay-800 mb-3">
                      {language === 'fr' ? 'Réponse immédiate' : 'Immediate response'}
                    </h3>
                    <p className="font-serif text-clay-600 mb-6">
                      {language === 'fr' 
                        ? 'Discutez directement avec notre équipe sur WhatsApp'
                        : 'Chat directly with our team on WhatsApp'
                      }
                    </p>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-serif font-medium transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="font-serif font-semibold text-xl text-clay-800 mb-6">
                      {language === 'fr' ? 'Nos coordonnées' : 'Our contact info'}
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-copper-100 rounded-full p-3">
                          <Mail className="h-5 w-5 text-copper-600" />
                        </div>
                        <div>
                          <h4 className="font-serif font-medium text-clay-800 mb-1">Email</h4>
                          <p className="text-clay-600">contact@perle-atlas.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-copper-100 rounded-full p-3">
                          <Phone className="h-5 w-5 text-copper-600" />
                        </div>
                        <div>
                          <h4 className="font-serif font-medium text-clay-800 mb-1">
                            {language === 'fr' ? 'Téléphone' : 'Phone'}
                          </h4>
                          <p className="text-clay-600">+33 6 63 06 89 80</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-copper-100 rounded-full p-3">
                          <MapPin className="h-5 w-5 text-copper-600" />
                        </div>
                        <div>
                          <h4 className="font-serif font-medium text-clay-800 mb-1">
                            {language === 'fr' ? 'Adresse' : 'Address'}
                          </h4>
                          <p className="text-clay-600">
                            822 C Street #11<br />
                            Hayward, CA 94541<br />
                            {language === 'fr' ? 'États-Unis' : 'United States'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-copper-100 rounded-full p-3">
                          <Clock className="h-5 w-5 text-copper-600" />
                        </div>
                        <div>
                          <h4 className="font-serif font-medium text-clay-800 mb-1">
                            {language === 'fr' ? 'Horaires' : 'Hours'}
                          </h4>
                          <p className="text-clay-600">
                            {language === 'fr' ? 'Lun-Ven: 9h-18h PST' : 'Mon-Fri: 9AM-6PM PST'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
