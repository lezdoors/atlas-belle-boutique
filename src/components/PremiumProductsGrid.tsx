
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const PremiumProductsGrid = () => {
  const { language } = useLanguage();
  const [viewAll, setViewAll] = useState(false);

  // Premium products focused on perfumes and creams around $160 USD
  const premiumProducts = [
    {
      id: 1,
      name: language === 'fr' ? 'Parfum Royal Argan' : 'Royal Argan Perfume',
      description: language === 'fr' 
        ? 'Une fragrance luxueuse aux notes d\'argan et de rose de Damas' 
        : 'A luxurious fragrance with argan and Damascus rose notes',
      priceMAD: 1680, // ~$160 USD
      image: '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      category: 'Parfum',
      rating: 4.8,
      reviews: 127,
      badge: { type: 'bestseller' as const },
      longDescription: language === 'fr'
        ? 'Inspiré des jardins secrets de Marrakech, ce parfum capture l\'essence de l\'argan précieux et de la rose de Damas. Une composition sophistiquée qui révèle la beauté intemporelle du Maroc.'
        : 'Inspired by the secret gardens of Marrakech, this perfume captures the essence of precious argan and Damascus rose. A sophisticated composition that reveals the timeless beauty of Morocco.',
      ingredients: language === 'fr' 
        ? ['Huile d\'argan pure', 'Rose de Damas', 'Bois de cèdre', 'Ambre blanc']
        : ['Pure argan oil', 'Damascus rose', 'Cedar wood', 'White amber'],
      region: 'Marrakech'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Crème Précieuse Atlas' : 'Atlas Precious Cream',
      description: language === 'fr' 
        ? 'Soin anti-âge luxueux aux huiles rares du Haut Atlas' 
        : 'Luxurious anti-aging treatment with rare High Atlas oils',
      priceMAD: 1750, // ~$167 USD
      image: '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
      category: 'Soin',
      rating: 4.9,
      reviews: 89,
      badge: { type: 'new' as const },
      longDescription: language === 'fr'
        ? 'Cette crème d\'exception associe les vertus régénérantes de l\'huile d\'argan aux propriétés anti-âge de l\'huile de figue de barbarie. Un rituel de beauté ancestral pour une peau rayonnante.'
        : 'This exceptional cream combines the regenerating virtues of argan oil with the anti-aging properties of prickly pear oil. An ancestral beauty ritual for radiant skin.',
      ingredients: language === 'fr' 
        ? ['Huile d\'argan bio', 'Huile de figue de barbarie', 'Beurre de karité', 'Extrait de thé vert']
        : ['Organic argan oil', 'Prickly pear oil', 'Shea butter', 'Green tea extract'],
      region: 'Haut Atlas'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Parfum Oud Impérial' : 'Imperial Oud Perfume',
      description: language === 'fr' 
        ? 'Fragrance mystique aux accords d\'oud et d\'épices orientales' 
        : 'Mystical fragrance with oud and oriental spice accords',
      priceMAD: 1590, // ~$152 USD
      image: '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
      category: 'Parfum',
      rating: 4.7,
      reviews: 156,
      badge: { type: 'limited' as const },
      longDescription: language === 'fr'
        ? 'Un voyage olfactif au cœur des souks de Fès. Cette composition audacieuse marie l\'oud précieux aux épices chaudes, créant une signature unique et envoûtante.'
        : 'An olfactory journey to the heart of Fez souks. This bold composition marries precious oud with warm spices, creating a unique and captivating signature.',
      ingredients: language === 'fr' 
        ? ['Oud du Cambodge', 'Safran', 'Cardamome', 'Encens d\'Oman']
        : ['Cambodian oud', 'Saffron', 'Cardamom', 'Omani frankincense'],
      region: 'Fès'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Sérum Élixir Berbère' : 'Berber Elixir Serum',
      description: language === 'fr' 
        ? 'Sérum concentré aux actifs naturels du désert marocain' 
        : 'Concentrated serum with natural actives from the Moroccan desert',
      priceMAD: 1420, // ~$135 USD
      image: '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
      category: 'Soin',
      rating: 4.6,
      reviews: 203,
      badge: { type: 'bestseller' as const },
      longDescription: language === 'fr'
        ? 'Concentré de beauté puisé dans les traditions berbères, ce sérum révèle l\'éclat naturel de votre peau grâce aux plantes adaptogènes du désert.'
        : 'A beauty concentrate drawn from Berber traditions, this serum reveals your skin\'s natural radiance thanks to adaptogenic plants from the desert.',
      ingredients: language === 'fr' 
        ? ['Huile de graines de figue de barbarie', 'Extrait d\'immortelle', 'Acide hyaluronique', 'Vitamine E']
        : ['Prickly pear seed oil', 'Immortelle extract', 'Hyaluronic acid', 'Vitamin E'],
      region: 'Sahara'
    }
  ];

  const displayedProducts = viewAll ? premiumProducts : premiumProducts.slice(0, 2);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-pearl-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-clay-800 mb-4">
            {language === 'fr' ? 'Collection Prestige' : 'Prestige Collection'}
          </h2>
          <p className="text-lg lg:text-xl text-clay-600 max-w-3xl mx-auto font-serif">
            {language === 'fr' 
              ? 'Découvrez nos créations d\'exception, inspirées des traditions millénaires du Maroc'
              : 'Discover our exceptional creations, inspired by Morocco\'s millennial traditions'}
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden grid grid-cols-1 gap-6 mb-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        {!viewAll && (
          <div className="text-center">
            <Button
              onClick={() => setViewAll(true)}
              size="lg"
              className="copper-gradient hover-scale text-white border-0 px-8 py-3 text-base font-medium"
            >
              {language === 'fr' ? 'Voir toute la collection' : 'View Full Collection'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PremiumProductsGrid;
