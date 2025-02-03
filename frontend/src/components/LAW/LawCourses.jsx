import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const lawCourses = [
  {
    title: "BA LLB",
    path: "/courses/LAW/BA_LLB",
    description:
      "BA LLB stands for Bachelor of Arts and Bachelor of Legislative Law and is approved by the Bar Council of India. This is a 5-year integrated course that combines both Arts and Law. Anyone who has passed their 10+2 (class 12th) exams in India can pursue a BA LLB after 12th with the required percentage depending on the university. There is no age bar to pursue the degree.",
    jobOpportunities: [
      "Corporate Counsellor",
      "Legal Analyst",
      "Legal Secretary",
      "Company Secretary",
      "Legal Advisor",
      "Criminal Lawyer",
    ],
    colleges: [
      "NLSIU – National Law School of India University, Bangalore",
      "NLU – National Law University, Delhi",
      "NALSAR – National Academy of Legal Studies and Research, Hyderabad",
      "NUJS - National University of Juridical Sciences, Kolkata",
      "Faculty of Law – Jamia Milia Islamia, New Delhi",
      "Symbiosis Law School – Pune",
      "NLU – National Law University, Bhopal",
      "GNLU - Gujarat National Law University, Gandhinagar",
      "SOA – Siksha ‘O’ Anusandhan National School of Law, Bhubaneshwar",
      "NLU – National Law University, Jodhpur",
      "School of Law, Christ University – Bangalore",
    ],
  },
  {
    title: "BBA LLB",
    path: "/courses/LAW/BBA_LLB",
    description:
      "BBA LLB stands for Bachelor of Business Administration and Bachelor of Legislative Law and is approved by the Bar Council of India. This is a 5-year integrated course that prepares students to understand and solve business problems using legal knowledge, combining skills in management and law. Anyone who has passed their 10+2 (class 12th) exams in India can pursue a BBA LLB after 12th with the required percentage depending on the university. There is no age bar to pursue the degree.",
    jobOpportunities: [
      "Business Consultant",
      "Corporate Lawyer",
      "Corporate Compliance Manager",
      "Policy Analyst",
      "Mergers & Acquisitions Analyst",
    ],
    colleges: [
      "GNLU - Gujarat National Law University, Gandhinagar",
      "Symbiosis Law School – Pune",
      "NLU – National Law University, Jodhpur",
      "SOA – Siksha ‘O’ Anusandhan National School of Law, Bhubaneshwar",
      "Jindal Global Law School – Sonipat",
      "Institute of Law, Nirma University – Ahmedabad",
      "School of Law, Christ University – Bangalore",
    ],
  },
  {
    title: "B.Sc LLB",
    path: "/courses/LAW/BSC_LLB",
    description:
      "B.Sc LLB stands for Bachelor of Science and Bachelor of Legislative Law and is approved by the Bar Council of India. A B.Sc. LLB combines science and law, giving you unique career options in areas like patents, environment, and technology, while improving your problem-solving skills.",
    jobOpportunities: [
      "Compliance Officer",
      "Patent Attorney",
      "Environment Lawyer",
      "Legal Advisor",
      "Corporate Counsel",
    ],
    colleges: [
      "NUJS - National University of Juridical Sciences, Kolkata",
      "GNLU - Gujarat National Law University, Gandhinagar",
      "NLU – National Law University, Bhopal",
      "Jindal Global Law School – Sonipat",
    ],
  },
  {
    title: "B. Com LLB",
    path: "/courses/LAW/BCOM_LLB",
    description:
      "B. Com LLB stands for Bachelor of Commerce and Bachelor of Legislative Law, a five-year integrated law program that combines the study of commerce and law.",
    jobOpportunities: [
      "Tax Consultant",
      "Legal Advisor in Banks",
      "GST Consultant",
      "Corporate Lawyer",
      "Compliance Manager",
    ],
    colleges: [
      "GNLU - Gujarat National Law University, Gandhinagar",
      "Jindal Global Law School – Sonipat",
      "Institute of Law, Nirma University – Ahmedabad",
    ],
  },
];

const LawCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Law Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {lawCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => navigate(course.path, { state: { course } })}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {course.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LawCourses;
