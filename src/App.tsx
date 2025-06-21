
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Boutique from "./pages/Boutique";
import Rituels from "./pages/Rituels";
import ProgrammeFidelite from "./pages/ProgrammeFidelite";
import ProductDetail from "./pages/ProductDetail";
import Regions from "./pages/Regions";
import Ingredients from "./pages/Ingredients";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
