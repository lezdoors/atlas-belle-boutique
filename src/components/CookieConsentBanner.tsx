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
      description: "Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et personnaliser votre navigation.",
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
      description: "We use cookies to improve your experience, analyze our traffic and personalize your navigation.",
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
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto lg:left-auto lg:right-6 lg:max-w-md">
      <div className="bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl shadow-2xl p-6 animate-slide-in-bottom">
        <div className="flex items-start justify-between mb-4">
          <Cookie className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="text-stone-400 hover:text-stone-600 p-1 -mt-1 -mr-1"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-serif font-semibold text-stone-800 text-lg mb-2">
              {currentContent.title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {currentContent.description}
            </p>
          </div>
          
          {showDetails && (
            <div className="bg-stone-50 rounded-lg p-4 space-y-3 border border-stone-100">
              <div>
                <h4 className="font-medium text-stone-800 text-sm mb-1">
                  {currentContent.essential}
                </h4>
                <p className="text-xs text-stone-600">
                  {currentContent.essentialDesc}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 text-sm mb-1">
                  {currentContent.analytics}
                </h4>
                <p className="text-xs text-stone-600">
                  {currentContent.analyticsDesc}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <Button
                onClick={handleAcceptAll}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-lg transition-all duration-300 hover:shadow-md"
              >
                {currentContent.acceptAll}
              </Button>
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="outline"
                className="flex-1 border-stone-300 text-stone-700 hover:bg-stone-50 font-medium py-2.5 rounded-lg transition-all duration-300"
              >
                {currentContent.customize}
              </Button>
            </div>
            
            <a
              href="/cookies"
              className="text-xs text-stone-500 hover:text-amber-600 transition-colors duration-300 text-center underline underline-offset-2"
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