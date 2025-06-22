import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Crown, Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
interface EnhancedNewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const EnhancedNewsletterModal = ({
  isOpen,
  onClose
}: EnhancedNewsletterModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setIsSubmitted(false);
      setIsLoading(false);
    }
  }, [isOpen]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Inscription réussie !",
        description: "Bienvenue dans la famille Perle d'Atlas. Vous recevrez bientôt nos secrets de beauté."
      });

      // Mark modal as shown for this session
      sessionStorage.setItem('newsletter-modal-shown', 'true');

      // Auto-close after success
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };
  const handleClose = () => {
    sessionStorage.setItem('newsletter-modal-shown', 'true');
    onClose();
  };
  if (!isOpen) return null;
  return <Dialog open={isOpen} onOpenChange={handleClose}>
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
                Secrets d'Atlas
              </h2>
              <p className="text-pearl-100 text-sm opacity-90">
                Découvrez nos rituels de beauté ancestraux et nos nouveautés exclusives
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {!isSubmitted ? <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-clay-400" />
                    <Input type="email" placeholder="votre.email@domaine.com" value={email} onChange={e => setEmail(e.target.value)} className="pl-12 h-12 rounded-full border-clay-200 focus:border-copper-400 font-medium" required />
                  </div>
                  
                  <p className="text-xs text-clay-600 text-center leading-relaxed">
                    Rejoignez plus de 10,000 passionnés de beauté naturelle. 
                    Recevez nos conseils exclusifs, découvertes saisonnières et offres privilégiées.
                  </p>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full copper-gradient text-white h-12 rounded-full font-medium hover-scale luxury-shadow border-0 transition-all duration-300">
                  {isLoading ? <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Inscription...</span>
                    </div> : 'Rejoindre la Communauté'}
                </Button>

                <p className="text-xs text-clay-500 text-center">
                  En vous inscrivant, vous acceptez de recevoir nos communications. 
                  Vous pouvez vous désinscrire à tout moment.
                </p>
              </form> : <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-clay-800 mb-2">
                    Bienvenue dans la famille !
                  </h3>
                  <p className="text-clay-600">
                    Vous recevrez bientôt votre premier guide des rituels de beauté marocains.
                  </p>
                </div>
              </div>}
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default EnhancedNewsletterModal;