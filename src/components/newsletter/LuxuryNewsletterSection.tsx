
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check, Crown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { validateEmail, sanitizeInput } from '@/utils/inputValidation';
import { supabase } from '@/integrations/supabase/client';

const LuxuryNewsletterSection = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
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
      const { error: subscriptionError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: sanitizeInput(email) }]);

      if (subscriptionError) {
        if (subscriptionError.code === '23505') {
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

      await supabase.functions.invoke('send-admin-notification', {
        body: { type: 'newsletter_signup', email: email, language: language }
      });

      await supabase.functions.invoke('send-welcome-email', {
        body: {
          email: email,
          fullName: email.split('@')[0],
          language: language,
          type: 'newsletter'
        }
      });

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

  const luxuryQuotes = {
    fr: [
      "Artisanat du Maroc. Porté par le monde.",
      "Des vallées de roses à votre vanité — découvrez le rituel.",
      "Vous ne portez pas seulement nos parfums — vous héritez d'une tradition."
    ],
    en: [
      "Crafted in Morocco. Worn by the world.",
      "From rose valleys to your vanity — discover the ritual.",
      "You don't just wear our scents — you inherit a tradition."
    ]
  };

  const currentQuote = luxuryQuotes[language][Math.floor(Date.now() / 10000) % luxuryQuotes[language].length];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100"></div>
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Luxury Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-amber-200 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Crown className="h-5 w-5 text-amber-700 mr-3" />
            <span className="text-sm font-medium text-amber-800 tracking-wide font-serif">
              {language === 'fr' ? 'Collection Exclusive' : 'Exclusive Collection'}
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 mb-6 tracking-tight leading-tight">
            {currentQuote}
          </h2>

          {/* Subtitle */}
          <p className="font-serif text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
            {language === 'fr' 
              ? 'Rejoignez notre cercle privilégié et découvrez en avant-première nos créations artisanales.'
              : 'Join our exclusive circle and discover our artisanal creations before anyone else.'
            }
          </p>
        </div>

        {/* Subscription Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50">
          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                    className="h-16 px-6 text-lg bg-slate-50 border-2 border-slate-200 focus:border-amber-400 focus:ring-amber-400 rounded-2xl font-light placeholder:text-slate-400 transition-all duration-300"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-16 px-8 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-2xl shadow-lg font-serif text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {language === 'fr' ? 'Inscription...' : 'Joining...'}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5" />
                      {language === 'fr' ? 'Rejoindre' : 'Join'}
                    </div>
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-3xl p-8 max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-emerald-500 rounded-full p-3 animate-bounce">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold text-emerald-800 mb-3">
                  {language === 'fr' ? 'Bienvenue dans notre univers !' : 'Welcome to our world!'}
                </h3>
                <p className="text-emerald-700 font-light leading-relaxed">
                  {language === 'fr' 
                    ? 'Vous recevrez bientôt un email de bienvenue avec nos secrets de beauté ancestraux.'
                    : 'You\'ll soon receive a welcome email with our ancestral beauty secrets.'
                  }
                </p>
                <div className="flex items-center justify-center mt-4 text-emerald-600">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    {language === 'fr' ? 'Vérifiez votre boîte mail' : 'Check your inbox'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Trust Signals */}
          {!showSuccess && (
            <div className="mt-8 text-center">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-light">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  {language === 'fr' ? 'Aucun spam' : 'No spam'}
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  {language === 'fr' ? 'Contenu exclusif' : 'Exclusive content'}
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  {language === 'fr' ? 'Désinscription facile' : 'Easy unsubscribe'}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Press Mentions Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 font-light mb-6 uppercase tracking-wide">
            {language === 'fr' ? 'Ils parlent de nous' : 'Featured in'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            <div className="h-8 w-24 bg-slate-300 rounded"></div>
            <div className="h-8 w-20 bg-slate-300 rounded"></div>
            <div className="h-8 w-28 bg-slate-300 rounded"></div>
            <div className="h-8 w-16 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryNewsletterSection;
