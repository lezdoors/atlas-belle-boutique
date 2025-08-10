
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en';
export type Currency = 'EUR' | 'USD';

interface LanguageContextType {
  language: Language;
  currency: Currency;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedNew = localStorage.getItem('app_lang');
        const savedOld = localStorage.getItem('perle-atlas-language');
        return ((savedNew || savedOld) as Language) || 'en';
      }
    } catch {}
    return 'en';
  });

  const currency: Currency = language === 'fr' ? 'EUR' : 'USD';

const setLanguage = (lang: Language) => {
  setLanguageState(lang);
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_lang', lang);
      // Backward compatibility
      localStorage.setItem('perle-atlas-language', lang);
    }
  } catch {}
};

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
  };

  useEffect(() => {
    localStorage.setItem('perle-atlas-currency', currency);
  }, [currency]);

  // Keep <html lang> in sync with selected language for SEO/a11y
  useEffect(() => {
    const lang = language === 'fr' ? 'fr' : 'en';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', lang);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{
      language,
      currency,
      setLanguage,
      toggleLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
