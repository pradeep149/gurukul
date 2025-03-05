import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaFileAlt, FaGavel } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Store = () => {
  const courses = [
    {
      id: 1,
      name: "CAT",
      icon: <MdOutlineSchool className="text-indigo-500 text-3xl" />,
      sections: [
        {
          id: 101,
          title: "Previous Papers",
          color: "bg-indigo-50",
          icon: <FaFileAlt className="text-indigo-500 text-2xl" />,
          items: Array.from({ length: 7 }, (_, index) => ({
            id: index + 1,
            name: `CAT ${2022 - index} Paper`,
            price: 500 + index * 100,
          })),
        },
        {
          id: 102,
          title: "Course Materials",
          color: "bg-purple-50",
          icon: <FaBook className="text-purple-500 text-2xl" />,
          items: Array.from({ length: 8 }, (_, index) => ({
            id: index + 16,
            name: `CAT Course Material ${index + 1}`,
            price: 1500 + index * 200,
          })),
        },
      ],
    },
    {
      id: 2,
      name: "SSC",
      icon: <FaFileAlt className="text-green-500 text-3xl" />,
      sections: [
        {
          id: 201,
          title: "Previous Papers",
          color: "bg-green-50",
          icon: <FaFileAlt className="text-green-500 text-2xl" />,
          items: Array.from({ length: 6 }, (_, index) => ({
            id: index + 1,
            name: `SSC ${2021 - index} Paper`,
            price: 400 + index * 50,
          })),
        },
        {
          id: 202,
          title: "Course Materials",
          color: "bg-yellow-50",
          icon: <FaBook className="text-yellow-500 text-2xl" />,
          items: Array.from({ length: 8 }, (_, index) => ({
            id: index + 21,
            name: `SSC Course Material ${index + 1}`,
            price: 1200 + index * 100,
          })),
        },
      ],
    },
    {
      id: 3,
      name: "Law",
      icon: <FaGavel className="text-red-500 text-3xl" />,
      sections: [
        {
          id: 301,
          title: "Previous Papers",
          color: "bg-red-50",
          icon: <FaFileAlt className="text-red-500 text-2xl" />,
          items: Array.from({ length: 8 }, (_, index) => ({
            id: index + 1,
            name: `Law Paper ${index + 1}`,
            price: 600 + index * 75,
          })),
        },
        {
          id: 302,
          title: "Course Materials",
          color: "bg-blue-50",
          icon: <FaBook className="text-blue-500 text-2xl" />,
          items: Array.from({ length: 6 }, (_, index) => ({
            id: index + 19,
            name: `Law Material ${index + 1}`,
            price: 1800 + index * 200,
          })),
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-cyan-100 via-indigo-100 to-cyan-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Welcome to The Gurukul Store
        </h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          Explore our range of premium educational resources designed for your
          success.
        </p>

        {courses.map((course) => (
          <div key={course.id} className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
                {course.icon} {course.name}
              </h2>
              <Link
                to={`/store/${course.name.toLowerCase()}`}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                View All
              </Link>
            </div>

            {course.sections.map((section) => (
              <div key={section.id} className={`mb-12 p-4 ${section.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={3}
                  navigation
                  autoplay={{ delay: 3000 }}
                  pagination={{
                    clickable: true,
                    renderBullet: (index, className) =>
                      `<span class="${className} bg-indigo-500 w-3 h-3"></span>`,
                  }}
                  breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    640: { slidesPerView: 1 },
                  }}
                  className="px-4"
                >
                  {section.items.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transform hover:scale-105 transition-all">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-indigo-500 font-bold mt-2">
                          ₹{item.price}
                        </p>
                        <Link
                          to={`/store/product/${item.id}`}
                          className="mt-4 block bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white text-center py-2 rounded-lg hover:scale-105 transform transition-all"
                        >
                          View Details
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
