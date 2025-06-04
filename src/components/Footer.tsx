
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-memorial-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/e4f9916f-50e2-487b-91b0-94154122695f.png"
                alt="Nade Proeva Endowment Fund"
                className="w-12 h-auto mr-3"
              />
              <h3 className="text-xl">Professor Nade Proeva</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Dedicated to preserving the memory and academic legacy of 
              Professor Nade Proeva (1949-2024), a respected Macedonian historian and academic.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-white text-sm">About</Link>
                  </li>
                  <li>
                    <Link to="/books" className="text-gray-300 hover:text-white text-sm">Books</Link>
                  </li>
                  <li>
                    <Link to="/papers" className="text-gray-300 hover:text-white text-sm">Papers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/gallery" className="text-gray-300 hover:text-white text-sm">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/donate" className="text-gray-300 hover:text-white text-sm">Donate</Link>
                  </li>
                  <li>
                    <a href="mailto:info@macedonianarts.org" className="text-gray-300 hover:text-white text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-memorial-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Professor Nade Proeva Memorial Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
