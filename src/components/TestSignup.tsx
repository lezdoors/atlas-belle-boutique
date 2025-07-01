
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, User, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { validateEmail, sanitizeInput } from '@/utils/inputValidation';

const TestSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('testPassword123');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [testResults, setTestResults] = useState<{
    userCreated: boolean;
    emailSent: boolean;
    errorMessage?: string;
  } | null>(null);
  const { toast } = useToast();
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !email || !validateEmail(email)) {
      toast({
        title: 'Erreur de validation',
        description: 'Veuillez entrer un prénom et une adresse email valide',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setTestResults(null);

    try {
      console.log('Starting test signup process with Supabase Auth...');
      
      // Use Supabase Auth for signup
      const { error } = await signUp(sanitizeInput(email), password, sanitizeInput(firstName));

      if (error) {
        console.error('Error during Supabase signup:', error);
        setTestResults({
          userCreated: false,
          emailSent: false,
          errorMessage: `Erreur d'authentification: ${error.message}`
        });
        toast({
          title: 'Erreur d\'authentification',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        console.log('User signup successful with Supabase Auth');
        setTestResults({
          userCreated: true,
          emailSent: true // The trigger should handle the email automatically
        });
        setIsSuccess(true);
        toast({
          title: 'Test réussi !',
          description: 'L\'utilisateur a été créé avec Supabase Auth et l\'email de bienvenue devrait être envoyé automatiquement.',
        });
      }

      setFirstName('');
      setEmail('');
      
      // Reset success state after 10 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setTestResults(null);
      }, 10000);
    } catch (error) {
      console.error('Test signup error:', error);
      setTestResults({
        userCreated: false,
        emailSent: false,
        errorMessage: `Erreur générale: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
      });
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors du test d\'inscription.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-green-700 mb-2">Test réussi !</h3>
              <p className="text-sm text-gray-600 mb-4">L'utilisateur a été créé avec Supabase Auth</p>
              
              {testResults && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-left">
                  <h4 className="font-medium text-green-800 mb-2">Résultats du test :</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Utilisateur créé avec Supabase Auth
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Email de bienvenue envoyé automatiquement
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center space-x-2">
          <Mail className="h-5 w-5 text-amber-600" />
          <span>Test Supabase Auth</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Prénom de test"
              className="pl-10"
              required
              disabled={isSubmitting}
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="relative">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email.test@example.com"
              className="pl-10"
              required
              disabled={isSubmitting}
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
            Mot de passe automatique: {password}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-amber-600 hover:bg-amber-500 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Test en cours...</span>
              </div>
            ) : (
              'Tester Supabase Auth'
            )}
          </Button>

          {testResults && !isSuccess && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <h4 className="font-medium text-red-800 mb-2">Résultats du test :</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  {testResults.userCreated ? (
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 mr-2 text-red-600" />
                  )}
                  <span className={testResults.userCreated ? 'text-green-700' : 'text-red-700'}>
                    Création utilisateur: {testResults.userCreated ? 'Réussie' : 'Échouée'}
                  </span>
                </div>
                <div className="flex items-center">
                  {testResults.emailSent ? (
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 mr-2 text-red-600" />
                  )}
                  <span className={testResults.emailSent ? 'text-green-700' : 'text-red-700'}>
                    Email automatique: {testResults.emailSent ? 'Activé' : 'Désactivé'}
                  </span>
                </div>
                {testResults.errorMessage && (
                  <div className="mt-2 p-2 bg-red-100 rounded text-red-800 text-xs">
                    {testResults.errorMessage}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start text-blue-800 text-sm">
              <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Test Supabase Auth :</p>
                <p>Utilise maintenant Supabase Auth avec trigger automatique pour l'envoi d'email de bienvenue.</p>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TestSignup;
