
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Mail, Check, User, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { validateEmail, sanitizeInput } from '@/utils/inputValidation';
import { supabase } from '@/integrations/supabase/client';

interface EnhancedNewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedNewsletterModal = ({
  isOpen,
  onClose
}: EnhancedNewsletterModalProps) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const { toast } = useToast();
  const { language } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setFirstName('');
      setEmail('');
      setIsSubmitted(false);
      setIsLoading(false);
      setEmailError('');
      setFirstNameError('');
    }
  }, [isOpen]);

  const handleFirstNameChange = (value: string) => {
    const sanitized = sanitizeInput(value);
    setFirstName(sanitized);
    
    if (sanitized && sanitized.length < 2) {
      setFirstNameError(language === 'fr' ? 'Le prénom doit contenir au moins 2 caractères' : 'First name must be at least 2 characters');
    } else {
      setFirstNameError('');
    }
  };

  const handleEmailChange = (value: string) => {
    const sanitized = sanitizeInput(value);
    setEmail(sanitized);
    
    if (sanitized && !validateEmail(sanitized)) {
      setEmailError(language === 'fr' ? 'Adresse e-mail invalide' : 'Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!firstName || firstName.length < 2) {
      setFirstNameError(language === 'fr' ? 'Veuillez entrer votre prénom' : 'Please enter your first name');
      return;
    }
    
    if (!email || !validateEmail(email)) {
      setEmailError(language === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Store subscription in newsletter_subscribers table
      const { error: subscriptionError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email }]);

      if (subscriptionError) {
        if (subscriptionError.code === '23505') { // Unique constraint violation
          toast({
            title: language === 'fr' ? 'Déjà inscrit' : 'Already subscribed',
            description: language === 'fr' 
              ? 'Cette adresse e-mail est déjà inscrite à notre newsletter.'
              : 'This email address is already subscribed to our newsletter.',
          });
          setIsLoading(false);
          return;
        }
        throw subscriptionError;
      }

      // Store user data in users table
      const { error: userError } = await supabase
        .from('users')
        .insert([
          {
            first_name: firstName,
            email: email,
            user_id: null // Will be set when user signs up properly
          }
        ]);

      if (userError && userError.code !== '23505') { // Ignore duplicate key errors
        console.error('Error saving user data:', userError);
      }

      // Send welcome email
      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: {
          email: email,
          fullName: firstName,
          language: language
        }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
        // Don't throw error here - subscription is saved, just email failed
      }

      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: language === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!',
        description: language === 'fr' 
          ? 'Bienvenue dans la famille Perle d\'Atlas. Vous recevrez bientôt nos traditions artisanales.'
          : 'Welcome to the Perle d\'Atlas family. You will soon receive our artisan traditions.'
      });

      // Mark modal as shown for this session
      sessionStorage.setItem('newsletter-modal-shown', 'true');

      // Auto-close after success
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setIsLoading(false);
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' 
          ? 'Une erreur est survenue. Veuillez réessayer.'
          : 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleClose = () => {
    sessionStorage.setItem('newsletter-modal-shown', 'true');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-3xl overflow-hidden border-0 p-0 luxury-shadow">
        <div className="relative">
          {/* Close Button */}
          <Button variant="ghost" size="icon" onClick={handleClose} className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full">
            <X className="h-5 w-5" />
          </Button>

          {/* Header Section with Moroccan-inspired gradient */}
          <div className="copper-gradient p-8 text-center text-white relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 moroccan-pattern opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="font-display text-2xl font-light mb-2">
                {language === 'fr' ? 'Secrets d\'Atlas' : 'Atlas Secrets'}
              </h2>
              <p className="text-pearl-100 text-sm opacity-90">
                {language === 'fr' 
                  ? 'Découvrez nos traditions céramiques ancestrales et nos nouveautés exclusives'
                  : 'Discover our ancestral ceramic traditions and exclusive new products'
                }
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-clay-400" />
                    <Input 
                      type="text" 
                      placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'}
                      value={firstName} 
                      onChange={(e) => handleFirstNameChange(e.target.value)} 
                      className={`pl-12 h-12 rounded-full border-clay-200 focus:border-copper-400 font-medium ${
                        firstNameError ? 'border-red-500' : ''
                      }`}
                      maxLength={50}
                      disabled={isLoading}
                      autoComplete="given-name"
                      required 
                    />
                  </div>
                  
                  {firstNameError && (
                    <div className="flex items-center text-red-500 text-xs">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {firstNameError}
                    </div>
                  )}
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-clay-400" />
                    <Input 
                      type="email" 
                      placeholder={language === 'fr' ? 'votre.email@domaine.com' : 'your.email@domain.com'}
                      value={email} 
                      onChange={(e) => handleEmailChange(e.target.value)} 
                      className={`pl-12 h-12 rounded-full border-clay-200 focus:border-copper-400 font-medium ${
                        emailError ? 'border-red-500' : ''
                      }`}
                      maxLength={100}
                      disabled={isLoading}
                      autoComplete="email"
                      required 
                    />
                  </div>
                  
                  {emailError && (
                    <div className="flex items-center text-red-500 text-xs">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {emailError}
                    </div>
                  )}
                  
                  <p className="text-xs text-clay-600 text-center leading-relaxed">
                    {language === 'fr' 
                    ? 'Rejoignez plus de 10,000 passionnés d\'artisanat authentique. Recevez nos conseils exclusifs, découvertes saisonnières et offres privilégiées.'
                      : 'Join over 10,000 authentic craft enthusiasts. Receive our exclusive tips, seasonal discoveries and special offers.'
                    }
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading || !!emailError || !!firstNameError} 
                  className="w-full copper-gradient text-white h-12 rounded-full font-medium hover-scale luxury-shadow border-0 transition-all duration-300"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{language === 'fr' ? 'Inscription...' : 'Subscribing...'}</span>
                    </div>
                  ) : (
                    language === 'fr' ? 'Rejoindre la Communauté' : 'Join the Community'
                  )}
                </Button>

                <p className="text-xs text-clay-500 text-center">
                  {language === 'fr' 
                    ? 'En vous inscrivant, vous acceptez de recevoir nos communications. Vous pouvez vous désinscrire à tout moment.'
                    : 'By subscribing, you agree to receive our communications. You can unsubscribe at any time.'
                  }
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-clay-800 mb-2">
                    {language === 'fr' ? 'Bienvenue dans la famille !' : 'Welcome to the family!'}
                  </h3>
                  <p className="text-clay-600">
                    {language === 'fr' 
                      ? 'Vous recevrez bientôt votre premier guide des traditions céramiques marocaines.'
                      : 'You will soon receive your first guide to Moroccan ceramic traditions.'
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedNewsletterModal;
