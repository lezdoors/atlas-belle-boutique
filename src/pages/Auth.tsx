
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { user, signIn, signUp } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        if (!fullName.trim()) {
          toast.error(
            language === 'fr' 
              ? 'Le nom complet est requis'
              : 'Full name is required'
          );
          setLoading(false);
          return;
        }

        const { error } = await signUp(email, password, fullName);
        if (error) {
          if (error.message.includes('User already registered')) {
            toast.error(
              language === 'fr' 
                ? 'Un compte existe déjà avec cet email'
                : 'An account with this email already exists'
            );
          } else {
            toast.error(
              language === 'fr' 
                ? 'Erreur: ' + error.message
                : 'Error: ' + error.message
            );
          }
        } else {
          toast.success(
            language === 'fr' 
              ? 'Bienvenue chez Perle de l\'Atlas! Votre compte a été créé avec succès. Un email de bienvenue vous a été envoyé.'
              : 'Welcome to Perle de l\'Atlas! Your account has been created successfully. A welcome email has been sent to you.'
          );
          // Clear form
          setEmail('');
          setPassword('');
          setFullName('');
          // Redirect to home after a short delay
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error(
              language === 'fr' 
                ? 'Email ou mot de passe incorrect'
                : 'Invalid email or password'
            );
          } else {
            toast.error(
              language === 'fr' 
                ? 'Erreur: ' + error.message
                : 'Error: ' + error.message
            );
          }
        } else {
          toast.success(
            language === 'fr' 
              ? 'Connexion réussie! Bienvenue!'
              : 'Successfully signed in! Welcome!'
          );
          // Redirect to home
          navigate('/');
        }
      }
    } catch (error: any) {
      toast.error(
        language === 'fr' 
          ? 'Une erreur inattendue est survenue'
          : 'An unexpected error occurred'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 to-beige-50">
      <MaisonStyleHeaderNew />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card className="luxury-shadow border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-clay-800">
                {isSignUp 
                  ? (language === 'fr' ? 'Créer un compte' : 'Create Account')
                  : (language === 'fr' ? 'Se connecter' : 'Sign In')
                }
              </CardTitle>
              <CardDescription className="text-clay-600">
                {isSignUp 
                  ? (language === 'fr' ? 'Rejoignez la communauté Perle de l\'Atlas' : 'Join the Pearl of Atlas community')
                  : (language === 'fr' ? 'Accédez à votre compte' : 'Access your account')
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignUp && (
                  <div>
                    <Input
                      type="text"
                      placeholder={language === 'fr' ? 'Nom complet *' : 'Full name *'}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="border-clay-200 focus:border-copper-400"
                    />
                  </div>
                )}
                
                <div>
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-clay-200 focus:border-copper-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="password"
                    placeholder={language === 'fr' ? 'Mot de passe *' : 'Password *'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="border-clay-200 focus:border-copper-400"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full copper-gradient hover-scale text-white"
                >
                  {loading
                    ? (language === 'fr' ? 'Chargement...' : 'Loading...')
                    : isSignUp 
                      ? (language === 'fr' ? 'Créer le compte' : 'Create Account')
                      : (language === 'fr' ? 'Se connecter' : 'Sign In')
                  }
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-copper-600 hover:text-copper-700 text-sm"
                >
                  {isSignUp
                    ? (language === 'fr' ? 'Déjà un compte? Se connecter' : 'Already have an account? Sign in')
                    : (language === 'fr' ? 'Pas de compte? Créer un compte' : 'No account? Create one')
                  }
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Auth;
