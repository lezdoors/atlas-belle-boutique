
import { useLanguage } from '@/contexts/LanguageContext';
import TestimonialGrid from './TestimonialGrid';
import TestimonialCarousel from './TestimonialCarousel';
import TestimonialCTA from './TestimonialCTA';
import { getTestimonials } from './testimonialsData';

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const testimonials = getTestimonials(language);

  return (
    <section className="py-20 bg-gradient-to-br from-beige-50 to-pearl-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-copper-400 to-copper-600 mx-auto rounded-full mb-8"></div>
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Témoignages de nos Clientes' : 'Customer Testimonials'}
          </h2>
          <p className="elegant-text text-xl text-clay-600 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez ce que nos clientes disent de leurs expériences avec nos produits authentiques'
              : 'Discover what our customers say about their experiences with our authentic products'
            }
          </p>
        </div>

        {/* Desktop Grid & Mobile Carousel */}
        <TestimonialGrid testimonials={testimonials} />
        <TestimonialCarousel testimonials={testimonials} />

        {/* Call to Action */}
        <TestimonialCTA />
      </div>
    </section>
  );
};

export default TestimonialsSection;
