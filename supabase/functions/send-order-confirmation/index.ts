
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  customerName: string;
  customerEmail: string;
  productName: string;
  quantity: number;
  totalPrice: string;
  orderId: string;
  language: 'fr' | 'en';
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      customerName,
      customerEmail,
      productName,
      quantity,
      totalPrice,
      orderId,
      language
    }: EmailRequest = await req.json();

    const isEnglish = language === 'en';
    
    const subject = isEnglish 
      ? "Order Confirmation - Perle d'Atlas"
      : "Confirmation de commande - Perle d'Atlas";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D4A574 0%, #B8860B 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; }
          .order-details { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { background: #8B7355; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
          .highlight { color: #D4A574; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Perle d'Atlas</h1>
            <p>${isEnglish ? 'Moroccan Luxury Cosmetics' : 'Cosmétiques de Luxe Marocains'}</p>
          </div>
          
          <div class="content">
            <h2>${isEnglish ? `Dear ${customerName},` : `Cher(e) ${customerName},`}</h2>
            
            <p>${isEnglish 
              ? 'Thank you for your order! We are delighted to confirm your purchase of our authentic Moroccan products.'
              : 'Merci pour votre commande ! Nous sommes ravis de confirmer votre achat de nos produits marocains authentiques.'
            }</p>
            
            <div class="order-details">
              <h3>${isEnglish ? 'Order Details' : 'Détails de la commande'}</h3>
              <p><strong>${isEnglish ? 'Order ID' : 'N° de commande'}:</strong> <span class="highlight">${orderId}</span></p>
              <p><strong>${isEnglish ? 'Product' : 'Produit'}:</strong> ${productName}</p>
              <p><strong>${isEnglish ? 'Quantity' : 'Quantité'}:</strong> ${quantity}</p>
              <p><strong>${isEnglish ? 'Total' : 'Total'}:</strong> <span class="highlight">${totalPrice}</span></p>
            </div>
            
            <p>${isEnglish
              ? 'Your order will be carefully prepared by our artisans and shipped within 2-3 business days.'
              : 'Votre commande sera soigneusement préparée par nos artisans et expédiée sous 2-3 jours ouvrables.'
            }</p>
            
            <p>${isEnglish
              ? 'If you have any questions, please don\'t hesitate to contact us.'
              : 'Si vous avez des questions, n\'hésitez pas à nous contacter.'
            }</p>
            
            <p style="margin-top: 30px;">
              ${isEnglish ? 'With gratitude,' : 'Avec gratitude,'}<br>
              <strong>${isEnglish ? 'The Perle d\'Atlas Team' : 'L\'équipe Perle d\'Atlas'}</strong>
            </p>
          </div>
          
          <div class="footer">
            <p>${isEnglish ? 'Authentic Moroccan Beauty' : 'Beauté Marocaine Authentique'}</p>
            <p>contact@perleatlas.com | +212 524 123 456</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Perle d'Atlas <noreply@perleatlas.com>",
      to: [customerEmail],
      subject: subject,
      html: emailHtml,
    });

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending confirmation email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
