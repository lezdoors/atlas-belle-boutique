
interface ProductData {
  id: string;
  name: string;
  poeticDescription: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  whyWeLoveIt: string;
  howItsMade: string;
  careAndUse: string;
  ingredients?: string[];
  region: string;
  artisanStory?: string;
  inStock: boolean;
}

// Mock product data - in a real app, this would come from your database
export const productData: { [key: string]: ProductData } = {
  'tajine-artisanal': {
    id: 'tajine-artisanal',
    name: 'Tajine Artisanal Premium',
    poeticDescription: 'Un voyage culinaire au cœur de l\'Atlas, où chaque plat devient une célébration des saveurs ancestrales du Maroc.',
    price: '89€',
    originalPrice: '120€',
    image: '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
    rating: 4.9,
    reviews: 127,
    whyWeLoveIt: 'Ce tajine incarne l\'âme de la cuisine marocaine. Façonné par des artisans berbères dans les montagnes de l\'Atlas, il transforme chaque repas en moment de partage et de tradition. Sa forme conique unique permet une cuisson lente qui révèle tous les arômes.',
    howItsMade: 'Modelé à la main dans l\'argile rouge de Salé, ce tajine est cuit dans des fours traditionnels alimentés au bois d\'olivier. Chaque pièce nécessite 15 jours de travail minutieux, de la préparation de l\'argile au vernissage final. Les motifs berbères sont gravés selon des techniques transmises de génération en génération.',
    careAndUse: 'Avant la première utilisation, faites tremper votre tajine dans l\'eau pendant 2 heures. Utilisez toujours à feu doux et évitez les chocs thermiques. Lavage à la main uniquement avec de l\'eau tiède et du savon doux. Laissez sécher complètement avant de ranger.',
    region: 'Atlas Mountains, Morocco',
    artisanStory: 'Créé par Maître Hassan, artisan potier depuis 30 ans dans la région de Salé.',
    inStock: true
  },
  'verre-marocain': {
    id: 'verre-marocain',
    name: 'Verres à Thé Soufflés Main',
    poeticDescription: 'L\'élégance du thé à la menthe dans des verres qui capturent la lumière dorée du soleil marocain.',
    price: '45€',
    image: '/lovable-uploads/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png',
    rating: 4.8,
    reviews: 89,
    whyWeLoveIt: 'Ces verres cristallins transforment chaque dégustation de thé en rituel sacré. Soufflés à la bouche selon l\'art verrier traditionnel de Fès, ils reflètent la lumière avec une grâce incomparable et révèlent toute la beauté du thé à la menthe.',
    howItsMade: 'Chaque verre naît du souffle expert des maîtres verriers de Fès. Le verre en fusion est travaillé à plus de 1000°C, façonné uniquement à la canne et au souffle. Cette technique ancestrale garantit l\'unicité de chaque pièce et leur résistance exceptionnelle aux chocs thermiques.',
    careAndUse: 'Lavage à la main recommandé pour préserver l\'éclat. Résistants aux boissons chaudes jusqu\'à 80°C. Évitez le lave-vaisselle et les éponges abrasives. Séchage à l\'air libre ou avec un linge doux.',
    region: 'Fès, Morocco',
    inStock: true
  }
};

export type { ProductData };
