import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-400 min-h-[60vh] flex items-center justify-center text-center px-6 py-16 shadow-lg rounded-lg"
    >
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg flex items-center justify-center"
        >
          <FaGraduationCap className="mr-3 text-yellow-500 animate-bounce" />
          What is LLB?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl text-gray-900 leading-relaxed"
        >
          <span className="font-bold">LLB</span> stands for{" "}
          <span className="font-semibold">Bachelor of Laws</span>, a
          foundational degree in law. It is typically a{" "}
          <span className="font-semibold">3-year course</span> designed for
          graduates who have completed an undergraduate degree in any
          discipline. So, a minimum of{" "}
          <span className="font-semibold">6 years</span> (3 years of graduation
          + 3 years of LLB) is required.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl text-gray-900 mt-6 leading-relaxed"
        >
          Alternatively, one can pursue a{" "}
          <span className="font-semibold">BA LLB or BBA LLB</span>, a{" "}
          <span className="font-semibold">5-year integrated course</span> after
          the 12th, saving one valuable year.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Introduction;
