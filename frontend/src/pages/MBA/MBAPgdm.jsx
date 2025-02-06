import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const MBAPgdm = () => {
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
          PGDM — Like MBA but Not MBA
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          A Post Graduate Diploma in Management (PGDM) is a prestigious two-year
          full-time program that equips students with the skills and knowledge
          required to excel in management roles. Similar to an MBA, the PGDM
          stands out for its industry-focused approach, flexible curriculum, and
          autonomy in course design, which allows institutions to tailor their
          programs to align with evolving industry demands. Renowned institutes
          in India, such as XLRI Jamshedpur, SPJIMR Mumbai, MDI Gurgaon, IMT
          Ghaziabad, and TISS Mumbai, offer some of the most sought-after PGDM
          programs.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          These programs cover a diverse range of topics, including information
          technology, finance, marketing, human resources, supply chain
          management, agriculture, entrepreneurship, and communication. Approved
          by the All India Council for Technical Education (AICTE) and
          recognized by the Association of Indian Universities (AIU) as
          equivalent to an MBA, PGDM graduates are well-equipped to secure
          opportunities in multinational corporations, top Indian companies,
          government jobs, banks, PSUs, NGOs, and even entrepreneurship.
        </p>
      </motion.div>
    </div>
  );
};

export default MBAPgdm;
