import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import ConceptsGallery from "./pages/ConceptsGallery";
import OnyxVilla from "./pages/OnyxVilla";
import QuartzLinear from "./pages/QuartzLinear";
import CedarHorizon from "./pages/CedarHorizon";
import BronzeVertical from "./pages/BronzeVertical";
import TeakGeometric from "./pages/TeakGeometric";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/concepts" element={<ConceptsGallery />} />
          <Route path="/projects/onyx-villa" element={<OnyxVilla />} />
          <Route path="/projects/quartz-linear" element={<QuartzLinear />} />
          <Route path="/projects/cedar-horizon" element={<CedarHorizon />} />
          <Route
            path="/projects/bronze-vertical"
            element={<BronzeVertical />}
          />
          <Route path="/projects/teak-geometric" element={<TeakGeometric />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
