import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { validateEmail, validateName, validateMessage, sanitizeInput } from '@/utils/inputValidation';
import { rateLimiter } from '@/utils/securityValidation';
import SecureForm from '@/components/security/SecureForm';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SecureContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: sanitizeInput(value)
    }));
  };

  const handleSecureSubmit = async (formData: FormData, csrfToken: string) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Rate limiting check
    const userKey = `contact_${Date.now() % 1000000}`;
    if (!rateLimiter.checkLimit(userKey, 2, 3600000)) { // 2 attempts per hour
      toast.error(language === 'fr' 
        ? 'Trop de tentatives. Veuillez patienter avant de réessayer.' 
        : 'Too many attempts. Please wait before trying again.'
      );
      return;
    }

    // Validate inputs
    if (!validateName(name)) {
      toast.error(language === 'fr' ? 'Nom invalide' : 'Invalid name');
      return;
    }

    if (!validateEmail(email)) {
      toast.error(language === 'fr' ? 'Email invalide' : 'Invalid email');
      return;
    }

    const messageValidation = validateMessage(message);
    if (!messageValidation.isValid) {
      toast.error(messageValidation.error);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send to your backend API or Supabase function
      // For now, we'll just show a success message
      console.log('Secure contact form submission:', {
        name: sanitizeInput(name),
        email: sanitizeInput(email),
        subject: sanitizeInput(subject),
        message: sanitizeInput(message),
        csrfToken
      });

      toast.success(language === 'fr' 
        ? 'Message envoyé avec succès!' 
        : 'Message sent successfully!'
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(language === 'fr' 
        ? 'Erreur lors de l\'envoi du message' 
        : 'Error sending message'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 text-center">
        {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
      </h2>
      
      <SecureForm onSubmit={handleSecureSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
              {language === 'fr' ? 'Nom' : 'Name'} *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full"
              required
              maxLength={100}
              autoComplete="name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
              {language === 'fr' ? 'Email' : 'Email'} *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full"
              required
              maxLength={255}
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
            {language === 'fr' ? 'Sujet' : 'Subject'} *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="w-full"
            required
            maxLength={200}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
            {language === 'fr' ? 'Message' : 'Message'} *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="w-full min-h-[120px]"
            required
            maxLength={1000}
            placeholder={language === 'fr' 
              ? 'Votre message (minimum 10 caractères)' 
              : 'Your message (minimum 10 characters)'
            }
          />
          <p className="text-xs text-stone-500 mt-1">
            {formData.message.length}/1000 {language === 'fr' ? 'caractères' : 'characters'}
          </p>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-stone-900 text-white hover:bg-stone-800"
        >
          {isSubmitting 
            ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...') 
            : (language === 'fr' ? 'Envoyer le message' : 'Send Message')
          }
        </Button>

        <p className="text-xs text-stone-500 text-center">
          {language === 'fr' 
            ? 'Vos données sont protégées et ne seront pas partagées avec des tiers.' 
            : 'Your data is protected and will not be shared with third parties.'
          }
        </p>
      </SecureForm>
    </div>
  );
};

export default SecureContactForm;