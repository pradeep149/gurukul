import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const CollegeSection = ({ collegeDetails, ExamName }) => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const closeModal = () => {
    setSelectedCollege(null);
    setOpenFAQ(null);
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto bg-gradient-to-r from-sky-200 via-cyan-100 to-blue-200">
      <h2
        className="text-4xl font-extrabold text-gray-900 text-center mb-8"
        data-aos="fade-up"
      >
        Top Colleges Accepting {ExamName} Score
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collegeDetails.map((college, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center cursor-pointer hover:shadow-xl transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCollege(college)}
            data-aos="fade-up"
          >
            <FaGraduationCap className="text-indigo-500 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {college.name}
            </h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCollege && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            aria-labelledby="modal-title"
            role="dialog"
          >
            <motion.div
              className="bg-gradient-to-r from-white via-gray-50 to-gray-100 rounded-lg shadow-2xl max-w-4xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <MdClose className="text-3xl" />
              </button>

              <div className="text-center mb-6">
                <FaGraduationCap className="text-6xl text-indigo-500 mb-4 animate-pulse" />
                <h3
                  id="modal-title"
                  className="text-4xl font-extrabold text-gray-900 mb-2"
                >
                  {selectedCollege.name}
                </h3>
              </div>

              <div className="mb-6">
                {selectedCollege.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-700 text-lg leading-relaxed mb-4 whitespace-pre-line"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {selectedCollege.faqs && (
                <div className="mt-8">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                    FAQs
                  </h4>
                  {selectedCollege.faqs.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      className="mb-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
                      onClick={() =>
                        setOpenFAQ(openFAQ === faqIndex ? null : faqIndex)
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-800 text-lg">
                          {faq.question}
                        </p>
                        <motion.div
                          animate={{
                            rotate: openFAQ === faqIndex ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          ⌄
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {openFAQ === faqIndex && (
                          <motion.p
                            className="text-gray-600 mt-2 text-base"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            {faq.answer}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollegeSection;
