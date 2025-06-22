
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Flower, Sun, Leaf, Snowflake } from 'lucide-react';

const FourSeasons = () => {
  const { language } = useLanguage();

  const seasons = [
    {
      id: 'printemps',
      name: 'Printemps',
      icon: Flower,
      ingredients: ['Rose', 'Néroli', 'Figue'],
      color: 'from-pink-100 to-rose-200',
      iconColor: 'text-pink-600',
      link: '/collections/printemps'
    },
    {
      id: 'ete',
      name: 'Été',
      icon: Sun,
      ingredients: ['Citron', 'Argan', 'Menthe'],
      color: 'from-yellow-100 to-amber-200',
      iconColor: 'text-amber-600',
      link: '/collections/ete'
    },
    {
      id: 'automne',
      name: 'Automne',
      icon: Leaf,
      ingredients: ['Ambre', 'Figue sèche', 'Épices chaudes'],
      color: 'from-orange-100 to-copper-200',
      iconColor: 'text-copper-600',
      link: '/collections/automne'
    },
    {
      id: 'hiver',
      name: 'Hiver',
      icon: Snowflake,
      ingredients: ['Musc', 'Oud', 'Karité'],
      color: 'from-slate-100 to-clay-200',
      iconColor: 'text-clay-600',
      link: '/collections/hiver'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-clay-800 mb-6">
            Les Quatre Saisons de la Beauté
          </h2>
          <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
            Des collections inspirées par la nature marocaine à chaque moment de l'année
          </p>
        </div>

        {/* Seasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {seasons.map((season) => {
            const IconComponent = season.icon;
            
            return (
              <Link
                key={season.id}
                to={season.link}
                className="group block transform transition-all duration-300 hover:scale-105"
              >
                <Card className={`bg-gradient-to-br ${season.color} border-0 luxury-shadow rounded-2xl overflow-hidden h-full`}>
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    {/* Season Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/80 ${season.iconColor} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>

                    {/* Season Name */}
                    <h3 className="font-display text-xl font-semibold text-clay-800 mb-4">
                      {season.name}
                    </h3>

                    {/* Ingredients */}
                    <div className="space-y-2 flex-1">
                      {season.ingredients.map((ingredient, index) => (
                        <div
                          key={index}
                          className="inline-block bg-white/60 text-clay-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                        >
                          {ingredient}
                        </div>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-6">
                      <span className="text-clay-600 text-sm font-medium group-hover:text-clay-800 transition-colors duration-300">
                        Découvrir la collection →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FourSeasons;
