import React, { useState, useEffect } from "react";
import { FaQuestionCircle, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { assets } from "../../../assets/assets";
import "tailwindcss/tailwind.css";

const faqs = [
  "Is it your dream to study at IIMs right after you finish your 12th grade?",
  "Do colleges like IIM Indore, IIM Rohtak, and IIM Ranchi interest you?",
  "Want to continue studying at an IIM post your BBA?",
  "Are you aiming to crack IPMAT or similar exams?",
];

const exams = [
  {
    name: "IPMAT",
    description: "Integrated Program in Management Aptitude Test",
    link: "/exam/ipmat",
  },
  {
    name: "IPMAT Rohtak",
    description: "Integrated Program in Management at IIM Rohtak",
    link: "/exam/ipmat-rohtak",
  },
  {
    name: "JIPMAT",
    description: "Joint Integrated Program in Management Test",
    link: "/exam/jipmat",
  },
  {
    name: "SET",
    description: "Symbiosis Entrance Test",
    link: "/exam/set",
  },
  {
    name: "NPAT",
    description: "National Test for Programs After Twelfth",
    link: "/exam/npat",
  },
  {
    name: "CUET",
    description: "Christ University Entrance Test",
    link: "/exam/cuet",
  },
];

const backgroundImages = [
  assets.bgtest1,
  assets.bgtest2,
  assets.bgtest3,
  assets.bgtest4,
];

const BBAIPMRedesign = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(backgroundImages[0]);

  useEffect(() => {
    setCurrentImage(backgroundImages[questionIndex]);
  }, [questionIndex]);

  return (
    <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 min-h-screen">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          BBA/IPM Preparation Hub
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-4 text-center max-w-3xl mx-auto">
          Achieve your goals with expert guidance for exams like IPMAT, JIPMAT,
          SET, and more.
        </p>

        <div className="mt-12">
          <div className="w-full flex justify-center mt-6">
            <div className="relative w-full max-w-5xl aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
              <div
                key={questionIndex}
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{
                  backgroundImage: `url(${currentImage})`,
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold px-4 text-center">
                  <Typewriter
                    words={faqs}
                    loop={true}
                    cursor
                    typeSpeed={30}
                    deleteSpeed={20}
                    delaySpeed={1500}
                    onType={(text) => {
                      setQuestionIndex(text % faqs.length);
                      text += 1;
                    }}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Watch Now
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/jHNNMj5bNQw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What is BBA & IPMAT?
          </h2>
          <p className="text-base sm:text-lg font-medium text-justify text-gray-600 max-w-6xl mx-auto">
            If you are someone looking to build a strong foundation for a career
            in management, then BBA should be your first choice. The full form
            of BBA is Bachelors of Business Administration. BBA is a 3-year
            course that helps students develop the skill sets to thrive in the
            business world. The core skills students gain during their study of
            BBA prepare them for an exciting career in marketing, finance,
            operations, supply-chain management, consulting and human resource
            management. Students who have completed their management studies
            from the top BBA colleges in India often secure excellent
            placements. Students in these top BBA colleges also participate in
            management clubs and chapters to develop leadership skills, time
            management and other essential soft skills. Alongside placements,
            students also have options and the exposure to develop their
            start-ups.
          </p>
          <br />

          <p className="text-base sm:text-lg font-bold text-justify text-gray-600 max-w-6xl mx-auto">
            Want to continue studying at an IIM post your BBA? That’s what IPMAT
            is for!
          </p>
          <br />

          <p className="text-base sm:text-lg font-medium text-justify text-gray-600 max-w-6xl mx-auto">
            The full form of IPM is Integrated Program in Management. The IPM
            program provides students who have completed their 12th grade an
            opportunity to study at top B-schools in India like IIM Indore, IIM
            Rohtak, IIM Jammu among others. The IPM program is a 5-year program
            that focuses on developing strong foundations in management during
            the first three years of study, followed by advanced management
            studies in the final two years. A total of 5 IIMs (IIM Indore, IIM
            Rohtak, IIM Jammu, IIM Bodhgaya and IIM Ranchi) and several other
            prestigious B-schools like IIFT Kakinada, NMIMS, NIRMA University,
            IFMR, NALSAR, and TAPMI Manipal, etc., have also introduced IPM,
            recognizing the growing demand for holistic management education at
            an early stage.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Exams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam, index) => (
              <Link
                to={exam.link}
                key={index}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {exam.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {exam.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBAIPMRedesign;
