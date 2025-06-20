
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Mail, Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: language === 'fr' ? 'Inscription réussie !' : 'Successfully subscribed!',
      description: language === 'fr' 
        ? 'Merci de vous être inscrit à notre newsletter. Votre code de réduction arrive bientôt !'
        : 'Thank you for subscribing to our newsletter. Your discount code is coming soon!',
    });

    setIsSubmitting(false);
    setEmail('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">Newsletter Subscription</DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 copper-gradient rounded-full flex items-center justify-center">
            <Gift className="h-8 w-8 text-white" />
          </div>

          {/* Title */}
          <div>
            <h2 className="font-display font-bold text-2xl text-clay-800 mb-2">
              {language === 'fr' ? 'Offre Spéciale' : 'Special Offer'}
            </h2>
            <p className="elegant-text text-clay-600">
              {language === 'fr' 
                ? 'Inscrivez-vous à notre newsletter et recevez 15% de réduction sur votre première commande'
                : 'Subscribe to our newsletter and receive 15% off your first order'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <Label htmlFor="newsletter-email" className="text-sm font-medium">
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
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-clay-400" />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full copper-gradient text-white rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? (language === 'fr' ? 'Inscription...' : 'Subscribing...')
                : (language === 'fr' ? 'Obtenir ma réduction' : 'Get my discount')
              }
            </Button>
          </form>

          {/* Footer */}
          <p className="text-xs text-clay-500">
            {language === 'fr' 
              ? 'Vous pouvez vous désabonner à tout moment. Nous respectons votre vie privée.'
              : 'You can unsubscribe at any time. We respect your privacy.'
            }
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
