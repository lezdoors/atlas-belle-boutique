
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import SecurityConfig from "@/components/security/SecurityConfig";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { Analytics } from "@vercel/analytics/react";
import EnhancedAppleStyleIndex from "./pages/EnhancedAppleStyleIndex";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import Tableware from "./pages/Tableware";
import Decor from "./pages/Decor";
import Gifts from "./pages/Gifts";
import Story from "./pages/Story";
import ShippingReturns from "./pages/ShippingReturns";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

// Import enhanced styles
import './styles/enhanced-colors.css';
import './styles/enhanced-typography.css';
import './styles/enhanced-animations.css';
import './styles/mobile-enhancements.css';

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-800"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/original" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/tableware" element={<Tableware />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/story" element={<Story />} />
        <Route path="/boutique" element={<Shop />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <CartProvider>
          <TooltipProvider>
            <SecurityConfig />
            <Toaster />
            <Sonner />
            <AppRoutes />
            <CookieConsentBanner />
            <Analytics />
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
