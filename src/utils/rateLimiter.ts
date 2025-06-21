
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private limits: Map<string, RateLimitEntry> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number = 10, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  public checkLimit(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const entry = this.limits.get(identifier);

    if (!entry || now > entry.resetTime) {
      // Create new entry or reset expired one
      const newEntry: RateLimitEntry = {
        count: 1,
        resetTime: now + this.windowMs
      };
      this.limits.set(identifier, newEntry);
      
      return {
        allowed: true,
        remaining: this.maxRequests - 1,
        resetTime: newEntry.resetTime
      };
    }

    if (entry.count >= this.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime
      };
    }

    entry.count++;
    this.limits.set(identifier, entry);

    return {
      allowed: true,
      remaining: this.maxRequests - entry.count,
      resetTime: entry.resetTime
    };
  }

  public cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.limits.entries()) {
      if (now > entry.resetTime) {
        this.limits.delete(key);
      }
    }
  }
}

// Create rate limiters for different actions
export const searchRateLimiter = new RateLimiter(20, 60000); // 20 searches per minute
export const formRateLimiter = new RateLimiter(5, 300000); // 5 form submissions per 5 minutes
export const chatRateLimiter = new RateLimiter(30, 60000); // 30 chat messages per minute

// Helper to get user identifier (IP simulation)
export const getUserIdentifier = (): string => {
  // In a real app, this would be actual IP or user ID
  return `user_${Date.now() % 1000000}`;
};

// Cleanup expired entries periodically
setInterval(() => {
  searchRateLimiter.cleanup();
  formRateLimiter.cleanup();
  chatRateLimiter.cleanup();
}, 300000); // Cleanup every 5 minutes
