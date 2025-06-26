
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  const { email, fullName, language = 'fr' } = await req.json()

  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'RESEND_API_KEY not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const subject = language === 'fr' 
    ? 'Bienvenue chez Perle de l\'Atlas'
    : 'Welcome to Perle de l\'Atlas'

  const htmlContent = language === 'fr' 
    ? `
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
          Merci pour votre inscription. Nous sommes ravis de vous compter parmi notre communauté.
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
    : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Logo-1.png" alt="Perle de l'Atlas" style="max-width: 200px; height: auto;">
        </div>
        
        <h1 style="color: #8B4513; text-align: center; font-size: 28px; margin-bottom: 20px;">
          Welcome to Perle de l'Atlas 🌿
        </h1>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          ${fullName ? `Dear ${fullName},` : 'Hello,'}
        </p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          Thank you for joining our community. We're delighted to have you with us.
        </p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          Discover our luxury cosmetics inspired by ancestral Moroccan traditions and crafted with passion by our local artisans.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${Deno.env.get('SITE_URL') || 'https://perle-atlas.lovable.app'}" 
             style="display: inline-block; background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
            Discover our products
          </a>
        </div>
        
        <p style="font-size: 14px; color: #666; text-align: center; margin-top: 30px;">
          Perle de l'Atlas - Luxury Moroccan Cosmetics
        </p>
      </div>
    `

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Perle de l\'Atlas <noreply@perle-atlas.com>',
        to: [email],
        subject: subject,
        html: htmlContent,
      }),
    })

    if (res.ok) {
      const data = await res.json()
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      const error = await res.text()
      return new Response(JSON.stringify({ error }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
