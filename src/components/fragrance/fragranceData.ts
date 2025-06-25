
export interface FragranceProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

export interface FragranceCategory {
  id: number;
  name: string;
  description: string;
  products: FragranceProduct[];
}

export const getFragranceCategories = (language: 'fr' | 'en'): FragranceCategory[] => [
  {
    id: 1,
    name: "Parfums Imperial",
    description: language === 'fr' ? "Collection royale d'essences rares" : "Royal collection of rare essences",
    products: [
      {
        id: 11,
        name: language === 'fr' ? "Oud Imperial" : "Imperial Oud",
        price: 149,
        image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
        rating: 4.9,
        reviews: 87
      },
      {
        id: 12,
        name: language === 'fr' ? "Rose de Marrakech" : "Rose of Marrakech",
        price: 129,
        image: "/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png",
        rating: 4.8,
        reviews: 124
      }
    ]
  },
  {
    id: 2,
    name: "Fragrances Atlas",
    description: language === 'fr' ? "Inspirées des sommets majestueux" : "Inspired by majestic peaks",
    products: [
      {
        id: 21,
        name: language === 'fr' ? "Cèdre d'Atlas" : "Atlas Cedar",
        price: 119,
        image: "/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png",
        rating: 4.7,
        reviews: 156
      },
      {
        id: 22,
        name: language === 'fr' ? "Thé des Montagnes" : "Mountain Tea",
        price: 109,
        image: "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
        rating: 4.6,
        reviews: 92
      }
    ]
  },
  {
    id: 3,
    name: "Parfums Sahara",
    description: language === 'fr' ? "Chaleur envoûtante du désert" : "Enchanting warmth of the desert",
    products: [
      {
        id: 31,
        name: language === 'fr' ? "Ambre Saharien" : "Saharan Amber",
        price: 139,
        image: "/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png",
        rating: 4.9,
        reviews: 203
      },
      {
        id: 32,
        name: language === 'fr' ? "Santal Mystique" : "Mystic Sandalwood",
        price: 125,
        image: "/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png",
        rating: 4.8,
        reviews: 178
      }
    ]
  },
  {
    id: 4,
    name: "Huiles Précieuses",
    description: language === 'fr' ? "Élixirs ancestraux du Maroc" : "Ancestral elixirs of Morocco",
    products: [
      {
        id: 41,
        name: language === 'fr' ? "Huile d'Argan Royal" : "Royal Argan Oil",
        price: 89,
        image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
        rating: 4.9,
        reviews: 267
      },
      {
        id: 42,
        name: language === 'fr' ? "Essence de Jasmin" : "Jasmine Essence",
        price: 95,
        image: "/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png",
        rating: 4.7,
        reviews: 145
      }
    ]
  }
];
