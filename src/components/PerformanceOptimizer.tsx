
import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize images loading
    const observeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px'
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Optimize fonts loading
    const optimizeFonts = () => {
      if ('fontDisplay' in document.documentElement.style) {
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'Inter';
            font-display: swap;
          }
          @font-face {
            font-family: 'Playfair Display';
            font-display: swap;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Resource hints for better performance
    const addResourceHints = () => {
      const criticalResources = [
        '/favicon.svg',
        'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/397b8d88-7594-4433-8004-050f047a13b6.png'
      ];

      criticalResources.forEach(resource => {
        if (!document.querySelector(`link[rel="preload"][href="${resource}"]`)) {
          const link = document.createElement('link');
          link.setAttribute('rel', 'preload');
          link.setAttribute('href', resource);
          link.setAttribute('as', resource.endsWith('.svg') ? 'image' : 'image');
          document.head.appendChild(link);
        }
      });
    };

    // Add critical CSS inline
    const addCriticalCSS = () => {
      const criticalCSS = `
        body { 
          font-family: Inter, system-ui, -apple-system, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #faf9f7;
        }
        .loading { 
          opacity: 0; 
          transition: opacity 0.3s ease;
        }
        .loaded { 
          opacity: 1;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `;

      if (!document.querySelector('#critical-css')) {
        const style = document.createElement('style');
        style.id = 'critical-css';
        style.textContent = criticalCSS;
        document.head.appendChild(style);
      }
    };

    // Initialize optimizations
    observeImages();
    optimizeFonts();
    addResourceHints();
    addCriticalCSS();

    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Cleanup on unmount
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
