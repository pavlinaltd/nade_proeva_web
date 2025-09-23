import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Papers from "./pages/Papers";
import OnSite from "./pages/OnSite";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Testimonials from "./pages/Testimonials";
import Press from "./pages/Press";
import Media from "./pages/Media";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="bio" element={<About />} />
            <Route path="books" element={<Books />} />
            <Route path="papers" element={<Papers />} />
            <Route path="field-work" element={<OnSite />} />
            <Route path="press" element={<Press />} />
            <Route path="media" element={<Media />} />
            <Route path="remembering-nade" element={<Testimonials />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
