import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    fr: {
      title: "Nous respectons votre vie privée",
      description: "Nous utilisons des cookies pour améliorer votre expérience, personnaliser le contenu et analyser notre trafic.",
      essential: "Cookies essentiels",
      essentialDesc: "Nécessaires au fonctionnement du site (panier, préférences)",
      analytics: "Cookies analytiques", 
      analyticsDesc: "Vercel Analytics pour comprendre l'utilisation du site",
      acceptAll: "Accepter",
      customize: "Personnaliser",
      settings: "Paramètres",
      learnMore: "En savoir plus"
    },
    en: {
      title: "We respect your privacy",
      description: "We use cookies to improve your experience, personalize content and analyze our traffic.",
      essential: "Essential cookies",
      essentialDesc: "Necessary for site operation (cart, preferences)",
      analytics: "Analytics cookies",
      analyticsDesc: "Vercel Analytics to understand site usage", 
      acceptAll: "Accept",
      customize: "Customize",
      settings: "Settings",
      learnMore: "Learn more"
    }
  };

  const currentContent = content[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full">
      <div className="bg-stone-50/95 backdrop-blur-md border-t border-stone-200 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left side - Content */}
            <div className="flex-1">
              <h3 className="font-serif font-medium text-stone-800 text-lg mb-2">
                {currentContent.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed max-w-2xl">
                {currentContent.description}
              </p>
            </div>

            {/* Right side - Actions */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Button
                onClick={handleAcceptAll}
                className="bg-stone-800 hover:bg-stone-900 text-white font-medium px-8 py-2.5 rounded-full transition-all duration-300 text-sm"
              >
                {currentContent.acceptAll}
              </Button>
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="outline"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 font-medium px-8 py-2.5 rounded-full transition-all duration-300 text-sm"
              >
                {currentContent.customize}
              </Button>
              
              {/* Close button */}
              <Button
                onClick={handleClose}
                variant="ghost"
                size="sm"
                className="text-stone-400 hover:text-stone-600 p-2 md:ml-4"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Learn more link */}
          <div className="mt-4 text-center md:text-left">
            <a
              href="/cookies"
              className="text-xs text-stone-500 hover:text-stone-700 transition-colors duration-300 underline underline-offset-2"
            >
              {currentContent.learnMore}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;