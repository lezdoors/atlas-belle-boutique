
import DOMPurify from 'dompurify';

// Input sanitization utilities
export const sanitizeInput = (input: string): string => {
  // Remove potentially dangerous characters and scripts
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  }).trim();
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u'],
    ALLOWED_ATTR: []
  });
};

// Email validation with proper regex
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
};

// Phone number validation
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Name validation (letters, spaces, hyphens, apostrophes only)
export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,50}$/;
  return nameRegex.test(name);
};

// Message validation (max length, no scripts)
export const validateMessage = (message: string): { isValid: boolean; error?: string } => {
  if (message.length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters long' };
  }
  if (message.length > 1000) {
    return { isValid: false, error: 'Message must not exceed 1000 characters' };
  }
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i
  ];
  
  const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(message));
  if (hasSuspiciousContent) {
    return { isValid: false, error: 'Message contains invalid content' };
  }
  
  return { isValid: true };
};

// Search query validation
export const validateSearchQuery = (query: string): string => {
  // Sanitize and limit search queries
  const sanitized = sanitizeInput(query);
  return sanitized.slice(0, 100); // Max 100 characters for search
};
