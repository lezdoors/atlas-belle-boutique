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
      acceptAll: "Tout accepter",
      acceptEssential: "Accepter les essentiels",
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
      acceptAll: "Accept all",
      acceptEssential: "Accept essential",
      settings: "Settings",
      learnMore: "Learn more"
    }
  };

  const currentContent = content[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 shadow-xl animate-slide-in-bottom">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <Cookie className="h-6 w-6 text-stone-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-stone-800 mb-2">
                {currentContent.title}
              </h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                {currentContent.description}
              </p>
              
              {showDetails && (
                <div className="bg-stone-50 rounded-lg p-4 mb-4 space-y-3">
                  <div>
                    <h4 className="font-medium text-stone-800 text-sm">
                      {currentContent.essential}
                    </h4>
                    <p className="text-xs text-stone-600">
                      {currentContent.essentialDesc}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 text-sm">
                      {currentContent.analytics}
                    </h4>
                    <p className="text-xs text-stone-600">
                      {currentContent.analyticsDesc}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleAcceptAll}
                  className="bg-stone-800 text-white hover:bg-stone-700 text-sm px-4 py-2"
                >
                  {currentContent.acceptAll}
                </Button>
                <Button
                  onClick={handleAcceptEssential}
                  variant="outline"
                  className="border-stone-300 text-stone-700 hover:bg-stone-50 text-sm px-4 py-2"
                >
                  {currentContent.acceptEssential}
                </Button>
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 text-sm px-3 py-2"
                >
                  <Settings className="h-4 w-4 mr-1" />
                  {currentContent.settings}
                </Button>
                <a
                  href="/privacy-policy"
                  className="text-sm text-stone-600 hover:text-stone-800 underline px-3 py-2"
                >
                  {currentContent.learnMore}
                </a>
              </div>
            </div>
          </div>
          
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="text-stone-400 hover:text-stone-600 p-1 flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;