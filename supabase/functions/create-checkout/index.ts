
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  productName: string;
  priceMAD: number;
  currency: 'EUR' | 'USD';
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
    shippingAddress?: string;
  };
  productId: string;
  quantity: number;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const {
      productName,
      priceMAD,
      currency,
      customerInfo,
      productId,
      quantity
    }: CheckoutRequest = await req.json();

    // Convert price from MAD to target currency (cents)
    const exchangeRates = { EUR: 0.093, USD: 0.099 };
    const convertedPrice = Math.round(priceMAD * exchangeRates[currency] * 100); // Convert to cents

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ 
      email: customerInfo.email, 
      limit: 1 
    });
    
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : customerInfo.email,
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: { 
              name: productName,
              description: `Produit artisanal du Maroc - ${productName}`
            },
            unit_amount: convertedPrice,
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/produit/${productId}?checkout=cancelled`,
      metadata: {
        product_id: productId,
        customer_name: customerInfo.name,
        customer_phone: customerInfo.phone || '',
        shipping_address: customerInfo.shippingAddress || '',
      }
    });

    // Insert order into Supabase
    const { error: insertError } = await supabaseClient
      .from("orders")
      .insert({
        customer_name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone,
        shipping_address: customerInfo.shippingAddress,
        product_id: productId,
        quantity: quantity,
        price_total: convertedPrice,
        currency: currency,
        payment_status: 'pending',
        stripe_session_id: session.id,
      });

    if (insertError) {
      console.error("Error inserting order:", insertError);
      throw new Error(`Failed to create order: ${insertError.message}`);
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
