
import { useLanguage } from '@/contexts/LanguageContext';
import { getFragranceCategories } from './fragrance/fragranceData';
import FragranceCredibilityMarkers from './fragrance/FragranceCredibilityMarkers';
import FragranceShowcaseHeader from './fragrance/FragranceShowcaseHeader';
import FragranceCategorySection from './fragrance/FragranceCategorySection';
import FragranceViewAllButton from './fragrance/FragranceViewAllButton';

const FragranceShowcase = () => {
  const { language } = useLanguage();
  const fragranceCategories = getFragranceCategories(language);

  return (
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        <FragranceCredibilityMarkers />
        <FragranceShowcaseHeader />

        {/* Fragrance Categories */}
        <div className="space-y-12">
          {fragranceCategories.map((category) => (
            <FragranceCategorySection key={category.id} category={category} />
          ))}
        </div>

        <FragranceViewAllButton />
      </div>
    </section>
  );
};

export default FragranceShowcase;
