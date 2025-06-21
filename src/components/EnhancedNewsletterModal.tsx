
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Mail, Gift, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface EnhancedNewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedNewsletterModal: React.FC<EnhancedNewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mark as shown in session storage so it doesn't appear again
    sessionStorage.setItem('newsletter-modal-shown', 'true');

    toast({
      title: language === 'fr' ? 'Bienvenue dans la famille Perle d\'Atlas !' : 'Welcome to the Perle d\'Atlas family!',
      description: language === 'fr' 
        ? 'Votre code de réduction 15% arrive dans votre boîte mail. Découvrez nos collections saisonnières !'
        : 'Your 15% discount code is coming to your inbox. Discover our seasonal collections!',
    });

    setIsSubmitting(false);
    setEmail('');
    onClose();
  };

  const handleClose = () => {
    // Mark as shown when user closes manually
    sessionStorage.setItem('newsletter-modal-shown', 'true');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-sm md:max-w-md mx-4 rounded-2xl md:rounded-3xl border-0 luxury-shadow bg-gradient-to-br from-pearl-50 to-beige-50 animate-fade-in p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="sr-only">Newsletter Subscription</DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4 md:space-y-6">
          {/* Enhanced icon with Moroccan touch */}
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 copper-gradient rounded-full flex items-center justify-center animate-scale-in luxury-shadow">
            <Crown className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>

          {/* Enhanced title */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-display font-bold text-xl md:text-2xl text-clay-800 mb-2">
              {language === 'fr' ? 'Secrets Ancestraux' : 'Ancestral Secrets'}
            </h2>
            <p className="elegant-text text-sm md:text-base text-clay-600 px-2">
              {language === 'fr' 
                ? 'Rejoignez notre cercle privilégié et recevez 15% de réduction sur votre première commande + l\'accès en avant-première à nos collections saisonnières'
                : 'Join our privileged circle and receive 15% off your first order + early access to our seasonal collections'
              }
            </p>
          </div>

          {/* Enhanced form */}
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-left">
              <Label htmlFor="newsletter-email" className="text-xs md:text-sm font-medium text-clay-700">
                {language === 'fr' ? 'Adresse e-mail' : 'Email address'}
              </Label>
              <div className="relative mt-1">
                <Input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                  required
                  className="pl-9 md:pl-10 rounded-full border-clay-200 focus:border-copper-400 focus:ring-copper-400/20 text-sm md:text-base h-10 md:h-12"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 md:h-4 md:w-4 text-clay-400" />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full copper-gradient text-white rounded-full hover-scale luxury-shadow py-2 md:py-3 h-10 md:h-auto text-sm md:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? (language === 'fr' ? 'Inscription...' : 'Joining...')
                : (language === 'fr' ? 'Rejoindre le cercle' : 'Join the circle')
              }
            </Button>
          </form>

          {/* Enhanced footer */}
          <p className="text-xs text-clay-500 animate-fade-in-up px-2" style={{ animationDelay: '0.6s' }}>
            {language === 'fr' 
              ? 'Désabonnement possible à tout moment. Nous respectons votre intimité et partageons votre amour pour l\'authenticité.'
              : 'Unsubscribe anytime. We respect your privacy and share your love for authenticity.'
            }
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedNewsletterModal;
