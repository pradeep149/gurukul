import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const MBAEntranceExams = () => {
  return (
    // Outer container with the signature gradient theme
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-4">
      <motion.div
        // Inner container as a white card
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Which Exams Should I Write?
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Entrance exams are a crucial part of pursuing an MBA in India. These
          exams determine your eligibility for top MBA/PGDM programs, so it’s
          important to be well-informed. For instance, if you’re aiming for
          institutions like the IIMs, the CAT exam is key. Over 1,300 MBA
          colleges accept CAT scores, making it India’s most popular entrance
          test. If you’re looking at Tier-2 private MBA colleges, exams like
          CMAT or MAT might be more suitable. Meanwhile, XAT, organized by XLRI
          Jamshedpur, is also widely accepted by 800+ colleges. Each exam has
          its own eligibility criteria, pattern, and scope, so choose based on
          your goals and target colleges.
        </p>
      </motion.div>
    </div>
  );
};

export default MBAEntranceExams;
