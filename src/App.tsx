import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutDeveloper from "./pages/AboutDeveloper";
import NotFound from "./pages/NotFound";
import WebDesignService from "./pages/services/WebDesignService";
import WordPressService from "./pages/services/WordPressService";
import LandingPageService from "./pages/services/LandingPageService";
import ECommerceService from "./pages/services/ECommerceService";
import PortfolioService from "./pages/services/PortfolioService";
import CoachingService from "./pages/services/CoachingService";
import CorporateService from "./pages/services/CorporateService";
import BlogSEOService from "./pages/services/BlogSEOService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/about-developer" element={<AboutDeveloper />} />
              <Route path="/services/web-design" element={<WebDesignService />} />
              <Route path="/services/wordpress" element={<WordPressService />} />
              <Route path="/services/landing-page" element={<LandingPageService />} />
              <Route path="/services/ecommerce" element={<ECommerceService />} />
              <Route path="/services/portfolio" element={<PortfolioService />} />
              <Route path="/services/coaching" element={<CoachingService />} />
              <Route path="/services/corporate" element={<CorporateService />} />
              <Route path="/services/blog-seo" element={<BlogSEOService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
