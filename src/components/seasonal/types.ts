
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
    image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/073dee32-d52c-4b0f-9910-d5d85832b4ef.png",
    title: "Printemps",
    subtitle: "Rituel de Renouveau",
    poetic: "Au printemps, la rose ouvre la peau au renouveau.",
    season: "spring"
  },
  {
    id: 2,
    image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png",
    title: "Été",
    subtitle: "Rituel d'Éclat",
    poetic: "L'été dorée révèle la lumière cachée de votre beauté.",
    season: "summer"
  },
  {
    id: 3,
    image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
    title: "Automne",
    subtitle: "Rituel de Sagesse",
    poetic: "L'automne murmure les secrets ancestraux de l'argan.",
    season: "autumn"
  },
  {
    id: 4,
    image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/397b8d88-7594-4433-8004-050f047a13b6.png",
    title: "Hiver",
    subtitle: "Rituel de Protection",
    poetic: "L'hiver enveloppe la peau d'une douceur millénaire.",
    season: "winter"
  }
];
