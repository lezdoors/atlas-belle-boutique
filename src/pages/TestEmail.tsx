
import TestSignup from '@/components/TestSignup';

const TestEmail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 to-beige-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-light text-clay-800 mb-4">
            Test de Fonctionnalité Email
          </h1>
          <p className="text-clay-600 max-w-2xl mx-auto">
            Utilisez ce formulaire pour tester la création d'utilisateur et l'envoi automatique d'emails de bienvenue.
          </p>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Configuration SMTP :</strong> L'email sera envoyé depuis contact@atlasperle.com avec la configuration sécurisée.
            </p>
          </div>
        </div>
        
        <TestSignup />
      </div>
    </div>
  );
};

export default TestEmail;
