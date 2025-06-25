
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Settings } from 'lucide-react';

const GDPRConsent = () => {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      // Load existing preferences
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Initialize Google Consent Mode based on saved preferences
      initializeConsentMode(savedPreferences);
    }
  }, []);

  const initializeConsentMode = (prefs: any) => {
    // Initialize Google Consent Mode v2
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
        'functionality_storage': prefs.functional ? 'granted' : 'denied',
        'personalization_storage': prefs.marketing ? 'granted' : 'denied',
        'security_storage': 'granted'
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    localStorage.setItem('gdpr-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    initializeConsentMode(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    localStorage.setItem('gdpr-consent', JSON.stringify(rejected));
    setPreferences(rejected);
    initializeConsentMode(rejected);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('gdpr-consent', JSON.stringify(preferences));
    initializeConsentMode(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const updatePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* GDPR Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-sm border-t border-amber-200 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-display font-semibold text-clay-800 mb-2">
                {language === 'fr' ? 'Respect de votre vie privée' : 'Your Privacy Matters'}
              </h3>
              <p className="text-sm text-clay-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et personnaliser le contenu. Vous pouvez choisir vos préférences ci-dessous.'
                  : 'We use cookies to enhance your experience, analyze our traffic, and personalize content. You can choose your preferences below.'}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(!showSettings)}
                className="border-clay-300 text-clay-700 hover:bg-clay-50"
              >
                <Settings className="h-4 w-4 mr-2" />
                {language === 'fr' ? 'Paramètres' : 'Settings'}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="border-clay-300 text-clay-700 hover:bg-clay-50"
              >
                {language === 'fr' ? 'Rejeter' : 'Reject All'}
              </Button>
              
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="copper-gradient text-white border-0"
              >
                {language === 'fr' ? 'Accepter tout' : 'Accept All'}
              </Button>
            </div>
          </div>
          
          {/* Cookie Settings Panel */}
          {showSettings && (
            <Card className="mt-4 border-amber-200">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      key: 'necessary' as const,
                      title: language === 'fr' ? 'Cookies nécessaires' : 'Necessary Cookies',
                      description: language === 'fr' 
                        ? 'Requis pour le fonctionnement du site' 
                        : 'Required for the website to function',
                      required: true
                    },
                    {
                      key: 'analytics' as const,
                      title: language === 'fr' ? 'Cookies analytiques' : 'Analytics Cookies',
                      description: language === 'fr' 
                        ? 'Nous aident à comprendre l\'utilisation du site' 
                        : 'Help us understand how you use our website'
                    },
                    {
                      key: 'marketing' as const,
                      title: language === 'fr' ? 'Cookies marketing' : 'Marketing Cookies',
                      description: language === 'fr' 
                        ? 'Utilisés pour la publicité personnalisée' 
                        : 'Used for personalized advertising'
                    },
                    {
                      key: 'functional' as const,
                      title: language === 'fr' ? 'Cookies fonctionnels' : 'Functional Cookies',
                      description: language === 'fr' 
                        ? 'Améliorent les fonctionnalités du site' 
                        : 'Enhance website functionality'
                    }
                  ].map(({ key, title, description, required }) => (
                    <div key={key} className="flex items-center justify-between p-3 border border-pearl-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-clay-800 mb-1">{title}</h4>
                        <p className="text-sm text-clay-600">{description}</p>
                      </div>
                      <label className="flex items-center ml-4">
                        <input
                          type="checkbox"
                          checked={preferences[key]}
                          onChange={() => updatePreference(key)}
                          disabled={required}
                          className="w-4 h-4 text-amber-600 border-clay-300 rounded focus:ring-amber-500"
                        />
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-pearl-200">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSettings(false)}
                    className="border-clay-300 text-clay-700"
                  >
                    {language === 'fr' ? 'Annuler' : 'Cancel'}
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSavePreferences}
                    className="copper-gradient text-white border-0"
                  >
                    {language === 'fr' ? 'Sauvegarder' : 'Save Preferences'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default GDPRConsent;
