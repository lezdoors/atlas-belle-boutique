
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import EnhancedAppleStyleIndex from "./pages/EnhancedAppleStyleIndex";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";

// Import enhanced styles
import './styles/enhanced-colors.css';
import './styles/enhanced-typography.css';
import './styles/enhanced-animations.css';
import './styles/mobile-enhancements.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<EnhancedAppleStyleIndex />} />
                <Route path="/original" element={<Index />} />
                <Route path="/product/:slug" element={<ProductPage />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
