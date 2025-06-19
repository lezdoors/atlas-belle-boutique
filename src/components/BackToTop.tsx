
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full bg-amber-500 hover:bg-amber-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      size="icon"
    >
      <ChevronUp className="h-5 w-5 text-white" />
    </Button>
  );
};

export default BackToTop;
