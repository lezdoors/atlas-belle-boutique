
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
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
