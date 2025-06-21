
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Crown, Gift, Star, Sparkles, Users, Calendar, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProgrammeFidelite = () => {
  const { language } = useLanguage();

  // Mock user data - in real app this would come from Supabase
  const userPoints = 450;
  const nextTierPoints = 750;
  const currentTier = 'Ambre';
  const progressPercentage = (userPoints / nextTierPoints) * 100;

  const tiers = [
    {
      name: language === 'fr' ? 'Argan' : 'Argan',
      threshold: 0,
      icon: Sparkles,
      color: 'from-amber-100 to-amber-200',
      benefits: language === 'fr' 
        ? ['5% de réduction', 'Échantillons gratuits', 'Livraison offerte dès 50€']
        : ['5% discount', 'Free samples', 'Free shipping from €50']
    },
    {
      name: language === 'fr' ? 'Ambre' : 'Amber',
      threshold: 250,
      icon: Crown,
      color: 'from-copper-100 to-copper-200',
      benefits: language === 'fr'
        ? ['10% de réduction', 'Accès prioritaire aux nouveautés', 'Cadeau d\'anniversaire', 'Consultations beauté gratuites']
        : ['10% discount', 'Priority access to new products', 'Birthday gift', 'Free beauty consultations']
    },
    {
      name: language === 'fr' ? 'Sahara' : 'Sahara',
      threshold: 750,
      icon: Star,
      color: 'from-clay-100 to-clay-200',
      benefits: language === 'fr'
        ? ['15% de réduction', 'Produits exclusifs', 'Livraison express gratuite', 'Événements VIP', 'Conseillère beauté dédiée']
        : ['15% discount', 'Exclusive products', 'Free express delivery', 'VIP events', 'Dedicated beauty advisor']
    }
  ];

  const rewards = [
    {
      name: language === 'fr' ? 'Échantillon Huile d\'Argan' : 'Argan Oil Sample',
      points: 100,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300',
      available: true
    },
    {
      name: language === 'fr' ? 'Masque Ghassoul Deluxe' : 'Deluxe Ghassoul Mask',
      points: 250,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300',
      available: true
    },
    {
      name: language === 'fr' ? 'Rituel Hammam Complet' : 'Complete Hammam Ritual',
      points: 500,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300',
      available: userPoints >= 500
    },
    {
      name: language === 'fr' ? 'Consultation Beauté Privée' : 'Private Beauty Consultation',
      points: 750,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300',
      available: userPoints >= 750
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Crown className="h-16 w-16 text-copper-600 mx-auto mb-6" />
            <h1 className="hero-title text-clay-800 mb-6">
              {language === 'fr' ? 'Cercle Perle' : 'Pearl Circle'}
            </h1>
            <p className="hero-subtitle text-clay-600 mb-8">
              {language === 'fr' 
                ? 'Rejoignez notre cercle d\'initiés et découvrez les secrets de beauté du Maroc avec des privilèges exclusifs'
                : 'Join our circle of initiates and discover the beauty secrets of Morocco with exclusive privileges'
              }
            </p>
          </div>
        </div>
      </section>

      {/* User Progress Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto luxury-shadow border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-display font-bold text-2xl text-clay-800 mb-4">
                  {language === 'fr' ? 'Votre Statut' : 'Your Status'}
                </h2>
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-copper-600">{userPoints}</div>
                    <div className="text-sm text-clay-600">
                      {language === 'fr' ? 'Points' : 'Points'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-clay-800">{currentTier}</div>
                    <div className="text-sm text-clay-600">
                      {language === 'fr' ? 'Niveau actuel' : 'Current tier'}
                    </div>
                  </div>
                </div>
                
                <div className="max-w-md mx-auto">
                  <div className="flex justify-between text-sm text-clay-600 mb-2">
                    <span>{language === 'fr' ? 'Progression vers Sahara' : 'Progress to Sahara'}</span>
                    <span>{nextTierPoints - userPoints} {language === 'fr' ? 'points restants' : 'points remaining'}</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-clay-800 mb-6">
              {language === 'fr' ? 'Nos Niveaux de Privilèges' : 'Our Privilege Levels'}
            </h2>
            <p className="elegant-text text-clay-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Plus vous explorez nos trésors, plus vous accédez à des privilèges exclusifs'
                : 'The more you explore our treasures, the more you access exclusive privileges'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const IconComponent = tier.icon;
              const isCurrentTier = tier.name === currentTier;
              const isUnlocked = userPoints >= tier.threshold;
              
              return (
                <Card 
                  key={tier.name} 
                  className={`relative overflow-hidden luxury-shadow border-0 ${
                    isCurrentTier ? 'ring-2 ring-copper-400 scale-105' : ''
                  } ${isUnlocked ? '' : 'opacity-75'}`}
                >
                  <div className={`bg-gradient-to-br ${tier.color} p-6`}>
                    <div className="text-center mb-4">
                      <IconComponent className={`h-12 w-12 mx-auto mb-3 ${
                        isUnlocked ? 'text-copper-600' : 'text-clay-400'
                      }`} />
                      <h3 className="font-display font-bold text-xl text-clay-800">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-clay-600">
                        {language === 'fr' ? 'À partir de' : 'From'} {tier.threshold} {language === 'fr' ? 'points' : 'points'}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-clay-700">
                          <span className="w-2 h-2 bg-copper-500 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    {isCurrentTier && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-copper-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {language === 'fr' ? 'Actuel' : 'Current'}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-clay-800 mb-6">
              {language === 'fr' ? 'Récompenses Disponibles' : 'Available Rewards'}
            </h2>
            <p className="elegant-text text-clay-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Échangez vos points contre nos créations artisanales et expériences uniques'
                : 'Exchange your points for our artisanal creations and unique experiences'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward, index) => (
              <Card key={index} className="overflow-hidden luxury-shadow border-0 rounded-2xl">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={reward.image} 
                    alt={reward.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-clay-800 mb-2">{reward.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-copper-600 font-bold">{reward.points} pts</span>
                    <Button 
                      size="sm"
                      disabled={!reward.available}
                      className={`rounded-full ${
                        reward.available 
                          ? 'copper-gradient text-white' 
                          : 'bg-pearl-300 text-clay-500'
                      }`}
                    >
                      {language === 'fr' ? 'Échanger' : 'Redeem'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-copper-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-clay-800 mb-6">
              {language === 'fr' ? 'Comment ça fonctionne' : 'How it works'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: language === 'fr' ? 'Achetez' : 'Shop',
                desc: language === 'fr' ? 'Gagnez 1 point par euro dépensé' : 'Earn 1 point per euro spent'
              },
              {
                icon: Users,
                title: language === 'fr' ? 'Parrainez' : 'Refer',
                desc: language === 'fr' ? 'Invitez vos amis et gagnez 50 points' : 'Invite friends and earn 50 points'
              },
              {
                icon: Calendar,
                title: language === 'fr' ? 'Célébrez' : 'Celebrate',
                desc: language === 'fr' ? 'Recevez un cadeau pour votre anniversaire' : 'Receive a gift on your birthday'
              },
              {
                icon: Gift,
                title: language === 'fr' ? 'Échangez' : 'Redeem',
                desc: language === 'fr' ? 'Utilisez vos points pour des récompenses' : 'Use your points for rewards'
              }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-clay-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="elegant-text text-clay-600">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center luxury-shadow border-0 rounded-3xl overflow-hidden">
            <div className="copper-gradient p-12 text-white">
              <Sparkles className="h-16 w-16 mx-auto mb-6" />
              <h2 className="font-display font-bold text-2xl mb-4">
                {language === 'fr' ? 'Prêt à rejoindre le Cercle Perle ?' : 'Ready to join the Pearl Circle?'}
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {language === 'fr'
                  ? 'Commencez dès maintenant à accumuler des points et découvrez vos privilèges'
                  : 'Start accumulating points now and discover your privileges'
                }
              </p>
              <Button 
                size="lg"
                className="bg-white text-copper-600 hover:bg-pearl-100 rounded-full px-8 py-4 font-medium"
              >
                {language === 'fr' ? 'Rejoindre maintenant' : 'Join now'}
              </Button>
            </div>
          </CardContent>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default ProgrammeFidelite;
