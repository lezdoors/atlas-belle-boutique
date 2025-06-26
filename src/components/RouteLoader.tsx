
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';
import CustomLoader from './CustomLoader';

const RouteLoader: React.FC = () => {
  const { isLoading, hideLoader, showLoader } = useLoading();
  const location = useLocation();

  useEffect(() => {
    // Show loader on route change
    showLoader();
    
    // Hide loader after a short delay to ensure content is ready
    const timer = setTimeout(() => {
      hideLoader();
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname, showLoader, hideLoader]);

  // Initial page load - show loader for longer
  useEffect(() => {
    const initialLoadTimer = setTimeout(() => {
      hideLoader();
    }, 2500);

    return () => clearTimeout(initialLoadTimer);
  }, []);

  return (
    <CustomLoader 
      isVisible={isLoading}
      onComplete={hideLoader}
      duration={2500}
    />
  );
};

export default RouteLoader;
