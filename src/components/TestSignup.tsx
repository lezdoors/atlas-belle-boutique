
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, User, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { validateEmail, sanitizeInput } from '@/utils/inputValidation';

const TestSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

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

    try {
      // Store user data in Supabase
      const { data: userData, error: userError } = await supabase
        .from('users')
        .insert([
          {
            first_name: sanitizeInput(firstName),
            email: sanitizeInput(email),
            user_id: null
          }
        ])
        .select();

      if (userError) {
        console.error('Error saving user data:', userError);
        throw new Error('Failed to save user data');
      }

      // Send welcome email
      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: {
          email: sanitizeInput(email),
          fullName: sanitizeInput(firstName),
          language: 'fr'
        }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
        toast({
          title: 'Utilisateur créé',
          description: 'L\'utilisateur a été créé mais l\'email n\'a pas pu être envoyé. Vérifiez la configuration SMTP.',
          variant: 'destructive',
        });
      } else {
        setIsSuccess(true);
        toast({
          title: 'Test réussi !',
          description: 'L\'utilisateur a été créé et l\'email de bienvenue a été envoyé.',
        });
      }

      setFirstName('');
      setEmail('');
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Test signup error:', error);
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
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <CheckCircle className="h-8 w-8" />
            <div className="text-center">
              <h3 className="font-semibold text-lg">Test réussi !</h3>
              <p className="text-sm text-gray-600">L'email de bienvenue a été envoyé</p>
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
          <span>Test d'Inscription</span>
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
              'Tester l\'inscription'
            )}
          </Button>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start text-blue-800 text-sm">
              <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Note de test :</p>
                <p>Ceci créera un utilisateur test et enverra un email de bienvenue à l'adresse fournie pour vérifier la configuration SMTP.</p>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TestSignup;
