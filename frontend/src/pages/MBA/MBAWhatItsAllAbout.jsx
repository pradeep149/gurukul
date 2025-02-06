import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const MBAWhatItsAllAbout = () => {
  return (
    // Outer container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 flex items-center py-10 px-4">
      <motion.div
        // Inner content card
        className="max-w-5xl mx-auto w-full bg-white rounded-xl shadow-2xl p-6 md:p-10 text-gray-800"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          MBA — What’s That All About?
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          An MBA (Master of Business Administration) is a prestigious graduate
          degree that equips individuals with a broad range of business skills
          and knowledge, opening doors to advanced career opportunities, higher
          salaries, and extensive professional networks. In India, top
          institutes like the Indian Institutes of Management (IIMs), XLRI
          Jamshedpur, ISB Hyderabad, FMS Delhi, SPJIMR Mumbai, and NMIMS Mumbai
          are renowned for their world-class MBA programs.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Post-graduation, MBA holders can pursue rewarding careers in fields
          like sales, finance, marketing, human resources, and product
          management, with top recruiters including industry giants like Amazon,
          Flipkart, Deloitte, and Google. Many universities and business schools
          worldwide offer MBA programs, ranging from traditional MBAs to
          specialized options in technology or healthcare, making it a versatile
          choice for aspiring business leaders.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          MBA in India can be a great choice for students expecting an amazing
          ROI. A few colleges offering MBA in India are IIM Udaipur, IIM
          Kashipur, IIM Tiruchirappalli, IIM Rohtak, IIM Raipur, IIM Ranchi, IIM
          Bodh Gaya, IIM Jammu, IIM Sirmaur, IIM Amritsar, IIM Nagpur, IIM
          Visakhapatnam, IIM Sambalpur, IIT Bombay, IIT Delhi, IIT Kanpur, IIT
          Kharagpur, IIT Madras, IIT Roorkee, IIT Gandhinagar, IIT Bhubaneswar,
          IIT Dhanbad, IIT Hyderabad, SP Jain Institute of Management and
          Research, Indian School of Business (ISB), Xavier Labour Relations
          Institute (XLRI), Faculty of Management Studies (FMS), Indian
          Institute of Foreign Trade (IIFT), Management Development Institute
          (MDI), Narsee Monjee Institute of Management Studies (NMIMS),
          Symbiosis Institute of Business Management (SIBM), Jamnalal Bajaj
          Institute of Management Studies (JBIMS), Institute of Management
          Technology (IMT), Great Lakes Institute of Management, ICFAI Business
          School (IBS), Tata Institute of Social Sciences (TISS), Bangalore
          Business School, Chandigarh University, Fore School of Management, Lal
          Bahadur Shastri Institute of Management, KIIT School of Management,
          Goa Institute of Management (GIM), and many more.
        </p>
      </motion.div>
    </div>
  );
};

export default MBAWhatItsAllAbout;
