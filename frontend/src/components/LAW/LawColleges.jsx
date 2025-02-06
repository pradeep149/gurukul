import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { lawColleges } from "../../content/LawCollegeData";

const LawColleges = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12 drop-shadow-lg">
        🎓 Leading Law Colleges
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lawColleges.map((college, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* College Card */}
            <div
              className="bg-gradient-to-br from-blue-100 to-indigo-200 shadow-lg rounded-lg p-8 text-center 
                          flex items-center justify-center h-48 cursor-pointer 
                          hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              style={{ minHeight: "12rem" }}
              onClick={() => navigate(college.path, { state: { college } })}
            >
              <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
                {college.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LawColleges;
