
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
    image: "/lovable-uploads/b7aaf2ae-0eb0-43e2-b2a8-ea0f9b7feef5.png",
    title: "Été Doré",
    subtitle: "Rituel d'Éclat",
    poetic: "L'été doré révèle la lumière cachée de votre beauté.",
    season: "summer"
  },
  {
    id: 2,
    image: "/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png",
    title: "Rituels Ancestraux",
    subtitle: "Sagesse Berbère",
    poetic: "Le désert garde les secrets de votre éclat.",
    season: "heritage"
  },
  {
    id: 3,
    image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
    title: "Éclat Naturel",
    subtitle: "Inspiration Marocaine",
    poetic: "Révélez votre éclat naturel, inspiré du Maroc.",
    season: "atlas"
  }
];
