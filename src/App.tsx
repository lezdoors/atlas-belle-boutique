import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import AppleStyleIndex from "./pages/AppleStyleIndex";
import FAQ from "./pages/FAQ";
import ShippingReturns from "./pages/ShippingReturns";
import NotreHeritage from "./pages/NotreHeritage";
import ProductPage from "./pages/ProductPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <LanguageProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/apple" element={<AppleStyleIndex />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/shipping-returns" element={<ShippingReturns />} />
                <Route path="/livraison-retours" element={<ShippingReturns />} />
                <Route path="/notre-heritage" element={<NotreHeritage />} />
                <Route path="/our-heritage" element={<NotreHeritage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/produit/:slug" element={<ProductPage />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </LanguageProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
