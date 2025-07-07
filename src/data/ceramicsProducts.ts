import { Product } from '@/types/product';

export const ceramicsProducts: Product[] = [
  {
    id: '1',
    name_fr: 'Tagine de Service Artisanal',
    name_en: 'Artisanal Serving Tagine',
    description: 'Tagine traditionnel fait main, parfait pour vos dîners d\'exception',
    price: 67,
    images: [
      '/lovable-uploads/2649b5ab-37a7-4b14-ab73-9976ba61320a.png',
      '/lovable-uploads/297c8b0f-3221-45a3-8488-e8e023e07fcc.png'
    ],
    category: 'tagines',
    in_stock: true,
    created_at: '2024-01-15T10:00:00Z',
    featured: true
  },
  {
    id: '2',
    name_fr: 'Service à Thé Traditionnel',
    name_en: 'Traditional Tea Service',
    description: 'Service complet pour la cérémonie du thé marocain',
    price: 78,
    images: [
      '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
      '/lovable-uploads/6fde7854-c65c-40e6-8df6-8d9ca69c3fc8.png'
    ],
    category: 'tea-glasses',
    in_stock: true,
    created_at: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    name_fr: 'Collection Bols Apéritif',
    name_en: 'Aperitif Bowl Collection',
    description: 'Set de bols élégants pour vos moments de convivialité',
    price: 45,
    images: [
      '/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png',
      '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png'
    ],
    category: 'bowls',
    in_stock: true,
    created_at: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name_fr: 'Tagine Familial Authentique',
    name_en: 'Authentic Family Tagine',
    description: 'Grand tagine familial pour des repas généreux et savoureux',
    price: 125,
    images: [
      '/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png',
      '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png'
    ],
    category: 'tagines',
    in_stock: true,
    created_at: '2024-01-05T16:45:00Z',
    featured: true
  },
  {
    id: '5',
    name_fr: 'Verres à Thé Dorés Premium',
    name_en: 'Premium Golden Tea Glasses',
    description: 'Verres à thé ornés de motifs dorés, pour une expérience raffinée',
    price: 95,
    images: [
      '/lovable-uploads/989a3976-efad-4a90-975e-144f506360bc.png',
      '/lovable-uploads/b7aaf2ae-0eb0-43e2-b2a8-ea0f9b7feef5.png'
    ],
    category: 'tea-glasses',
    in_stock: true,
    created_at: '2024-01-25T11:20:00Z',
    featured: true
  }
];