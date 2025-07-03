import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CartItem {
  id: number;
  name: string;
  priceMAD: number;
  quantity: number;
  variant?: string;
  size?: string;
}

interface CartCheckoutRequest {
  items: CartItem[];
  currency: 'EUR' | 'USD';
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
    shippingAddress?: string;
  };
}

// Security validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting cart checkout process");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Get authenticated user
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header provided");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");

    const {
      items,
      currency,
      customerInfo
    }: CartCheckoutRequest = await req.json();

    console.log(`Processing cart with ${items.length} items for user: ${user.email}`);

    // Security validations
    if (!validateEmail(customerInfo.email)) {
      throw new Error('Invalid email format');
    }

    if (!items || items.length === 0) {
      throw new Error('Cart is empty');
    }

    // Sanitize customer info
    const sanitizedCustomerInfo = {
      name: sanitizeInput(customerInfo.name),
      email: sanitizeInput(customerInfo.email),
      phone: customerInfo.phone ? sanitizeInput(customerInfo.phone) : undefined,
      shippingAddress: customerInfo.shippingAddress ? sanitizeInput(customerInfo.shippingAddress) : undefined
    };

    // Convert prices from MAD to target currency
    const exchangeRates = { EUR: 0.093, USD: 0.099 };
    const exchangeRate = exchangeRates[currency];

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ 
      email: sanitizedCustomerInfo.email, 
      limit: 1 
    });
    
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Create line items for Stripe
    const lineItems = items.map(item => ({
      price_data: {
        currency: currency.toLowerCase(),
        product_data: { 
          name: item.variant || item.size ? `${item.name} (${[item.variant, item.size].filter(Boolean).join(', ')})` : item.name,
          description: `Produit artisanal du Maroc - ${item.name}`
        },
        unit_amount: Math.round(item.priceMAD * exchangeRate * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Calculate total for order record
    const totalMAD = items.reduce((sum, item) => sum + item.priceMAD * item.quantity, 0);
    const totalConverted = Math.round(totalMAD * exchangeRate * 100);

    console.log(`Total: ${totalMAD} MAD = ${totalConverted/100} ${currency}`);

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : sanitizedCustomerInfo.email,
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout?status=cancelled`,
      metadata: {
        user_id: user.id,
        customer_name: sanitizedCustomerInfo.name,
        customer_phone: sanitizedCustomerInfo.phone || '',
        shipping_address: sanitizedCustomerInfo.shippingAddress || '',
        item_count: items.length.toString(),
      },
      shipping_address_collection: {
        allowed_countries: ['MA', 'FR', 'ES', 'DE', 'IT', 'US', 'CA'],
      },
    });

    console.log(`Stripe session created: ${session.id}`);

    // Create order record in database
    const { data: orderData, error: insertError } = await supabaseClient
      .from("enhanced_orders")
      .insert({
        user_id: user.id,
        order_number: `PA-${Date.now()}`,
        total_amount_eur: currency === 'EUR' ? totalConverted / 100 : totalMAD * 0.093,
        total_amount_usd: currency === 'USD' ? totalConverted / 100 : totalMAD * 0.099,
        currency: currency,
        payment_status: 'pending',
        stripe_session_id: session.id,
        shipping_address: {
          name: sanitizedCustomerInfo.name,
          email: sanitizedCustomerInfo.email,
          phone: sanitizedCustomerInfo.phone,
          address: sanitizedCustomerInfo.shippingAddress,
        }
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error inserting order:", insertError);
      throw new Error(`Failed to create order: ${insertError.message}`);
    }

    console.log(`Order created with ID: ${orderData.id}`);

    return new Response(JSON.stringify({ 
      url: session.url,
      orderId: orderData.id 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Cart checkout error:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});