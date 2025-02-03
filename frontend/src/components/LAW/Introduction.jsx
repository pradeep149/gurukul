import React, { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaClock,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-blue-200 to-indigo-300 min-h-[50vh] flex items-center justify-center text-center px-6 py-12"
    >
      <div className="max-w-4xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          What is LLB?
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          LLB stands for <span className="font-semibold">Bachelor of Laws</span>
          , a foundational degree in law. It is typically a{" "}
          <span className="font-semibold">3-year course</span> designed for
          graduates who have completed an undergraduate degree in any
          discipline. So, a minimum of{" "}
          <span className="font-semibold">6 years</span> (3 years of graduation
          + 3 years of LLB) is required.
        </p>
        <p className="text-lg text-gray-800 mt-4 leading-relaxed">
          Instead, one can pursue a{" "}
          <span className="font-semibold">BA LLB or BBA LLB</span>, a 5-year
          integrated course after the 12th, saving one precious year.
        </p>
      </div>
    </motion.div>
  );
};

export default Introduction;
