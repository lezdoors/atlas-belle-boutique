
import React, { createContext, useContext, useState, useEffect } from 'react';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonalTheme {
  season: Season;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    dark: string;
    light: string;
  };
  mood: string;
  description: string;
}

interface SeasonalContextType {
  currentSeason: Season;
  theme: SeasonalTheme;
  setCurrentSeason: (season: Season) => void;
  getSeasonalTheme: (season: Season) => SeasonalTheme;
}

const seasonalThemes: Record<Season, SeasonalTheme> = {
  spring: {
    season: 'spring',
    colors: {
      primary: '#7C9885',
      secondary: '#A8B5A0',
      accent: '#E8F5E8',
      dark: '#4A5D4F',
      light: '#F0F8F0'
    },
    mood: 'Renaissance & Fraîcheur',
    description: 'Le réveil de la nature, la renaissance de la beauté'
  },
  summer: {
    season: 'summer',
    colors: {
      primary: '#D4A574',
      secondary: '#E6C79C',
      accent: '#FFF8E7',
      dark: '#8B6914',
      light: '#FFFBF0'
    },
    mood: 'Chaleur & Vitalité',
    description: 'L\'énergie du soleil, la générosité de la terre'
  },
  autumn: {
    season: 'autumn',
    colors: {
      primary: '#B8704F',
      secondary: '#D4956B',
      accent: '#F5E6D3',
      dark: '#7A4A2E',
      light: '#FAF0E6'
    },
    mood: 'Récolte & Profondeur',
    description: 'La sagesse des récoltes, la richesse des traditions'
  },
  winter: {
    season: 'winter',
    colors: {
      primary: '#6B7A8F',
      secondary: '#8B9DC3',
      accent: '#F0F4F8',
      dark: '#3A4750',
      light: '#F8FAFC'
    },
    mood: 'Contemplation & Élégance',
    description: 'La sérénité hivernale, l\'élégance intemporelle'
  }
};

const SeasonalContext = createContext<SeasonalContextType | undefined>(undefined);

export const SeasonalThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSeason, setCurrentSeason] = useState<Season>('spring');

  // Auto-detect season based on current date
  useEffect(() => {
    const now = new Date();
    const month = now.getMonth();
    
    if (month >= 2 && month <= 4) setCurrentSeason('spring');
    else if (month >= 5 && month <= 7) setCurrentSeason('summer');
    else if (month >= 8 && month <= 10) setCurrentSeason('autumn');
    else setCurrentSeason('winter');
  }, []);

  // Apply theme classes to document
  useEffect(() => {
    document.documentElement.className = `theme-${currentSeason}`;
  }, [currentSeason]);

  const getSeasonalTheme = (season: Season) => seasonalThemes[season];

  const value = {
    currentSeason,
    theme: seasonalThemes[currentSeason],
    setCurrentSeason,
    getSeasonalTheme
  };

  return (
    <SeasonalContext.Provider value={value}>
      {children}
    </SeasonalContext.Provider>
  );
};

export const useSeasonalTheme = () => {
  const context = useContext(SeasonalContext);
  if (!context) {
    throw new Error('useSeasonalTheme must be used within SeasonalThemeProvider');
  }
  return context;
};
