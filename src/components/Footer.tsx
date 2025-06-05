import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-amber-500 to-yellow-100 text-white py-8">
      <div className="container mx-auto px-4">
        <div
          // className="grid grid-cols-1 md:grid-cols-3 gap-8"
          className="flex items-start justify-start"
        >
          <div>
            <p className="text-black text-lg w-1/4">
              This site is dedicated to preserving the memory and academic legacy of
              Professor Nade Proeva, a distinguished Macedonian scholar, historian, researcher, and educator.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4 text-black">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 w-1/2">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-black hover:text-burgundy-50 text-sm">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-black hover:text-burgundy-50 text-sm">About</Link>
                  </li>
                  <li>
                    <Link to="/books" className="text-black hover:text-burgundy-50 text-sm">Books</Link>
                  </li>
                  <li>
                    <Link to="/papers" className="text-black hover:text-burgundy-50 text-sm">Papers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/columns" className="text-black hover:text-burgundy-50 text-sm">Columns</Link>
                  </li>
                  <li>
                    <Link to="/media" className="text-black hover:text-burgundy-50 text-sm">Media</Link>
                  </li>
                  <li>
                    <Link to="/on-location" className="text-black hover:text-burgundy-50 text-sm">On Location</Link>
                  </li>
                  <li>
                    <Link to="/testimonials" className="text-black hover:text-burgundy-50 text-sm">Remembering a Scholar</Link>
                  </li>
                  <li>
                    <a href="mailto:info@macedonianarts.org" className="text-black hover:text-burgundy-50 text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-black text-sm">
          <p>
            &copy; {currentYear} Nade Proeva Scholarship Endowment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
