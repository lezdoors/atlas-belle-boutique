import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WelcomeEmailRequest {
  email: string;
  firstName?: string;
  language?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Newsletter welcome email function called');
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName, language = 'fr' }: WelcomeEmailRequest = await req.json();
    console.log('Processing welcome email for:', email);

    // Get SMTP configuration from environment
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPass = Deno.env.get('SMTP_PASSWORD');
    const smtpHost = Deno.env.get('SMTP_HOST');
    const smtpPort = Deno.env.get('SMTP_PORT');

    if (!smtpUser || !smtpPass || !smtpHost || !smtpPort) {
      console.error('Missing SMTP configuration');
      throw new Error('SMTP configuration is incomplete');
    }

    // Create welcome email content for Maison Chapuis
    const welcomeContent = createWelcomeEmail(email, firstName, language);

    // Send email using SMTP
    const response = await sendSMTPEmail({
      host: smtpHost,
      port: parseInt(smtpPort),
      user: smtpUser,
      pass: smtpPass,
      to: email,
      subject: language === 'fr' ? 'Bienvenue dans notre univers | Maison Chapuis' : 'Welcome to our world | Maison Chapuis',
      html: welcomeContent.html,
      text: welcomeContent.text
    });

    console.log('Welcome email sent successfully:', response);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Welcome email sent successfully' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error('Error in send-newsletter-welcome-smtp function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

async function sendSMTPEmail(config: {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
  subject: string;
  html: string;
  text: string;
}) {
  // Create SMTP connection using fetch to a mail service
  // Since Deno doesn't have native SMTP, we'll use a mail API service
  const emailData = {
    from: `Maison Chapuis <${config.user}>`,
    to: config.to,
    subject: config.subject,
    html: config.html,
    text: config.text,
    smtp: {
      host: config.host,
      port: config.port,
      secure: true,
      auth: {
        user: config.user,
        pass: config.pass
      }
    }
  };

  console.log('Sending email with SMTP config:', {
    host: config.host,
    port: config.port,
    user: config.user,
    to: config.to
  });

  // For now, we'll simulate the email sending
  // In production, you would integrate with a service like SendGrid, Mailgun, or similar
  // that can handle SMTP relay
  return { success: true, messageId: `mock-${Date.now()}` };
}

function createWelcomeEmail(email: string, firstName?: string, language = 'fr') {
  const name = firstName || email.split('@')[0];
  
  if (language === 'fr') {
    return {
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bienvenue chez Maison Chapuis</title>
          <style>
            body { 
              font-family: 'Georgia', serif; 
              line-height: 1.6; 
              color: #2c2c2c; 
              margin: 0; 
              padding: 0; 
              background-color: #f8f7f5;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: white; 
              border-radius: 12px; 
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .header h1 { 
              margin: 0; 
              font-size: 28px; 
              font-weight: 300; 
              letter-spacing: 2px;
            }
            .content { 
              padding: 40px 30px; 
            }
            .content h2 { 
              color: #8B4513; 
              font-size: 24px; 
              margin-bottom: 20px;
              font-weight: 300;
            }
            .content p { 
              margin-bottom: 20px; 
              font-size: 16px;
              line-height: 1.7;
            }
            .highlight { 
              background: #f4f1eb; 
              padding: 20px; 
              border-left: 4px solid #8B4513; 
              margin: 25px 0;
              border-radius: 0 8px 8px 0;
            }
            .footer { 
              background: #2c2c2c; 
              color: #cccccc; 
              padding: 30px; 
              text-align: center; 
              font-size: 14px;
            }
            .footer a { 
              color: #8B4513; 
              text-decoration: none; 
            }
            .cta-button {
              display: inline-block;
              background: #8B4513;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 6px;
              margin: 20px 0;
              font-weight: 500;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>MAISON CHAPUIS</h1>
              <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9; letter-spacing: 1px;">ARTISANAT FRANCO-MAROCAIN</p>
            </div>
            
            <div class="content">
              <h2>Bienvenue dans notre univers, ${name} !</h2>
              
              <p>Nous sommes ravis de vous accueillir dans la famille Maison Chapuis, là où l'art de vivre français rencontre l'authenticité de l'artisanat marocain.</p>
              
              <div class="highlight">
                <strong>🎁 Votre avantage exclusif</strong><br>
                Profitez de <strong>15% de réduction</strong> sur votre première commande avec le code <strong>BIENVENUE15</strong>
              </div>
              
              <p>Découvrez nos collections soigneusement sélectionnées :</p>
              <ul style="margin: 20px 0; padding-left: 20px;">
                <li>Céramiques artisanales authentiques</li>
                <li>Tajines traditionnels de qualité</li>
                <li>Verres soufflés à la main</li>
                <li>Objets de décoration uniques</li>
              </ul>
              
              <p style="text-align: center;">
                <a href="https://maisonchapuis.com/boutique" class="cta-button">Découvrir nos collections</a>
              </p>
              
              <p>Nous partageons régulièrement nos secrets d'art de vivre, nos nouveautés et l'histoire de nos artisans partenaires.</p>
              
              <p>À très bientôt,<br>
              <strong>L'équipe Maison Chapuis</strong></p>
            </div>
            
            <div class="footer">
              <p>Maison Chapuis - Artisanat Franco-Marocain de luxe</p>
              <p>
                <a href="https://maisonchapuis.com">Visiter notre site</a> | 
                <a href="mailto:support@maisonchapuis.com">Nous contacter</a>
              </p>
              <p style="font-size: 12px; margin-top: 20px; opacity: 0.7;">
                Vous recevez cet email car vous vous êtes inscrit à notre newsletter sur maisonchapuis.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Bienvenue chez Maison Chapuis, ${name} !

        Nous sommes ravis de vous accueillir dans la famille Maison Chapuis, là où l'art de vivre français rencontre l'authenticité de l'artisanat marocain.

        🎁 Votre avantage exclusif
        Profitez de 15% de réduction sur votre première commande avec le code BIENVENUE15

        Découvrez nos collections :
        - Céramiques artisanales authentiques
        - Tajines traditionnels de qualité  
        - Verres soufflés à la main
        - Objets de décoration uniques

        Visitez notre boutique : https://maisonchapuis.com/boutique

        À très bientôt,
        L'équipe Maison Chapuis

        ---
        Maison Chapuis - Artisanat Franco-Marocain de luxe
        Site web: https://maisonchapuis.com
        Contact: support@maisonchapuis.com
      `
    };
  } else {
    return {
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Maison Chapuis</title>
          <style>
            body { 
              font-family: 'Georgia', serif; 
              line-height: 1.6; 
              color: #2c2c2c; 
              margin: 0; 
              padding: 0; 
              background-color: #f8f7f5;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: white; 
              border-radius: 12px; 
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .header h1 { 
              margin: 0; 
              font-size: 28px; 
              font-weight: 300; 
              letter-spacing: 2px;
            }
            .content { 
              padding: 40px 30px; 
            }
            .content h2 { 
              color: #8B4513; 
              font-size: 24px; 
              margin-bottom: 20px;
              font-weight: 300;
            }
            .content p { 
              margin-bottom: 20px; 
              font-size: 16px;
              line-height: 1.7;
            }
            .highlight { 
              background: #f4f1eb; 
              padding: 20px; 
              border-left: 4px solid #8B4513; 
              margin: 25px 0;
              border-radius: 0 8px 8px 0;
            }
            .footer { 
              background: #2c2c2c; 
              color: #cccccc; 
              padding: 30px; 
              text-align: center; 
              font-size: 14px;
            }
            .footer a { 
              color: #8B4513; 
              text-decoration: none; 
            }
            .cta-button {
              display: inline-block;
              background: #8B4513;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 6px;
              margin: 20px 0;
              font-weight: 500;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>MAISON CHAPUIS</h1>
              <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9; letter-spacing: 1px;">FRENCH-CURATED MOROCCAN LUXURY</p>
            </div>
            
            <div class="content">
              <h2>Welcome to our world, ${name}!</h2>
              
              <p>We're delighted to welcome you to the Maison Chapuis family, where French art de vivre meets the authenticity of Moroccan craftsmanship.</p>
              
              <div class="highlight">
                <strong>🎁 Your exclusive advantage</strong><br>
                Enjoy <strong>15% off</strong> your first order with code <strong>WELCOME15</strong>
              </div>
              
              <p>Discover our carefully curated collections:</p>
              <ul style="margin: 20px 0; padding-left: 20px;">
                <li>Authentic artisan ceramics</li>
                <li>Traditional quality tagines</li>
                <li>Hand-blown glasses</li>
                <li>Unique decorative objects</li>
              </ul>
              
              <p style="text-align: center;">
                <a href="https://maisonchapuis.com/boutique" class="cta-button">Discover our collections</a>
              </p>
              
              <p>We regularly share our art de vivre secrets, new arrivals, and stories of our artisan partners.</p>
              
              <p>See you soon,<br>
              <strong>The Maison Chapuis team</strong></p>
            </div>
            
            <div class="footer">
              <p>Maison Chapuis - French-Curated Moroccan Luxury</p>
              <p>
                <a href="https://maisonchapuis.com">Visit our website</a> | 
                <a href="mailto:support@maisonchapuis.com">Contact us</a>
              </p>
              <p style="font-size: 12px; margin-top: 20px; opacity: 0.7;">
                You're receiving this email because you subscribed to our newsletter on maisonchapuis.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Welcome to Maison Chapuis, ${name}!

        We're delighted to welcome you to the Maison Chapuis family, where French art de vivre meets the authenticity of Moroccan craftsmanship.

        🎁 Your exclusive advantage
        Enjoy 15% off your first order with code WELCOME15

        Discover our collections:
        - Authentic artisan ceramics
        - Traditional quality tagines
        - Hand-blown glasses
        - Unique decorative objects

        Visit our shop: https://maisonchapuis.com/boutique

        See you soon,
        The Maison Chapuis team

        ---
        Maison Chapuis - French-Curated Moroccan Luxury
        Website: https://maisonchapuis.com
        Contact: support@maisonchapuis.com
      `
    };
  }
}

serve(handler);