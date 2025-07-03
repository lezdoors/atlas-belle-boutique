import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

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
    console.log("Testing email configuration...");
    
    // Check if we have the API key
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      throw new Error("RESEND_API_KEY not found in environment variables");
    }
    
    console.log("API key found, initializing Resend...");
    const resend = new Resend(apiKey);

    const { email, testType = "basic" } = await req.json();
    
    if (!email) {
      throw new Error("Email address is required");
    }

    let subject = "";
    let html = "";

    if (testType === "luxury") {
      subject = "🌟 Test Email - Perle de l'Atlas";
      html = `
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
              Votre configuration email fonctionne parfaitement. Ce message confirme que tous les systèmes sont opérationnels pour Perle de l'Atlas.
            </p>
            
            <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); padding: 3px; border-radius: 30px; margin: 40px 0;">
              <div style="background: white; border-radius: 27px; padding: 2px;">
                <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 15px 40px; border-radius: 25px; font-weight: 600; text-align: center; font-size: 16px; letter-spacing: 0.5px;">
                  ✅ Email System Active
                </div>
              </div>
            </div>
            
            <div style="border-top: 1px solid #e5e5e5; padding-top: 25px; margin-top: 30px;">
              <p style="font-size: 14px; color: #8B4513; margin-bottom: 15px; font-weight: 600;">
                🌟 Configuration Details:
              </p>
              <ul style="font-size: 14px; color: #666; line-height: 1.6; padding-left: 20px;">
                <li>Service: Resend API</li>
                <li>From Domain: Verified</li>
                <li>CORS: Enabled</li>
                <li>Templates: Multilingual Ready</li>
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
      subject = "Email Test - Perle de l'Atlas";
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2c2c2c;">Email Test Successful! ✅</h1>
          <p>This is a test email from Perle de l'Atlas.</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p><strong>Service:</strong> Resend API</p>
          <p><strong>Status:</strong> Configuration working correctly</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            This email was sent to verify the email configuration for Perle de l'Atlas.
          </p>
        </div>
      `;
    }

    console.log(`Sending test email to: ${email}`);
    
    const emailResponse = await resend.emails.send({
      from: "Perle de l'Atlas <noreply@atlasperle.com>",
      to: [email],
      subject: subject,
      html: html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Test email sent successfully",
      emailId: emailResponse.data?.id,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("Email test failed:", error);
    
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message,
      timestamp: new Date().toISOString(),
      details: "Check if RESEND_API_KEY is properly configured"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);