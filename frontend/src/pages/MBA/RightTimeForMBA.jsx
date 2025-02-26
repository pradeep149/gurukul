import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaLightbulb,
  FaGlobe,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const paths = [
  {
    title: "Starting Immediately",
    description: [
      "Early career start with a strong business foundation.",
      "Higher earning potential from an early stage.",
    ],
    icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "After Work Experience",
    description: [
      "Practical business insights make learning more meaningful.",
      "Better job prospects due to prior industry experience.",
      "Stronger professional network.",
    ],
    icon: <FaBriefcase className="text-green-600 text-3xl" />,
    bgColor: "bg-green-100",
  },
];

const decisionFactors = [
  {
    title: "Clear Career Goals?",
    description:
      "If you have a well-defined career plan, starting early can be beneficial.",
    icon: <FaLightbulb className="text-purple-600 text-3xl" />,
  },
  {
    title: "Want Real-World Exposure?",
    description:
      "If you value hands-on experience, gaining work experience first is a smart move.",
    icon: <FaGlobe className="text-red-600 text-3xl" />,
  },
];

const RightTimeForMBA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-6">
      <motion.div
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-8 md:p-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          When is the Right Time for an MBA?
        </h1>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${path.bgColor} flex flex-col items-start`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-4">
                {path.icon}
                <h3 className="text-2xl font-semibold text-gray-900">
                  {path.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-lg text-gray-700">
                {path.description.map((desc, i) => (
                  <li key={i}>✅ {desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Decision Factors Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            📌 So, What’s Best for You?
          </h2>
          <ul className="space-y-6">
            {decisionFactors.map((factor, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {factor.icon}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {factor.title}
                  </h3>
                  <p className="text-lg text-gray-700">{factor.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RightTimeForMBA;
