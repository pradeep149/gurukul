import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

const ExamInfo = () => {
  const location = useLocation();
  const exam = location.state?.exam;

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!exam) {
    return <div className="text-center py-12">Exam details not found!</div>;
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
        {exam.title}
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        {exam.description}
      </p>

      <div className="bg-gradient-to-r from-indigo-100 via-cyan-100 to-blue-100 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">FAQs</h3>
        <div className="space-y-4">
          {exam.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => toggleFaq(idx)}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-800">{faq.question}</h4>
                <FaQuestionCircle
                  size={24}
                  className={`text-blue-500 transition-transform duration-300 ${
                    openFaqIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {openFaqIndex === idx && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Syllabus</h3>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-gray-800 text-left">Category</th>
              <th className="py-3 px-6 text-gray-800 text-left">Topics</th>
            </tr>
          </thead>
          <tbody>
            {exam.syllabus.map((section, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-gray-700 font-bold">
                  {section.category}
                </td>
                <td className="py-3 px-6 text-gray-700">
                  {section.topics.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamInfo;
