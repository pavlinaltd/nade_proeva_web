
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const isMobile = useIsMobile();
  
  // Close menu when route changes or screen size changes
  // useEffect(() => {
  //   setIsOpen(false);
  // }, [isMobile]);

  return (
    <header className="bg-burgundy-50 border-b border-burgundy-200">
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
          {/* {!isMobile && ( */}
            <NavigationMenu className="flex flex-row gap-8 items-center space-x-1 hidden font-semibold font-vollkornsc lg:block lg:text-xs xl:text-base">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={"relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}>
                    HOME
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className={"relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}>
                    ABOUT
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/books" className={"relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}>
                    BOOKS
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/papers" className={"relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}>
                    PAPERS
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/columns" className={"relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}>
                    PRESS
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/media" className={"relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}>
                    MEDIA
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/on-location" className={"relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}>
                    ON SITE
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/testimonials" className={"relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}>
                    REMEMBERING NADE
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuIndicator />
            </NavigationMenu>
          {/* )} */}

          {/* Mobile Menu Button */}
          {/* {isMobile && ( */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="block lg:hidden"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          {/* )} */}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="pt-4 pb-2 space-y-2 flex flex-col items-end gap-2">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/books">BOOKS</Link>
            <Link to="/papers">PAPERS</Link>
            <Link to="/columns">COLUMNS</Link>
            <Link to="/media">MEDIA</Link>
            <Link to="/on-location">ON SITE</Link>
            <Link to="/testimonials">REMEMBERING NADE</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
