import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RateLimitRequest {
  userId?: string;
  ipAddress?: string;
  action: string;
  maxAttempts: number;
  windowMs: number;
  blockDurationMs?: number;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );

    const { userId, ipAddress, action, maxAttempts, windowMs, blockDurationMs }: RateLimitRequest = await req.json();

    if (!action) {
      return new Response(JSON.stringify({ error: 'Action is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const now = new Date();
    const windowStart = new Date(now.getTime() - windowMs);

    // Check for existing rate limit record
    let query = supabaseClient
      .from('rate_limits')
      .select('*')
      .eq('action', action)
      .gte('last_attempt', windowStart.toISOString());

    if (userId) {
      query = query.eq('user_id', userId);
    } else if (ipAddress) {
      query = query.eq('ip_address', ipAddress);
    } else {
      return new Response(JSON.stringify({ error: 'Either userId or ipAddress is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const { data: existingRecords, error: queryError } = await query;

    if (queryError) {
      console.error('Query error:', queryError);
      return new Response(JSON.stringify({ error: 'Database query failed' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Check if user is currently blocked
    const blockedRecord = existingRecords?.find(record => 
      record.blocked_until && new Date(record.blocked_until) > now
    );

    if (blockedRecord) {
      return new Response(JSON.stringify({
        allowed: false,
        blocked: true,
        blockedUntil: blockedRecord.blocked_until,
        reason: 'Rate limit exceeded - temporarily blocked'
      }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Count attempts in the current window
    const totalAttempts = existingRecords?.reduce((sum, record) => sum + record.attempt_count, 0) || 0;

    if (totalAttempts >= maxAttempts) {
      // Block the user/IP if block duration is specified
      if (blockDurationMs) {
        const blockedUntil = new Date(now.getTime() + blockDurationMs);
        
        await supabaseClient
          .from('rate_limits')
          .upsert({
            user_id: userId || null,
            ip_address: ipAddress || null,
            action,
            attempt_count: totalAttempts + 1,
            last_attempt: now.toISOString(),
            reset_time: new Date(now.getTime() + windowMs).toISOString(),
            blocked_until: blockedUntil.toISOString()
          });

        return new Response(JSON.stringify({
          allowed: false,
          blocked: true,
          blockedUntil: blockedUntil.toISOString(),
          reason: 'Rate limit exceeded - blocked'
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({
        allowed: false,
        remainingAttempts: 0,
        resetTime: new Date(now.getTime() + windowMs).toISOString(),
        reason: 'Rate limit exceeded'
      }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Allow the request
    const remainingAttempts = maxAttempts - totalAttempts;
    const resetTime = new Date(now.getTime() + windowMs);

    return new Response(JSON.stringify({
      allowed: true,
      remainingAttempts,
      resetTime: resetTime.toISOString()
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Rate limit check error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      allowed: true // Default to allowing in case of error
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});