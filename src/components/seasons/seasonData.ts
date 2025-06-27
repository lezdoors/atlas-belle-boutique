
export interface Product {
  name: string;
  price: string;
}

export interface Season {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  color: string;
  products: Product[];
}

export const createSeasonsData = (language: 'fr' | 'en'): Season[] => [
  {
    id: 'spring',
    name: language === 'fr' ? 'Printemps' : 'Spring',
    title: language === 'fr' ? 'Renaissance & Fraîcheur' : 'Renaissance & Freshness',
    description: language === 'fr' 
      ? 'Réveillez votre peau avec nos soins purifiants à l\'eau de rose et aux extraits floraux du Haut Atlas.'
      : 'Awaken your skin with our purifying treatments with rose water and floral extracts from the High Atlas.',
    image: '/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png',
    color: 'from-green-400 to-emerald-600',
    products: [
      {
        name: language === 'fr' ? 'Eau de Rose Damascena' : 'Damascena Rose Water',
        price: language === 'fr' ? '45€' : '$52'
      },
      {
        name: language === 'fr' ? 'Masque Purifiant Menthe' : 'Purifying Mint Mask',
        price: language === 'fr' ? '38€' : '$44'
      }
    ]
  },
  {
    id: 'summer',
    name: language === 'fr' ? 'Été' : 'Summer',
    title: language === 'fr' ? 'Protection & Éclat' : 'Protection & Radiance',
    description: language === 'fr'
      ? 'Protégez et nourrissez votre peau avec nos huiles précieuses d\'argan et de figue de barbarie.'
      : 'Protect and nourish your skin with our precious argan and prickly pear oils.',
    image: '/lovable-uploads/2649b5ab-37a7-4b14-ab73-9976ba61320a.png',
    color: 'from-yellow-400 to-orange-500',
    products: [
      {
        name: language === 'fr' ? 'Huile d\'Argan Bio' : 'Organic Argan Oil',
        price: language === 'fr' ? '65€' : '$75'
      },
      {
        name: language === 'fr' ? 'Sérum Figue de Barbarie' : 'Prickly Pear Serum',
        price: language === 'fr' ? '78€' : '$90'
      }
    ]
  },
  {
    id: 'autumn',
    name: language === 'fr' ? 'Automne' : 'Autumn',
    title: language === 'fr' ? 'Réparation & Confort' : 'Repair & Comfort',
    description: language === 'fr'
      ? 'Réparez et apaisez votre peau avec nos baumes riches au beurre de karité et à l\'huile d\'amande douce.'
      : 'Repair and soothe your skin with our rich balms with shea butter and sweet almond oil.',
    image: '/lovable-uploads/4d22e63c-9766-4547-889d-0462b7de47e6.png',
    color: 'from-orange-400 to-red-500',
    products: [
      {
        name: language === 'fr' ? 'Baume Karité Royal' : 'Royal Shea Balm',
        price: language === 'fr' ? '42€' : '$48'
      },
      {
        name: language === 'fr' ? 'Huile Amande Précieuse' : 'Precious Almond Oil',
        price: language === 'fr' ? '35€' : '$40'
      }
    ]
  },
  {
    id: 'winter',
    name: language === 'fr' ? 'Hiver' : 'Winter',
    title: language === 'fr' ? 'Nutrition & Protection' : 'Nutrition & Protection',
    description: language === 'fr'
      ? 'Nourrissez intensément votre peau avec nos crèmes onctueuses à l\'huile d\'olive et au miel de thym.'
      : 'Intensely nourish your skin with our creamy treatments with olive oil and thyme honey.',
    image: '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
    color: 'from-blue-400 to-indigo-600',
    products: [
      {
        name: language === 'fr' ? 'Crème Nutrition Intense' : 'Intense Nutrition Cream',
        price: language === 'fr' ? '58€' : '$67'
      },
      {
        name: language === 'fr' ? 'Miel de Thym Sauvage' : 'Wild Thyme Honey',
        price: language === 'fr' ? '28€' : '$32'
      }
    ]
  }
];
