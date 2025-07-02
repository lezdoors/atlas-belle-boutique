import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RecordAttemptRequest {
  userId?: string;
  ipAddress?: string;
  action: string;
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

    const { userId, ipAddress, action }: RecordAttemptRequest = await req.json();

    if (!action) {
      return new Response(JSON.stringify({ error: 'Action is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (!userId && !ipAddress) {
      return new Response(JSON.stringify({ error: 'Either userId or ipAddress is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const now = new Date();
    const resetTime = new Date(now.getTime() + 3600000); // 1 hour default window

    // Check for existing record in the current window
    let query = supabaseClient
      .from('rate_limits')
      .select('*')
      .eq('action', action)
      .gte('reset_time', now.toISOString());

    if (userId) {
      query = query.eq('user_id', userId);
    } else {
      query = query.eq('ip_address', ipAddress);
    }

    const { data: existingRecords, error: queryError } = await query;

    if (queryError) {
      console.error('Query error:', queryError);
      return new Response(JSON.stringify({ error: 'Database query failed' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (existingRecords && existingRecords.length > 0) {
      // Update existing record
      const record = existingRecords[0];
      const { error: updateError } = await supabaseClient
        .from('rate_limits')
        .update({
          attempt_count: record.attempt_count + 1,
          last_attempt: now.toISOString()
        })
        .eq('id', record.id);

      if (updateError) {
        console.error('Update error:', updateError);
        return new Response(JSON.stringify({ error: 'Failed to update rate limit record' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    } else {
      // Create new record
      const { error: insertError } = await supabaseClient
        .from('rate_limits')
        .insert({
          user_id: userId || null,
          ip_address: ipAddress || null,
          action,
          attempt_count: 1,
          last_attempt: now.toISOString(),
          reset_time: resetTime.toISOString()
        });

      if (insertError) {
        console.error('Insert error:', insertError);
        return new Response(JSON.stringify({ error: 'Failed to create rate limit record' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Record attempt error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});