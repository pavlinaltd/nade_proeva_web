
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

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
          {/* {!isMobile && (
            <NavigationMenu className="flex items-center space-x-1">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={"flex items-center gap-1"}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className={"flex items-center gap-1"}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1">
                  Work
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <NavigationMenuLink href="/books" className={"flex items-center gap-1"}>
                      Books
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/papers" className={"flex items-center gap-1"}>
                      Papers
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1">
                  Components
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <div
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </div>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="ml-2 bg-red-600 hover:bg-red-700 text-white">
                  Donate
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
          </NavigationMenu>
          )} */}

          {!isMobile && (
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" asChild>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/books">Books</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/papers">Papers</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/on-location">On Location</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/columns">Columns</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/media">Media</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/testimonials">Testimonials</Link>
              </Button>
              <Button className="ml-2 bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link to="/donate">Donate</Link>
              </Button>
            </nav>
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
