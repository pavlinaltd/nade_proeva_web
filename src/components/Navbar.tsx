
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

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
                The Nade Proeva<br />
                <span className="text-sm font-normal">Endowment Fund</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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
                <Link to="/gallery">Locations</Link>
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
