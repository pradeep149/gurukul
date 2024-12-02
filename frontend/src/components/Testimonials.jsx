import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Simulate fetching testimonials data
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-20">
      <div className="text-center py-8 text-3xl">
        <Title text1={"STUDENT"} text2={"TESTIMONIALS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          See what our students have to say about ShopNexus! Their success
          stories and feedback motivate us to keep improving.
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.id} className="px-4">
            <div className="bg-gray-100 rounded-md shadow-md p-6 flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={`${item.name}'s testimonial`}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="font-semibold text-lg mb-2">{item.name}</p>
              <p className="text-sm text-gray-600">{item.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
