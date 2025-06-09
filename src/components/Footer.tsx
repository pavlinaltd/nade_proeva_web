import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-amber-500 to-yellow-100 text-white py-8">
      <div className="container mx-auto px-4">
        <div
          // className="grid grid-cols-3 gap-8"
          className="flex items-start justify-between"
        >
          {/* Logo and About Page */}
          <div className="w-1/3">
            <img
              src="/logo_italic.jpg"
              alt="The Nade Proeva Endowment Fund"
              className="w-32 h-auto mb-4"
            />
            <p className="text-black text-md">
              This site is dedicated to preserving the memory and academic legacy of
              Professor Nade Proeva, a distinguished Macedonian scholar, historian, researcher, and educator.
            </p>
          </div>
          
          {/* Endowment Contact */}
          {/* <div
            className="flex flex-col items-start gap-[10px]"
          >
            <h3 className="text-xl mb-4 text-black">Endowment Fund Contact</h3>
            <p className="text-black text-md">
              Arizona State University<br />
              X St.<br />
              X, AZ 11111<br />
              <a
                href="mailto:"
                className="hover:underline"
              >
                x@x.edu
              </a><br />
              <a
                href="tel:+11111111111"
                className="hover:underline"
              >
                +1 (111) 111-1111
              </a>
            </p>
            <Button
              asChild
              className="bg-burgundy-600 hover:bg-burgundy-700 text-white"
            >
              <Link to="/donate">Contribute</Link>
            </Button>
          </div> */}

          {/* Links */}
          <div className="w-1/3">
            <h3 className="text-xl mb-4 text-black">Links</h3>
            <div className="grid grid-cols-3 gap-8 w-full">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-black hover:underline text-md">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-black hover:underline text-md">About</Link>
                  </li>
                  <li>
                    <Link to="/books" className="text-black hover:underline text-md">Books</Link>
                  </li>
                  <li>
                    <Link to="/papers" className="text-black hover:underline text-md">Papers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/columns" className="text-black hover:underline text-md">Columns</Link>
                  </li>
                  <li>
                    <Link to="/media" className="text-black hover:underline text-md">Media</Link>
                  </li>
                  <li>
                    <Link to="/on-location" className="text-black hover:underline text-md">On Location</Link>
                  </li>
                  <li>
                    <Link to="/testimonials" className="text-black hover:underline text-md">Remembering a Scholar</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/#" className="text-black hover:underline text-md">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-black text-sm">
          <p>
            &copy; {currentYear} Nade Proeva Scholarship Endowment. All rights reserved. Website by <a href="https://linkedin.com/in/coriebeale" className="hover:underline">Corie Beale</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
