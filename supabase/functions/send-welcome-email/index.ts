
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
      subject = '🌿 Welcome to Perle d\'Atlas – You\'re In!';
      htmlContent = `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #f8f6f3, #faf9f7); border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 40px; padding: 30px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <img src="https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//Perle%20(Website)-4.png" alt="Perle de l'Atlas" style="max-width: 200px; height: auto; margin-bottom: 20px;">
            
            <h1 style="color: #8B4513; font-size: 32px; margin: 20px 0; font-weight: 300; letter-spacing: 1px;">
              🌿 Welcome to Perle d'Atlas – You're In!
            </h1>
          </div>
          
          <div style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 30px;">
            <p style="font-size: 18px; line-height: 1.8; color: #4a4a4a; margin-bottom: 25px;">
              ${fullName ? `Dear ${fullName},` : 'Hello,'}
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #4a4a4a; margin-bottom: 25px;">
              Thank you for joining the journey. You'll be the first to discover our handcrafted Moroccan creations and grand opening surprises. ✨
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #4a4a4a; margin-bottom: 25px;">
              Our exclusive early access collection features luxury cosmetics inspired by Morocco's ancestral traditions, crafted with passion by our local artisans in harmony with nature and your beauty.
            </p>
            
            <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); padding: 3px; border-radius: 30px; margin: 40px 0;">
              <div style="background: white; border-radius: 27px; padding: 2px;">
                <a href="${Deno.env.get('SITE_URL') || 'https://perle-atlas.lovable.app'}" 
                   style="display: block; background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 15px 40px; text-decoration: none; border-radius: 25px; font-weight: 600; text-align: center; font-size: 16px; letter-spacing: 0.5px;">
                  Stay Tuned for Our Grand Opening
                </a>
              </div>
            </div>
            
            <div style="border-top: 1px solid #e5e5e5; padding-top: 25px; margin-top: 30px;">
              <p style="font-size: 14px; color: #8B4513; margin-bottom: 15px; font-weight: 600;">
                🌟 Your Early Access Benefits:
              </p>
              <ul style="font-size: 14px; color: #666; line-height: 1.6; padding-left: 20px;">
                <li>First access to exclusive collections</li>
                <li>Special launch discounts</li>
                <li>Behind-the-scenes artisan stories</li>
                <li>Personalized beauty consultations with Samra</li>
              </ul>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px;">
            <p style="font-size: 12px; color: #999; margin-bottom: 10px;">
              Perle de l'Atlas - The Art of Moroccan Beauty
            </p>
            <p style="font-size: 12px; color: #999;">
              Artisanal Excellence • Ancestral Tradition • Natural Luxury
            </p>
          </div>
        </div>
      `;
    } else {
      // Default newsletter welcome email
      subject = 'Bienvenue chez Perle de l\'Atlas ✨';
      htmlContent = `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #f8f6f3, #faf9f7); border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 40px; padding: 30px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <img src="https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//Perle%20(Website)-4.png" alt="Perle de l'Atlas" style="max-width: 200px; height: auto; margin-bottom: 20px;">
            
            <h1 style="color: #8B4513; font-size: 32px; margin: 20px 0; font-weight: 300; letter-spacing: 1px;">
              Bienvenue chez Perle de l'Atlas ✨
            </h1>
          </div>
          
          <div style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 30px;">
            <p style="font-size: 18px; line-height: 1.8; color: #4a4a4a; margin-bottom: 25px; font-style: italic;">
              ${fullName ? `Chère ${fullName},` : 'Bonjour,'}
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #4a4a4a; margin-bottom: 25px;">
              Merci de rejoindre notre univers raffiné. <strong>Samra</strong>, votre conseillère Perle de l'Atlas, est à votre service. 🌿
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #4a4a4a; margin-bottom: 25px;">
              Découvrez nos cosmétiques de luxe inspirés des traditions marocaines ancestrales, créés avec passion par nos artisans locaux dans le respect de la nature et de votre beauté.
            </p>
            
            <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); padding: 3px; border-radius: 30px; margin: 40px 0;">
              <div style="background: white; border-radius: 27px; padding: 2px;">
                <a href="${Deno.env.get('SITE_URL') || 'https://perle-atlas.lovable.app'}" 
                   style="display: block; background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 15px 40px; text-decoration: none; border-radius: 25px; font-weight: 600; text-align: center; font-size: 16px; letter-spacing: 0.5px;">
                  Découvrir nos Créations Exclusives
                </a>
              </div>
            </div>
            
            <div style="border-top: 1px solid #e5e5e5; padding-top: 25px; margin-top: 30px;">
              <p style="font-size: 14px; color: #8B4513; margin-bottom: 15px; font-weight: 600;">
                🌿 Vos Avantages Exclusifs :
              </p>
              <ul style="font-size: 14px; color: #666; line-height: 1.6; padding-left: 20px;">
                <li>Conseils personnalisés de Samra</li>
                <li>Accès prioritaire aux nouvelles collections</li>
                <li>Rituels de beauté ancestraux</li>
                <li>Livraison soignée dans un écrin de luxe</li>
              </ul>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px;">
            <p style="font-size: 12px; color: #999; margin-bottom: 10px;">
              Perle de l'Atlas - L'Art de la Beauté Marocaine
            </p>
            <p style="font-size: 12px; color: #999;">
              Artisanat d'Excellence • Tradition Ancestrale • Luxe Naturel
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
    console.error('Error sending welcome email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  }
})
