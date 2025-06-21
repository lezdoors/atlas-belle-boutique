
// CSRF Protection utilities
class CSRFProtection {
  private static instance: CSRFProtection;
  private token: string | null = null;
  private readonly tokenName = 'csrf_token';
  private readonly headerName = 'X-CSRF-Token';

  private constructor() {
    this.generateToken();
  }

  public static getInstance(): CSRFProtection {
    if (!CSRFProtection.instance) {
      CSRFProtection.instance = new CSRFProtection();
    }
    return CSRFProtection.instance;
  }

  private generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    this.token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    
    // Store in sessionStorage for validation
    sessionStorage.setItem(this.tokenName, this.token);
    return this.token;
  }

  public getToken(): string {
    if (!this.token) {
      this.generateToken();
    }
    return this.token!;
  }

  public validateToken(submittedToken: string): boolean {
    const storedToken = sessionStorage.getItem(this.tokenName);
    return storedToken === submittedToken && submittedToken.length === 64;
  }

  public getHeaders(): Record<string, string> {
    return {
      [this.headerName]: this.getToken()
    };
  }

  public addToFormData(formData: FormData): FormData {
    formData.append(this.tokenName, this.getToken());
    return formData;
  }

  public refreshToken(): string {
    return this.generateToken();
  }
}

// Export singleton instance
export const csrfProtection = CSRFProtection.getInstance();

// Helper function for fetch requests
export const securedFetch = (url: string, options: RequestInit = {}): Promise<Response> => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...csrfProtection.getHeaders()
  };

  const securedOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  };

  return fetch(url, securedOptions);
};
