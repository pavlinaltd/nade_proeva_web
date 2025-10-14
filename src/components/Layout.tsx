import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <main className="w-full max-w-[1450px] min-h-screen px-4 py-8 md:py-12 animate-fade-in mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
