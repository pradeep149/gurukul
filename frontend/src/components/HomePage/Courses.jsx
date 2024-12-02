import React from "react";

const coursesList = [
  {
    title: "MBA",
    description:
      "Master your MBA preparation with expert guidance and resources.",
    url: "/courses/MBA",
  },
  {
    title: "LAW",
    description: "Achieve your dream of excelling in law entrance exams.",
    url: "/courses/LAW",
  },
  {
    title: "BBA/IPM",
    description: "Prepare for BBA/IPM with our personalized courses.",
    url: "/courses/BBA",
  },
  {
    title: "SSC",
    description: "Crack SSC exams with the best coaching and strategies.",
    url: "/ssc",
  },
  {
    title: "Career Guidance",
    description: "Get expert career guidance to achieve your goals.",
    url: "/career-guidance",
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
              className="w-full md:w-1/3 lg:w-1/4 min-w-[330px] min-h-[270px] bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 p-6 text-left flex flex-col justify-between"
            >
              <h3 className="text-3xl font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-lg text-gray-500 mt-2">{course.description}</p>
              <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l transition duration-300 ease-in-out self-end">
                Learn More
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
