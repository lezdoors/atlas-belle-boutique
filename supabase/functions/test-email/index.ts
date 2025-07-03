import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Testing cPanel SMTP email configuration...");
    
    // Check if we have the EMAIL_PASSWORD
    const emailPassword = Deno.env.get("EMAIL_PASSWORD");
    if (!emailPassword) {
      throw new Error("EMAIL_PASSWORD not found in environment variables");
    }
    
    console.log("Email password found, initializing SMTP client...");

    const { email, testType = "basic" } = await req.json();
    
    if (!email) {
      throw new Error("Email address is required");
    }

    // Configure SMTP client based on cPanel settings
    const client = new SMTPClient({
      connection: {
        hostname: "mail.atlasperle.com",
        port: 465,
        tls: true,
        auth: {
          username: "support@atlasperle.com",
          password: emailPassword,
        },
      },
    });

    let subject = "";
    let htmlContent = "";

    if (testType === "luxury") {
      subject = "🌟 Test Email - Perle de l'Atlas";
      htmlContent = `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #f8f6f3, #faf9f7); border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 40px; padding: 30px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #8B4513; font-size: 32px; margin: 20px 0; font-weight: 300; letter-spacing: 1px;">
              Perle de l'Atlas
            </h1>
            <div style="font-family: 'Dancing Script', cursive; font-size: 24px; color: #D4A574; margin-bottom: 20px;">
              Test Email ✨
            </div>
          </div>
          
          <div style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 30px;">
            <p style="font-size: 18px; line-height: 1.8; color: #4a4a4a; margin-bottom: 25px;">
              Félicitations ! 🎉
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; color: #4a4a4a; margin-bottom: 25px;">
              Votre configuration email cPanel fonctionne parfaitement. Ce message confirme que tous les systèmes sont opérationnels pour Perle de l'Atlas.
            </p>
            
            <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); padding: 3px; border-radius: 30px; margin: 40px 0;">
              <div style="background: white; border-radius: 27px; padding: 2px;">
                <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 15px 40px; border-radius: 25px; font-weight: 600; text-align: center; font-size: 16px; letter-spacing: 0.5px;">
                  ✅ cPanel SMTP Active
                </div>
              </div>
            </div>
            
            <div style="border-top: 1px solid #e5e5e5; padding-top: 25px; margin-top: 30px;">
              <p style="font-size: 14px; color: #8B4513; margin-bottom: 15px; font-weight: 600;">
                🌟 Configuration Details:
              </p>
              <ul style="font-size: 14px; color: #666; line-height: 1.6; padding-left: 20px;">
                <li>Service: cPanel SMTP</li>
                <li>Server: mail.atlasperle.com</li>
                <li>Port: 465 (SSL)</li>
                <li>From: support@atlasperle.com</li>
              </ul>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px;">
            <p style="font-size: 12px; color: #999; margin-bottom: 10px;">
              Perle de l'Atlas - Email Test
            </p>
            <p style="font-size: 12px; color: #999;">
              Sent on ${new Date().toLocaleDateString('fr-FR')} at ${new Date().toLocaleTimeString('fr-FR')}
            </p>
          </div>
        </div>
      `;
    } else {
      // Basic test email
      subject = "Email Test - Perle de l'Atlas (cPanel SMTP)";
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2c2c2c;">cPanel SMTP Test Successful! ✅</h1>
          <p>This test email was sent successfully using your cPanel email configuration.</p>
          <hr>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p><strong>Service:</strong> cPanel SMTP</p>
          <p><strong>Server:</strong> mail.atlasperle.com</p>
          <p><strong>Port:</strong> 465 (SSL)</p>
          <p><strong>From:</strong> support@atlasperle.com</p>
          <p><strong>Status:</strong> Configuration working correctly</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            This email was sent to verify the cPanel email configuration for Perle de l'Atlas.
          </p>
        </div>
      `;
    }

    console.log(`Sending test email to: ${email}`);
    
    await client.send({
      from: "Perle de l'Atlas <support@atlasperle.com>",
      to: email,
      subject: subject,
      content: htmlContent,
      html: htmlContent,
    });

    await client.close();
    console.log("Email sent successfully via cPanel SMTP");

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Test email sent successfully via cPanel SMTP",
      service: "cPanel SMTP",
      server: "mail.atlasperle.com",
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("cPanel SMTP test failed:", error);
    
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message,
      timestamp: new Date().toISOString(),
      details: "Check if EMAIL_PASSWORD is properly configured for support@atlasperle.com",
      service: "cPanel SMTP"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);

serve(handler);