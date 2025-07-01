
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
import NotreHeritage from "./pages/NotreHeritage";
import Catalogue from "./pages/Catalogue";
import ContactPage from "./pages/ContactPage";
import Rituels from "./pages/Rituels";
import Histoire from "./pages/Histoire";
import FAQ from "./pages/FAQ";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ConditionsVente from "./pages/ConditionsVente";

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
                <Route path="/" element={<AppleStyleIndex />} />
                <Route path="/original" element={<Index />} />
                <Route path="/notre-heritage" element={<NotreHeritage />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/rituels" element={<Rituels />} />
                <Route path="/histoire" element={<Histoire />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                <Route path="/conditions-vente" element={<ConditionsVente />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
