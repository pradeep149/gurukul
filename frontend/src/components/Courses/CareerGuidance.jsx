import React, { useState } from "react";
import {
  FaUserTie,
  FaBullseye,
  FaChalkboardTeacher,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Title from "../Title";

const CareerGuidance = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => setShowContactForm(!showContactForm);

  return (
    <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 min-h-screen py-10">
      <div className="text-center py-8">
        <Title text1={"CAREER"} text2={"GUIDANCE"} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-3/4 mx-auto text-xl text-gray-800 font-semibold"
        >
          At Gurukul, we provide expert career guidance, helping you navigate
          the complex world of career options. From competitive exam preparation
          like CAT, GATE, GMAT to personalized career counseling, we ensure
          you're well-equipped to make informed decisions and achieve success.
        </motion.p>
      </div>

      <section className="px-8 py-16 bg-white rounded-lg shadow-lg mx-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-center text-gray-800 mb-6"
        >
          Why Choose Gurukul for Career Guidance?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Counselors",
              description:
                "Our team of experienced counselors offers insightful and practical advice to help you succeed.",
              icon: <FaUserTie className="text-4xl text-indigo-400" />,
            },
            {
              title: "Personalized Approach",
              description:
                "We offer individualized counseling tailored to your unique aspirations and goals.",
              icon: <FaBullseye className="text-4xl text-blue-400" />,
            },
            {
              title: "Proven Success",
              description:
                "Our students’ success stories are a testament to the impact of our career guidance services.",
              icon: <FaStar className="text-4xl text-yellow-400" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-xl hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-center text-gray-800 mb-8"
        >
          Our Services
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Career Counseling",
              description:
                "One-on-one sessions to guide you towards the right career path, based on your interests and strengths.",
              color: "from-blue-500 to-indigo-600",
            },
            {
              title: "Competitive Exam Prep",
              description:
                "Expert coaching for entrance exams like CAT, GATE, GMAT, and more, with tips for optimal performance.",
              color: "from-green-500 to-teal-600",
            },
            {
              title: "Skill Development",
              description:
                "Develop soft skills like communication and leadership to ensure you excel in interviews and job placements.",
              color: "from-purple-500 to-pink-600",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-b ${service.color} p-8 rounded-lg shadow-lg text-white text-center`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-100 rounded-lg shadow-lg mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-center text-gray-800 mb-6"
        >
          Success Stories
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center"
        >
          <div className="max-w-2xl">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="John Doe"
                className="w-24 h-24 rounded-full border-4 border-gray-500 mb-6"
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800 mb-4">
                John Doe
              </p>
              <p className="text-gray-600">
                "Thanks to Gurukul's career guidance, I was able to achieve my
                goals and secure a position at a top tech company after GATE.
                Their expertise made all the difference!"
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-center text-gray-800 mb-6"
        >
          Get In Touch
        </motion.h2>
        <div className="text-center mb-6">
          <motion.button
            onClick={toggleContactForm}
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:text-xl"
          >
            Contact Us
          </motion.button>
        </div>

        {showContactForm && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Form
            </h3>
            <form className="flex flex-col justify-center">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out hover:text-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default CareerGuidance;
