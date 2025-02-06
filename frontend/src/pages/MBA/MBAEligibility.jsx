import React from "react";
import { motion } from "framer-motion";
import { faqList } from "../../content/MbaFaqData";
import { FiChevronRight } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const MBAEligibility = () => {
  return (
    // Outer container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-4">
      <motion.div
        // Inner container acting as a card
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Is MBA the Right Choice for Me?
        </h1>

        {/* FAQ List */}
        {faqList.map((item, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-gray-900">
              <FiChevronRight className="text-indigo-600" size={24} />
              {item.question}
            </h3>
            {item.answer.map((ans, i) => (
              <p key={i} className="leading-relaxed text-lg mb-2 ml-6">
                &bull; {ans}
              </p>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MBAEligibility;
