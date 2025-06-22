
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Testimonials = () => {
  const { language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: language === 'fr' ? 'Sofia' : 'Sofia',
      location: language === 'fr' ? 'Paris, France' : 'Paris, France',
      image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
      rating: 5,
      text: language === 'fr' 
        ? 'Ces produits ont transformé ma peau. J\'adore leur parfum naturel et la qualité est exceptionnelle !'
        : 'These products have transformed my skin. I love their natural fragrance and the quality is exceptional!',
      product: language === 'fr' ? 'Huile d\'Argan Bio' : 'Organic Argan Oil'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Laila' : 'Laila',
      location: language === 'fr' ? 'Marseille, France' : 'Marseille, France',
      image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
      rating: 5,
      text: language === 'fr'
        ? 'Une expérience authentique du Maroc, chaque soin me transporte.'
        : 'An authentic experience of Morocco, each treatment transports me.',
      product: language === 'fr' ? 'Parfum Oud & Rose' : 'Oud & Rose Perfume'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Fatima' : 'Fatima',
      location: language === 'fr' ? 'Casablanca, Maroc' : 'Casablanca, Morocco',
      image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
      rating: 5,
      text: language === 'fr'
        ? 'J\'ai recommandé Perle de l\'Atlas à toutes mes amies !'
        : 'I have recommended Perle de l\'Atlas to all my friends!',
      product: language === 'fr' ? 'Masque à l\'Argile Rouge' : 'Red Clay Mask'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

        {/* Desktop: 3-Column Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 luxury-shadow h-full flex flex-col transition-all duration-300 hover:bg-white">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 copper-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-copper-500 fill-current mr-1" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="elegant-text text-clay-700 mb-6 flex-grow leading-relaxed text-lg">
                  "{testimonial.text}"
                </blockquote>

                {/* Product Reference */}
                <div className="mb-6 pb-6 border-b border-pearl-200">
                  <span className="inline-block bg-copper-100 text-copper-700 px-4 py-2 rounded-full text-sm font-medium">
                    {testimonial.product}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden luxury-shadow mr-4 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-clay-800 mb-1 text-lg">
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

        {/* Mobile: Carousel */}
        <div className="md:hidden mb-16">
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 luxury-shadow">
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 copper-gradient rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-copper-500 fill-current mr-1" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="elegant-text text-clay-700 mb-6 leading-relaxed text-lg">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Product Reference */}
              <div className="mb-6 pb-6 border-b border-pearl-200">
                <span className="inline-block bg-copper-100 text-copper-700 px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentTestimonial].product}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden luxury-shadow mr-4">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-clay-800 mb-1 text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-clay-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button 
                onClick={prevTestimonial}
                variant="outline"
                size="sm"
                className="rounded-full w-12 h-12 p-0 border-copper-300 hover:bg-copper-50"
              >
                <ChevronLeft className="h-5 w-5 text-copper-600" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-copper-500 scale-125' 
                        : 'bg-copper-200 hover:bg-copper-300'
                    }`}
                  />
                ))}
              </div>

              <Button 
                onClick={nextTestimonial}
                variant="outline"
                size="sm"
                className="rounded-full w-12 h-12 p-0 border-copper-300 hover:bg-copper-50"
              >
                <ChevronRight className="h-5 w-5 text-copper-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 luxury-shadow max-w-2xl mx-auto hover-scale">
            <h3 className="font-display font-bold text-2xl text-clay-800 mb-4">
              {language === 'fr' ? 'Rejoignez nos Clientes Satisfaites' : 'Join Our Satisfied Customers'}
            </h3>
            <p className="elegant-text text-clay-600 mb-6 text-lg">
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
