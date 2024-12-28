import React from "react";
import { motion } from "framer-motion";

const Header = ({ ExamName }) => (
  <header className="relative text-center py-16 px-6 bg-gradient-to-r from-sky-200 via-cyan-100 to-blue-200">
    <div className="absolute inset-0 overflow-hidden -z-10">
      <svg
        className="absolute top-0 left-0 transform scale-150 opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        fill="none"
      >
        <circle cx="400" cy="400" r="400" fill="url(#gradient)" />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <motion.div
      className="relative"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 drop-shadow-lg">
        {ExamName}
      </h1>
      <p className="text-2xl font-bold text-indigo-700 mt-2">
        Integrated Program in Management Aptitude Test
      </p>
      <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
        A gateway to the most prestigious IIMs in India. Prepare to embark on a
        journey that combines academic excellence with professional success.
      </p>
    </motion.div>
  </header>
);

export default Header;
