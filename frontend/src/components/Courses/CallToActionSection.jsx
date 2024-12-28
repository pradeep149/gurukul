import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CallToActionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 400, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="py-12 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 text-white text-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
      <p className="text-lg max-w-3xl mx-auto mb-8">
        Enroll in our expert coaching program and secure your place in the top
        IIMs. Learn from the best to be the best!
      </p>
      <Link
        to="/enroll"
        className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
      >
        Enroll Now
      </Link>
    </section>
  );
};

export default CallToActionSection;
