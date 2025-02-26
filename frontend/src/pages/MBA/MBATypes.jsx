import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const MBATypes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-200 to-cyan-200 flex items-center py-10 px-4">
      <motion.div
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Types of MBA Programs
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Not all MBA programs are the same! Based on your time, experience, and
          career goals, you can choose from:
        </p>
        <ul className="text-lg leading-relaxed list-disc list-inside space-y-2">
          <li>
            <strong>Full-Time MBA</strong> – Ideal if you want an immersive
            learning experience.
          </li>
          <li>
            <strong>Part-Time MBA</strong> – Perfect for working professionals
            balancing work and study.
          </li>
          <li>
            <strong>Executive MBA (EMBA)</strong> – Designed for experienced
            professionals aiming for leadership roles.
          </li>
          <li>
            <strong>Online MBA</strong> – Offers flexibility to study from
            anywhere.
          </li>
          <li>
            <strong>Distance MBA</strong> – A self-paced program with minimal
            classroom attendance.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MBATypes;
