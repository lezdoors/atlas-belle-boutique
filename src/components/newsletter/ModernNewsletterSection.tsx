
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { validateEmail, sanitizeInput } from '@/utils/inputValidation';
import { supabase } from '@/integrations/supabase/client';

const ModernNewsletterSection = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !validateEmail(email)) {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Store subscription in newsletter_subscribers table
      const { error: subscriptionError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: sanitizeInput(email) }]);

      if (subscriptionError) {
        if (subscriptionError.code === '23505') { // Unique constraint violation
          toast({
            title: language === 'fr' ? 'Déjà inscrit' : 'Already subscribed',
            description: language === 'fr' 
              ? 'Cette adresse e-mail est déjà inscrite à notre newsletter.'
              : 'This email address is already subscribed to our newsletter.',
          });
          setEmail('');
          setIsSubmitting(false);
          return;
        }
        throw subscriptionError;
      }

      // Send admin notification
      await supabase.functions.invoke('send-admin-notification', {
        body: {
          type: 'newsletter_signup',
          email: email,
          language: language
        }
      });

      // Send welcome email via SMTP
      const { error: emailError } = await supabase.functions.invoke('send-newsletter-welcome-smtp', {
        body: {
          email: email,
          firstName: email.split('@')[0], // Use email prefix as fallback name
          language: language
        }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
      }

      setShowSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
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

  const svgPattern = `data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 shadow-2xl shadow-amber-200/30">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("${svgPattern}")`,
                backgroundRepeat: 'repeat'
              }}
            />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Header with icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <Mail className="h-8 w-8 text-amber-600" />
              </div>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              {language === 'fr' ? 'Recevez nos secrets de beauté et d\'artisanat' : 'Receive our beauty and craftsmanship secrets'}
            </h2>

            {/* Subtitle */}
            <p className="font-light text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
              {language === 'fr' ? 'Un email par mois. Des trésors inspirés du Maroc.' : 'One email per month. Treasures inspired by Morocco.'}
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                    className="h-14 px-6 text-lg bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-2xl focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 placeholder:text-gray-500"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-14 px-8 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl shadow-lg font-medium text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {language === 'fr' ? 'Inscription...' : 'Subscribing...'}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      {language === 'fr' ? 'Je m\'abonne' : 'Subscribe'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </Button>
              </div>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-8 animate-fade-in">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 max-w-md mx-auto">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-green-800 font-medium text-lg">
                    {language === 'fr' 
                      ? '🌿 Merci ! Vous avez été ajouté à notre newsletter. Restez à l\'écoute pour nos secrets de beauté !'
                      : '🌿 Thank you! You\'ve been added to our newsletter. Stay tuned for our beauty secrets!'
                    }
                  </p>
                </div>
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-sm text-gray-600 font-light">
              {language === 'fr' 
                ? 'Vos données sont protégées. Désinscription possible à tout moment.'
                : 'Your data is protected. Unsubscribe at any time.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernNewsletterSection;
