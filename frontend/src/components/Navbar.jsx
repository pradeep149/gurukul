import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { assets } from "../../assets/assets";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappGroupLink = "https://chat.whatsapp.com/FsSXwdKH6Z91Udv6MgN8FN";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 shadow-lg font-medium">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={assets.logo}
              className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
              alt="Logo"
            />
          </Link>
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-blue-900">
              The Gurukul
            </span>
            <span className="text-md font-serif text-yellow-600">
              Our Passion Your Success
            </span>
          </div>
        </div>

        <button
          className="sm:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden sm:flex gap-8 text-md font-semibold text-gray-700 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
              } hover:text-blue-600 transition-colors duration-300`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about_us"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
              } hover:text-blue-600 transition-colors duration-300`
            }
          >
            ABOUT US
          </NavLink>
          <Menu as="div" className="relative">
            <Menu.Button className="flex flex-col items-center gap-1 hover:text-blue-600 transition-colors duration-300">
              SOCIAL
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-lg shadow-lg p-4 space-y-2 text-white text-md">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:scale-105 transition-transform ${
                        active ? "text-blue-200" : ""
                      }`}
                    >
                      <FaInstagram /> Instagram
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:scale-105 transition-transform ${
                        active ? "text-blue-200" : ""
                      }`}
                    >
                      <FaFacebook /> Facebook
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:scale-105 transition-transform ${
                        active ? "text-blue-200" : ""
                      }`}
                    >
                      <FaTwitter /> Twitter
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <a
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300"
          >
            <FaWhatsapp className="text-2xl text-green-600" />
            WHATSAPP
          </a>
        </ul>

        <div className="hidden sm:flex">
          <button className="px-8 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            Login
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 p-4 bg-gray-100 sm:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-gray-700 ${
                isActive ? "text-blue-600 font-bold" : ""
              } hover:text-blue-600 transition-colors duration-300`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about_us"
            className={({ isActive }) =>
              `block text-gray-700 ${
                isActive ? "text-blue-600 font-bold" : ""
              } hover:text-blue-600 transition-colors duration-300`
            }
          >
            ABOUT US
          </NavLink>
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              SOCIAL
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-lg shadow-lg p-4 space-y-2 text-white text-md">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:scale-105 transition-transform ${
                        active ? "text-blue-200" : ""
                      }`}
                    >
                      <FaInstagram /> Instagram
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:scale-105 transition-transform ${
                        active ? "text-blue-200" : ""
                      }`}
                    >
                      <FaFacebook /> Facebook
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:scale-105 transition-transform ${
                        active ? "text-blue-200" : ""
                      }`}
                    >
                      <FaTwitter /> Twitter
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <a
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-700 hover:text-green-600 transition-colors duration-300"
          >
            Join WhatsApp Group
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
