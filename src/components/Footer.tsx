import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl">Professor Dr. Nade Proeva</h3>
            </div>
            <p className="text-burgundy-200 text-sm">
              Dedicated to preserving the memory and academic legacy of 
              Professor Nade Proeva (1949-2024), a respected Macedonian historian and academic.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 w-1/2">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-burgundy-200 hover:text-burgundy-50 text-sm">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-burgundy-200 hover:text-burgundy-50 text-sm">About</Link>
                  </li>
                  <li>
                    <Link to="/books" className="text-burgundy-200 hover:text-burgundy-50 text-sm">Books</Link>
                  </li>
                  <li>
                    <Link to="/papers" className="text-burgundy-200 hover:text-burgundy-50 text-sm">Papers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/columns" className="text-burgundy-200 hover:text-burgundy-50 text-sm">Columns</Link>
                  </li>
                  <li>
                    <Link to="/media" className="text-burgundy-200 hover:text-burgundy-50 text-sm">Media</Link>
                  </li>
                  <li>
                    <Link to="/on-location" className="text-burgundy-200 hover:text-burgundy-50 text-sm">On Location</Link>
                  </li>
                  <li>
                    <Link to="/testimonials" className="text-burgundy-200 hover:text-burgundy-50 text-sm">Remembering a Scholar</Link>
                  </li>
                  <li>
                    <a href="mailto:info@macedonianarts.org" className="text-burgundy-200 hover:text-burgundy-50 text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-burgundy-800 mt-8 pt-6 text-center text-burgundy-400 text-sm">
          <p>
            &copy; {currentYear} Professor Nade Proeva Memorial Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
