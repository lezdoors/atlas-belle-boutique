
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { validateEmail, validateName } from '@/utils/inputValidation';

const AuthForm = () => {
  const { signIn, signUp, resetPassword } = useAuth();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('signin');

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
    setError('');
    setSuccess('');
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!validateEmail(email)) {
      setError(language === 'fr' ? 'Format d\'email invalide' : 'Invalid email format');
      setIsLoading(false);
      return;
    }

    const { error } = await signIn(email, password);
    
    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        setError(language === 'fr' ? 'Email ou mot de passe incorrect' : 'Invalid email or password');
      } else {
        setError(error.message);
      }
    }
    
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (!validateEmail(email)) {
      setError(language === 'fr' ? 'Format d\'email invalide' : 'Invalid email format');
      setIsLoading(false);
      return;
    }

    if (fullName && !validateName(fullName)) {
      setError(language === 'fr' ? 'Nom invalide' : 'Invalid name format');
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError(language === 'fr' ? 'Le mot de passe doit contenir au moins 8 caractères' : 'Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError(language === 'fr' ? 'Les mots de passe ne correspondent pas' : 'Passwords do not match');
      setIsLoading(false);
      return;
    }

    const { error } = await signUp(email, password, fullName);
    
    if (error) {
      if (error.message.includes('User already registered')) {
        setError(language === 'fr' ? 'Un compte existe déjà avec cet email' : 'An account with this email already exists');
      } else {
        setError(error.message);
      }
    } else {
      setSuccess(language === 'fr' ? 'Compte créé avec succès ! Vérifiez votre email.' : 'Account created successfully! Please check your email.');
    }
    
    setIsLoading(false);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!validateEmail(email)) {
      setError(language === 'fr' ? 'Format d\'email invalide' : 'Invalid email format');
      setIsLoading(false);
      return;
    }

    const { error } = await resetPassword(email);
    
    if (error) {
      setError(error.message);
    } else {
      setSuccess(language === 'fr' ? 'Email de réinitialisation envoyé !' : 'Password reset email sent!');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-pearl-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md luxury-shadow">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif text-clay-800">
            {language === 'fr' ? 'Bienvenue' : 'Welcome'}
          </CardTitle>
          <CardDescription className="text-clay-600">
            {language === 'fr' ? 'Accédez à votre compte Perle de l\'Atlas' : 'Access your Perle de l\'Atlas account'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {success && (
            <Alert className="mb-4 border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); resetForm(); }}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="signin">{language === 'fr' ? 'Connexion' : 'Sign In'}</TabsTrigger>
              <TabsTrigger value="signup">{language === 'fr' ? 'Inscription' : 'Sign Up'}</TabsTrigger>
              <TabsTrigger value="reset">{language === 'fr' ? 'Mot de passe' : 'Reset'}</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-clay-400" />
                    <Input
                      id="signin-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signin-password">{language === 'fr' ? 'Mot de passe' : 'Password'}</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-clay-400" />
                    <Input
                      id="signin-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-clay-400 hover:text-clay-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full copper-gradient text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (language === 'fr' ? 'Connexion...' : 'Signing in...') : (language === 'fr' ? 'Se connecter' : 'Sign In')}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">{language === 'fr' ? 'Nom complet (optionnel)' : 'Full Name (optional)'}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-clay-400" />
                    <Input
                      id="signup-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10"
                      placeholder={language === 'fr' ? 'Votre nom complet' : 'Your full name'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-clay-400" />
                    <Input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">{language === 'fr' ? 'Mot de passe' : 'Password'}</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-clay-400" />
                    <Input
                      id="signup-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      placeholder={language === 'fr' ? 'Au moins 8 caractères' : 'At least 8 characters'}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-clay-400 hover:text-clay-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">{language === 'fr' ? 'Confirmer le mot de passe' : 'Confirm Password'}</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-clay-400" />
                    <Input
                      id="confirm-password"
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full copper-gradient text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (language === 'fr' ? 'Création...' : 'Creating...') : (language === 'fr' ? 'Créer un compte' : 'Create Account')}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="reset">
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reset-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-clay-400" />
                    <Input
                      id="reset-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full copper-gradient text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (language === 'fr' ? 'Envoi...' : 'Sending...') : (language === 'fr' ? 'Réinitialiser' : 'Reset Password')}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
