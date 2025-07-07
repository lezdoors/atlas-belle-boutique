import CeramicsCatalog from '@/components/catalog/CeramicsCatalog';
import MaisonChapuisHeader from '@/components/navigation/MaisonChapuisHeader';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const CeramicsCatalogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MaisonChapuisHeader />
      <CeramicsCatalog />
      <ModernElegantFooter />
    </div>
  );
};

export default CeramicsCatalogPage;