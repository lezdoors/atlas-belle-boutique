
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Clock, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { validateEmail, sanitizeInput } from '@/utils/inputValidation';
import { supabase } from '@/integrations/supabase/client';

const EarlyAccessSignup = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (you can adjust this date)
  const launchDate = new Date('2025-09-01T00:00:00Z').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

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
      const { error } = await supabase
        .from('early_access_list')
        .insert([{ email: sanitizeInput(email) }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: language === 'fr' ? 'Déjà inscrit' : 'Already registered',
            description: language === 'fr' 
              ? 'Cette adresse e-mail est déjà inscrite pour l\'accès anticipé.'
              : 'This email address is already registered for early access.',
          });
          setEmail('');
          setIsSubmitting(false);
          return;
        }
        throw error;
      }

      // Send admin notification
      await supabase.functions.invoke('send-admin-notification', {
        body: {
          type: 'early_access_signup',
          email: email,
          language: language
        }
      });

      // Send welcome email
      await supabase.functions.invoke('send-welcome-email', {
        body: {
          email: email,
          fullName: email.split('@')[0],
          language: language,
          type: 'early_access'
        }
      });

      setShowSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Early access signup error:', error);
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
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-amber-200/30 text-center">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <Clock className="h-8 w-8 text-amber-600" />
            </div>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">
            {language === 'fr' ? 'Bientôt Disponible' : 'Coming Soon'}
          </h2>

          {/* Subtitle */}
          <p className="font-light text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Soyez les premiers à découvrir nos trésors artisanaux du Maroc.'
              : 'Be the first to discover our artisanal treasures from Morocco.'}
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-12 max-w-md mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-gray-900">{timeLeft.days}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                {language === 'fr' ? 'Jours' : 'Days'}
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-gray-900">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                {language === 'fr' ? 'Heures' : 'Hours'}
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-gray-900">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                {language === 'fr' ? 'Minutes' : 'Minutes'}
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-gray-900">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                {language === 'fr' ? 'Secondes' : 'Seconds'}
              </div>
            </div>
          </div>

          {/* Email Signup Form */}
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
                    {language === 'fr' ? 'Inscription...' : 'Joining...'}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    {language === 'fr' ? 'Accès Anticipé' : 'Early Access'}
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
                    ? '🌿 Merci ! Vous avez été ajouté à la liste d\'accès anticipé. Restez à l\'écoute pour notre grande ouverture !'
                    : '🌿 Thank you! You\'ve been added to the early access list. Stay tuned for our grand opening!'
                  }
                </p>
              </div>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-sm text-gray-600 font-light">
            {language === 'fr' 
              ? 'Vos données sont protégées. Aucun spam, promis.'
              : 'Your data is protected. No spam, we promise.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSignup;
