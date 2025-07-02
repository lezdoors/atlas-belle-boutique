
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

serve(async (req) => {
  const { type, email, language = 'fr' } = await req.json()

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
          password: Deno.env.get('EMAIL_PASSWORD'),
        },
      },
    });

    let subject = '';
    let htmlContent = '';

    if (type === 'early_access_signup') {
      subject = `🌟 Nouvelle inscription - Accès anticipé - ${email}`;
      htmlContent = `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f6f3; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px;">
            <h1 style="color: #8B4513; font-size: 24px; margin: 0; font-weight: 300;">
              Nouvelle inscription - Accès anticipé ✨
            </h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a; margin-bottom: 20px;">
              <strong>Email :</strong> ${email}
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a; margin-bottom: 20px;">
              <strong>Type :</strong> Inscription à l'accès anticipé
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a; margin-bottom: 20px;">
              <strong>Langue :</strong> ${language === 'fr' ? 'Français' : 'Anglais'}
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a;">
              <strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}
            </p>
          </div>
          
          <div style="text-align: center; padding: 15px; background: #D4AF37; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">
              Perle de l'Atlas - Notification automatique
            </p>
          </div>
        </div>
      `;
    } else if (type === 'newsletter_signup') {
      subject = `📧 Nouvelle inscription newsletter - ${email}`;
      htmlContent = `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f6f3; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px;">
            <h1 style="color: #8B4513; font-size: 24px; margin: 0; font-weight: 300;">
              Nouvelle inscription newsletter 📧
            </h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a; margin-bottom: 20px;">
              <strong>Email :</strong> ${email}
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a; margin-bottom: 20px;">
              <strong>Type :</strong> Inscription newsletter
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a; margin-bottom: 20px;">
              <strong>Langue :</strong> ${language === 'fr' ? 'Français' : 'Anglais'}
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a;">
              <strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}
            </p>
          </div>
          
          <div style="text-align: center; padding: 15px; background: #D4AF37; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">
              Perle de l'Atlas - Notification automatique
            </p>
          </div>
        </div>
      `;
    }

    await client.send({
      from: "Perle de l'Atlas <contact@atlasperle.com>",
      to: "contact@atlasperle.com",
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
    console.error('Error sending admin notification:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }
})
