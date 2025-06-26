
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false); // Start with false to avoid initial loading

  const showLoader = () => {
    console.log('LoadingContext: Showing loader');
    setIsLoading(true);
  };
  
  const hideLoader = () => {
    console.log('LoadingContext: Hiding loader');
    setIsLoading(false);
  };
  
  const setLoading = (loading: boolean) => {
    console.log('LoadingContext: Setting loading to', loading);
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, showLoader, hideLoader, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
