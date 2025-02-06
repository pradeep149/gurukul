import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const DifferencePgdmAndMBA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-4">
      <motion.div
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Aren’t PGDM and MBA the Same? Umm, No They Aren’t!
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          The difference between PGDM (Post Graduate Diploma in Management) and
          MBA (Master of Business Administration) primarily lies in their
          structure, affiliation, and focus. PGDM programs are offered by
          autonomous institutions that design their own curriculum based on
          industry demands, offering more flexibility and practical,
          industry-focused learning. In contrast, MBA programs are typically
          university-affiliated, following a prescribed curriculum with a
          broader theoretical foundation.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          PGDM programs are recognized by the AICTE and the AIU as equivalent to
          an MBA degree, but they are diplomas, while MBA is a degree. PGDM
          programs often include specializations like finance, marketing, human
          resources, and entrepreneurship, with a strong emphasis on real-world
          skills and emerging market trends. MBA programs offer a traditional
          academic approach with a focus on comprehensive business knowledge.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Both qualifications open doors to high-ranking management careers in
          industries such as MNCs, PSUs, banks, and NGOs, with PGDM providing an
          edge for those seeking industry relevance and flexibility. Ultimately,
          both PGDM and MBA equip students for leadership roles, with the choice
          depending on individual career goals and program preferences.
        </p>
      </motion.div>
    </div>
  );
};

export default DifferencePgdmAndMBA;
