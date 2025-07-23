
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/books", label: "BOOKS" },
    { to: "/papers", label: "PAPERS" },
    { to: "/columns", label: "PRESS" },
    { to: "/media", label: "MEDIA" },
    { to: "/on-location", label: "ON SITE" },
    { to: "/testimonials", label: "REMEMBERING NADE" }
  ];

  useEffect(() => {
    // Close the mobile menu when the location changes
    console.log("Location changed:", location.pathname);
  }, [location.pathname]);

  return (
    <header className="bg-yellow-400 border-b border-burgundy-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* <img
                src="/logo_italic.jpg" 
                alt="The Nade Proeva Endowment Fund" 
                className="h-10 w-auto"
              /> */}
              <h1 className="text-xl font-bold text-black">
                Professor Dr. Nade Proeva
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="flex flex-row gap-8 items-center space-x-1 hidden font-semibold font-vollkornsc lg:block lg:text-xs xl:text-base">
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.to}>
                  <NavigationMenuLink>
                    <Link
                      to={link.to}
                      // Source for animation: https://dev.to/vincentdorian/cool-nav-link-hover-animations-with-tailwindcss-3gf2
                      className={`${location.pathname === link.to ? "text-burgundy-700" : "text-black"} relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuIndicator />
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="block lg:hidden"
          >
            <Menu /> {/* Used to switch between X and Menu icons but slide out removes need */}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-50 bg-yellow-400 transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col items-end gap-6 pt-16 pr-8 h-full">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-2xl font-bold font-vollkornsc ${location.pathname === link.to ? "text-burgundy-700" : "text-black"} transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Close button in top right */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close"
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
