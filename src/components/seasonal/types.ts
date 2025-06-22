
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
    image: "/lovable-uploads/073dee32-d52c-4b0f-9910-d5d85832b4ef.png",
    title: "Essence Dorée",
    subtitle: "Huile d'Argan Pure",
    poetic: "L'or liquide du Maroc révèle votre éclat naturel.",
    season: "golden"
  },
  {
    id: 2,
    image: "/lovable-uploads/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png",
    title: "Tradition Authentique",
    subtitle: "Savon Noir Beldi",
    poetic: "Les rituels ancestraux pour une peau purifiée.",
    season: "tradition"
  },
  {
    id: 3,
    image: "/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png",
    title: "Rituels Ancestraux",
    subtitle: "Sagesse Berbère",
    poetic: "Le désert garde les secrets de votre éclat.",
    season: "heritage"
  },
  {
    id: 4,
    image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
    title: "Éclat Naturel",
    subtitle: "Inspiration Marocaine",
    poetic: "Révélez votre éclat naturel, inspiré du Maroc.",
    season: "atlas"
  }
];
