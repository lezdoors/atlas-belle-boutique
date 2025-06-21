
import { useEffect } from 'react';

const SecurityConfig = () => {
  useEffect(() => {
    // Enhanced Content Security Policy via meta tag (for development)
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const csp = document.createElement('meta');
      csp.setAttribute('http-equiv', 'Content-Security-Policy');
      csp.setAttribute('content', 
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: https: blob:; " +
        "font-src 'self' data: https:; " +
        "connect-src 'self' https: wss:; " +
        "media-src 'self' https:; " +
        "object-src 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self'; " +
        "frame-ancestors 'none'; " +
        "upgrade-insecure-requests;"
      );
      document.head.appendChild(csp);
    }

    // Enhanced security headers via meta tags
    const securityHeaders = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', content: 'geolocation=(), microphone=(), camera=()' },
      { name: 'Cross-Origin-Embedder-Policy', content: 'require-corp' },
      { name: 'Cross-Origin-Opener-Policy', content: 'same-origin' },
      { name: 'Cross-Origin-Resource-Policy', content: 'same-origin' }
    ];

    securityHeaders.forEach(header => {
      if (!document.querySelector(`meta[name="${header.name}"]`)) {
        const meta = document.createElement('meta');
        meta.setAttribute('name', header.name);
        meta.setAttribute('content', header.content);
        document.head.appendChild(meta);
      }
    });

    // CSRF Protection: Add CSRF token to forms
    const addCSRFTokenToForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        if (!form.querySelector('input[name="csrf_token"]')) {
          const csrfToken = document.createElement('input');
          csrfToken.type = 'hidden';
          csrfToken.name = 'csrf_token';
          csrfToken.value = generateCSRFToken();
          form.appendChild(csrfToken);
        }
      });
    };

    // Generate CSRF token
    const generateCSRFToken = (): string => {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    };

    // Apply CSRF protection to existing forms
    addCSRFTokenToForms();

    // Observer to add CSRF tokens to dynamically added forms
    const observer = new MutationObserver(() => {
      addCSRFTokenToForms();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Disable right-click context menu in production
    if (process.env.NODE_ENV === 'production') {
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        return false;
      };

      // Disable text selection in production for sensitive content
      const handleSelectStart = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('no-select') || target.closest('.no-select')) {
          e.preventDefault();
          return false;
        }
      };

      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('selectstart', handleSelectStart);
      
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('selectstart', handleSelectStart);
        observer.disconnect();
      };
    }

    // Console warning for production
    if (process.env.NODE_ENV === 'production') {
      console.log(
        '%cSTOP!',
        'color: red; font-size: 50px; font-weight: bold;'
      );
      console.log(
        '%cThis is a browser feature intended for developers. Do not enter or paste any code here as it could compromise your security.',
        'color: red; font-size: 16px;'
      );
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityConfig;
