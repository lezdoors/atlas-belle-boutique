
export interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  poetic: string;
  season: string;
}

export const carouselData: CarouselSlide[] = [
  {
    id: 1,
    image: "/lovable-uploads/2649b5ab-37a7-4b14-ab73-9976ba61320a.png",
    title: "Désert d'Or",
    subtitle: "Évasion Saharienne",
    poetic: "Sous le ciel infini du désert, découvrez l'éclat doré des dunes.",
    season: "sahara"
  },
  {
    id: 2,
    image: "/lovable-uploads/297c8b0f-3221-45a3-8488-e8e023e07fcc.png",
    title: "Fleur Précieuse",
    subtitle: "Essence Florale",
    poetic: "La beauté délicate de la nature révèle ses secrets parfumés.",
    season: "floral"
  },
  {
    id: 3,
    image: "/lovable-uploads/eeff32cc-6bc0-4e17-9da7-c206afcf5509.png",
    title: "Trésor Doré",
    subtitle: "Élixir Précieux",
    poetic: "L'art de la beauté marocaine dans un écrin de lumière dorée.",
    season: "luxury"
  },
  {
    id: 4,
    image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
    title: "Éclat Naturel",
    subtitle: "Inspiration Marocaine",
    poetic: "Révélez votre éclat naturel, inspiré du Maroc authentique.",
    season: "atlas"
  }
];
