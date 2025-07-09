
import LuxuryNavigation from '@/components/navigation/LuxuryNavigation';
import { useState, useEffect } from 'react';

const HeaderNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <LuxuryNavigation isScrolled={isScrolled} />;
};

export default HeaderNavigation;
