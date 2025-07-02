import { supabase } from '@/integrations/supabase/client';

interface RateLimitConfig {
  action: string;
  maxAttempts: number;
  windowMs: number;
  blockDurationMs?: number;
}

export class ServerSideRateLimiter {
  private static async getUserIdentifier(): Promise<{ userId?: string; ipAddress?: string }> {
    const { data: { user } } = await supabase.auth.getUser();
    
    // In a real application, you'd get the IP from the request
    // For now, we'll use a placeholder or derive from browser info
    const ipAddress = 'client_browser'; // This would be set by the server
    
    return {
      userId: user?.id,
      ipAddress
    };
  }

  static async checkLimit(config: RateLimitConfig): Promise<{ allowed: boolean; remainingAttempts?: number; resetTime?: Date; blocked?: boolean; blockedUntil?: string }> {
    const { userId, ipAddress } = await this.getUserIdentifier();
    
    try {
      // Call the rate limiting edge function
      const { data, error } = await supabase.functions.invoke('check-rate-limit', {
        body: {
          userId,
          ipAddress,
          action: config.action,
          maxAttempts: config.maxAttempts,
          windowMs: config.windowMs,
          blockDurationMs: config.blockDurationMs
        }
      });

      if (error) {
        console.error('Rate limiting check failed:', error);
        // In case of error, allow the request but log it
        return { allowed: true };
      }

      return {
        allowed: data.allowed,
        remainingAttempts: data.remainingAttempts,
        resetTime: data.resetTime ? new Date(data.resetTime) : undefined,
        blocked: data.blocked,
        blockedUntil: data.blockedUntil
      };
    } catch (error) {
      console.error('Rate limiting error:', error);
      // In case of error, allow the request but log it
      return { allowed: true };
    }
  }

  static async recordAttempt(action: string): Promise<void> {
    const { userId, ipAddress } = await this.getUserIdentifier();
    
    try {
      await supabase.functions.invoke('record-rate-limit-attempt', {
        body: {
          userId,
          ipAddress,
          action
        }
      });
    } catch (error) {
      console.error('Failed to record rate limit attempt:', error);
    }
  }
}

// Pre-configured rate limiters for common actions
export const RateLimiters = {
  ORDER_CREATION: {
    action: 'order_creation',
    maxAttempts: 5,
    windowMs: 300000, // 5 minutes
    blockDurationMs: 900000 // 15 minutes
  },
  
  NEWSLETTER_SIGNUP: {
    action: 'newsletter_signup',
    maxAttempts: 3,
    windowMs: 300000, // 5 minutes
    blockDurationMs: 1800000 // 30 minutes
  },
  
  WHOLESALE_INQUIRY: {
    action: 'wholesale_inquiry',
    maxAttempts: 2,
    windowMs: 3600000, // 1 hour
    blockDurationMs: 7200000 // 2 hours
  },
  
  AUTH_ATTEMPT: {
    action: 'auth_attempt',
    maxAttempts: 5,
    windowMs: 900000, // 15 minutes
    blockDurationMs: 1800000 // 30 minutes
  }
};