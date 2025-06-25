export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      artisans: {
        Row: {
          created_at: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          name: string
          region: string
          specialty: string | null
          story_en: string | null
          story_fr: string | null
          techniques: Json | null
          video_url: string | null
          years_experience: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name: string
          region: string
          specialty?: string | null
          story_en?: string | null
          story_fr?: string | null
          techniques?: Json | null
          video_url?: string | null
          years_experience?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name?: string
          region?: string
          specialty?: string | null
          story_en?: string | null
          story_fr?: string | null
          techniques?: Json | null
          video_url?: string | null
          years_experience?: number | null
        }
        Relationships: []
      }
      enhanced_orders: {
        Row: {
          billing_address: Json | null
          created_at: string | null
          currency: string | null
          id: string
          notes: string | null
          order_number: string
          payment_method: string | null
          payment_status: string | null
          shipping_address: Json | null
          status: string | null
          stripe_session_id: string | null
          total_amount_eur: number
          total_amount_usd: number
          tracking_number: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          billing_address?: Json | null
          created_at?: string | null
          currency?: string | null
          id?: string
          notes?: string | null
          order_number: string
          payment_method?: string | null
          payment_status?: string | null
          shipping_address?: Json | null
          status?: string | null
          stripe_session_id?: string | null
          total_amount_eur: number
          total_amount_usd: number
          tracking_number?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          billing_address?: Json | null
          created_at?: string | null
          currency?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          payment_method?: string | null
          payment_status?: string | null
          shipping_address?: Json | null
          status?: string | null
          stripe_session_id?: string | null
          total_amount_eur?: number
          total_amount_usd?: number
          tracking_number?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          id: string
          order_id: string | null
          product_id: string | null
          quantity: number
          total_price_eur: number
          total_price_usd: number
          unit_price_eur: number
          unit_price_usd: number
        }
        Insert: {
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity: number
          total_price_eur: number
          total_price_usd: number
          unit_price_eur: number
          unit_price_usd: number
        }
        Update: {
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number
          total_price_eur?: number
          total_price_usd?: number
          unit_price_eur?: number
          unit_price_usd?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "enhanced_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          currency: string
          customer_name: string
          email: string
          id: string
          payment_status: string
          phone: string | null
          price_total: number
          product_id: string
          quantity: number
          shipping_address: string | null
          stripe_session_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          currency?: string
          customer_name: string
          email: string
          id?: string
          payment_status?: string
          phone?: string | null
          price_total: number
          product_id: string
          quantity?: number
          shipping_address?: string | null
          stripe_session_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          currency?: string
          customer_name?: string
          email?: string
          id?: string
          payment_status?: string
          phone?: string | null
          price_total?: number
          product_id?: string
          quantity?: number
          shipping_address?: string | null
          stripe_session_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      product_reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          helpful_votes: number | null
          id: string
          is_featured: boolean | null
          product_id: string | null
          rating: number | null
          status: string | null
          title: string | null
          updated_at: string | null
          user_id: string
          verified_purchase: boolean | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          helpful_votes?: number | null
          id?: string
          is_featured?: boolean | null
          product_id?: string | null
          rating?: number | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          user_id: string
          verified_purchase?: boolean | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          helpful_votes?: number | null
          id?: string
          is_featured?: boolean | null
          product_id?: string | null
          rating?: number | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
          verified_purchase?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "product_reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          artisan_story: string | null
          category: string
          created_at: string | null
          description_en: string | null
          description_fr: string | null
          featured: boolean | null
          id: string
          images: Json | null
          ingredients: Json | null
          is_active: boolean | null
          min_stock_level: number | null
          name_en: string
          name_fr: string
          origin_region: string | null
          price_eur: number
          price_usd: number
          seasonal_availability: Json | null
          seo_description_en: string | null
          seo_description_fr: string | null
          seo_title_en: string | null
          seo_title_fr: string | null
          sku: string
          stock_quantity: number | null
          subcategory: string | null
          sustainability_badges: Json | null
          updated_at: string | null
        }
        Insert: {
          artisan_story?: string | null
          category: string
          created_at?: string | null
          description_en?: string | null
          description_fr?: string | null
          featured?: boolean | null
          id?: string
          images?: Json | null
          ingredients?: Json | null
          is_active?: boolean | null
          min_stock_level?: number | null
          name_en: string
          name_fr: string
          origin_region?: string | null
          price_eur: number
          price_usd: number
          seasonal_availability?: Json | null
          seo_description_en?: string | null
          seo_description_fr?: string | null
          seo_title_en?: string | null
          seo_title_fr?: string | null
          sku: string
          stock_quantity?: number | null
          subcategory?: string | null
          sustainability_badges?: Json | null
          updated_at?: string | null
        }
        Update: {
          artisan_story?: string | null
          category?: string
          created_at?: string | null
          description_en?: string | null
          description_fr?: string | null
          featured?: boolean | null
          id?: string
          images?: Json | null
          ingredients?: Json | null
          is_active?: boolean | null
          min_stock_level?: number | null
          name_en?: string
          name_fr?: string
          origin_region?: string | null
          price_eur?: number
          price_usd?: number
          seasonal_availability?: Json | null
          seo_description_en?: string | null
          seo_description_fr?: string | null
          seo_title_en?: string | null
          seo_title_fr?: string | null
          sku?: string
          stock_quantity?: number | null
          subcategory?: string | null
          sustainability_badges?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      search_analytics: {
        Row: {
          clicked_product_id: string | null
          created_at: string | null
          id: string
          query: string
          results_count: number | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          clicked_product_id?: string | null
          created_at?: string | null
          id?: string
          query: string
          results_count?: number | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          clicked_product_id?: string | null
          created_at?: string | null
          id?: string
          query?: string
          results_count?: number | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "search_analytics_clicked_product_id_fkey"
            columns: ["clicked_product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          marketing_consent: boolean | null
          phone: string | null
          preferred_currency: string | null
          preferred_language: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          marketing_consent?: boolean | null
          phone?: string | null
          preferred_currency?: string | null
          preferred_language?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          marketing_consent?: boolean | null
          phone?: string | null
          preferred_currency?: string | null
          preferred_language?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      wholesale_leads: {
        Row: {
          address: string
          business_type: string
          company_name: string
          contact_name: string
          created_at: string
          email: string
          id: string
          message: string | null
          phone: string
          products_interest: string
          website: string | null
        }
        Insert: {
          address: string
          business_type: string
          company_name: string
          contact_name: string
          created_at?: string
          email: string
          id?: string
          message?: string | null
          phone: string
          products_interest: string
          website?: string | null
        }
        Update: {
          address?: string
          business_type?: string
          company_name?: string
          contact_name?: string
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          phone?: string
          products_interest?: string
          website?: string | null
        }
        Relationships: []
      }
      wishlists: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wishlists_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
