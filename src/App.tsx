import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Books from "./app/pages/Books";
import Papers from "./app/pages/Papers";
import OnSite from "./app/pages/OnSite";
import Donate from "./app/pages/Donate";
import NotFound from "./app/pages/NotFound";
import Testimonials from "./app/pages/Testimonials";
import Press from "./app/pages/Press";
import Media from "./app/pages/Media";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/bio" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/field-work" element={<OnSite />} />
            <Route path="/press" element={<Press />} />
            <Route path="/media" element={<Media />} />
            <Route path="/remembering-nade" element={<Testimonials />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
