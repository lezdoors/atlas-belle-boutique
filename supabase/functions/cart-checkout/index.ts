import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CartItem {
  id: string;
  name_fr: string;
  name_en: string;
  price: number;
  images: string[];
  category: string;
  in_stock: boolean;
  created_at: string;
}

interface CartCheckoutRequest {
  items: Array<{
    product: CartItem;
    quantity: number;
  }>;
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
    let totalAmount = 0;
    const lineItems = items.map(item => {
      const priceInCurrency = currency === 'EUR' 
        ? Math.round(item.product.price * 0.093 * 100) // Convert MAD to EUR cents
        : Math.round(item.product.price * 0.099 * 100); // Convert MAD to USD cents

      totalAmount += priceInCurrency * item.quantity;

      return {
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: item.product.name_fr,
            description: `Produit artisanal marocain - ${item.product.name_en}`,
            images: item.product.images?.length > 0 ? [item.product.images[0]] : undefined,
            metadata: {
              category: item.product.category,
              product_id: item.product.id
            }
          },
          unit_amount: priceInCurrency,
        },
        quantity: item.quantity,
      };
    });

    // Add shipping cost
    const shippingCost = currency === 'EUR' 
      ? (totalAmount >= 10000 ? 0 : 890) // Free shipping over €100, otherwise €8.90
      : (totalAmount >= 10700 ? 0 : 950); // Free shipping over $107, otherwise $9.50

    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: "Livraison / Shipping",
            description: "Frais de livraison standard"
          },
          unit_amount: shippingCost,
        },
        quantity: 1,
      });
    }

    console.log(`Total: ${totalAmount/100} ${currency} (including ${shippingCost > 0 ? 'shipping' : 'free shipping'})`);

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : sanitizedCustomerInfo.email,
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout?cancelled=true`,
      automatic_tax: {
        enabled: false,
      },
      shipping_address_collection: {
        allowed_countries: ['FR', 'US', 'CA', 'GB', 'DE', 'ES', 'IT', 'BE', 'NL', 'MA'],
      },
      metadata: {
        user_id: user.id,
        customer_name: sanitizedCustomerInfo.name,
        customer_phone: sanitizedCustomerInfo.phone || '',
        shipping_address: sanitizedCustomerInfo.shippingAddress || '',
        currency: currency,
        item_count: items.length.toString()
      }
    });

    console.log(`Stripe session created: ${session.id}`);

    // Insert order into Supabase
    const orderItems = items.map(item => ({
      product_id: item.product.id,
      quantity: item.quantity,
      price_at_time: item.product.price
    }));

    const { data: orderData, error: insertError } = await supabaseClient
      .from("maison_orders")
      .insert({
        customer_name: sanitizedCustomerInfo.name,
        customer_email: sanitizedCustomerInfo.email,
        shipping_address: {
          address: sanitizedCustomerInfo.shippingAddress,
          phone: sanitizedCustomerInfo.phone
        },
        total: (totalAmount + shippingCost) / 100, // Convert back to main currency units
        status: 'pending',
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error inserting order:", insertError);
      throw new Error(`Failed to create order: ${insertError.message}`);
    }

    // Insert order items
    const orderItemsWithOrderId = orderItems.map(item => ({
      ...item,
      order_id: orderData.id
    }));

    const { error: itemsError } = await supabaseClient
      .from("maison_order_items")
      .insert(orderItemsWithOrderId);

    if (itemsError) {
      console.error("Error inserting order items:", itemsError);
      // Don't fail the checkout, but log the error
    }

    console.log("Order created successfully:", orderData.id);

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