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
  // Combine all old + new testimonials in one array
  const allTestimonials = [
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

    {
      id: 5,
      name: "Pantula Krishna Vamsi",
      feedback:
        "I was an everyday normal student with the dream of cracking the CAT exam, and with the same intention, I joined coaching classes to skill up and ace the exam. Only later, after six mocks, I found that I had problems approaching the questions. I struggled, tried various tests and YouTube exam preparation videos, but all in vain. At the edge of losing hope, as my final resort, I approached Deepak Sir with my problems. He gave me some tips on how I could approach the exam. I felt they were generalized in the initial meeting, but as I proceeded with implementing one of his tips, I found that there was a minuscule improvement in my approach, but it didn't have an effect on the overall test score. It was he who specifically asked whether I had tried or not. Then I told him that this was the issue even after the change I made. He further suggested another approach, adding to the initial one. This is how the discussion between us grew from a mere faculty-student connection to a bond where he could completely understand me and suggest specific things, bringing out the best in me and finally helping me score a 99.01 percentile in the Quant section. Thanks to him, I have scored that great.",
      image: assets.testimonial4,
      linkedin: "https://www.linkedin.com/in/krishnavamsi-pantula-4399bb240",
    },
    {
      id: 6,
      name: "Roshan Paul",
      feedback:
        "Deepak sir is an exemplary mentor. I first met Deepak sir during my CAT preparation in 2022. He was my LRDI trainer when I started my journey for CAT. He was very approachable and guided me from scratch in LRDI. His speciality in breaking down complex sets in ways to make them look so easy was a treat to watch. With his guidance and continuous support I achieved a 99.84 percentile in LR section. His insights and techniques also helped me score a 99.6 in Quants. With loads of experience behind his teaching career, he helped me calm my nerves on the D day and guided me in cracking multiple interviews. I have seen him do the same with hundreds of others. You would be lucky to find a mentor like him.",
      image: assets.testimonial5,
      linkedin: "#",
    },
    {
      id: 7,
      name: "Rishi Sri Ruthwick Bandaru",
      feedback:
        "During my CAT preparation, I had the privilege of learning from Deepak sir, who taught us Geometry, Data Interpretation, and Logical Reasoning. His patience while explaining complex logical puzzles and his structured approach to Geometry helped me immensely during the exam. What set him apart was his approach—he never relied on formulas. Instead, he encouraged us to understand the logic behind every concept and solve problems from first principles. This not only made learning more intuitive but also helped me tackle questions with confidence during the exam. But beyond Quant and LR, he unknowingly took on another challenge—getting me to speak. As an introvert, I barely interacted with anyone when I first met him. But thanks to his constant encouragement (and maybe a little persistence), I eventually came out of my shell. Now, he jokingly regrets ever asking me to talk! He made me realize that strong communication skills are essential not just for cracking interviews but also for excelling as a manager. I’m truly grateful for his guidance—both in academics and in helping me grow as a person. Thank you, sir, for being an incredible mentor!",
      image: assets.testimonial6,
      linkedin: "https://www.linkedin.com/in/rishi-bandaru",
    },
  ];

  const [testimonials, setTestimonials] = useState([]);

  // Helper function to shuffle and select 4 testimonials
  const getRandomTestimonials = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    // Randomly pick 4 testimonials from the combined array
    const selectedTestimonials = getRandomTestimonials(allTestimonials, 4);
    setTestimonials(selectedTestimonials);
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
        <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 mx-auto max-w-7xl">
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
                <div className="flex flex-col items-center justify-center min-h-[530px] text-center font-semibold italic p-10 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
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

        {/* Swiper Pagination Styling */}
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
