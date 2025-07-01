
import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

const LaunchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if modal has been shown this session
    const hasShown = sessionStorage.getItem('launchModalShown');
    
    if (!hasShown) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('launchModalShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      // Here you would typically submit to your backend/database
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      // Close modal after 2 seconds of showing success
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl animate-scale-in relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-black/40 hover:text-black/60 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-amber-600" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-extralight text-black mb-4 tracking-tight leading-tight">
                {language === 'fr' 
                  ? 'Soyez les premiers à découvrir nos créations exclusives'
                  : 'Be the first to access our exclusive collection of handmade Moroccan goods'
                }
              </h2>
              
              <p className="text-black/60 font-light leading-relaxed">
                {language === 'fr'
                  ? 'Notre lancement officiel arrive bientôt — réservez votre place dès maintenant.'
                  : 'Our official launch is coming soon — reserve your spot now.'
                }
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-black/20 font-light"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-3 rounded-full font-light transition-all duration-300 hover:bg-black/90 disabled:opacity-50"
              >
                {isLoading 
                  ? (language === 'fr' ? 'Inscription...' : 'Subscribing...')
                  : (language === 'fr' ? 'Réserver ma place' : 'Reserve my spot')
                }
              </Button>
            </form>

            {/* Fine Print */}
            <p className="text-xs text-black/40 text-center mt-6 leading-relaxed">
              {language === 'fr'
                ? 'En vous inscrivant, vous acceptez de recevoir des nouvelles exclusives de Perle de l\'Atlas. Pas de spam, promis.'
                : 'By subscribing, you agree to receive exclusive news from Perle de l\'Atlas. No spam, we promise.'
              }
            </p>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-extralight text-black mb-4 tracking-tight">
              {language === 'fr' ? 'Vous êtes sur la liste !' : 'You\'re on the list!'}
            </h2>
            
            <p className="text-black/60 font-light leading-relaxed">
              {language === 'fr' ? 'Merci ✨' : 'Thank you ✨'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchModal;
