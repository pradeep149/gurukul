import React from "react";
import { motion } from "framer-motion";
import { bSchools } from "../../content/bSchoolData";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TopBSchools = () => {
  return (
    // Outer container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-4">
      <motion.div
        // Inner content card
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          The Best and Brightest B-Schools in the Country
        </h1>

        <div className="space-y-8">
          {bSchools.map((b, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {b.title}
              </h3>
              <p className="leading-relaxed text-lg mb-2">{b.details}</p>
              <p className="font-medium text-indigo-700">{b.salaryInfo}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TopBSchools;
