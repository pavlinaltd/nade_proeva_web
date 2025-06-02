
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
              <img
                src="/logo_italic.jpg" 
                alt="The Nade Proeva Endowment Fund" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-playfair font-semibold text-memorial-900">
                Nade Proeva
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu className="flex flex-row gap-8 items-center space-x-1">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink  href="/" className={"flex items-center gap-1"}>
                    HOME
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className={"flex items-center gap-1"}>
                    ABOUT
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger> WORK </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col gap-3 p-6 position-absolute top-0 bg-white shadow-lg rounded-lg">
                      <NavigationMenuLink href="/books" className={"flex items-center gap-1"}>
                        BOOKS
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/papers" className={"flex items-center gap-1"}>
                        PAPERS
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    PHOTOS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col gap-3 p-6 position-absolute top-0 bg-white shadow-lg rounded-lg">
                      <NavigationMenuLink href="/media">
                        MEDIA
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/on-location">
                        ON LOCATION
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/columns">
                        COLUMNS
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/testimonials">
                        TESTIMONIALS
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
            
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="ml-2 bg-red-600 hover:bg-red-700 text-white">
                    CONTRIBUTE
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
