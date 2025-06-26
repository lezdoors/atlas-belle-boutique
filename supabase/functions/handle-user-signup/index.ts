
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { record } = await req.json()
  
  // Extract user information
  const { email, raw_user_meta_data } = record
  const fullName = raw_user_meta_data?.full_name || ''
  const language = raw_user_meta_data?.preferred_language || 'fr'

  try {
    // Call the welcome email function
    const emailResponse = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/send-welcome-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
      },
      body: JSON.stringify({
        email,
        fullName,
        language,
      }),
    })

    if (!emailResponse.ok) {
      console.error('Failed to send welcome email:', await emailResponse.text())
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in handle-user-signup:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
