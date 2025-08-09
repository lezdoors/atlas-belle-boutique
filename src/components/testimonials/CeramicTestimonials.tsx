import { Star, Package, Shield, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CeramicTestimonials = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Sophie M.',
      location: 'San Francisco, CA',
      rating: 5,
      titleFr: 'Emballage impeccable, authenticité garantie',
      titleEn: 'Impeccable packaging, guaranteed authenticity',
      reviewFr: 'Mes tagines sont arrivés parfaitement protégés. Chaque couche d\'emballage montrait le soin apporté. Les certificats d\'authenticité et les photos de l\'artisan donnent une vraie valeur à l\'achat.',
      reviewEn: 'My tagines arrived perfectly protected. Each layer of packaging showed the care taken. The authenticity certificates and artisan photos give real value to the purchase.',
      focus: 'packaging',
      verified: true,
      productType: 'Tagine Traditionnel de Fès'
    },
    {
      id: 2,
      name: 'Michael R.',
      location: 'New York, NY',
      rating: 5,
      titleFr: 'Qualité exceptionnelle, service irréprochable',
      titleEn: 'Exceptional quality, impeccable service',
      reviewFr: 'Le service client américain m\'a accompagné tout au long. Quand j\'ai eu des questions sur l\'entretien, ils ont pris le temps de m\'expliquer. Ces pièces transforment vraiment l\'expérience du repas.',
      reviewEn: 'The American customer service guided me throughout. When I had questions about care, they took time to explain. These pieces truly transform the dining experience.',
      focus: 'service',
      verified: true,
      productType: 'Service à thé Royal de Safi'
    },
    {
      id: 3,
      name: 'Emma L.',
      location: 'Los Angeles, CA',
      rating: 5,
      titleFr: 'Investissement qui en vaut la peine',
      titleEn: 'Investment worth every penny',
      reviewFr: 'Après 2 ans d\'utilisation quotidienne, mes bols sont comme neufs. La différence avec mes anciens ustensiles industriels est frappante. C\'est de l\'art fonctionnel.',
      reviewEn: 'After 2 years of daily use, my bowls look like new. The difference from my old industrial utensils is striking. This is functional art.',
      focus: 'durability',
      verified: true,
      productType: 'Bols Collection Moderne'
    },
    {
      id: 4,
      name: 'David K.',
      location: 'Chicago, IL',
      rating: 5,
      titleFr: 'Histoire authentique, qualité visible',
      titleEn: 'Authentic story, visible quality',
      reviewFr: 'Recevoir les photos et l\'histoire de Fatima, l\'artisane qui a créé mes pièces, rend chaque repas spécial. On sent la tradition dans chaque détail.',
      reviewEn: 'Receiving photos and the story of Fatima, the artisan who created my pieces, makes every meal special. You can feel the tradition in every detail.',
      focus: 'authenticity',
      verified: true,
      productType: 'Céramiques d\'Exception'
    }
  ];

  const focusIcons = {
    packaging: Package,
    service: Shield,
    durability: Heart,
    authenticity: Star
  };

  return (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6">
            {language === 'fr' ? 'Témoignages Clients' : 'Customer Stories'}
          </h2>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Découvrez pourquoi nos clients américains font confiance à Perle de l’Atlas pour leurs plus belles pièces'
              : 'Discover why our American customers trust Perle de l’Atlas for their finest pieces'
            }
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => {
            const FocusIcon = focusIcons[testimonial.focus as keyof typeof focusIcons];
            
            return (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 border border-stone-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                      <FocusIcon className="w-6 h-6 text-stone-600" />
                    </div>
                    <div>
                      <div className="font-medium text-stone-900">{testimonial.name}</div>
                      <div className="text-sm text-stone-500">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {language === 'fr' ? 'Vérifié' : 'Verified'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Review Title */}
                <h3 className="font-serif text-lg text-stone-900 mb-4">
                  {language === 'fr' ? testimonial.titleFr : testimonial.titleEn}
                </h3>

                {/* Review Content */}
                <p className="text-stone-700 font-light leading-relaxed mb-6">
                  "{language === 'fr' ? testimonial.reviewFr : testimonial.reviewEn}"
                </p>

                {/* Product Info */}
                <div className="pt-4 border-t border-stone-100">
                  <div className="text-sm text-stone-500 font-light">
                    {language === 'fr' ? 'Produit acheté:' : 'Product purchased:'} {testimonial.productType}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Stats */}
        <div className="bg-white rounded-2xl p-12 border border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif text-stone-900 mb-2">99.8%</div>
              <p className="text-stone-600 font-light">
                {language === 'fr' ? 'Livraisons sans casse' : 'Breakage-free deliveries'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-serif text-stone-900 mb-2">4.9/5</div>
              <p className="text-stone-600 font-light">
                {language === 'fr' ? 'Satisfaction client' : 'Customer satisfaction'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-serif text-stone-900 mb-2">24h</div>
              <p className="text-stone-600 font-light">
                {language === 'fr' ? 'Réponse support US' : 'US support response'}
              </p>
            </div>
            <div>
              <div className="text-3xl font-serif text-stone-900 mb-2">85%</div>
              <p className="text-stone-600 font-light">
                {language === 'fr' ? 'Clients fidèles' : 'Repeat customers'}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-serif text-2xl text-stone-900 mb-4">
            {language === 'fr' ? 'Rejoignez Notre Communauté' : 'Join Our Community'}
          </h3>
          <p className="text-stone-600 font-light mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Partagez votre expérience Perle de l’Atlas et inspirez d\'autres amateurs d\'art de vivre authentique.'
              : 'Share your Perle de l’Atlas experience and inspire other lovers of authentic art of living.'
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-sm text-stone-600">
              {language === 'fr' ? 'Service client:' : 'Customer service:'}
            </div>
            <div className="font-mono text-lg text-stone-900">
              +1 (555) 123-CERAMIC
            </div>
            <div className="text-sm text-stone-500">
              {language === 'fr' ? 'Lun-Ven 9h-18h EST' : 'Mon-Fri 9am-6pm EST'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeramicTestimonials;