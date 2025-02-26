import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhoCanPursueMBA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-blue-200 to-indigo-200 flex items-center py-10 px-4">
      <motion.div
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Who Can Pursue an MBA?
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          To enroll in an MBA, you generally need a bachelor’s degree. In India,
          there’s also an option to pursue an Integrated MBA, a five-year
          program that combines undergraduate and postgraduate studies.
        </p>
      </motion.div>
    </div>
  );
};

export default WhoCanPursueMBA;
