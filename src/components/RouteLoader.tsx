
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';
import CustomLoader from './CustomLoader';

const RouteLoader: React.FC = () => {
  const { isLoading, hideLoader, showLoader } = useLoading();
  const location = useLocation();

  // Handle route changes
  useEffect(() => {
    showLoader();
    
    // Hide loader after route content loads
    const timer = setTimeout(() => {
      hideLoader();
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname, showLoader, hideLoader]);

  // Fallback timeout - force hide loader after maximum time
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timeout - force hiding loader');
      hideLoader();
    }, 4000); // 4 seconds maximum

    return () => clearTimeout(fallbackTimer);
  }, [hideLoader]);

  return (
    <CustomLoader 
      isVisible={isLoading}
      onComplete={hideLoader}
      duration={3000}
    />
  );
};

export default RouteLoader;
