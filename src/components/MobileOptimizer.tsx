
import { useEffect } from 'react';

const MobileOptimizer = () => {
  useEffect(() => {
    // Enhanced viewport meta tag for mobile optimization
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');

    // Add mobile-specific meta tags
    const mobileMetaTags = [
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Perle de l’Atlas' },
      { name: 'theme-color', content: '#B8860B' },
      { name: 'msapplication-TileColor', content: '#B8860B' },
      { name: 'msapplication-navbutton-color', content: '#B8860B' }
    ];

    mobileMetaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      } else {
        existingTag.setAttribute('content', tag.content);
      }
    });

    // Add Apple touch icons
    const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleTouchIcon) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'apple-touch-icon');
      link.setAttribute('href', '/favicon.svg');
      document.head.appendChild(link);
    }

    // Optimize for mobile performance
    const prefetchDNS = [
      'https://fonts.googleapis.com',
      'https://images.unsplash.com',
      'https://yiqvfmspqdrdlaqedlfv.supabase.co'
    ];

    prefetchDNS.forEach(domain => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'dns-prefetch');
        link.setAttribute('href', domain);
        document.head.appendChild(link);
      }
    });

    // Preconnect to critical resources
    const preconnectUrls = [
      'https://fonts.gstatic.com',
      'https://yiqvfmspqdrdlaqedlfv.supabase.co'
    ];

    preconnectUrls.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'preconnect');
        link.setAttribute('href', url);
        link.setAttribute('crossorigin', '');
        document.head.appendChild(link);
      }
    });

  }, []);

  return null;
};

export default MobileOptimizer;
