
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/hooks/useAuth";
import BottomNavigation from "@/components/mobile/BottomNavigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound";
import Regions from "./pages/Regions";
import Ingredients from "./pages/Ingredients";
import IngredientDetail from "./pages/IngredientDetail";
import Rituels from "./pages/Rituels";
import Blog from "./pages/Blog";
import Wholesale from "./pages/Wholesale";
import SkinQuiz from "./pages/SkinQuiz";
import ProgrammeFidelite from "./pages/ProgrammeFidelite";
import MaSelection from "./pages/MaSelection";
import Automne from "./pages/collections/Automne";
import Ete from "./pages/collections/Ete";
import Hiver from "./pages/collections/Hiver";
import Printemps from "./pages/collections/Printemps";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <AuthProvider>
            <LanguageProvider>
              <CartProvider>
                <div className="min-h-screen bg-white">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/boutique" element={<Boutique />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/produit/:id" element={<ProductDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/commande-confirmee" element={<OrderSuccess />} />
                    <Route path="/regions" element={<Regions />} />
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/ingredient/:id" element={<IngredientDetail />} />
                    <Route path="/rituels" element={<Rituels />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/grossiste" element={<Wholesale />} />
                    <Route path="/quiz-peau" element={<SkinQuiz />} />
                    <Route path="/programme-fidelite" element={<ProgrammeFidelite />} />
                    <Route path="/ma-selection" element={<MaSelection />} />
                    <Route path="/collections/automne" element={<Automne />} />
                    <Route path="/collections/ete" element={<Ete />} />
                    <Route path="/collections/hiver" element={<Hiver />} />
                    <Route path="/collections/printemps" element={<Printemps />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  
                  {/* Global Bottom Navigation for Mobile */}
                  <BottomNavigation />
                </div>
              </CartProvider>
            </LanguageProvider>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
