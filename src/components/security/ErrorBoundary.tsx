
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Log error securely (remove sensitive info)
    const sanitizedError = {
      message: error.message,
      stack: error.stack?.substring(0, 500), // Limit stack trace
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    console.error('Error Boundary caught an error:', sanitizedError);
    
    // In production, send to error monitoring service
    if (process.env.NODE_ENV === 'production') {
      // This would integrate with services like Sentry, LogRocket, etc.
      this.reportError(sanitizedError);
    }
  }

  private reportError = (errorData: any) => {
    // Placeholder for error reporting service
    console.log('Reporting error to monitoring service:', errorData);
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-pearl-50 p-4">
          <Card className="max-w-md w-full p-8 text-center">
            <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-clay-800 mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-clay-600 mb-6">
              We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="space-y-3">
              <Button 
                onClick={this.handleRetry}
                className="w-full copper-gradient text-white"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="w-full"
              >
                Go Home
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-clay-500">
                  Error Details (Dev Mode)
                </summary>
                <pre className="text-xs bg-gray-100 p-2 mt-2 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
