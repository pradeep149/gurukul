// import React, { useState, useEffect } from "react";
// import { FaGraduationCap, FaClock, FaCalendarAlt } from "react-icons/fa";

// // Mock data for blogs (replace with actual data)
// const blogs = [
//   {
//     title: "Top 5 Strategies for Cracking CAT Exam",
//     updated: "October 25, 2024",
//     url: "/blog/top-5-strategies-for-cracking-cat",
//   },
//   {
//     title: "How to Plan Your MBA Journey: A Step-by-Step Guide",
//     updated: "November 10, 2024",
//     url: "/blog/how-to-plan-your-mba-journey",
//   },
//   {
//     title: "Choosing the Right Coaching for CAT Preparation",
//     updated: "September 15, 2024",
//     url: "/blog/choosing-the-right-coaching-for-cat",
//   },
// ];

// const CourseCard = ({
//   year,
//   title,
//   description,
//   duration,
//   startDate,
//   price,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 p-6">
//       <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
//       <p className="text-lg text-gray-500 mt-2">{description}</p>
//       <div className="mt-4">
//         <p className="flex items-center text-gray-700">
//           <FaCalendarAlt className="mr-2" />
//           Start Date: {startDate}
//         </p>
//         <p className="flex items-center text-gray-700 mt-2">
//           <FaClock className="mr-2" />
//           Duration: {duration}
//         </p>
//         <p className="flex items-center text-gray-700 mt-2">
//           <FaGraduationCap className="mr-2" />
//           Price: <span className="text-green-600 font-semibold">{price}</span>
//         </p>
//       </div>
//       <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l transition duration-300 ease-in-out">
//         Enroll Now
//       </button>
//     </div>
//   );
// };

// const MBA = () => {
//   const [typedText, setTypedText] = useState("");
//   const texts = [
//     "Achieve Your MBA Goals with Us.",
//     "We offer personalized coaching, expert guidance, and a roadmap to success.",
//     "Our expert instructors are here to help you",
//     "To reach your full potential with cutting-edge study materials.",
//     "Join our top MBA programs today and prepare for your future with confidence!",
//   ];

//   const [currentTextIndex, setCurrentTextIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 9000);

//     return () => clearInterval(interval);
//   }, [texts.length]);

//   const courses = [
//     {
//       year: "2025",
//       title: "CAT 2025",
//       description:
//         "Prepare for the CAT 2025 exam with personalized coaching and resources.",
//       duration: "12 months",
//       startDate: "January 2025",
//       price: "$1200",
//     },
//     {
//       year: "2026",
//       title: "CAT 2026",
//       description:
//         "Aiming for CAT 2026? Join our elite coaching for top-notch preparation.",
//       duration: "12 months",
//       startDate: "January 2026",
//       price: "$1300",
//     },
//     {
//       year: "2027",
//       title: "CAT 2027",
//       description:
//         "Master the CAT 2027 with expert guidance and extensive materials.",
//       duration: "12 months",
//       startDate: "January 2027",
//       price: "$1400",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-100 min-h-screen">
//       <div className="max-w-7xl mx-auto text-center py-12 px-6 sm:px-12">
//         <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
//           MBA Preparation Courses
//         </h1>
//         <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
//           Join our exclusive coaching center and unlock your potential with
//           top-tier MBA courses like CAT and more!
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 sm:px-12">
//         {courses.map((course) => (
//           <CourseCard key={course.year} {...course} />
//         ))}
//       </div>

//       <div className="text-center mt-16 px-6 sm:px-12">
//         {/* <h2 className="text-4xl font-bold">
//           <span className="animate-typing overflow-hidden whitespace-wrap border-r-4 border-r-white pr-5 text-5xl text-red font-bold">
//             {texts[currentTextIndex]}
//           </span>
//         </h2> */}
//         <div class="w-max">
//           <h2 class="text-4xl animate-typing overflow-hidden whitespace-nowrap border-r-white text-white font-bold">
//             <span>{texts[currentTextIndex]}</span>
//           </h2>
//         </div>

//         <div className="mt-8 px-6 sm:px-12">
//           <h3 className="text-2xl font-bold text-gray-900">Related Blogs</h3>
//           <div className="mt-4 overflow-x-auto">
//             <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="py-3 px-6 text-left text-gray-700 font-semibold">
//                     Title
//                   </th>
//                   <th className="py-3 px-6 text-left text-gray-700 font-semibold">
//                     Updated
//                   </th>
//                   <th className="py-3 px-6 text-left text-gray-700 font-semibold">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {blogs.map((blog, index) => (
//                   <tr key={index} className="border-b">
//                     <td className="py-3 px-6 text-gray-700">{blog.title}</td>
//                     <td className="py-3 px-6 text-gray-600">{blog.updated}</td>
//                     <td className="py-3 px-6">
//                       <a
//                         href={blog.url}
//                         className="text-blue-600 hover:underline"
//                       >
//                         Click Here
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MBA;

import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaClock, FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    title: "Top 5 Strategies for Cracking CAT Exam",
    updated: "October 25, 2024",
    url: "/blog/top-5-strategies-for-cracking-cat",
  },
  {
    title: "How to Plan Your MBA Journey: A Step-by-Step Guide",
    updated: "November 10, 2024",
    url: "/blog/how-to-plan-your-mba-journey",
  },
  {
    title: "Choosing the Right Coaching for CAT Preparation",
    updated: "September 15, 2024",
    url: "/blog/choosing-the-right-coaching-for-cat",
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

const MBA = () => {
  const [typedText, setTypedText] = useState(0);
  const texts = [
    "Achieve Your MBA Goals with Us. We offer personalized coaching, expert guidance, and a roadmap to success.",
    "Our expert instructors are here to help you reach your full potential with cutting-edge study materials.",
    "Join our top MBA programs today and prepare for your future with confidence!",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [texts.length]);

  const courses = [
    {
      year: "2025",
      title: "CAT 2025",
      description:
        "Prepare for the CAT 2025 exam with personalized coaching and resources.",
      duration: "12 months",
      startDate: "January 2025",
      price: "$1200",
    },
    {
      year: "2026",
      title: "CAT 2026",
      description:
        "Aiming for CAT 2026? Join our elite coaching for top-notch preparation.",
      duration: "12 months",
      startDate: "January 2026",
      price: "$1300",
    },
    {
      year: "2027",
      title: "CAT 2027",
      description:
        "Master the CAT 2027 with expert guidance and extensive materials.",
      duration: "12 months",
      startDate: "January 2027",
      price: "$1400",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 min-h-screen">
      <div className="max-w-7xl mx-auto text-center py-12 px-6 sm:px-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          MBA Preparation Courses
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Join our exclusive coaching center and unlock your potential with
          top-tier MBA courses like CAT and more!
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

export default MBA;
