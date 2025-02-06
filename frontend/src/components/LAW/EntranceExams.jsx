import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { entranceExams } from "../../content/LawEntranceExams";

const FeeTable = () => {
  const fees = [
    { exam: "CLAT", fee: "INR 4,000 (General/OBC), INR 3,500 (SC/ST)" },
    { exam: "AILET", fee: "INR 3,500 (General), INR 1,500 (SC/ST, PWD)" },
    {
      exam: "SLAT",
      fee: "INR 2,250 per attempt, INR 1,000 program fee per college",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-200 to-indigo-400 p-8 rounded-xl shadow-2xl mt-12"
    >
      <h3 className="text-4xl font-extrabold text-white text-center mb-6 flex items-center justify-center drop-shadow-lg">
        <FaMoneyBillWave className="mr-3 text-yellow-400 animate-pulse" /> Exam
        Fees
      </h3>
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-4 px-6 text-gray-900 text-left font-semibold text-lg">
              Exam
            </th>
            <th className="py-4 px-6 text-gray-900 text-left font-semibold text-lg">
              Application Fees
            </th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 transition duration-300"
            >
              <td className="py-4 px-6 text-gray-800 text-lg">{fee.exam}</td>
              <td className="py-4 px-6 text-gray-800 text-lg">{fee.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

const EntranceExams = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12 drop-shadow-lg animate-fade-in">
        Law Entrance Exams
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {entranceExams.map((exam, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className="bg-white shadow-lg rounded-2xl p-6 text-center cursor-pointer hover:shadow-2xl transition duration-300 transform hover:scale-105"
              onClick={() => navigate(exam.path, { state: { exam } })}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {exam.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <FeeTable />
    </div>
  );
};

export default EntranceExams;
