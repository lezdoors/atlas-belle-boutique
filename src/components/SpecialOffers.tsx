
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SpecialOffers = () => {
  const { language } = useLanguage();

  const offers = [
    {
      id: 'hammam-ritual',
      title: language === 'fr' ? 'Rituel Hammam Complet' : 'Complete Hammam Ritual',
      description: language === 'fr' 
        ? 'Savon noir, gant de crin, huile d\'argan et serviette berbère' 
        : 'Black soap, exfoliating mitt, argan oil and Berber towel',
      originalPrice: language === 'fr' ? '189€' : '$199',
      salePrice: language === 'fr' ? '151€' : '$159',
      discount: '20%',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'tajine-tea-combo',
      title: language === 'fr' ? 'Ensemble Tajine & Thé' : 'Tajine & Tea Set',
      description: language === 'fr' 
        ? 'Tajine artisanal + 6 verres à thé + plateau en cuivre' 
        : 'Handcrafted tajine + 6 tea glasses + copper tray',
      originalPrice: language === 'fr' ? '159€' : '$169',
      salePrice: language === 'fr' ? '135€' : '$143',
      discount: '15%',
      image: '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png'
    }
  ];

  return (
    <section className="py-20 bg-amber-25">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extralight text-black mb-4 tracking-tight">
            {language === 'fr' ? 'Offres Spéciales' : 'Special Offers'}
          </h2>
          <p className="text-lg font-light text-black/60">
            {language === 'fr' 
              ? 'Économisez sur nos ensembles soigneusement sélectionnés'
              : 'Save on our carefully curated bundles'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                      -{offer.discount}
                    </Badge>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-light text-black mb-4">
                    {offer.title}
                  </h3>
                  <p className="text-black/60 font-light mb-6">
                    {offer.description}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-2xl font-light text-black">
                      {offer.salePrice}
                    </span>
                    <span className="text-lg text-black/40 line-through">
                      {offer.originalPrice}
                    </span>
                  </div>
                  <Button className="bg-black text-white hover:bg-black/90 rounded-full font-light">
                    {language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
