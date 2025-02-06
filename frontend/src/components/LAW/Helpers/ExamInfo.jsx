import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

const ExamInfo = () => {
  const location = useLocation();
  const exam = location.state?.exam;

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!exam) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Exam details not found!
        </h2>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      {/* Exam Title */}
      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
        {exam.title}
      </h2>

      {/* Exam Description */}
      <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
        {exam.description}
      </p>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 p-8 rounded-xl shadow-lg mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">FAQs</h3>
        <div className="space-y-6">
          {exam.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => toggleFaq(idx)}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900">{faq.question}</h4>
                <FaQuestionCircle
                  size={24}
                  className={`text-blue-500 transition-transform duration-300 ${
                    openFaqIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {openFaqIndex === idx && (
                <p className="text-gray-700 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="bg-gradient-to-br from-indigo-100 to-blue-200 p-8 rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Syllabus</h3>
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-gray-800 font-semibold text-left">
                Category
              </th>
              <th className="py-4 px-6 text-gray-800 font-semibold text-left">
                Topics
              </th>
            </tr>
          </thead>
          <tbody>
            {exam.syllabus.map((section, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 text-gray-700 font-bold">
                  {section.category}
                </td>
                <td className="py-4 px-6 text-gray-700">
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
