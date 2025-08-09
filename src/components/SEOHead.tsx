import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  schemaType?: 'Product' | 'WebPage' | 'Organization' | 'Article';
  productSchema?: {
    name: string;
    price: string;
    currency: string;
    brand: string;
    description: string;
    image: string;
    availability: string;
    category: string;
  };
  noIndex?: boolean;
}

const SEOHead = ({ 
  title,
  description,
  keywords = [],
  image = "/lovable-uploads/perle-atlas-logo.png",
  url,
  type = "website",
  schemaType = "WebPage",
  productSchema,
  noIndex = false
}: SEOHeadProps) => {
  const { language } = useLanguage();
  const currentUrl = url || `${window.location.origin}${window.location.pathname}`;
  const fullTitle = `${title} | Perle de l’Atlas`;
  const imageUrl = `${window.location.origin}${image}`;

  useEffect(() => {
    // Update page title
    document.title = fullTitle;

    // Clear existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo="true"]');
    existingMetas.forEach(meta => meta.remove());

    // Create and append meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: "Perle de l’Atlas" },
      { property: 'og:locale', content: language === 'fr' ? 'fr_FR' : 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:site', content: '@perledeatlas' },
      { name: 'author', content: "Perle de l’Atlas" },
      { name: 'theme-color', content: '#B8860B' }
    ];

    // Add language attribute
    metaTags.push({ name: 'language', content: language === 'fr' ? 'French' : 'English' });

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('data-seo', 'true');
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      document.head.appendChild(meta);
    });

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Add hreflang alternates (EN/FR)
    document.querySelectorAll('link[rel="alternate"][data-seo="true"]').forEach(l => l.remove());
    const alternates = [
      { hreflang: 'x-default', href: currentUrl },
      { hreflang: 'en', href: currentUrl },
      { hreflang: 'fr', href: currentUrl }
    ];
    alternates.forEach(a => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', a.hreflang);
      link.setAttribute('href', a.href);
      link.setAttribute('data-seo', 'true');
      document.head.appendChild(link);
    });

    // Create structured data
    const structuredData: any = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": title,
      "description": description,
      "url": currentUrl,
      "image": imageUrl,
      "inLanguage": language === 'fr' ? 'fr-FR' : 'en-US'
    };

    // Add product-specific schema if provided
    if (schemaType === 'Product' && productSchema) {
      structuredData["@type"] = "Product";
      structuredData.name = productSchema.name;
      structuredData.description = productSchema.description;
      structuredData.image = productSchema.image;
      structuredData.brand = {
        "@type": "Brand",
        "name": productSchema.brand
      };
      structuredData.offers = {
        "@type": "Offer",
        "price": productSchema.price,
        "priceCurrency": productSchema.currency,
        "availability": `https://schema.org/${productSchema.availability}`,
        "url": currentUrl
      };
      structuredData.category = productSchema.category;
    }

    // Add organization context
    structuredData.publisher = {
      "@type": "Organization",
      "name": "Perle de l’Atlas",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/lovable-uploads/perle-atlas-logo.png`
      },
      "url": window.location.origin,
      "sameAs": [
        "https://www.instagram.com/perledeatlas",
        "https://www.facebook.com/perledeatlas"
      ]
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"][data-seo="true"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [title, description, keywords, image, currentUrl, type, language, schemaType, productSchema, noIndex]);

  return null;
};

export default SEOHead;