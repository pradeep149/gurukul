import React from "react";

import { useLocation } from "react-router-dom";

const CourseInfo = () => {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) {
    return <div className="text-center py-12">Course not found!</div>;
  }

  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
        {course.title}
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        {course.description}
      </p>

      <div className="bg-gradient-to-r from-indigo-100 via-cyan-100 to-blue-100 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Job Opportunities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {course.jobOpportunities.map((job, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              {job}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Top Colleges
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {course.colleges.map((college, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow text-center"
            >
              {college}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
