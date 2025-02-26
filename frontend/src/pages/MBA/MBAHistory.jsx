import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const MBAHistory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-cyan-200 to-blue-200 flex items-center py-10 px-4">
      <motion.div
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          A Quick Look at the History of MBA
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Did you know the first MBA program was introduced in 1908 at Harvard
          Business School? It was created to train professionals for leadership
          roles, and today, MBA programs have evolved to suit different career
          goals, industries, and learning preferences.
        </p>
      </motion.div>
    </div>
  );
};

export default MBAHistory;
