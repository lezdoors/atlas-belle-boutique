
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import SecurityConfig from "@/components/security/SecurityConfig";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import CartDrawer from "@/components/CartDrawer";
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
import ShippingReturns from "./pages/legal/ShippingReturns";
import TermsOfService from "./pages/legal/TermsOfService";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CareInstructions from "./pages/legal/CareInstructions";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";
import PolitiqueCookies from "./pages/PolitiqueCookies";
import Vaisselle from "./pages/categories/Vaisselle";
import Decoration from "./pages/categories/Decoration";
import Cadeaux from "./pages/categories/Cadeaux";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Boutique from "./pages/Boutique";
import Catalogue from "./pages/Catalogue";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Wholesale from "./pages/Wholesale";
import OrderSuccess from "./pages/OrderSuccess";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Ingredients from "./pages/Ingredients";
import IngredientDetail from "./pages/IngredientDetail";
import Regions from "./pages/Regions";
import NotreHeritage from "./pages/NotreHeritage";
import Histoire from "./pages/Histoire";
import MaSelection from "./pages/MaSelection";
import ProgrammeFidelite from "./pages/ProgrammeFidelite";
import Rituels from "./pages/Rituels";
import SkinQuiz from "./pages/SkinQuiz";
import TestEmail from "./pages/TestEmail";
import Automne from "./pages/collections/Automne";
import Ete from "./pages/collections/Ete";
import Hiver from "./pages/collections/Hiver";
import Printemps from "./pages/collections/Printemps";
import Credits from "./pages/Credits";
import NosArtisans from "./pages/NosArtisans";
import HuileArgan from "./pages/products/HuileArgan";
import SavonNoir from "./pages/products/SavonNoir";
import Ghassoul from "./pages/products/Ghassoul";
import VerreMarocain from "./pages/products/VerreMarocain";
import TajineTraditionnel from "./pages/products/TajineTraditionnel";

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
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Product Routes */}
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/products/huile-argan" element={<HuileArgan />} />
        <Route path="/products/savon-noir" element={<SavonNoir />} />
        <Route path="/products/ghassoul" element={<Ghassoul />} />
        <Route path="/products/verre-marocain" element={<VerreMarocain />} />
        <Route path="/products/tajine-traditionnel" element={<TajineTraditionnel />} />
        
        {/* Shop Routes */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/wholesale" element={<Wholesale />} />
        
        {/* Category Routes */}
        <Route path="/tableware" element={<Tableware />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/categories/vaisselle" element={<Vaisselle />} />
        <Route path="/categories/decoration" element={<Decoration />} />
        <Route path="/categories/cadeaux" element={<Cadeaux />} />
        
        {/* Collections Routes */}
        <Route path="/collections/automne" element={<Automne />} />
        <Route path="/collections/ete" element={<Ete />} />
        <Route path="/collections/hiver" element={<Hiver />} />
        <Route path="/collections/printemps" element={<Printemps />} />
        
        {/* Content Routes */}
        <Route path="/story" element={<Story />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/notre-heritage" element={<NotreHeritage />} />
        <Route path="/nos-artisans" element={<NosArtisans />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/ingredient/:id" element={<IngredientDetail />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/rituels" element={<Rituels />} />
        <Route path="/skin-quiz" element={<SkinQuiz />} />
        
        {/* User Routes */}
        <Route path="/ma-selection" element={<MaSelection />} />
        <Route path="/programme-fidelite" element={<ProgrammeFidelite />} />
        
        {/* Support Routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        
        {/* Legal Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cookies" element={<PolitiqueCookies />} />
        <Route path="/credits" element={<Credits />} />
        
        
        {/* Product Routes */}
        <Route path="/product/:id" element={<ProductDetail />} />
        
        {/* Legal Routes - New Maison Chapuis */}
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/care-instructions" element={<CareInstructions />} />
        
        {/* Checkout & Order Routes */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        
        {/* Test Routes */}
        <Route path="/test-email" element={<TestEmail />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
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
            <CartDrawer />
            <CookieConsentBanner />
            <Analytics />
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
