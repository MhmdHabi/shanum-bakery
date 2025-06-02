import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import logo from "../assets/navbar.png";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const navItems = ["beranda", "galeri", "produk", "testimoni", "maps"];

  // Scroll to section if hash exists on load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
  }, []);

  return (
    <nav className="fixed w-full z-50 flex items-center justify-between px-6 py-2 bg-transparent text-gray-900">
      {/* Logo */}
      <img src={logo} alt="Logo Toko Kue" className="h-14 w-auto" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 font-semibold absolute left-1/2 transform -translate-x-1/2 bg-orange-300 bg-opacity-50 px-[3px] py-2 rounded-full shadow-md border border-gray-200">
        {navItems.map((item) => (
          <li key={item}>
            <Link to={item} smooth={true} duration={500} spy={true} hashSpy={true} activeClass="active-link" className="cursor-pointer text-[#92400e] capitalize px-4 py-2 transition-all duration-200">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* WhatsApp Icon */}
      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#92400e] hover:text-green-500 hidden md:block">
        <FaWhatsapp />
      </a>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-2xl cursor-pointer z-50 text-[#92400e] hover:text-yellow-600 transition duration-300" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <HiMenuAlt1 />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gradient-to-b from-orange-200 to-transparent text-gray-800 flex flex-col items-center space-y-4 py-6 px-4 border-t border-white shadow-xl transition-all duration-300 ease-in-out rounded-b-2xl z-40 backdrop-blur-sm">
          {navItems.map((item) => (
            <li key={item} className="w-full text-center">
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                activeClass="active-link"
                onClick={() => setIsOpen(false)}
                className="inline-block w-full text-lg capitalize px-6 py-3 rounded-full bg-white/60 text-[#5C3317] font-medium hover:bg-orange-300 hover:text-white transition duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.link/dlqo92"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg px-6 py-3 text-green-700 bg-white/60 rounded-full hover:bg-green-500 hover:text-white transition duration-200"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
