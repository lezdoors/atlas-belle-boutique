
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FragranceShowcaseHeader from '@/components/fragrance/FragranceShowcaseHeader';
import FragranceCategorySection from '@/components/fragrance/FragranceCategorySection';
import FragranceViewAllButton from '@/components/fragrance/FragranceViewAllButton';
import { fragranceCategories } from '@/components/fragrance/fragranceData';

const FragranceShowcase = () => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Show first 2 categories initially, all when expanded
  const displayedCategories = showAll ? fragranceCategories : fragranceCategories.slice(0, 2);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        <FragranceShowcaseHeader />
        
        {/* Desktop Grid Layout */}
        <div className="space-y-12 lg:space-y-16">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              {/* Category Header */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-clay-800 mb-3">
                  {category.name}
                </h3>
                <p className="text-clay-600 text-lg max-w-2xl mx-auto lg:mx-0">
                  {category.description}
                </p>
              </div>

              {/* Products Grid - Responsive Desktop Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden luxury-shadow hover-scale transition-all duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-clay-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.price}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 lg:p-8">
                      <h4 className="font-display font-bold text-xl lg:text-2xl text-clay-800 mb-3">
                        {product.name}
                      </h4>
                      <p className="text-clay-600 text-sm lg:text-base mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Notes */}
                      <div className="mb-6">
                        <h5 className="text-sm font-medium text-clay-700 mb-2">
                          {language === 'fr' ? 'Notes principales:' : 'Key notes:'}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {product.notes.slice(0, 3).map((note, idx) => (
                            <span
                              key={idx}
                              className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full copper-gradient text-white rounded-full py-3 font-medium transition-all duration-300 hover:shadow-lg">
                        {language === 'fr' ? 'Découvrir' : 'Discover'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && fragranceCategories.length > 2 && (
          <div className="text-center mt-12 lg:mt-16">
            <FragranceViewAllButton 
              onClick={() => setShowAll(true)}
              language={language}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FragranceShowcase;
