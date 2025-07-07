import CeramicsCatalog from '@/components/catalog/CeramicsCatalog';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const CeramicsCatalogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      <CeramicsCatalog />
      <ModernElegantFooter />
    </div>
  );
};

export default CeramicsCatalogPage;