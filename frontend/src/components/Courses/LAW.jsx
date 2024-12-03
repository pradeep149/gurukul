import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaClock, FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    title: "Top 10 Tips for Cracking CLAT Exam",
    updated: "October 20, 2024",
    url: "/blog/top-10-tips-for-clat",
  },
  {
    title: "How to Choose the Best Law College in India",
    updated: "November 5, 2024",
    url: "/blog/choose-the-best-law-college",
  },
  {
    title: "5 Effective Study Plans for Law Entrance Exams",
    updated: "September 12, 2024",
    url: "/blog/effective-study-plans-law",
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

const LAW = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Achieve Your LAW Career Goals with Us. We offer comprehensive coaching for top law entrance exams.",
    "Our experienced faculty and advanced resources ensure success in exams like CLAT and more.",
    "Join our premium LAW coaching programs and take the first step toward a successful legal career!",
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
      title: "CLAT 2025",
      description:
        "Join our premium coaching for CLAT 2025 with expert guidance and resources.",
      duration: "12 months",
      startDate: "February 2025",
      price: "$1100",
    },
    {
      year: "2026",
      title: "AILET 2026",
      description:
        "Prepare for the AILET 2026 exam with personalized study plans and expert faculty.",
      duration: "12 months",
      startDate: "February 2026",
      price: "$1150",
    },
    {
      year: "2027",
      title: "Law Entrance 2027",
      description:
        "Comprehensive coaching for all major law entrance exams in 2027.",
      duration: "12 months",
      startDate: "February 2027",
      price: "$1200",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 min-h-screen mt-20">
      <div className="max-w-7xl mx-auto text-center py-12 px-6 sm:px-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          LAW Preparation Courses
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Excel in your law entrance exams with our specialized courses. From
          CLAT to AILET, we've got you covered!
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

export default LAW;
