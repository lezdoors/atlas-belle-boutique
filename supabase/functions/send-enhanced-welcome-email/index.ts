import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("EMAIL_PASSWORD"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  fullName?: string;
  language?: string;
  signupMethod?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, fullName, language = 'fr', signupMethod = 'email' }: WelcomeEmailRequest = await req.json();

    const emailTemplates = {
      fr: {
        subject: "Bienvenue chez Perle de l'Atlas ! 🌟",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2c2c2c;">Bienvenue chez Perle de l'Atlas</h1>
            </div>
            <p>Bonjour ${fullName || 'cher client'},</p>
            <p>Nous sommes ravis de vous accueillir ! Votre inscription via ${signupMethod} a été confirmée.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://atlasperle.com/dashboard" style="background-color: #2c2c2c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Accéder à mon espace</a>
            </div>
            <p>L'équipe Perle de l'Atlas</p>
          </div>
        `
      },
      en: {
        subject: "Welcome to Perle de l'Atlas! 🌟",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2c2c2c;">Welcome to Perle de l'Atlas</h1>
            </div>
            <p>Hello ${fullName || 'valued customer'},</p>
            <p>We are delighted to welcome you! Your registration via ${signupMethod} has been confirmed.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://atlasperle.com/dashboard" style="background-color: #2c2c2c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Access my account</a>
            </div>
            <p>The Perle de l'Atlas Team</p>
          </div>
        `
      }
    };

    const template = emailTemplates[language as keyof typeof emailTemplates] || emailTemplates.fr;

    const emailResponse = await resend.emails.send({
      from: "Perle de l'Atlas <support@atlasperle.com>",
      to: [email],
      subject: template.subject,
      html: template.html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);