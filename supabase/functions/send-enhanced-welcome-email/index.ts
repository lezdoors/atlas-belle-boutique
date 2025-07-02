
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

serve(async (req) => {
  const { email, fullName, language = 'fr', type = 'newsletter' } = await req.json()

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

    if (type === 'early_access') {
      subject = '🌿 You\'re In! Welcome to Perle d\'Atlas – Moroccan Wisdom Awaits';
      htmlContent = `
        <div style="font-family: 'Playfair Display', serif; max-width: 600px; margin: 0 auto; padding: 0; background: linear-gradient(135deg, #fefdfb, #f8fafc);">
          <!-- Header -->
          <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #1e293b, #334155); color: white;">
            <img src="https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//Perle%20(Website)-4.png" alt="Perle de l'Atlas" style="max-width: 180px; height: auto; margin-bottom: 20px;">
            
            <h1 style="color: #fbbf24; font-size: 28px; margin: 0; font-weight: 600; letter-spacing: 0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Moroccan Wisdom, Bottled With Elegance ✨
            </h1>
            <p style="margin: 15px 0 0 0; font-size: 16px; color: #e2e8f0; font-style: italic;">
              You don't just wear our scents — you inherit a tradition.
            </p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 40px 30px; background: white; border-radius: 0;">
            <p style="font-size: 18px; line-height: 1.8; color: #1e293b; margin-bottom: 25px; font-style: italic;">
              ${fullName ? `Dear ${fullName},` : 'Hello,'}
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #475569; margin-bottom: 25px;">
              <strong>Crafted in Morocco. Worn by the world.</strong> Welcome to our exclusive circle where ancestral beauty wisdom meets contemporary elegance.
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #475569; margin-bottom: 30px;">
              From rose valleys to your vanity — discover the ritual. Each drop tells the story of our Berber artisans and celebrates Morocco's timeless beauty traditions.
            </p>
            
            <!-- Luxury CTA -->
            <div style="text-align: center; margin: 40px 0;">
              <a href="${Deno.env.get('SITE_URL') || 'https://perle-atlas.lovable.app'}" 
                 style="display: inline-block; background: linear-gradient(135deg, #d97706, #b45309); color: white; padding: 18px 36px; text-decoration: none; border-radius: 30px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px; box-shadow: 0 8px 24px rgba(217, 119, 6, 0.3); transition: all 0.3s ease;">
                Experience Our Grand Opening ✨
              </a>
            </div>
            
            <!-- Luxury Benefits -->
            <div style="background: linear-gradient(135deg, #fbbf24, #f59e0b); padding: 25px; border-radius: 16px; margin: 30px 0; color: white; text-align: center;">
              <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Your Exclusive Heritage Awaits</h3>
              <div style="display: grid; gap: 12px; font-size: 14px; line-height: 1.6;">
                <div>🌹 First access to ancestral beauty collections</div>
                <div>👑 Personalized rituals from Samra, your beauty guide</div>
                <div>🎁 Special launch treasures & artisan stories</div>
                <div>🌿 Behind-the-scenes glimpses of Moroccan craftsmanship</div>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; padding: 30px 20px; background: #f1f5f9; color: #64748b;">
            <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600; color: #1e293b;">
              Perle de l'Atlas - The Soul of Morocco
            </p>
            <p style="margin: 0; font-size: 12px; font-style: italic;">
              Ancestral Wisdom • Artisanal Excellence • Luxury Beyond Time
            </p>
          </div>
        </div>
      `;
    } else {
      // Enhanced newsletter welcome email
      subject = 'Bienvenue dans notre univers — Sagesse Marocaine, Embouteillée avec Élégance ✨';
      htmlContent = `
        <div style="font-family: 'Playfair Display', serif; max-width: 600px; margin: 0 auto; padding: 0; background: linear-gradient(135deg, #fefdfb, #f8fafc);">
          <!-- Header -->
          <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #1e293b, #334155); color: white;">
            <img src="https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//Perle%20(Website)-4.png" alt="Perle de l'Atlas" style="max-width: 180px; height: auto; margin-bottom: 20px;">
            
            <h1 style="color: #fbbf24; font-size: 28px; margin: 0; font-weight: 600; letter-spacing: 0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Sagesse Marocaine, Embouteillée avec Élégance ✨
            </h1>
            <p style="margin: 15px 0 0 0; font-size: 16px; color: #e2e8f0; font-style: italic;">
              Vous ne portez pas seulement nos parfums — vous héritez d'une tradition.
            </p>
          </div>
          
          <!-- Main Content -->
          <div style="padding: 40px 30px; background: white;">
            <p style="font-size: 18px; line-height: 1.8; color: #1e293b; margin-bottom: 25px; font-style: italic;">
              ${fullName ? `Chère ${fullName},` : 'Bonjour,'}
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #475569; margin-bottom: 25px;">
              <strong>Artisanat du Maroc. Porté par le monde.</strong> Bienvenue dans notre cercle privilégié où la sagesse ancestrale de la beauté rencontre l'élégance contemporaine.
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #475569; margin-bottom: 30px;">
              Des vallées de roses à votre vanité — découvrez le rituel. Chaque goutte raconte l'histoire de nos artisans berbères et célèbre les traditions intemporelles de beauté du Maroc.
            </p>
            
            <!-- Luxury CTA -->
            <div style="text-align: center; margin: 40px 0;">
              <a href="${Deno.env.get('SITE_URL') || 'https://perle-atlas.lovable.app'}" 
                 style="display: inline-block; background: linear-gradient(135deg, #d97706, #b45309); color: white; padding: 18px 36px; text-decoration: none; border-radius: 30px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px; box-shadow: 0 8px 24px rgba(217, 119, 6, 0.3);">
                Découvrir nos Créations Exclusives ✨
              </a>
            </div>
            
            <!-- Luxury Benefits -->
            <div style="background: linear-gradient(135deg, #fbbf24, #f59e0b); padding: 25px; border-radius: 16px; margin: 30px 0; color: white; text-align: center;">
              <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Votre Héritage Exclusif vous Attend</h3>
              <div style="display: grid; gap: 12px; font-size: 14px; line-height: 1.6;">
                <div>🌹 Conseils personnalisés de Samra, votre guide beauté</div>
                <div>👑 Accès prioritaire aux collections ancestrales</div>
                <div>🎁 Rituels de beauté secrets & histoires d'artisans</div>
                <div>🌿 Découvertes exclusives de l'artisanat marocain</div>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; padding: 30px 20px; background: #f1f5f9; color: #64748b;">
            <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600; color: #1e293b;">
              Perle de l'Atlas - L'Âme du Maroc
            </p>
            <p style="margin: 0; font-size: 12px; font-style: italic;">
              Sagesse Ancestrale • Excellence Artisanale • Luxe Intemporel
            </p>
          </div>
        </div>
      `;
    }

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
    console.error('Error sending enhanced welcome email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }
})
