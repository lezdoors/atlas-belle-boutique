
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: language === 'fr' ? 'Amira Bennani' : 'Amira Bennani',
      location: language === 'fr' ? 'Casablanca, Maroc' : 'Casablanca, Morocco',
      image: '/placeholder.svg',
      rating: 5,
      text: language === 'fr' 
        ? 'L\'huile d\'argan de Perle d\'Atlas a transformé ma peau. Une qualité exceptionnelle qui reflète vraiment l\'authenticité marocaine.'
        : 'Perle d\'Atlas argan oil has transformed my skin. Exceptional quality that truly reflects Moroccan authenticity.',
      product: language === 'fr' ? 'Huile d\'Argan Bio' : 'Organic Argan Oil'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Sarah Mitchell' : 'Sarah Mitchell',
      location: language === 'fr' ? 'Paris, France' : 'Paris, France',
      image: '/placeholder.svg',
      rating: 5,
      text: language === 'fr'
        ? 'Le parfum Oud & Rose est absolument envoûtant. Il me transporte directement dans les souks de Marrakech.'
        : 'The Oud & Rose perfume is absolutely enchanting. It transports me directly to the souks of Marrakech.',
      product: language === 'fr' ? 'Parfum Oud & Rose' : 'Oud & Rose Perfume'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Fatima El Amrani' : 'Fatima El Amrani',
      location: language === 'fr' ? 'Rabat, Maroc' : 'Rabat, Morocco',
      image: '/placeholder.svg',
      rating: 5,
      text: language === 'fr'
        ? 'Enfin une marque qui honore nos traditions tout en offrant une qualité premium. Je recommande vivement !'
        : 'Finally a brand that honors our traditions while offering premium quality. Highly recommended!',
      product: language === 'fr' ? 'Masque à l\'Argile Rouge' : 'Red Clay Mask'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-beige-50 to-pearl-100">
      <div className="container mx-auto px-4">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 luxury-shadow hover-scale h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 copper-gradient rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-copper-500 fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="elegant-text text-clay-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Product Reference */}
                <div className="mb-6 pb-6 border-b border-pearl-200">
                  <span className="inline-block bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.product}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden luxury-shadow mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-clay-800 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-clay-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 luxury-shadow max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-clay-800 mb-4">
              {language === 'fr' ? 'Rejoignez nos Clientes Satisfaites' : 'Join Our Satisfied Customers'}
            </h3>
            <p className="elegant-text text-clay-600 mb-6">
              {language === 'fr' 
                ? 'Partagez votre expérience et inspirez d\'autres femmes à découvrir la beauté authentique du Maroc'
                : 'Share your experience and inspire other women to discover the authentic beauty of Morocco'
              }
            </p>
            <Button className="copper-gradient text-white px-8 py-3 rounded-full font-medium tracking-wide border-0 hover-scale">
              {language === 'fr' ? 'Laisser un Avis' : 'Leave a Review'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
