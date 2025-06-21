
import { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOOptimizer = ({ 
  title = "Perle d'Atlas - Cosmétiques de Luxe Marocains | Tradition & Élégance",
  description = "Découvrez Perle d'Atlas, la marque de cosmétiques de luxe marocains. Produits artisanaux authentiques alliant traditions ancestrales et élégance moderne.",
  image = "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/397b8d88-7594-4433-8004-050f047a13b6.png",
  url,
  type = "website"
}: SEOOptimizerProps) => {
  const currentUrl = url || `${window.location.origin}${window.location.pathname}`;

  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: "Perle d'Atlas" },
      { property: 'og:locale', content: 'fr_FR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:site', content: '@perledatlas' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Enhanced structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${window.location.origin}/#organization`,
          "name": "Perle d'Atlas",
          "description": "Marque de cosmétiques de luxe marocains authentiques",
          "url": window.location.origin,
          "logo": {
            "@type": "ImageObject",
            "url": image,
            "width": "400",
            "height": "400"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-6-63-06-89-80",
            "contactType": "customer service",
            "availableLanguage": ["fr", "en"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "822 C Street #11",
            "addressLocality": "Hayward",
            "addressRegion": "CA",
            "postalCode": "94541",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://www.instagram.com/perledatlas",
            "https://www.facebook.com/perledatlas"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${window.location.origin}/#website`,
          "url": window.location.origin,
          "name": "Perle d'Atlas",
          "description": description,
          "publisher": {
            "@id": `${window.location.origin}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${window.location.origin}/boutique?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [title, description, image, currentUrl, type]);

  return null;
};

export default SEOOptimizer;
