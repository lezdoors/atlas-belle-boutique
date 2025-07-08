import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Add delay to show animation
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleManagePreferences = () => {
    setShowDetails(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', 'custom');
    setShowDetails(false);
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleClose = () => {
    // Don't save any preference, just hide for this session
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
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
    <>
      {/* Mobile-friendly bottom banner */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[9999] w-full transition-transform duration-500 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '20vh' }}
      >
        <div className="bg-white/95 backdrop-blur-lg border-t border-stone-200 shadow-2xl">
          <div className="px-4 sm:px-6 py-4">
            {!showDetails ? (
              // Main banner content
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-stone-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-stone-800 text-base mb-1">
                      {currentContent.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {currentContent.description}
                    </p>
                  </div>
                </div>
                
                {/* Mobile-optimized buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-stone-800 hover:bg-stone-900 text-white font-medium rounded-lg transition-all duration-300 text-sm h-11 flex-1"
                  >
                    {currentContent.acceptAll}
                  </Button>
                  <Button
                    onClick={handleManagePreferences}
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-100 font-medium rounded-lg transition-all duration-300 text-sm h-11 flex-1"
                  >
                    {currentContent.customize}
                  </Button>
                </div>
              </div>
            ) : (
              // Preferences panel
              <div className="space-y-4 max-h-[15vh] overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-stone-800 text-base">
                    {language === 'fr' ? 'Préférences cookies' : 'Cookie Preferences'}
                  </h3>
                  <Button
                    onClick={() => setShowDetails(false)}
                    variant="ghost"
                    size="sm"
                    className="text-stone-500 hover:text-stone-700"
                  >
                    ✕
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-medium text-stone-800">{currentContent.essential}</p>
                      <p className="text-xs text-stone-600">{currentContent.essentialDesc}</p>
                    </div>
                    <input type="checkbox" checked disabled className="h-4 w-4 rounded" />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-medium text-stone-800">{currentContent.analytics}</p>
                      <p className="text-xs text-stone-600">{currentContent.analyticsDesc}</p>
                    </div>
                    <input type="checkbox" className="h-4 w-4 rounded" />
                  </div>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={handleSavePreferences}
                    className="bg-stone-800 hover:bg-stone-900 text-white font-medium rounded-lg text-sm h-11 flex-1"
                  >
                    {language === 'fr' ? 'Sauvegarder' : 'Save'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay when preferences are shown */}
      {showDetails && (
        <div 
          className="fixed inset-0 bg-black/20 z-[9998]" 
          onClick={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default CookieConsentBanner;