import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ReasonsToDoMBA = () => {
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
          Give Me One Reason to Do an MBA. Well, Here’s Four!
        </h1>
        <p className="text-lg leading-relaxed mb-2">
          Thinking about an MBA? You're not alone – many people choose to pursue
          this path for different reasons, and it could be the right move for
          you too:
        </p>
        <ul className="list-disc list-inside ml-4 text-lg leading-relaxed space-y-3 mt-4 mb-6">
          <li>
            <strong>Career Change:</strong> An MBA can give you the skills to
            transition into a new field—finance, marketing, HR, or
            entrepreneurship.
          </li>
          <li>
            <strong>Career Advancement:</strong> It offers the tools to move up
            the corporate ladder and stand out in a competitive job market.
          </li>
          <li>
            <strong>Zeal to Learn Management:</strong> Understand how businesses
            operate holistically and hone strategic thinking.
          </li>
          <li>
            <strong>Higher Salary &amp; Better Work Culture:</strong> Often
            leads to corporate jobs in top companies with improved pay and
            perks.
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          Whether it’s about a better work-life balance, being part of dynamic
          corporate teams, or just self-improvement, an MBA can help you achieve
          a fulfilling and successful career!
        </p>
      </motion.div>
    </div>
  );
};

export default ReasonsToDoMBA;
