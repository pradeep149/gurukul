import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaClock, FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    title: "How to Crack IPM Exams with Ease",
    updated: "October 18, 2024",
    url: "/blog/crack-ipm-exams-easily",
  },
  {
    title: "Top BBA Colleges in India You Should Consider",
    updated: "November 8, 2024",
    url: "/blog/top-bba-colleges-in-india",
  },
  {
    title: "BBA vs IPM: Which is the Right Choice for You?",
    updated: "September 20, 2024",
    url: "/blog/bba-vs-ipm",
  },
];

const CourseCard = ({
  year,
  title,
  description,
  duration,
  startDate,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 p-6">
      <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
      <p className="text-lg text-gray-500 mt-2">{description}</p>
      <div className="mt-4">
        <p className="flex items-center text-gray-700">
          <FaCalendarAlt className="mr-2" />
          Start Date: {startDate}
        </p>
        <p className="flex items-center text-gray-700 mt-2">
          <FaClock className="mr-2" />
          Duration: {duration}
        </p>
        <p className="flex items-center text-gray-700 mt-2">
          <FaGraduationCap className="mr-2" />
          Price: <span className="text-green-600 font-semibold">{price}</span>
        </p>
      </div>
      <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l transition duration-300 ease-in-out hover:text-xl">
        Enroll Now
      </button>
    </div>
  );
};

const BBAIPM = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Achieve Your BBA/IPM Goals with Us. Start your journey to the best management colleges.",
    "Our expert coaching ensures success in exams like IPMAT, SET, NPAT, and more.",
    "Join our top BBA/IPM preparation programs and secure your place in prestigious institutes!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [texts.length]);

  const courses = [
    {
      year: "2025",
      title: "IPM 2025",
      description:
        "Prepare for IPMAT 2025 with comprehensive study materials and expert faculty.",
      duration: "12 months",
      startDate: "April 2025",
      price: "$1000",
    },
    {
      year: "2026",
      title: "BBA 2026",
      description:
        "Get ready for BBA entrance exams like SET, NPAT, and others with elite guidance.",
      duration: "12 months",
      startDate: "April 2026",
      price: "$1050",
    },
    {
      year: "2027",
      title: "IPM 2027",
      description:
        "Master IPMAT and other integrated program management tests with top-notch preparation.",
      duration: "12 months",
      startDate: "April 2027",
      price: "$1100",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 min-h-screen mt-20">
      <div className="max-w-7xl mx-auto text-center py-12 px-6 sm:px-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          BBA/IPM Preparation Courses
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Kickstart your career in management with our specialized courses for
          BBA/IPM exams. From IPMAT to NPAT, we’ve got you covered!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 sm:px-12">
        {courses.map((course) => (
          <CourseCard key={course.year} {...course} />
        ))}
      </div>

      <div className="text-center mt-16 px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 via-blue-500 to-indigo-500">
            {texts[currentTextIndex]}
          </span>
        </h2>

        <div className="mt-8 px-6 sm:px-12">
          <h3 className="text-2xl font-bold text-gray-900">Related Blogs</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-2xl py-3 px-6 text-center text-gray-800 font-semibold">
                    Title
                  </th>
                  <th className="text-2xl py-3 px-6 text-center text-gray-800 font-semibold">
                    Updated
                  </th>
                  <th className="text-2xl py-3 px-6 text-center text-gray-800 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-6 text-gray-700">{blog.title}</td>
                    <td className="py-3 px-6 text-gray-600">{blog.updated}</td>
                    <td className="py-3 px-6">
                      <a
                        href={blog.url}
                        className="text-blue-600 hover:underline"
                      >
                        Click Here
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBAIPM;
