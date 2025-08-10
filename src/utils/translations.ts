// Translation utilities for the application
import { Language } from '@/contexts/LanguageContext';

export const translations = {
  // Navigation translations
  navigation: {
    shopAll: { fr: 'Tout parcourir', en: 'Shop All' },
    tableware: { fr: 'Vaisselle', en: 'Tableware' },
    homeDecor: { fr: 'Décoration', en: 'Home Decor' },
    gifts: { fr: 'Cadeaux', en: 'Gifts' },
    story: { fr: 'Notre histoire', en: 'Story' },
  },
  
  // Header translations
  header: {
    freeShipping: { 
      fr: 'Livraison gratuite pour les commandes de plus de $125 (Expédié vers les États-Unis)', 
      en: 'Free shipping on orders over $125 (Ships to USA)' 
    },
    account: { fr: 'Compte', en: 'Account' },
    language: { fr: 'Français', en: 'English' },
  },
  
  // Footer translations
  footer: {
    newsletter: { fr: 'Newsletter', en: 'Newsletter' },
    newsletterSubtitle: { 
      fr: 'Inscrivez-vous pour recevoir nos dernières actualités', 
      en: 'Subscribe to receive our latest updates' 
    },
    emailPlaceholder: { fr: 'Votre adresse email', en: 'Your email address' },
    subscribe: { fr: 'S\'inscrire', en: 'Subscribe' },
    privacyLink: { 
      fr: 'Voir notre politique de confidentialité', 
      en: 'See our privacy policy' 
    },
    copyright: { 
      fr: '© 2025 Perle de l’Atlas — Tous droits réservés', 
      en: '© 2025 Perle de l’Atlas — All rights reserved' 
    },
    sections: {
      ourHouse: { fr: 'Notre Maison', en: 'Our House' },
      customerService: { fr: 'Services Client', en: 'Customer Service' },
      legal: { fr: 'Mentions Légales', en: 'Legal' },
      followUs: { fr: 'Suivez-nous', en: 'Follow Us' },
    },
    links: {
      about: { fr: 'À propos', en: 'About' },
      artisans: { fr: 'Nos artisans', en: 'Our artisans' },
      shop: { fr: 'Boutique Atlas Perle', en: 'Atlas Perle Shop' },
      faq: { fr: 'FAQ', en: 'FAQ' },
      tracking: { fr: 'Suivi de commande', en: 'Order tracking' },
      returns: { fr: 'Retours & échanges', en: 'Returns & exchanges' },
      contact: { fr: 'Contact', en: 'Contact' },
      termsOfSale: { fr: 'Conditions Générales de Vente', en: 'Terms of Sale' },
      legal: { fr: 'Mentions légales', en: 'Legal notices' },
      privacy: { fr: 'Politique de confidentialité', en: 'Privacy policy' },
      cookies: { fr: 'Paramètres des cookies', en: 'Cookie settings' },
      shippingReturns: { fr: 'Livraison & Retours', en: 'Shipping & Returns' },
      terms: { fr: 'Conditions Générales', en: 'Terms & Conditions' },
    }
  }
};

export const t = (key: string, language: Language): string => {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  if (value && typeof value === 'object' && value[language]) {
    return value[language];
  }
  
  // Fallback to English or return key if not found
  if (value && typeof value === 'object' && value.en) {
    return value.en;
  }
  
  return key;
};