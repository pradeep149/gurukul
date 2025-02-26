import React from "react";
import { useLocation } from "react-router-dom";

const CourseInfo = () => {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Course not found!
        </h2>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      {/* Course Title */}
      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
        {course.title}
      </h2>

      {/* Course Description */}
      <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
        {course.description}
      </p>

      {/* Top Colleges Section */}
      <div className="bg-gradient-to-br from-indigo-100 to-blue-200 p-8 rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Top Colleges</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {course.colleges.map((college, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            >
              <p className="text-gray-800 font-semibold">{college}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Opportunities Section */}
      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 p-8 rounded-xl shadow-lg mt-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Job Opportunities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {course.jobOpportunities.map((job, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <p className="text-gray-800 font-semibold text-center">{job}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
