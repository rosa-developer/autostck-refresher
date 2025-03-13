
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import Demo from "./pages/Demo";
import Marketplace from "./pages/marketplace";
import Help from "./pages/Help";
import GuidesArticles from "./pages/Resources/GuidesArticles";
import Downloads from "./pages/Resources/Downloads";
import VideoTutorials from "./pages/Resources/VideoTutorials";
import Documentation from "./pages/Resources/Documentation";
import HelpCenter from "./pages/Resources/HelpCenter";
import ApiReference from "./pages/Resources/ApiReference";
import CaseStudies from "./pages/Resources/CaseStudies";
import Webinars from "./pages/Resources/Webinars";
import Partners from "./pages/Resources/Partners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/help" element={<Help />} />
          <Route path="/resources/guides" element={<GuidesArticles />} />
          <Route path="/resources/downloads" element={<Downloads />} />
          <Route path="/resources/videos" element={<VideoTutorials />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/resources/api-reference" element={<ApiReference />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/webinars" element={<Webinars />} />
          <Route path="/resources/partners" element={<Partners />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
