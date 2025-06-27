
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

serve(async (req) => {
  const { email, fullName, language = 'fr' } = await req.json()

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const client = new SMTPClient({
      connection: {
        hostname: "s1097.can1.mysecurecloudhost.com",
        port: 465,
        tls: true,
        auth: {
          username: "contact@atlasperle.com",
          password: "Kamaka00.",
        },
      },
    });

    const subject = 'Bienvenue chez Perle de l\'Atlas 🌿'

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Logo-1.png" alt="Perle de l'Atlas" style="max-width: 200px; height: auto;">
        </div>
        
        <h1 style="color: #8B4513; text-align: center; font-size: 28px; margin-bottom: 20px;">
          Bienvenue chez Perle de l'Atlas 🌿
        </h1>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          ${fullName ? `Chère ${fullName},` : 'Bonjour,'}
        </p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          Merci pour votre inscription. Nous sommes ravis de vous accueillir dans l'univers de l'artisanat et du bien-être marocain.
        </p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          Découvrez nos cosmétiques de luxe inspirés des traditions marocaines ancestrales et créés avec passion par nos artisans locaux.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${Deno.env.get('SITE_URL') || 'https://perle-atlas.lovable.app'}" 
             style="display: inline-block; background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
            Découvrir nos produits
          </a>
        </div>
        
        <p style="font-size: 14px; color: #666; text-align: center; margin-top: 30px;">
          Perle de l'Atlas - Cosmétiques de Luxe Marocains
        </p>
      </div>
    `

    await client.send({
      from: "Perle de l'Atlas <contact@atlasperle.com>",
      to: email,
      subject: subject,
      content: htmlContent,
      html: htmlContent,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  } catch (error) {
    console.error('Error sending welcome email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }
})
