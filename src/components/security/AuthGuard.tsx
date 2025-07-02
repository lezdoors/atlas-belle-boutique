
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { validateAuthUser } from '@/utils/securityValidation';
import { toast } from 'sonner';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  requireAuth?: boolean;
}

const AuthGuard = ({ children, fallback = null, requireAuth = true }: AuthGuardProps) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && requireAuth && !validateAuthUser(user)) {
      toast.error('Authentification requise pour accéder à cette fonctionnalité');
    }
  }, [user, loading, requireAuth]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-copper-600"></div>
      </div>
    );
  }

  if (requireAuth && !validateAuthUser(user)) {
    return fallback || (
      <div className="text-center p-8">
        <p className="text-clay-600">Veuillez vous connecter pour accéder à cette page.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
