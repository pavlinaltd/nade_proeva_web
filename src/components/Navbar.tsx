'use client'

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { to: "/", label: "HOME" },
    { to: "/bio", label: "BIO" },
    { to: "/books", label: "BOOKS" },
    { to: "/papers", label: "PAPERS" },
    { to: "/press", label: "PRESS" },
    { to: "/media", label: "MEDIA" },
    { to: "/field-work", label: "FIELD WORK" },
    { to: "/remembering-nade", label: "REMEMBERING NADE" }
  ];

  return (
    <header className="bg-yellow-400 border-b border-burgundy-200">
      <div className="max-w-[1450px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo-blank.png"
                alt="Logo" 
                className="h-10 w-auto"
              />
              <h1 className="text-xl font-bold text-black">
                Professor Dr. Nade Proeva
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="flex-row space-x-1 font-semibold font-vollkornsc hidden lg:block lg:text-sm xl:text-base">
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.to}>
                  <Link
                    href={link.to}
                    // Source for animation: https://dev.to/vincentdorian/cool-nav-link-hover-animations-with-tailwindcss-3gf2
                    className={`${pathname === link.to ? "text-burgundy-700" : "text-black"} relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
                  >
                    {link.label}
                  </Link>
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
                href={link.to}
                className={`text-2xl font-bold font-vollkornsc ${pathname === link.to ? "text-burgundy-700" : "text-black"} transition-colors duration-200`}
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
