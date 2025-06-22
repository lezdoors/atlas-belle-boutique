
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { SelectionProvider } from "@/contexts/SelectionContext";
import SEOOptimizer from "@/components/SEOOptimizer";
import MobileOptimizer from "@/components/MobileOptimizer";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import SecurityConfig from "@/components/security/SecurityConfig";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Boutique from "./pages/Boutique";
import ProductDetail from "./pages/ProductDetail";
import MaSelection from "./pages/MaSelection";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Regions from "./pages/Regions";
import Rituels from "./pages/Rituels";
import Ingredients from "./pages/Ingredients";
import IngredientDetail from "./pages/IngredientDetail";
import ProgrammeFidelite from "./pages/ProgrammeFidelite";
import SkinQuiz from "./pages/SkinQuiz";
import NotFound from "./pages/NotFound";
import Wholesale from "./pages/Wholesale";
import Printemps from "./pages/collections/Printemps";
import Ete from "./pages/collections/Ete";
import Automne from "./pages/collections/Automne";
import Hiver from "./pages/collections/Hiver";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <CartProvider>
            <SelectionProvider>
              {/* Global optimizers that don't need router context */}
              <MobileOptimizer />
              <PerformanceOptimizer />
              <SecurityConfig />
              
              <Toaster />
              <BrowserRouter>
                {/* SEO Optimizer now inside Router context */}
                <SEOOptimizer />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/a-propos" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/boutique" element={<Boutique />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/ma-selection" element={<MaSelection />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                  <Route path="/regions" element={<Regions />} />
                  <Route path="/rituels" element={<Rituels />} />
                  <Route path="/ingredients" element={<Ingredients />} />
                  <Route path="/ingredients/:id" element={<IngredientDetail />} />
                  <Route path="/programme-fidelite" element={<ProgrammeFidelite />} />
                  <Route path="/quiz-peau" element={<SkinQuiz />} />
                  <Route path="/professionnels" element={<Wholesale />} />
                  <Route path="/grossistes" element={<Wholesale />} />
                  <Route path="/collections/printemps" element={<Printemps />} />
                  <Route path="/collections/ete" element={<Ete />} />
                  <Route path="/collections/automne" element={<Automne />} />
                  <Route path="/collections/hiver" element={<Hiver />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </SelectionProvider>
          </CartProvider>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
