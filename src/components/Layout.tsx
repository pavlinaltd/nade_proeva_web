import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <main className="container min-h-screen mx-auto py-8 md:py-12 animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
