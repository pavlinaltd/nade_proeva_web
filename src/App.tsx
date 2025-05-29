
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
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Testimonials from "./pages/Testimonials";
import Columns from "./pages/Columns";
import Interviews from "./pages/Interviews";

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
            <Route path="about" element={<About />} />
            <Route path="books" element={<Books />} />
            <Route path="papers" element={<Papers />} />
            <Route path="locations" element={<Gallery />} />
            <Route path="columns" element={<Columns />} />
            <Route path="interviews" element={<Interviews />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="donate" element={<Donate />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
