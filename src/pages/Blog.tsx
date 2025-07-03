
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraEnhancedChatbot from '@/components/SamraEnhancedChatbot';
import FloatingCart from '@/components/FloatingCart';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Search, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: language === 'fr' ? 'Tous' : 'All' },
    { id: 'beauty-tips', label: language === 'fr' ? 'Conseils Beauté' : 'Beauty Tips' },
    { id: 'traditions', label: language === 'fr' ? 'Traditions' : 'Traditions' },
    { id: 'ingredients', label: language === 'fr' ? 'Ingrédients' : 'Ingredients' },
    { id: 'tutorials', label: language === 'fr' ? 'Tutoriels' : 'Tutorials' },
    { id: 'stories', label: language === 'fr' ? 'Témoignages' : 'Stories' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: language === 'fr' ? 'Les Secrets de l\'Huile d\'Argan pour une Peau Radieuse' : 'Argan Oil Secrets for Radiant Skin',
      excerpt: language === 'fr' 
        ? 'Découvrez comment intégrer l\'or liquide du Maroc dans votre routine beauté quotidienne.'
        : 'Discover how to integrate Morocco\'s liquid gold into your daily beauty routine.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80',
      category: 'beauty-tips',
      author: 'Aicha Benali',
      date: '2024-01-15',
      readTime: '5 min'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Rituels de Beauté Berbères : Traditions Millénaires' : 'Berber Beauty Rituals: Ancient Traditions',
      excerpt: language === 'fr'
        ? 'Plongez dans l\'univers des rituels de beauté transmis de mère en fille dans l\'Atlas.'
        : 'Dive into the world of beauty rituals passed from mother to daughter in the Atlas.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80',
      category: 'traditions',
      author: 'Fatima Amrani',
      date: '2024-01-10',
      readTime: '8 min'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Le Ghassoul : L\'Argile Magique des Montagnes' : 'Ghassoul: The Magic Clay of the Mountains',
      excerpt: language === 'fr'
        ? 'Tout savoir sur cette argile volcanique unique et ses bienfaits exceptionnels.'
        : 'Everything you need to know about this unique volcanic clay and its exceptional benefits.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      category: 'ingredients',
      author: 'Youssef Tazi',
      date: '2024-01-05',
      readTime: '6 min'
    },
    {
      id: 4,
      title: language === 'fr' ? 'Routine Beauté d\'Hiver : Adaptez Vos Soins' : 'Winter Beauty Routine: Adapt Your Care',
      excerpt: language === 'fr'
        ? 'Comment protéger et nourrir votre peau pendant les mois froids avec nos ingrédients naturels.'
        : 'How to protect and nourish your skin during cold months with our natural ingredients.',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80',
      category: 'beauty-tips',
      author: 'Aicha Benali',
      date: '2023-12-20',
      readTime: '7 min'
    },
    {
      id: 5,
      title: language === 'fr' ? 'Témoignage : Ma Transformation avec Perle d\'Atlas' : 'Testimonial: My Transformation with Perle d\'Atlas',
      excerpt: language === 'fr'
        ? 'Sarah partage son expérience avec nos produits et les résultats obtenus.'
        : 'Sarah shares her experience with our products and the results achieved.',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=600&q=80',
      category: 'stories',
      author: 'Sarah Martin',
      date: '2023-12-15',
      readTime: '4 min'
    },
    {
      id: 6,
      title: language === 'fr' ? 'DIY : Masque Purifiant au Ghassoul' : 'DIY: Purifying Ghassoul Mask',
      excerpt: language === 'fr'
        ? 'Apprenez à préparer votre masque purifiant maison avec du ghassoul authentique.'
        : 'Learn to prepare your homemade purifying mask with authentic ghassoul.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80',
      category: 'tutorials',
      author: 'Fatima Amrani',
      date: '2023-12-10',
      readTime: '10 min'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-pearl-50">
      <MaisonStyleHeaderNew />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-clay-800 mb-6">
                {language === 'fr' ? 'Blog Beauté' : 'Beauty Blog'}
              </h1>
              <p className="text-xl text-clay-600 font-serif max-w-3xl mx-auto">
                {language === 'fr'
                  ? 'Découvrez nos conseils, traditions et secrets de beauté marocains. Plongez dans l\'univers authentique de Perle d\'Atlas.'
                  : 'Discover our Moroccan beauty tips, traditions and secrets. Dive into the authentic world of Perle d\'Atlas.'
                }
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-clay-400" />
                <Input
                  placeholder={language === 'fr' ? 'Rechercher un article...' : 'Search articles...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "copper-gradient text-white" : ""}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            <Card className="mb-16 border-0 luxury-shadow overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit bg-copper-100 text-copper-700">
                    {language === 'fr' ? 'Article Vedette' : 'Featured Article'}
                  </Badge>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-clay-800 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-clay-600 font-serif mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-clay-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="copper-gradient text-white w-fit">
                    {language === 'fr' ? 'Lire l\'article' : 'Read Article'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Card key={post.id} className="border-0 luxury-shadow hover-scale overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-3 w-3 text-copper-600" />
                      <Badge variant="outline" className="text-xs">
                        {categories.find(cat => cat.id === post.category)?.label}
                      </Badge>
                    </div>
                    <h3 className="font-display text-xl font-bold text-clay-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-clay-600 font-serif mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-clay-500 mb-4">
                      <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      {language === 'fr' ? 'Lire plus' : 'Read More'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-copper-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-clay-800 mb-4">
              {language === 'fr' ? 'Restez Informé(e)' : 'Stay Informed'}
            </h2>
            <p className="text-clay-600 font-serif mb-8">
              {language === 'fr'
                ? 'Recevez nos derniers articles et conseils beauté directement dans votre boîte mail.'
                : 'Receive our latest articles and beauty tips directly in your mailbox.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder={language === 'fr' ? 'Votre email' : 'Your email'}
                className="flex-1"
              />
              <Button className="copper-gradient text-white">
                {language === 'fr' ? 'S\'abonner' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ModernElegantFooter />
      <SamraEnhancedChatbot />
      <FloatingCart />
      <BackToTop />
    </div>
  );
};

export default Blog;
