
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
    const saved = localStorage.getItem('perle-atlas-language');
    return (saved as Language) || 'fr';
  });

  const currency: Currency = language === 'fr' ? 'EUR' : 'USD';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('perle-atlas-language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
  };

  useEffect(() => {
    localStorage.setItem('perle-atlas-currency', currency);
  }, [currency]);

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
