import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCheckCircle,
  FaBook,
  FaUniversity,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const steps = [
  {
    title: "Research MBA Programs",
    description: "Pick the one that aligns with your career goals.",
    icon: <FaSearch className="text-blue-600 text-3xl" />,
  },
  {
    title: "Check Eligibility",
    description: "Ensure you meet the degree and entrance exam requirements.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
  },
  {
    title: "Prepare for Entrance Exams",
    description: (
      <>
        <strong>India:</strong> CAT, XAT, NMAT, MAT, GMAT <br />
        <strong>Abroad:</strong> GMAT, GRE, TOEFL, IELTS
      </>
    ),
    icon: <FaBook className="text-purple-600 text-3xl" />,
  },
  {
    title: "Apply to Business Schools",
    description: "Submit applications, including SOPs and essays.",
    icon: <FaUniversity className="text-red-600 text-3xl" />,
  },
  {
    title: "Clear Selection Rounds",
    description:
      "Be ready for group discussions, interviews, and written ability tests.",
    icon: <FaUsers className="text-yellow-600 text-3xl" />,
  },
  {
    title: "Secure Admission & Start Your MBA Journey! 🎓",
    description: "You're now on your way to success!",
    icon: <FaGraduationCap className="text-blue-600 text-3xl" />,
  },
];

const HowToGetIntoMBA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-6">
      <motion.div
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-8 md:p-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          How to Get Into an MBA Program?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-gray-100 flex items-start space-x-4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {step.icon}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HowToGetIntoMBA;
