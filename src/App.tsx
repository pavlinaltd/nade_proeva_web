import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./app/page";
import About from "./app/bio/page";
import Books from "./app/books/page";
import Papers from "./app/papers/page";
import OnSite from "./app/field-work/page";
// import Donate from "./app/pages/Donate";
import NotFound from "./app/not-found";
import Testimonials from "./app/remembering-nade/page";
import Press from "./app/press/page";
import Media from "./app/media/page";

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
                        <Route
                            path="/remembering-nade"
                            element={<Testimonials />}
                        />
                        <Route path="/not-found" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
