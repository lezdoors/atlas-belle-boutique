import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { validateAuthUser } from '@/utils/securityValidation';
import { ServerSideRateLimiter } from '@/utils/serverSideRateLimiting';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle } from 'lucide-react';

interface SecureOperationWrapperProps {
  children: React.ReactNode;
  operation: string;
  rateLimitConfig?: {
    action: string;
    maxAttempts: number;
    windowMs: number;
    blockDurationMs?: number;
  };
  requireAuth?: boolean;
  onSecurityFailure?: () => void;
  fallbackComponent?: React.ReactNode;
}

const SecureOperationWrapper = ({
  children,
  operation,
  rateLimitConfig,
  requireAuth = true,
  onSecurityFailure,
  fallbackComponent
}: SecureOperationWrapperProps) => {
  const { user, loading } = useAuth();
  const [isSecurityCheck, setIsSecurityCheck] = useState(true);
  const [securityStatus, setSecurityStatus] = useState<{
    authenticated: boolean;
    rateLimited: boolean;
    error?: string;
  }>({ authenticated: false, rateLimited: false });

  useEffect(() => {
    const performSecurityCheck = async () => {
      setIsSecurityCheck(true);
      
      try {
        // Authentication check
        if (requireAuth && !validateAuthUser(user)) {
          setSecurityStatus({
            authenticated: false,
            rateLimited: false,
            error: 'Authentication required for this operation'
          });
          onSecurityFailure?.();
          return;
        }

        // Rate limiting check
        if (rateLimitConfig) {
          const rateLimitResult = await ServerSideRateLimiter.checkLimit(rateLimitConfig);
          if (!rateLimitResult.allowed) {
            setSecurityStatus({
              authenticated: true,
              rateLimited: true,
              error: rateLimitResult.blocked 
                ? 'Operation temporarily blocked due to rate limiting'
                : 'Too many attempts. Please wait before trying again.'
            });
            onSecurityFailure?.();
            return;
          }
        }

        // All security checks passed
        setSecurityStatus({
          authenticated: true,
          rateLimited: false
        });
      } catch (error) {
        console.error('Security check error:', error);
        setSecurityStatus({
          authenticated: false,
          rateLimited: false,
          error: 'Security check failed'
        });
        onSecurityFailure?.();
      } finally {
        setIsSecurityCheck(false);
      }
    };

    if (!loading) {
      performSecurityCheck();
    }
  }, [user, loading, requireAuth, rateLimitConfig, operation, onSecurityFailure]);

  // Show loading state during security check
  if (loading || isSecurityCheck) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex items-center gap-3 text-stone-600">
          <Shield className="h-5 w-5 animate-spin" />
          <span>Security check in progress...</span>
        </div>
      </div>
    );
  }

  // Show error state if security checks failed
  if (!securityStatus.authenticated || securityStatus.rateLimited) {
    if (fallbackComponent) {
      return <>{fallbackComponent}</>;
    }

    return (
      <div className="flex flex-col items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center gap-3 text-red-700 mb-4">
          <AlertTriangle className="h-6 w-6" />
          <h3 className="font-semibold">Access Denied</h3>
        </div>
        
        <p className="text-red-600 text-center mb-4">
          {securityStatus.error || 'You do not have permission to access this operation.'}
        </p>

        {!securityStatus.authenticated && (
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/auth'}
            className="border-red-300 text-red-700 hover:bg-red-100"
          >
            Sign In Required
          </Button>
        )}

        {securityStatus.rateLimited && (
          <p className="text-sm text-red-500 mt-2">
            Please wait before trying again or contact support if this persists.
          </p>
        )}
      </div>
    );
  }

  // Security checks passed, render children
  return <>{children}</>;
};

export default SecureOperationWrapper;