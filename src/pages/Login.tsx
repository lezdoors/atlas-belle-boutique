import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { user, signIn, signUp, signInWithMagicLink, signInWithGoogle, signInWithApple } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleEmailAuth = async (e: React.FormEvent) => {
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
            toast.error(error.message);
          }
        } else {
          toast.success(
            language === 'fr' 
              ? 'Compte créé avec succès! Vérifiez votre email.'
              : 'Account created successfully! Check your email.'
          );
          navigate('/dashboard');
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
            toast.error(error.message);
          }
        } else {
          navigate('/dashboard');
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

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await signInWithGoogle();
    if (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    setLoading(true);
    const { error } = await signInWithApple();
    if (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-stone-50 to-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/hero-image-atlas-landscape.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 flex items-center justify-center w-full p-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6 tracking-tight">
              Perle de l'Atlas
            </h1>
            <p className="text-xl text-stone-600 max-w-md leading-relaxed">
              {language === 'fr' 
                ? 'Découvrez l\'authenticité des soins naturels marocains'
                : 'Discover the authenticity of Moroccan natural skincare'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-stone-800 mb-2">Perle de l'Atlas</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-stone-800 mb-2">
              {isSignUp 
                ? (language === 'fr' ? 'Créer un compte' : 'Create Account')
                : (language === 'fr' ? 'Se connecter' : 'Sign In')
              }
            </h2>
            <p className="text-stone-600">
              {isSignUp 
                ? (language === 'fr' ? 'Rejoignez notre communauté' : 'Join our community')
                : (language === 'fr' ? 'Accédez à votre espace' : 'Access your space')
              }
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <Button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full h-12 bg-white border-2 border-stone-200 text-stone-700 hover:bg-stone-50 font-medium"
              variant="outline"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {language === 'fr' ? 'Continuer avec Google' : 'Continue with Google'}
            </Button>

            <Button
              onClick={handleAppleSignIn}
              disabled={loading}
              className="w-full h-12 bg-black text-white hover:bg-stone-800 font-medium"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              {language === 'fr' ? 'Continuer avec Apple' : 'Continue with Apple'}
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-stone-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-stone-500">
                {language === 'fr' ? 'ou' : 'or'}
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            {isSignUp && (
              <div>
                <Input
                  type="text"
                  placeholder={language === 'fr' ? 'Nom complet' : 'Full name'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-12 text-base"
                  required
                />
              </div>
            )}
            
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 text-base"
                required
              />
            </div>
            
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={language === 'fr' ? 'Mot de passe' : 'Password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 text-base pr-12"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-500 hover:text-stone-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-stone-800 hover:bg-stone-900 text-white font-medium text-base"
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
              className="text-stone-600 hover:text-stone-800 text-sm"
            >
              {isSignUp
                ? (language === 'fr' ? 'Déjà un compte? Se connecter' : 'Already have an account? Sign in')
                : (language === 'fr' ? 'Pas de compte? Créer un compte' : 'No account? Create one')
              }
            </button>
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className="text-stone-500 hover:text-stone-700 text-sm"
            >
              ← {language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;