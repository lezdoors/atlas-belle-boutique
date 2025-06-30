
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  href: string;
}

export const getProducts = (language: 'fr' | 'en'): Product[] => [
  {
    id: '1',
    name: language === 'fr' ? 'Parfum Traditionnel Ambre' : 'Traditional Amber Perfume',
    description: language === 'fr' ? 'Senteur authentique des souks marocains' : 'Authentic scent of Moroccan souks',
    image: '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
    category: 'perfumes',
    href: '/catalog/perfumes'
  },
  {
    id: '2',
    name: language === 'fr' ? 'Huile d\'Argan Premium' : 'Premium Argan Oil',
    description: language === 'fr' ? 'L\'or liquide du Maroc pour votre peau' : 'Morocco\'s liquid gold for your skin',
    image: '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
    category: 'skincare',
    href: '/catalog/skincare'
  },
  {
    id: '3',
    name: language === 'fr' ? 'Céramique Artisanale' : 'Artisanal Ceramics',
    description: language === 'fr' ? 'Poterie traditionnelle de Salé' : 'Traditional pottery from Salé',
    image: '/lovable-uploads/2649b5ab-37a7-4b14-ab73-9976ba61320a.png',
    category: 'ceramics',
    href: '/catalog/ceramics'
  },
  {
    id: '4',
    name: language === 'fr' ? 'Plateaux en Métal Ciselé' : 'Engraved Metal Trays',
    description: language === 'fr' ? 'Artisanat de Fès fait main' : 'Handmade craftsmanship from Fez',
    image: '/lovable-uploads/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png',
    category: 'home-goods',
    href: '/catalog/trays'
  },
  {
    id: '5',
    name: language === 'fr' ? 'Coussins Berbères' : 'Berber Cushions',
    description: language === 'fr' ? 'Textiles tissés à la main' : 'Hand-woven textiles',
    image: '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
    category: 'textiles',
    href: '/catalog/pillows'
  },
  {
    id: '6',
    name: language === 'fr' ? 'Savon au Ghassoul' : 'Ghassoul Clay Soap',
    description: language === 'fr' ? 'Purification naturelle de l\'Atlas' : 'Natural purification from Atlas',
    image: '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
    category: 'wellness',
    href: '/catalog/skincare'
  }
];
