
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import ErrorBoundary from "@/components/security/ErrorBoundary";
import SecurityConfig from "@/components/security/SecurityConfig";
import CartDrawer from "@/components/CartDrawer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Boutique from "./pages/Boutique";
import Rituels from "./pages/Rituels";
import ProgrammeFidelite from "./pages/ProgrammeFidelite";
import ProductDetail from "./pages/ProductDetail";
import Regions from "./pages/Regions";
import Ingredients from "./pages/Ingredients";
import IngredientDetail from "./pages/IngredientDetail";
import Blog from "./pages/Blog";
import SkinQuiz from "./pages/SkinQuiz";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import OrderSuccess from "./pages/OrderSuccess";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <SecurityConfig />
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/boutique" element={<Boutique />} />
                <Route path="/rituels" element={<Rituels />} />
                <Route path="/programme-fidelite" element={<ProgrammeFidelite />} />
                <Route path="/produit/:id" element={<ProductDetail />} />
                <Route path="/regions" element={<Regions />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/ingredient/:id" element={<IngredientDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/quiz-peau" element={<SkinQuiz />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <CartDrawer />
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
