import React from "react";
import {
  FaBriefcase,
  FaBalanceScale,
  FaUniversity,
  FaFileAlt,
  FaCompass,
} from "react-icons/fa";

const coursesList = [
  {
    title: "MBA",
    description:
      "Master your MBA preparation with expert guidance and resources.",
    url: "/courses/MBA",
    icon: <FaBriefcase className="text-blue-500 text-5xl" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "LAW",
    description: "Achieve your dream of excelling in law entrance exams.",
    url: "/courses/LAW",
    icon: <FaBalanceScale className="text-red-500 text-5xl" />,
    bgColor: "bg-red-50",
  },
  {
    title: "BBA/IPM",
    description: "Prepare for BBA/IPM with our personalized courses.",
    url: "/courses/BBA",
    icon: <FaUniversity className="text-purple-500 text-5xl" />,
    bgColor: "bg-purple-50",
  },
  {
    title: "SSC",
    description: "Crack SSC exams with the best coaching and strategies.",
    url: "#",
    icon: <FaFileAlt className="text-green-500 text-5xl" />,
    bgColor: "bg-green-50",
    comingSoon: true,
  },
  {
    title: "Career Guidance",
    description: "Get expert career guidance to achieve your goals.",
    url: "#",
    icon: <FaCompass className="text-orange-500 text-5xl" />,
    bgColor: "bg-orange-50",
    comingSoon: true,
  },
];

const Courses = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
          Explore Our Courses
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Choose from our range of courses and get started on your journey to
          success.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {coursesList.map((course, index) => (
            <a
              key={index}
              href={course.url}
              className={`w-full md:w-1/3 lg:w-1/4 min-w-[330px] min-h-[300px] ${course.bgColor} rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 p-6 text-left flex flex-col justify-between`}
            >
              <div className="flex justify-start items-center gap-3">
                {course.icon}
                <h3 className="text-3xl font-semibold text-gray-800">
                  {course.title}
                </h3>
              </div>
              <p className="text-lg text-gray-600 mt-4">{course.description}</p>
              <button
                className={`mt-4 w-full py-2 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out self-end ${
                  course.comingSoon
                    ? "bg-gray-400 cursor-not-allowed" // Gray button for "Coming Soon"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-gradient-to-l"
                }`}
                disabled={course.comingSoon}
              >
                {course.comingSoon ? "Coming Soon" : "Learn More"}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
