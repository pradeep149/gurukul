import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SyllabusSection = ({ syllabus, ExamName }) => {
  const [activeSection, setActiveSection] = useState(
    syllabus[0]?.section || ""
  );

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto bg-gradient-to-r from-sky-200 via-cyan-100 to-blue-200">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
        Syllabus of {ExamName}
      </h2>

      <div className="flex justify-center space-x-6 mb-8">
        {syllabus.map((item, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full font-semibold text-lg shadow-md transition transform ${
              activeSection === item.section
                ? "bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white scale-105 shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-300 hover:text-white"
            }`}
            onClick={() => setActiveSection(item.section)}
          >
            {item.section}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {syllabus.map(
          (item) =>
            activeSection === item.section && (
              <motion.div
                key={item.section}
                className="mb-12 bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-serif text-center">
                  {item.section}
                </h3>
                <table className="min-w-full shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-200 via-blue-200 to-cyan-200 text-gray-900">
                      <th className="text-center px-6 py-3 font-bold text-xl">
                        Topics
                      </th>
                      <th className="text-center px-6 py-3 font-bold text-xl">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.topics.map((topic, subIndex) => (
                      <tr
                        key={subIndex}
                        className={`border-b transition ${
                          subIndex % 2 === 0
                            ? "bg-gradient-to-r from-gray-50 via-cyan-50 to-gray-50"
                            : "bg-gradient-to-r from-gray-100 via-cyan-100 to-gray-100"
                        } hover:bg-gradient-to-r hover:from-cyan-100 hover:via-indigo-100 hover:to-blue-100`}
                      >
                        <td className="px-6 py-4 text-gray-800 font-semibold">
                          {topic.title}
                        </td>
                        <td className="px-6 py-4 text-gray-700 font-medium">
                          {topic.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </section>
  );
};

export default SyllabusSection;
