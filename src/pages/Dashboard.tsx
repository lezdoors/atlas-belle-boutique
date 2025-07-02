import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const { language } = useLanguage();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-800"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img
                src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Perle%20(Website)-4.png"
                alt="Perle de l'Atlas"
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-stone-600">
                {language === 'fr' ? 'Bienvenue,' : 'Welcome,'} {user.user_metadata?.full_name || user.email}
              </span>
              <Button
                onClick={handleSignOut}
                variant="outline"
                size="sm"
                className="text-stone-600 hover:text-stone-800"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {language === 'fr' ? 'Déconnexion' : 'Sign Out'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800 mb-2">
            {language === 'fr' ? 'Tableau de bord' : 'Dashboard'}
          </h1>
          <p className="text-stone-600">
            {language === 'fr' 
              ? 'Gérez votre compte et vos commandes'
              : 'Manage your account and orders'
            }
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === 'fr' ? 'Profil' : 'Profile'}
              </CardTitle>
              <User className="h-4 w-4 text-stone-600" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-stone-600">
                {language === 'fr' ? 'Gérer vos informations' : 'Manage your information'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === 'fr' ? 'Commandes' : 'Orders'}
              </CardTitle>
              <Package className="h-4 w-4 text-stone-600" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-stone-600">
                {language === 'fr' ? 'Suivre vos achats' : 'Track your purchases'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === 'fr' ? 'Favoris' : 'Wishlist'}
              </CardTitle>
              <Heart className="h-4 w-4 text-stone-600" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-stone-600">
                {language === 'fr' ? 'Vos produits préférés' : 'Your favorite products'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {language === 'fr' ? 'Paramètres' : 'Settings'}
              </CardTitle>
              <Settings className="h-4 w-4 text-stone-600" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-stone-600">
                {language === 'fr' ? 'Préférences du compte' : 'Account preferences'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'fr' ? 'Bienvenue chez Perle de l\'Atlas' : 'Welcome to Perle de l\'Atlas'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600 mb-4">
              {language === 'fr' 
                ? 'Merci de nous faire confiance pour vos soins naturels. Explorez notre collection exclusive de produits artisanaux marocains.'
                : 'Thank you for trusting us with your natural skincare. Explore our exclusive collection of Moroccan artisanal products.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/boutique">
                <Button className="bg-stone-800 hover:bg-stone-900 text-white">
                  {language === 'fr' ? 'Découvrir la boutique' : 'Explore shop'}
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">
                  {language === 'fr' ? 'Notre histoire' : 'Our story'}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;