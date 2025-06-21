
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Shield, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  sanitizeInput, 
  validateEmail, 
  validatePhone, 
  validateName, 
  validateMessage 
} from '@/utils/inputValidation';
import { formRateLimiter, getUserIdentifier } from '@/utils/rateLimiter';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const SecureForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>();

  const validateField = useCallback((value: string, validator: (val: string) => boolean, fieldName: string) => {
    const sanitized = sanitizeInput(value);
    if (!sanitized) {
      return `${fieldName} is required`;
    }
    if (!validator(sanitized)) {
      return `Please enter a valid ${fieldName.toLowerCase()}`;
    }
    return true;
  }, []);

  const onSubmit = async (data: FormData) => {
    // Check rate limiting
    const userIdentifier = getUserIdentifier();
    const rateLimitCheck = formRateLimiter.checkLimit(userIdentifier);
    
    if (!rateLimitCheck.allowed) {
      setIsRateLimited(true);
      toast({
        title: language === 'fr' ? 'Limite atteinte' : 'Rate limit exceeded',
        description: language === 'fr' 
          ? 'Trop de tentatives. Veuillez patienter avant de réessayer.'
          : 'Too many attempts. Please wait before trying again.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setIsRateLimited(false);

    try {
      // Sanitize all inputs
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        phone: sanitizeInput(data.phone),
        subject: sanitizeInput(data.subject),
        message: sanitizeInput(data.message)
      };

      // Additional message validation
      const messageValidation = validateMessage(sanitizedData.message);
      if (!messageValidation.isValid) {
        throw new Error(messageValidation.error);
      }

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: language === 'fr' ? 'Message envoyé !' : 'Message sent!',
        description: language === 'fr' 
          ? 'Nous vous répondrons dans les plus brefs délais.'
          : 'We will get back to you as soon as possible.',
      });

      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' 
          ? 'Une erreur est survenue. Veuillez réessayer.'
          : 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto p-8">
      <div className="flex items-center mb-6">
        <Shield className="h-6 w-6 text-green-600 mr-2" />
        <h2 className="text-xl font-semibold text-clay-800">
          {language === 'fr' ? 'Formulaire sécurisé' : 'Secure Contact Form'}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">
            {language === 'fr' ? 'Nom complet' : 'Full Name'} *
          </Label>
          <Input
            id="name"
            type="text"
            {...register('name', {
              required: language === 'fr' ? 'Le nom est requis' : 'Name is required',
              validate: (value) => validateField(value, validateName, 'Name')
            })}
            className={errors.name ? 'border-red-500' : ''}
            maxLength={50}
          />
          {errors.name && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.name.message}
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="email">
            {language === 'fr' ? 'Adresse e-mail' : 'Email Address'} *
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: language === 'fr' ? 'L\'email est requis' : 'Email is required',
              validate: (value) => validateField(value, validateEmail, 'Email')
            })}
            className={errors.email ? 'border-red-500' : ''}
            maxLength={100}
          />
          {errors.email && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.email.message}
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="phone">
            {language === 'fr' ? 'Téléphone' : 'Phone Number'}
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone', {
              validate: (value) => !value || validatePhone(value) || 
                (language === 'fr' ? 'Numéro de téléphone invalide' : 'Invalid phone number')
            })}
            className={errors.phone ? 'border-red-500' : ''}
            maxLength={20}
          />
          {errors.phone && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.phone.message}
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="subject">
            {language === 'fr' ? 'Sujet' : 'Subject'} *
          </Label>
          <Input
            id="subject"
            type="text"
            {...register('subject', {
              required: language === 'fr' ? 'Le sujet est requis' : 'Subject is required',
              minLength: {
                value: 5,
                message: language === 'fr' ? 'Le sujet doit contenir au moins 5 caractères' : 'Subject must be at least 5 characters'
              }
            })}
            className={errors.subject ? 'border-red-500' : ''}
            maxLength={100}
          />
          {errors.subject && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.subject.message}
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="message">
            {language === 'fr' ? 'Message' : 'Message'} *
          </Label>
          <Textarea
            id="message"
            rows={5}
            {...register('message', {
              required: language === 'fr' ? 'Le message est requis' : 'Message is required',
              validate: (value) => {
                const validation = validateMessage(value);
                return validation.isValid || validation.error;
              }
            })}
            className={errors.message ? 'border-red-500' : ''}
            maxLength={1000}
          />
          <div className="flex justify-between mt-1">
            {errors.message && (
              <div className="flex items-center text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.message.message}
              </div>
            )}
            <span className="text-sm text-clay-500 ml-auto">
              {watch('message')?.length || 0}/1000
            </span>
          </div>
        </div>

        {isRateLimited && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center text-amber-800">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span className="text-sm">
                {language === 'fr' 
                  ? 'Veuillez patienter avant de soumettre un autre formulaire.'
                  : 'Please wait before submitting another form.'
                }
              </span>
            </div>
          </div>
        )}

        <Button 
          type="submit" 
          disabled={isSubmitting || isRateLimited}
          className="w-full copper-gradient text-white"
        >
          {isSubmitting 
            ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...')
            : (language === 'fr' ? 'Envoyer le message' : 'Send Message')
          }
        </Button>
      </form>

      <div className="mt-4 text-xs text-clay-500 text-center">
        <Shield className="h-4 w-4 inline mr-1" />
        {language === 'fr' 
          ? 'Vos données sont protégées et ne seront jamais partagées.'
          : 'Your data is protected and will never be shared.'
        }
      </div>
    </Card>
  );
};

export default SecureForm;
