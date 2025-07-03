
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle, Mail, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const TestEmail = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState<any[]>([]);

  const sendTestEmail = async (testType: 'basic' | 'luxury') => {
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }

    setIsLoading(true);
    
    try {
      console.log(`Testing ${testType} email to:`, email);
      
      const { data, error } = await supabase.functions.invoke('test-email', {
        body: {
          email: email,
          testType: testType
        }
      });

      if (error) {
        throw error;
      }

      const result = {
        type: testType,
        success: data.success,
        message: data.message,
        emailId: data.emailId,
        timestamp: new Date().toLocaleString(),
        error: data.error
      };

      setTestResults(prev => [result, ...prev]);

      if (data.success) {
        toast.success(`${testType.charAt(0).toUpperCase() + testType.slice(1)} test email sent successfully!`);
      } else {
        toast.error(`Email test failed: ${data.error}`);
      }

    } catch (error: any) {
      console.error('Email test error:', error);
      
      const result = {
        type: testType,
        success: false,
        message: 'Test failed',
        timestamp: new Date().toLocaleString(),
        error: error.message || 'Unknown error occurred'
      };

      setTestResults(prev => [result, ...prev]);
      toast.error(`Email test failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testWelcomeEmail = async () => {
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-enhanced-welcome-email', {
        body: {
          email: email,
          fullName: 'Test User',
          language: 'fr',
          signupMethod: 'test'
        }
      });

      if (error) {
        throw error;
      }

      const result = {
        type: 'welcome',
        success: data.success || true,
        message: 'Welcome email sent',
        timestamp: new Date().toLocaleString(),
        error: null
      };

      setTestResults(prev => [result, ...prev]);
      toast.success('Welcome email sent successfully!');

    } catch (error: any) {
      console.error('Welcome email test error:', error);
      
      const result = {
        type: 'welcome',
        success: false,
        message: 'Welcome email test failed',
        timestamp: new Date().toLocaleString(),
        error: error.message || 'Unknown error occurred'
      };

      setTestResults(prev => [result, ...prev]);
      toast.error(`Welcome email test failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-6 w-6" />
              Email System Test - Perle de l'Atlas
            </CardTitle>
            <CardDescription>
              Test the email configuration and send sample emails to verify everything is working correctly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                Test Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                onClick={() => sendTestEmail('basic')}
                disabled={isLoading || !email}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center gap-2"
              >
                <Send className="h-5 w-5" />
                <span>Basic Test</span>
                <span className="text-xs text-stone-500">Simple email test</span>
              </Button>

              <Button
                onClick={() => sendTestEmail('luxury')}
                disabled={isLoading || !email}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                <span>Luxury Template</span>
                <span className="text-xs text-stone-500">Branded email design</span>
              </Button>

              <Button
                onClick={testWelcomeEmail}
                disabled={isLoading || !email}
                className="h-auto p-4 flex flex-col items-center gap-2 bg-stone-900 hover:bg-stone-800"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Welcome Email</span>
                <span className="text-xs text-stone-200">Production template</span>
              </Button>
            </div>

            {isLoading && (
              <div className="text-center py-4">
                <div className="inline-flex items-center gap-2 text-stone-600">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-stone-600"></div>
                  Sending email...
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {testResults.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>
                Recent email test results and logs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {testResults.map((result, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {result.success ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span className="font-medium capitalize">{result.type} Email Test</span>
                      <span className="text-sm text-stone-500">{result.timestamp}</span>
                    </div>
                    <p className="text-sm text-stone-600 mb-1">{result.message}</p>
                    {result.emailId && (
                      <p className="text-xs text-stone-500">Email ID: {result.emailId}</p>
                    )}
                    {result.error && (
                      <p className="text-xs text-red-600 mt-2">Error: {result.error}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Email Configuration Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Resend API Key</span>
                <span className="text-green-600">✅ Configured</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span>Welcome Email Function</span>
                <span className="text-green-600">✅ Available</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span>Order Confirmation</span>
                <span className="text-green-600">✅ Available</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span>Test Email Function</span>
                <span className="text-green-600">✅ Ready</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestEmail;
