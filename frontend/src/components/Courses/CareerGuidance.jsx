import React, { useState } from "react";
import Title from "../Title";

const CareerGuidance = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => setShowContactForm(!showContactForm);

  return (
    <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 min-h-screen py-10 mt-20">
      <div className="text-center py-8">
        <Title text1={"CAREER"} text2={"GUIDANCE"} />
        <p className="w-3/4 mx-auto text-xl text-gray-800">
          At Gurukul, we provide expert career guidance, helping you navigate
          the complex world of career options. From competitive exam preparation
          like CAT, GATE, GMAT to personalized career counseling, we ensure
          you're well-equipped to make informed decisions and achieve success.
        </p>
      </div>

      <section className="px-8 py-16 bg-white rounded-lg shadow-lg mx-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Why Choose Gurukul for Career Guidance?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Expert Counselors</h3>
            <p>
              Our team of experienced counselors offer insightful and practical
              advice to help you succeed.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              Personalized Approach
            </h3>
            <p>
              We offer individualized counseling tailored to your unique
              aspirations and goals.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Proven Success</h3>
            <p>
              Our students’ success stories are a testament to the impact of our
              career guidance services.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-blue-500 to-indigo-600 p-8 rounded-lg shadow-lg text-white text-center">
            <h3 className="text-xl font-semibold mb-4">Career Counseling</h3>
            <p>
              One-on-one sessions to guide you towards the right career path,
              based on your interests and strengths.
            </p>
          </div>
          <div className="bg-gradient-to-b from-blue-500 to-indigo-600 p-8 rounded-lg shadow-lg text-white text-center">
            <h3 className="text-xl font-semibold mb-4">
              Competitive Exam Prep
            </h3>
            <p>
              Expert coaching for entrance exams like CAT, GATE, GMAT, and more,
              with tips for optimal performance.
            </p>
          </div>
          <div className="bg-gradient-to-b from-blue-500 to-indigo-600 p-8 rounded-lg shadow-lg text-white text-center">
            <h3 className="text-xl font-semibold mb-4">Skill Development</h3>
            <p>
              Develop soft skills like communication and leadership to ensure
              you excel in interviews and job placements.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-100 rounded-lg shadow-lg mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Success Stories
        </h2>
        <div className="flex justify-center">
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
        </div>
      </section>

      <section className="px-4 py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Get In Touch
        </h2>
        <div className="text-center mb-6">
          <button
            onClick={toggleContactForm}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l transition duration-300 ease-in-out hover:text-xl"
          >
            Contact Us
          </button>
        </div>

        {showContactForm && (
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
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
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l transition duration-300 ease-in-out hover:text-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default CareerGuidance;
