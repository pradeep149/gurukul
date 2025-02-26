import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const typewriterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const typewriterLetter = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
};

const MBA = () => {
  const headingText = "Your Ultimate MBA Guide";
  const letters = headingText.split("");

  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col">
      <section className="flex-1 bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex flex-col justify-center items-center text-gray-900 px-6 py-20 relative">
        <motion.h1
          variants={typewriterContainer}
          initial="hidden"
          animate="visible"
          className="font-extrabold mb-4 text-center text-4xl md:text-5xl"
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={typewriterLetter}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-lg md:text-xl max-w-3xl text-center mb-8 text-gray-800 mt-2"
        >
          Thinking About an MBA? Here’s Everything You Need to Know! <br />
          <br />
          So, you’re considering an MBA? Great choice! A Master of Business
          Administration (MBA) is one of the most valuable degrees that can
          fast-track your career, boost your salary, and open doors to
          leadership roles. Whether you’re fresh out of college, a working
          professional, or an aspiring entrepreneur, this guide will help you
          navigate the MBA journey.
        </motion.p>
      </section>

      <section className="bg-white -mt-16 rounded-t-3xl shadow-2xl p-8 z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              What Is MBA?
            </h2>
            <p className="text-gray-700 mb-4">
              Gain an overview of what an MBA entails and why it’s highly valued
              in the corporate world...
            </p>
            <Link
              to="/mba/what-is-mba"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              MBA History
            </h2>
            <p className="text-gray-700 mb-4">
              Discover how MBA programs started and evolved to cater to modern
              business needs...
            </p>
            <Link
              to="/mba/mba-history"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              Who Can Pursue an MBA?
            </h2>
            <p className="text-gray-700 mb-4">
              Find out eligibility criteria and the types of candidates who
              usually go for an MBA...
            </p>
            <Link
              to="/mba/who-can-pursue"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              Types of MBA Programs
            </h2>
            <p className="text-gray-700 mb-4">
              Dive into full-time, part-time, executive, and online MBAs...
            </p>
            <Link
              to="/mba/mba-types"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              Why Get an MBA?
            </h2>
            <p className="text-gray-700 mb-4">
              Explore the top reasons, from career growth to better salaries...
            </p>
            <Link
              to="/mba/why-get"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              Who Should Consider an MBA?
            </h2>
            <p className="text-gray-700 mb-4">
              Not just for business grads—see if it’s right for you...
            </p>
            <Link
              to="/mba/who-should"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              Where to Do an MBA?
            </h2>
            <p className="text-gray-700 mb-4">
              From top Indian B-schools to global universities, explore your
              options...
            </p>
            <Link
              to="/mba/where-to-do"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              How to Get into an MBA?
            </h2>
            <p className="text-gray-700 mb-4">
              Check out this step-by-step guide, from entrance exams to final
              interviews...
            </p>
            <Link
              to="/mba/how-to-get"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              When Is the Right Time for an MBA?
            </h2>
            <p className="text-gray-700 mb-4">
              Compare going right after college vs. after work experience...
            </p>
            <Link
              to="/mba/right-time"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              What Is CAT?
            </h2>
            <p className="text-gray-700 mb-4">
              India’s premier MBA entrance exam—understand its format and
              importance...
            </p>
            <Link
              to="/mba/what-is-cat"
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 px-6 py-12 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-900"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Final Thoughts: Is an MBA Worth It?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            An MBA isn’t just a degree—it’s a game-changer! It can transform
            your career, expand your network, and sharpen your business acumen.
            Whether you’re a fresh graduate, a professional looking for a career
            boost, or an aspiring entrepreneur, an MBA can be your stepping
            stone to success.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            So, are you ready to take your career to new heights? Start planning
            for your MBA today!
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default MBA;
