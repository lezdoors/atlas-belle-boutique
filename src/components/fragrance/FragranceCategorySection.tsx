
import { FragranceCategory } from './fragranceData';
import FragranceProductCard from './FragranceProductCard';

interface FragranceCategorySectionProps {
  category: FragranceCategory;
}

const FragranceCategorySection = ({ category }: FragranceCategorySectionProps) => {
  return (
    <div className="mb-12">
      {/* Category Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold text-clay-800 mb-2">
          {category.name}
        </h3>
        <p className="text-clay-600">
          {category.description}
        </p>
      </div>

      {/* Products - Horizontal scroll on mobile */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-2 lg:gap-8">
          {category.products.map((product) => (
            <FragranceProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FragranceCategorySection;
