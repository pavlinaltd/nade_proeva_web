
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Close menu when route changes or screen size changes
  useEffect(() => {
    setIsOpen(false);
  }, [isMobile]);

  return (
    <header className="bg-white border-b border-gray-200">
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
          {!isMobile && (
            <NavigationMenu className="flex flex-row gap-8 items-center space-x-1">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={"flex items-center gap-1"}>
                    HOME
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className={"flex items-center gap-1"}>
                    ABOUT
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/books" className={"flex items-center gap-1"}>
                    BOOKS
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/papers" className={"flex items-center gap-1"}>
                    PAPERS
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/columns" className={"flex items-center gap-1"}>
                    COLUMNS
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/media" className={"flex items-center gap-1"}>
                    MEDIA
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/on-location" className={"flex items-center gap-1"}>
                    ON LOCATION
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/testimonials" className={"flex items-center gap-1"}>
                    REMEMBERING A SCHOLAR
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuIndicator />
            </NavigationMenu>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <nav className="pt-4 pb-2 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/books">Books</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/papers">Papers</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/gallery">Gallery</Link>
            </Button>
            <Button className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link to="/donate">Donate</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
