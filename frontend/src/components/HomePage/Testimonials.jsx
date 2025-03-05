import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "../Title";
import { FaLinkedin } from "react-icons/fa";
import { assets } from "../../../assets/assets";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = () => {
      const data = [
        {
          id: 1,
          name: "Praharsha Sai",
          feedback:
            "I had the privilege of learning from Chaitanya Sir during my CAT preparation, and his guidance played a crucial role in my journey. His structured approach to Quantitative Aptitude and Logical Reasoning made even difficult concepts easier to grasp. Beyond academics, his insights on personal interviews were extremely valuable. What truly sets him apart is his willingness to go the extra mile to support his students. Highly recommend Chaitanya Sir and his institute 'The Gurukul' to anyone looking for well-rounded CAT preparation.",
          image: assets.testimonial1,
          linkedin: "https://www.linkedin.com/in/praharsha-c-421476129",
        },
        {
          id: 2,
          name: "Prudhvi Teja Tejavath",
          feedback:
            "I can't thank Chaitanya sir enough for his incredible guidance and support during my CAT preparation. QA and LRDI always felt like a tough nut to crack, but his clear explanations, structured approach, and constant encouragement made all the difference. More than just a teacher, he was a mentor who instilled confidence in me and helped me develop the right problem-solving mindset. His classes played a huge role in my journey, and I owe a big part of my success in CAT 2019—and my admission to FMS Delhi—to his teaching. If you're looking for someone who truly cares about your success and makes learning engaging, Chaitanya sir is the coach you need!",
          image: assets.testimonial2,
          linkedin: "https://www.linkedin.com/in/tejavath-prudhvi-teja-fms/",
        },
        {
          id: 4,
          name: "Sojjwala Peethala",
          feedback:
            "I cannot thank Chaitanya Sir enough for his unwavering support and mentorship throughout my CAT journey. After a failed attempt, I lacked confidence, but his structured guidance, daily concept checks, and personalized feedback after every mock test transformed my approach. Beyond academics, his constant support in interview preparation—helping me navigate what to say (and what not to)—was invaluable. His dedication to each of us is unparalleled, making complex concepts, especially in Quant and LRDI, easy to grasp and boosting confidence at every step. Thank you Sir for being such a great mentor, for helping me convert IIM Bangalore, and for shaping me into who I am today. Highly recommended for anyone looking for the right mentor to achieve their dream B-school!",
          image: assets.testimonial3,
          linkedin: "https://www.linkedin.com/in/sojjwala-peethala-711088217/",
        },
      ];
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center py-8">
          <Title text1="STUDENT" text2="TESTIMONIALS" />
          <p className="w-3/4 mx-auto text-xl text-black font-semibold italic">
            See what our students have to say about our Gurus! Their success
            stories and feedback motivate us to keep improving.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="mx-auto max-w-7xl">
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
            loop={true}
            slidesPerView={1}
            className="rounded-2xl shadow-2xl"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center justify-center  min-h-[530px] text-center font-semibold italic p-10 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.image}
                    alt={`${item.name}'s testimonial`}
                    className="w-24 h-24 rounded-full border-4 border-gray-500 mb-6 shadow-lg"
                  />
                  <p className="text-3xl font-bold text-white mb-4">
                    {item.name}
                  </p>
                  <div className="w-full max-w-6xl">
                    <p
                      className="text-gray-300 text-xl mb-4 text-justify leading-relaxed"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      {item.feedback}
                    </p>
                  </div>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors duration-300 mt-4"
                  >
                    <FaLinkedin className="text-3xl" />
                    <span className="text-xl">View LinkedIn Profile</span>
                  </a>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-next text-white text-3xl hover:scale-110"></div>
            <div className="swiper-button-prev text-white text-3xl hover:scale-110"></div>
          </Swiper>
        </div>

        <style>{`
          .swiper-pagination-bullet {
            background-color: white !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #4a90e2 !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonials;
