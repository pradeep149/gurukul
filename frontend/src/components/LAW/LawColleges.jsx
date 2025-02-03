import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { lawColleges } from "../../content/LawCollegeData";

const LawColleges = () => {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Leading Law Colleges
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lawColleges.map((college, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => navigate(college.path, { state: { college } })}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
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
