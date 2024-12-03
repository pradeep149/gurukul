import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "./Title";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = () => {
      const data = [
        {
          id: 1,
          name: "John Doe",
          feedback:
            "ShopNexus is amazing! The courses are comprehensive, and the user experience is fantastic. Highly recommend it to everyone!",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Jane Smith",
          feedback:
            "I loved the interface and the detailed study materials. It helped me clear my exams with ease. Thank you, ShopNexus!",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Samuel Green",
          feedback:
            "A great platform for students preparing for competitive exams. The courses are very well-structured and affordable.",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "Alice Brown",
          feedback:
            "The team at ShopNexus is very supportive, and their resources helped me stay ahead in my preparation. Highly recommended!",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 5,
          name: "Michael Lee",
          feedback:
            "Exceptional experience! The platform is easy to use, and the quality of study material is unmatched.",
          image: "https://via.placeholder.com/150",
        },
      ];
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 py-10 mt-20">
      <div className="text-center py-8">
        <Title text1={"STUDENT"} text2={"TESTIMONIALS"} />
        <p className="w-3/4 mx-auto text-xl text-black font-semibold italic">
          See what our students have to say about Gurukul! Their success stories
          and feedback motivate us to keep improving.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={800}
        slidesPerView={1}
        loop={true}
        className="lg:max-w-full xl:max-w-full mx-4 sm:mx-6 md:mx-8 rounded-2xl shadow-2xl"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center h-96 text-center font-semibold italic p-10 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl hover:scale-105">
              <img
                src={item.image}
                alt={`${item.name}'s testimonial`}
                className="w-24 h-24 rounded-full border-4 border-gray-500 mb-6"
              />
              <p className="text-3xl font-bold text-white mb-4">{item.name}</p>
              <p className="text-gray-300 text-xl">{item.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next text-white text-3xl hover:scale-110"></div>
        <div className="swiper-button-prev text-white text-3xl hover:scale-110"></div>
      </Swiper>

      <style>{`
        .swiper-pagination-bullet {
          background-color: white !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #4a90e2 !important;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
