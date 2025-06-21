
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
    image: "/lovable-uploads/067468dd-a766-407e-b2dc-50ccb8510454.png",
    title: "Printemps",
    subtitle: "Rituel de Renouveau",
    poetic: "Au printemps, la rose ouvre la peau au renouveau.",
    season: "spring"
  },
  {
    id: 2,
    image: "/lovable-uploads/b7aaf2ae-0eb0-43e2-b2a8-ea0f9b7feef5.png",
    title: "Été",
    subtitle: "Rituel d'Éclat",
    poetic: "L'été dorée révèle la lumière cachée de votre beauté.",
    season: "summer"
  },
  {
    id: 3,
    image: "/lovable-uploads/989a3976-efad-4a90-975e-144f506360bc.png",
    title: "Automne",
    subtitle: "Rituel de Sagesse",
    poetic: "L'automne murmure les secrets ancestraux berbères.",
    season: "autumn"
  },
  {
    id: 4,
    image: "/lovable-uploads/015407c1-3e6c-4c44-ab5a-f07b64ef2e28.png",
    title: "Hiver",
    subtitle: "Rituel de Protection",
    poetic: "L'hiver enveloppe la peau d'une douceur millénaire.",
    season: "winter"
  }
];
