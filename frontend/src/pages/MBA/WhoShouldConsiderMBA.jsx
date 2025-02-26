import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaRocket,
  FaExchangeAlt,
  FaCrown,
} from "react-icons/fa";

const listVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const mbaCandidates = [
  {
    title: "Fresh Graduates",
    description: "Build a strong career foundation.",
    icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
  },
  {
    title: "Working Professionals",
    description: "Get that promotion or salary hike.",
    icon: <FaBriefcase className="text-green-600 text-3xl" />,
  },
  {
    title: "Aspiring Entrepreneurs",
    description: "Gain the skills to start and run a business.",
    icon: <FaRocket className="text-purple-600 text-3xl" />,
  },
  {
    title: "Career Switchers",
    description: "Transition into a new industry with confidence.",
    icon: <FaExchangeAlt className="text-red-600 text-3xl" />,
  },
  {
    title: "Future Business Leaders",
    description: "Take on top leadership roles.",
    icon: <FaCrown className="text-yellow-600 text-3xl" />,
  },
];

const WhoShouldConsiderMBA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-6">
      <motion.div
        className="max-w-4xl mx-auto w-full bg-white rounded-xl shadow-2xl p-8 md:p-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Who Should Consider an MBA?
        </h1>

        <ul className="space-y-6">
          {mbaCandidates.map((candidate, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {candidate.icon}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {candidate.title}
                </h3>
                <p className="text-lg text-gray-700">{candidate.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default WhoShouldConsiderMBA;
