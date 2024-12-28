import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const FAQSection = ({ faqs }) => {
  const [currentFAQ, setCurrentFAQ] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visibleFAQs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section
      className="py-12 px-6 bg-gradient-to-r from-gray-100 via-blue-100 to-indigo-100 font-serif"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto space-y-4">
        {visibleFAQs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105 ${
              index % 2 === 0
                ? "bg-gradient-to-r from-gray-100 via-indigo-100 to-sky-100"
                : "bg-gradient-to-r from-indigo-100 via-sky-100 to-gray-100"
            }`}
            onClick={() => setCurrentFAQ(currentFAQ === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-800">
                {faq.question}
              </p>
              <FaQuestionCircle
                className={`text-2xl text-indigo-500 transform transition-transform duration-300 ${
                  currentFAQ === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {currentFAQ === index && (
              <div className="mt-3 text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {faq.answer.split("\n").map((line, lineIndex) => (
                  <p key={lineIndex} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {faqs.length > 3 && (
        <div className="text-center mt-6">
          <button
            className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-transform transform hover:scale-105"
            data-aos="zoom-in"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less FAQs" : "Show More FAQs"}
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQSection;
