import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaClock,
  FaListAlt,
  FaCheckCircle,
  FaChartLine,
  FaGraduationCap,
  FaBook,
  FaCalculator,
  FaBrain,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const examFormat = [
  {
    title: "Mode",
    detail: "Computer-based test (CBT)",
    icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
  },
  {
    title: "Duration",
    detail: "2 hours",
    icon: <FaClock className="text-green-600 text-3xl" />,
  },
  {
    title: "Total Questions",
    detail: "66 (Divided into 3 sections)",
    icon: <FaListAlt className="text-purple-600 text-3xl" />,
  },
  {
    title: "Marking Scheme",
    detail:
      "+3 for correct answers, -1 for incorrect MCQs (No negative marking for Non-MCQs)",
    icon: <FaCheckCircle className="text-red-600 text-3xl" />,
  },
];

const examSections = [
  {
    title: "Quantitative Ability (QA)",
    description: "Tests your math skills.",
    icon: <FaCalculator className="text-blue-600 text-3xl" />,
  },
  {
    title: "Verbal Ability & Reading Comprehension (VARC)",
    description: "Evaluates your English proficiency.",
    icon: <FaBook className="text-green-600 text-3xl" />,
  },
  {
    title: "Data Interpretation & Logical Reasoning (DILR)",
    description: "Measures your problem-solving abilities.",
    icon: <FaBrain className="text-purple-600 text-3xl" />,
  },
];

const whyTakeCAT = [
  {
    title: "Gateway to Top B-Schools",
    description:
      "A high CAT score means admission to prestigious MBA colleges.",
    icon: <FaGraduationCap className="text-yellow-600 text-3xl" />,
  },
  {
    title: "Better Career Opportunities",
    description: "More job offers and higher salaries.",
    icon: <FaChartLine className="text-blue-600 text-3xl" />,
  },
  {
    title: "Fast Career Growth",
    description:
      "Many MBA graduates from top institutes become industry leaders.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
];

const WhatIsCAT = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-6">
      <motion.div
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-8 md:p-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          What is CAT & Why is It Important?
        </h1>

        {/* CAT Exam Format Section */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            📌 CAT Exam Format
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examFormat.map((item, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-md flex items-start space-x-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {item.icon}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CAT Exam Sections */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            📚 CAT Exam Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examSections.map((section, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-md flex items-start space-x-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {section.icon}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h3>
                  <p className="text-lg text-gray-700">{section.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Take CAT? */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            🎯 Why Take CAT?
          </h2>
          <ul className="space-y-6">
            {whyTakeCAT.map((reason, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {reason.icon}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-gray-700">{reason.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatIsCAT;
