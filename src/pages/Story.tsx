import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Search, Tag, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const Story = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Featured articles for the journal
  const featuredArticles = [
    {
      id: 1,
      title: language === 'fr' ? "L'Art du Thé Marocain : Tradition et Rituel" : "The Art of Moroccan Tea: Tradition and Ritual",
      excerpt: language === 'fr' 
        ? "Découvrez les secrets du thé à la menthe marocain, un rituel millénaire qui unit les familles et honore les invités."
        : "Discover the secrets of Moroccan mint tea, an ancient ritual that unites families and honors guests.",
      category: language === 'fr' ? 'Rituels' : 'Rituals',
      author: 'Fatima Al-Zahra',
      date: '2024-06-15',
      readTime: '5 min',
      image: '/lovable-uploads/morocco-tea-ceremony.jpg',
      featured: true
    },
    {
      id: 2,
      title: language === 'fr' ? "Ghassoul : L'Or Blanc des Montagnes de l'Atlas" : "Ghassoul: The White Gold of the Atlas Mountains",
      excerpt: language === 'fr'
        ? "Plongez dans l'histoire du ghassoul, cette argile volcanique aux vertus purifiantes utilisée depuis des siècles."
        : "Dive into the history of ghassoul, this volcanic clay with purifying properties used for centuries.",
      category: language === 'fr' ? 'Ingrédients' : 'Ingredients',
      author: 'Youssef Benali',
      date: '2024-06-10',
      readTime: '7 min',
      image: '/lovable-uploads/ghassoul-clay.jpg',
      featured: true
    },
    {
      id: 3,
      title: language === 'fr' ? "Portrait d'Artisan : Maître Potier de Salé" : "Artisan Spotlight: Master Potter from Salé",
      excerpt: language === 'fr'
        ? "Rencontrez Hassan, maître potier dont la famille perpétue l'art de la céramique depuis cinq générations."
        : "Meet Hassan, master potter whose family has been perpetuating the art of ceramics for five generations.",
      category: language === 'fr' ? 'Artisans' : 'Artisans',
      author: 'Amina Tazi',
      date: '2024-06-05',
      readTime: '6 min',
      image: '/lovable-uploads/artisan-potter.jpg',
      featured: false
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: language === 'fr' ? "Décoration d'Automne : Inspirations Marocaines" : "Autumn Decoration: Moroccan Inspirations",
      excerpt: language === 'fr'
        ? "Comment apporter les couleurs chaudes du Maroc dans votre intérieur pour la saison automnale."
        : "How to bring the warm colors of Morocco into your interior for the fall season.",
      category: language === 'fr' ? 'Décoration' : 'Decoration',
      author: 'Leila Fassi',
      date: '2024-06-01',
      readTime: '4 min',
      image: '/lovable-uploads/autumn-moroccan-decor.jpg'
    },
    {
      id: 5,
      title: language === 'fr' ? "Les Bienfaits de l'Huile d'Argan : Science et Tradition" : "The Benefits of Argan Oil: Science and Tradition",
      excerpt: language === 'fr'
        ? "Une exploration moderne des propriétés de l'huile d'argan, soutenue par la recherche scientifique."
        : "A modern exploration of argan oil properties, supported by scientific research.",
      category: language === 'fr' ? 'Bien-être' : 'Wellness',
      author: 'Dr. Rachid Alami',
      date: '2024-05-28',
      readTime: '8 min',
      image: '/lovable-uploads/argan-oil-benefits.jpg'
    },
    {
      id: 6,
      title: language === 'fr' ? "Recette : Tajine Végétarien aux Légumes de Saison" : "Recipe: Vegetarian Tagine with Seasonal Vegetables",
      excerpt: language === 'fr'
        ? "Une recette authentique de tajine végétarien, parfaite pour célébrer les saveurs du terroir marocain."
        : "An authentic vegetarian tagine recipe, perfect for celebrating the flavors of Moroccan terroir.",
      category: language === 'fr' ? 'Recettes' : 'Recipes',
      author: 'Chef Aicha',
      date: '2024-05-25',
      readTime: '10 min',
      image: '/lovable-uploads/vegetarian-tagine.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: language === 'fr' ? 'Tous' : 'All' },
    { id: 'artisans', name: language === 'fr' ? 'Artisans' : 'Artisans' },
    { id: 'ingredients', name: language === 'fr' ? 'Ingrédients' : 'Ingredients' },
    { id: 'rituals', name: language === 'fr' ? 'Rituels' : 'Rituals' },
    { id: 'decoration', name: language === 'fr' ? 'Décoration' : 'Decoration' },
    { id: 'wellness', name: language === 'fr' ? 'Bien-être' : 'Wellness' },
    { id: 'recipes', name: language === 'fr' ? 'Recettes' : 'Recipes' }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-stone-100 to-stone-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-stone-600 mr-3" />
                <Sparkles className="h-6 w-6 text-stone-500" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-800 mb-6">
                {language === 'fr' ? 'Notre Journal' : 'Our Journal'}
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
                {language === 'fr'
                  ? 'Découvrez les histoires, traditions et savoir-faire qui donnent vie à chaque création Perle d\'Atlas.'
                  : 'Discover the stories, traditions and craftsmanship that bring each Perle d\'Atlas creation to life.'
                }
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
                <Input
                  type="text"
                  placeholder={language === 'fr' ? 'Rechercher des articles...' : 'Search articles...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-stone-200 focus:border-stone-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b border-stone-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-stone-800 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl font-light text-stone-800 mb-12 text-center">
              {language === 'fr' ? 'Articles à la Une' : 'Featured Articles'}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredArticles.filter(article => article.featured).map((article) => (
                <Card key={article.id} className="group overflow-hidden hover:shadow-luxury transition-all duration-500">
                  <div className="relative h-64 bg-stone-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-stone-800">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium text-stone-800 mb-3 group-hover:text-stone-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-stone-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <Button variant="ghost" className="mt-4 p-0 h-auto font-medium text-stone-800 hover:text-stone-600">
                      {language === 'fr' ? 'Lire la suite' : 'Read more'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl font-light text-stone-800 mb-12 text-center">
              {language === 'fr' ? 'Articles Récents' : 'Recent Articles'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-refined transition-all duration-300">
                  <div className="relative h-48 bg-stone-200 overflow-hidden">
                    <Badge className="absolute top-3 right-3 z-10 bg-white/90 text-stone-800 text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-5">
                    <h3 className="font-serif text-lg font-medium text-stone-800 mb-2 line-clamp-2 group-hover:text-stone-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-stone-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full text-stone-700 border-stone-200 hover:bg-stone-50">
                      {language === 'fr' ? 'Lire l\'article' : 'Read article'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="bg-white border-stone-300 text-stone-700 hover:bg-stone-50">
                {language === 'fr' ? 'Voir plus d\'articles' : 'View more articles'}
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-stone-800">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-light text-white mb-4">
                {language === 'fr' ? 'Ne Manquez Aucune Histoire' : 'Don\'t Miss Any Story'}
              </h2>
              <p className="text-stone-300 mb-8">
                {language === 'fr'
                  ? 'Recevez nos derniers articles et découvertes directement dans votre boîte mail.'
                  : 'Receive our latest articles and discoveries directly in your inbox.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                  className="bg-white border-stone-300"
                />
                <Button className="bg-white text-stone-800 hover:bg-stone-100">
                  {language === 'fr' ? 'S\'abonner' : 'Subscribe'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Story;