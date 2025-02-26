import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const reasons = [
  {
    title: "Career Growth 🚀",
    description:
      "An MBA gives you the leadership and strategic skills to land senior management roles and even C-suite positions like CEO or CFO.",
    bgColor: "bg-blue-100",
  },
  {
    title: "Higher Salary 💰",
    description:
      "MBA graduates typically earn more than non-MBA professionals. A top B-school degree often guarantees a high return on investment (ROI).",
    bgColor: "bg-green-100",
  },
  {
    title: "Strong Professional Network 🤝",
    description:
      "You’ll meet classmates, professors, and industry experts who can help in job placements, mentorship, and future business collaborations.",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Entrepreneurial Skills 💡",
    description:
      "Thinking about starting a business? An MBA gives you the tools and knowledge to turn your ideas into a successful venture.",
    bgColor: "bg-purple-100",
  },
  {
    title: "Career Switch 🔄",
    description:
      "Want to move from engineering to finance? Or from sales to consulting? An MBA makes career transitions smoother and easier.",
    bgColor: "bg-red-100",
  },
];

const WhyGetMBA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Get an MBA?
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${reason.bgColor}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-lg text-gray-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyGetMBA;
