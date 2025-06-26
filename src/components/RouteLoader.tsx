
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';
import CustomLoader from './CustomLoader';

const RouteLoader: React.FC = () => {
  const { isLoading, hideLoader, showLoader } = useLoading();
  const location = useLocation();

  // Handle route changes with a single effect
  useEffect(() => {
    console.log('RouteLoader: Route changed to', location.pathname);
    showLoader();
    
    // Hide loader after a short delay to allow content to load
    const timer = setTimeout(() => {
      console.log('RouteLoader: Hiding loader after route change');
      hideLoader();
    }, 500); // Reduced from 1000ms to 500ms

    return () => {
      console.log('RouteLoader: Cleaning up timer');
      clearTimeout(timer);
    };
  }, [location.pathname, showLoader, hideLoader]);

  return (
    <CustomLoader 
      isVisible={isLoading}
    />
  );
};

export default RouteLoader;
