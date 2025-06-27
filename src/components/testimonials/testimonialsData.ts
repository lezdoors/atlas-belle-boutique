
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  product: string;
}

export const getTestimonials = (language: 'fr' | 'en'): Testimonial[] => [
  {
    id: 1,
    name: 'Sofia',
    location: language === 'fr' ? 'Paris, France' : 'Paris, France',
    image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
    rating: 5,
    text: language === 'fr' 
      ? 'Ces produits ont transformé ma peau. J\'adore leur parfum naturel et la qualité est exceptionnelle !'
      : 'These products have transformed my skin. I love their natural fragrance and the quality is exceptional!',
    product: language === 'fr' ? 'Huile d\'Argan Bio' : 'Organic Argan Oil'
  },
  {
    id: 2,
    name: 'Laila',
    location: language === 'fr' ? 'Marseille, France' : 'Marseille, France',
    image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
    rating: 5,
    text: language === 'fr'
      ? 'Une expérience authentique du Maroc, chaque soin me transporte.'
      : 'An authentic experience of Morocco, each treatment transports me.',
    product: language === 'fr' ? 'Parfum Oud & Rose' : 'Oud & Rose Perfume'
  },
  {
    id: 3,
    name: 'Fatima',
    location: language === 'fr' ? 'Casablanca, Maroc' : 'Casablanca, Morocco',
    image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
    rating: 5,
    text: language === 'fr'
      ? 'J\'ai recommandé Perle de l\'Atlas à toutes mes amies !'
      : 'I have recommended Perle de l\'Atlas to all my friends!',
    product: language === 'fr' ? 'Masque à l\'Argile Rouge' : 'Red Clay Mask'
  }
];
