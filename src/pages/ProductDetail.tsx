import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import PremiumProductDetail from '@/components/product/PremiumProductDetail';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import MobileBottomNav from '@/components/mobile/MobileBottomNav';

// Sample product data - in a real app, this would come from an API
const sampleProducts = {
  'tagine-signature': {
    id: 'tagine-signature',
    name: 'Tagine Signature Chapuis',
    description: 'Un tagine exceptionnel façonné à la main dans les ateliers de Fès, alliant tradition séculaire et élégance contemporaine. Chaque pièce est unique, portant la signature de son artisan et l\'héritage de générations de savoir-faire marocain.',
    region: 'Fès',
    technique: 'hand-throwing',
    careInstructions: 'Lavage à la main à l\'eau tiède avec un savon doux. Éviter les chocs thermiques. Sécher immédiatement après lavage.',
    foodSafe: true,
    rating: 4.9,
    reviewCount: 147,
    images: [
      '/lovable-uploads/297c8b0f-3221-45a3-8488-e8e023e07fcc.png',
      '/lovable-uploads/4d22e63c-9766-4547-889d-0462b7de47e6.png',
      '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
      '/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png'
    ],
    variants: [
      {
        id: 'tagine-blue-large',
        name: 'Bleu Traditionnel Grand',
        color: 'Bleu Fès',
        glaze: 'Glaçure brillante',
        size: '32cm',
        priceUSD: 89,
        priceEUR: 85,
        inStock: true,
        image: '/lovable-uploads/297c8b0f-3221-45a3-8488-e8e023e07fcc.png'
      },
      {
        id: 'tagine-white-medium',
        name: 'Blanc Contemporain Moyen',
        color: 'Blanc Ivoire',
        glaze: 'Glaçure mate',
        size: '28cm',
        priceUSD: 75,
        priceEUR: 72,
        inStock: true,
        image: '/lovable-uploads/4d22e63c-9766-4547-889d-0462b7de47e6.png'
      }
    ],
    artisan: {
      id: 'hassan-fes',
      name: 'Hassan Al-Fassi',
      region: 'Fès',
      specialty: 'Maître potier traditionnel',
      yearsExperience: 25,
      photo: '/lovable-uploads/2649b5ab-37a7-4b14-ab73-9976ba61320a.png',
      storyFr: 'Hassan perpétue la tradition familiale de la céramique de Fès depuis plus de 25 ans. Formé par son grand-père, il maîtrise les techniques ancestrales du tournage et des glaçures traditionnelles. Chaque pièce qu\'il crée porte l\'âme de cette ville millénaire.',
      storyEn: 'Hassan perpetuates the family tradition of Fès ceramics for over 25 years. Trained by his grandfather, he masters the ancestral techniques of throwing and traditional glazes. Each piece he creates carries the soul of this thousand-year-old city.',
      techniques: ['Tournage traditionnel', 'Glaçures minérales', 'Cuisson au bois'],
      familyHeritage: '4ème génération'
    }
  }
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { language } = useLanguage();
  
  const product = sampleProducts[productId as keyof typeof sampleProducts];
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-stone-900 mb-4">
            {language === 'fr' ? 'Produit non trouvé' : 'Product not found'}
          </h1>
          <p className="text-stone-600">
            {language === 'fr' ? 'Ce produit n\'existe pas ou n\'est plus disponible.' : 'This product does not exist or is no longer available.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      <div className="pt-32">
        <PremiumProductDetail product={product} />
      </div>
      <ModernElegantFooter />
      <MobileBottomNav />
    </div>
  );
};

export default ProductDetailPage;