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
          {/* About and Links */}
          <div className="w-2/5">
            <p className="text-black text-md">
              This site is dedicated to preserving the memory and academic legacy of
              Professor Dr. Nade Proeva, a distinguished Macedonian scholar, historian, researcher, and educator.
            </p>
            <br />
            <h3 className="text-xl mb-4 text-black">Links</h3>
            <div className="grid grid-cols-4 w-full">
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
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link to="/papers" className="text-black hover:underline text-md">Papers</Link>
                </li>
                <li>
                  <Link to="/columns" className="text-black hover:underline text-md">Columns</Link>
                </li>
                <li>
                  <Link to="/media" className="text-black hover:underline text-md">Media</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link to="/on-location" className="text-black hover:underline text-md">On Location</Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-black hover:underline text-md">Remembering a Scholar</Link>
                </li>
                <li>
                  <Link to="https://ukim.academia.edu/NadeProeva" className="text-black hover:underline text-md">Academia.edu</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-black hover:underline text-md">University Page</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Statement */}
          <div className="w-2/5">
            <p className="text-black text-md text-justify">
              <span className="font-bold">&copy; All rights reserved.</span> The contents of this website, including but not limited to text,
              images, and other media, are protected by copyright law. No part of these materials may be copied,
              reproduced, distributed, transmitted, displayed, published, or otherwise used in any form or by any means, 
              including electronic, mechanical, photocopying, recording, or otherwise, without 
              the prior written permission of the copyright holder. Unauthorized use is strictly prohibited and may result in legal action.
            </p>
          </div>
        </div>
        
        <div className="flex justify-between border-t-2 border-amber-800 mt-8 pt-6 text-center text-black text-sm">
          <p>
            &copy; {currentYear} <i>Nade Proeva Scholarship Endowment</i>.
          </p>
          <p>
            Website courtesy of <a href="https://linkedin.com/in/coriebeale" className="font-bold hover:underline">Corie Beale</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
