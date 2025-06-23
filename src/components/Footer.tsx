import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-amber-500 to-yellow-100 text-white py-8">
      <div className="container mx-auto px-4">
        <div
          // className="grid grid-cols-3 gap-8"
          className="flex flex-col sm:flex-row items-start justify-between gap-10 md:gap-0"
        >
          {/* About and Links */}
          <div className="w-full md:w-[48%] xl:w-[42%]">
            <p className="text-black text-xs md:text-sm lg:text-md text-justify">
              This site is dedicated to preserving the memory and academic legacy of
              Professor Dr. Nade Proeva, a distinguished Macedonian scholar, author, historian, researcher, and educator.
            </p>
            <br />
            <h3 className="text-xl mb-4 text-black">Links</h3>
            <div className="grid grid-cols-4 w-full text-xs md:text-sm lg:text-md text-black">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">About</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link to="/books" className="hover:underline">Books</Link>
                </li>
                <li>
                  <Link to="/papers" className="hover:underline">Papers</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link to="/columns" className="hover:underline">Columns</Link>
                </li>
                <li>
                  <Link to="/media" className="hover:underline">Media</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link to="/on-location" className="hover:underline">On Location</Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:underline">Remembering Nade</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Statement */}
          <div className="w-full md:w-[48%] xl:w-[42%]">
            <p className="text-black text-xs md:text-sm lg:text-md text-justify">
              <span className="font-bold">&copy; All rights reserved.</span> The contents of this website, including but not limited to text,
              images, and other media, are protected by copyright law. No part of these materials may be copied,
              reproduced, distributed, transmitted, displayed, published, or otherwise used in any form or by any means, 
              including electronic, mechanical, photocopying, recording, or otherwise, without 
              the prior written permission of the copyright holder. Unauthorized use is strictly prohibited and may result in legal action.
            </p>
            <br />
            <div className="flex justify-between text-burgundy-800 font-bold text-xs md:text-sm lg:text-base">
              <Link to="https://ukim.academia.edu/NadeProeva" className="hover:underline">academia.edu</Link>
              <Link to="http://fzf.ukim.edu.mk/проф-д-р-наде-проева/" className="hover:underline">fzf.ukim.edu.mk</Link>
              <Link to="https://mk.wikipedia.org/wiki/Наде_Проева" className="hover:underline">mk.wikipedia.org</Link>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between gap-1 border-t-2 border-amber-800 mt-8 pt-6 text-black text-center text-xs md:text-sm">
          <p className="self-start">
            &copy; {currentYear} <i>Nade Proeva Scholarship Endowment</i>.
          </p>
          <p className="self-end">
            Website courtesy of <a href="https://linkedin.com/in/coriebeale" className="font-bold hover:underline">Corie Beale</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
