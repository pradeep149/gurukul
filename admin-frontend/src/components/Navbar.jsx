import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        background: isScrolled
          ? "rgba(0, 0, 0, 0.6)"
          : "linear-gradient(to right, #06b6d4, #4f46e5)",
        transition: "background 0.3s ease",
      }}
      className="sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-14 h-14 md:w-20 md:h-20 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div>
            <h1
              className="text-xl md:text-3xl font-bold text-indigo-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Gurukul
            </h1>
            <p
              className="text-sm md:text-xl italic font-medium text-yellow-500"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              "Our Passion, Your Success"
            </p>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center space-y-6 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:bg-transparent md:bg-opacity-0 md:flex md:flex-row md:space-y-0 md:space-x-6 md:transform-none md:translate-x-0`}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-lg font-semibold ${
                isActive
                  ? "bg-white text-indigo-500 shadow-md"
                  : "hover:bg-indigo-400 hover:text-white transition-all duration-300"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/add"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-lg font-semibold ${
                isActive
                  ? "bg-white text-indigo-500 shadow-md"
                  : "hover:bg-indigo-400 hover:text-white transition-all duration-300"
              }`
            }
          >
            Add Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
