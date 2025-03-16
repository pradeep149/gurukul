import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const emailRecipient = "support@The Gurukul.com";
  const whatsappChatLink = "https://wa.me/919014002040";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black mt-5 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Branding */}
          <div className="flex flex-col items-start">
            <img
              src={assets.logo}
              alt="The Gurukul Logo"
              className="w-20 h-16 rounded-full mb-4"
            />
            <h1 className="text-3xl font-bold">The Gurukul</h1>
            <p className="text-xl font-bold text-yellow-600 mb-2">
              "Our Passion Your Success"
            </p>
            <p className="text-gray-700">
              Empowering students with knowledge and skills for a brighter
              future.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col space-y-4">
            {/* Contact Us button + dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setContactDropdownVisible(!contactDropdownVisible)
                }
                className="font-semibold text-lg hover:text-indigo-600 flex items-center"
              >
                Contact Us
              </button>
              {contactDropdownVisible && (
                <div className="absolute bg-gray-200 shadow-lg rounded-md mt-2 p-4 space-y-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-black hover:text-indigo-500"
                  >
                    <FaEnvelope className="text-lg" />
                    <span>Email</span>
                  </a>
                  <a
                    href={whatsappChatLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-black hover:text-green-500"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://www.instagram.com/thegurukulmbaprep/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-black hover:text-pink-500"
                  >
                    <FaInstagram className="text-lg" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@Th3-Gurukul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-black hover:text-red-500"
                  >
                    <FaYoutube className="text-lg" />
                    <span>YouTube</span>
                  </a>
                </div>
              )}
            </div>

            {/* Phone number (outside the dropdown) */}
            <div className="flex items-center space-x-3 text-black">
              <FaPhone className="text-lg" />
              <a
                href="tel:+919014002040"
                className="hover:text-blue-500 transition-colors"
              >
                +91 9014002040
              </a>
            </div>

            {/* Map Location (placeholder iframe) */}
            <div className="mt-2">
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3613041236154!2d78.386228!3d17.4424128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915533d2bc17%3A0xee0e86d892fdf282!2sThe%20Gurukul%20-%20Best%20IPMAT%2C%20CLAT%20%26%20CAT%20Coaching%20in%20Hyderabad!5e0!3m2!1sen!2sus!4v1742125908248!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Store Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Store</h3>
            <p className="text-gray-700 mb-4">
              Explore our store for papers, courses, and exclusive educational
              resources to enhance your learning journey.
            </p>
            <Link
              to="#"
              className="px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:scale-105 transform transition-all text-center"
            >
              Coming soon
            </Link>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-700 text-sm md:text-base">
            © {currentYear} The Gurukul. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/thegurukulmbaprep/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500"
            >
              <FaInstagram className="text-2xl" />
            </a>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebook className="text-2xl" />
            </a> */}
            <a
              href="https://www.youtube.com/@Th3-Gurukul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
