
import { useEffect } from 'react';

const SecurityConfig = () => {
  useEffect(() => {
    // Content Security Policy via meta tag (for development)
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const csp = document.createElement('meta');
      csp.setAttribute('http-equiv', 'Content-Security-Policy');
      csp.setAttribute('content', 
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline'; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: https:; " +
        "font-src 'self' data:; " +
        "connect-src 'self' https:; " +
        "frame-ancestors 'none';"
      );
      document.head.appendChild(csp);
    }

    // Additional security headers via meta tags
    const securityHeaders = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
    ];

    securityHeaders.forEach(header => {
      if (!document.querySelector(`meta[name="${header.name}"]`)) {
        const meta = document.createElement('meta');
        meta.setAttribute('name', header.name);
        meta.setAttribute('content', header.content);
        document.head.appendChild(meta);
      }
    });

    // Disable right-click context menu in production
    if (process.env.NODE_ENV === 'production') {
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        return false;
      };

      document.addEventListener('contextmenu', handleContextMenu);
      
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
      };
    }

    // Console warning for production
    if (process.env.NODE_ENV === 'production') {
      console.log(
        '%cSTOP!',
        'color: red; font-size: 50px; font-weight: bold;'
      );
      console.log(
        '%cThis is a browser feature intended for developers. Do not enter or paste any code here.',
        'color: red; font-size: 16px;'
      );
    }
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityConfig;
