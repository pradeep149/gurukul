import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGlobe,
  FaBook,
  FaChartLine,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const listVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const businessSchools = [
  {
    title: "India",
    description: "IIMs, XLRI, FMS, IITs, SPJIMR, MDI, etc.",
    icon: <FaUniversity className="text-blue-600 text-3xl" />,
  },
  {
    title: "Global",
    description:
      "Harvard, Stanford, Wharton, London Business School, INSEAD, etc.",
    icon: <FaGlobe className="text-green-600 text-3xl" />,
  },
];

const keyFactors = [
  {
    title: "Specializations Offered",
    description:
      "Choose based on your career interests (Finance, Marketing, HR, etc.).",
    icon: <FaBook className="text-purple-600 text-3xl" />,
  },
  {
    title: "Placement and Salary Trends",
    description: "Check the average salary packages and recruiter lists.",
    icon: <FaChartLine className="text-red-600 text-3xl" />,
  },
  {
    title: "Location & Industry Exposure",
    description:
      "Cities like Mumbai, Bangalore, and Hyderabad offer better job prospects.",
    icon: <FaMapMarkerAlt className="text-yellow-600 text-3xl" />,
  },
  {
    title: "Affordability & Scholarships",
    description: "Compare tuition fees and financial aid options.",
    icon: <FaMoneyBillWave className="text-blue-600 text-3xl" />,
  },
];

const WhereToDoMBA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-6">
      <motion.div
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-8 md:p-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Where Should You Do an MBA?
        </h1>

        {/* Top Business Schools Section */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            🏛️ Top Business Schools
          </h2>
          <ul className="space-y-6">
            {businessSchools.map((school, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {school.icon}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {school.title}
                  </h3>
                  <p className="text-lg text-gray-700">{school.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Key Factors Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            📌 Key Factors to Consider
          </h2>
          <ul className="space-y-6">
            {keyFactors.map((factor, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md"
                variants={listVariants}
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

export default WhereToDoMBA;
