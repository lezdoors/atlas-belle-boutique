
export const SITE_CONFIG = {
  domain: 'atlasperle.com',
  email: 'contact@atlasperle.com',
  whatsapp: {
    number: '+212612345678',
    displayNumber: '+212 6 12 34 56 78'
  },
  company: {
    name: 'Perle de l\'Atlas',
    tagline: 'Cosmétiques de Luxe Marocains',
    description: 'La beauté ancestrale du Maroc'
  },
  addresses: {
    usa: '822 C Street #11, Hayward, CA 94541',
    morocco: 'Casablanca, Maroc',
    france: 'à venir'
  }
};

export const getWhatsAppUrl = (message?: string) => {
  const defaultMessage = 'Bonjour! Je suis intéressé(e) par vos produits Perle d\'Atlas.';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodedMessage}`;
};

export const getEmailUrl = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const queryString = params.toString();
  return `mailto:${SITE_CONFIG.email}${queryString ? `?${queryString}` : ''}`;
};
