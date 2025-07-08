
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
    name: 'Claire Dubois',
    location: language === 'fr' ? 'Lyon, France' : 'Lyon, France',
    image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
    rating: 5,
    text: language === 'fr' 
      ? 'Le service à thé a transformé mes déjeuners du dimanche. Qualité exceptionnelle !'
      : 'The tea service transformed my Sunday lunches. Exceptional quality!',
    product: language === 'fr' ? 'Service à Thé Traditionnel' : 'Traditional Tea Service'
  },
  {
    id: 2,
    name: 'Marie Thompson',
    location: language === 'fr' ? 'Nice, France' : 'Nice, France',
    image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
    rating: 5,
    text: language === 'fr'
      ? 'Mes invités adorent ! Authentique et élégant à la fois.'
      : 'My guests love it! Authentic and elegant at the same time.',
    product: language === 'fr' ? 'Tagine Artisanal' : 'Artisanal Tagine'
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    location: language === 'fr' ? 'Bordeaux, France' : 'Bordeaux, France',
    image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
    rating: 5,
    text: language === 'fr'
      ? 'Chaque pièce raconte une histoire. Un investissement pour la vie.'
      : 'Each piece tells a story. A lifetime investment.',
    product: language === 'fr' ? 'Verres Soufflés à la Main' : 'Hand-Blown Glasses'
  },
  {
    id: 4,
    name: 'Emma Johnson',
    location: language === 'fr' ? 'Toulouse, France' : 'Toulouse, France',
    image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
    rating: 5,
    text: language === 'fr'
      ? 'La finition est parfaite. On sent le travail artisanal.'
      : 'The finish is perfect. You can feel the artisanal work.',
    product: language === 'fr' ? 'Bols en Céramique' : 'Ceramic Bowls'
  },
  {
    id: 5,
    name: 'Isabella Garcia',
    location: language === 'fr' ? 'Marseille, France' : 'Marseille, France',
    image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
    rating: 5,
    text: language === 'fr'
      ? 'Livraison rapide, emballage soigné. Maison Chapuis = qualité !'
      : 'Fast delivery, careful packaging. Maison Chapuis = quality!',
    product: language === 'fr' ? 'Plateau Ciselé' : 'Engraved Tray'
  }
];
