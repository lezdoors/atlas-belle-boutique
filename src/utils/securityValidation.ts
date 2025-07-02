
import DOMPurify from 'dompurify';

// Input validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, '')) && phone.length <= 20;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 1 && name.length <= 100 && /^[a-zA-ZÀ-ÿ\s\-'\.]+$/.test(name);
};

export const validateText = (text: string, maxLength: number = 1000): boolean => {
  return text.length <= maxLength;
};

export const validateQuantity = (quantity: number): boolean => {
  return Number.isInteger(quantity) && quantity > 0 && quantity <= 1000;
};

export const validatePrice = (price: number): boolean => {
  return price > 0 && price <= 1000000 && Number.isFinite(price);
};

// Sanitization utilities
export const sanitizeHtml = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

// Rate limiting utility (client-side basic implementation)
class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number }> = new Map();

  checkLimit(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const record = this.attempts.get(key);

    if (!record || now > record.resetTime) {
      this.attempts.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (record.count >= maxAttempts) {
      return false;
    }

    record.count++;
    return true;
  }
}

export const rateLimiter = new RateLimiter();

// Authentication state validation
export const validateAuthUser = (user: any): boolean => {
  return user && user.id && user.email && user.aud === 'authenticated';
};

// CSRF token generation (for forms)
export const generateCSRFToken = (): string => {
  return crypto.randomUUID();
};

// Secure form data preparation
export const prepareSecureFormData = (data: Record<string, any>): Record<string, any> => {
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};
