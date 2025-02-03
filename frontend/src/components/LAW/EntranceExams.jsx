import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const entranceExams = [
  {
    title: "CLAT",
    path: "/courses/LAW/exams/clat",
    description:
      "The Common Law Admission Test (CLAT) is a nationwide exam for getting into undergraduate and postgraduate law courses at top universities in India. A total of 24 NLUs and 61 other private affiliated colleges consider CLAT scores.",
    faqs: [
      {
        question: "Who conducts CLAT?",
        answer: "The Consortium of National Law Universities.",
      },
      {
        question: "When is CLAT conducted every year?",
        answer: "In the month of December.",
      },
      {
        question: "Who is eligible to appear for CLAT?",
        answer:
          "Candidates should have passed 10th and 12th with 45% (40% for SC/ST) or more.",
      },
      {
        question: "What is the mode of the exam?",
        answer: "Pen and Paper based exam.",
      },
      {
        question: "How many sections does the CLAT exam have?",
        answer:
          "5 sections: English Language, Current Affairs, Legal Reasoning, Logical Reasoning, Quantitative Aptitude.",
      },
      {
        question: "How many questions are there in CLAT?",
        answer: "120 (MCQs).",
      },
      { question: "What is the duration of the exam?", answer: "2 Hours." },
      { question: "Is there any sectional time limit?", answer: "No." },
      {
        question: "What is the marking scheme?",
        answer: "+1 for correct answer, -0.25 for incorrect answer.",
      },
    ],
    syllabus: [
      {
        category: "English Language",
        topics: [
          "Reading Comprehension",
          "Critical Reasoning",
          "Vocabulary",
          "Idioms & Phrases",
        ],
      },
      {
        category: "General Knowledge",
        topics: [
          "Politics",
          "Geography",
          "Science & Technology",
          "Current Affairs",
        ],
      },
      {
        category: "Legal Reasoning",
        topics: ["Torts", "Contracts", "Indian Penal Code", "Criminal Law"],
      },
      {
        category: "Logical Reasoning",
        topics: [
          "Verbal Reasoning",
          "Critical Reasoning",
          "Fact, Inference & Judgement",
        ],
      },
      {
        category: "Quantitative Aptitude",
        topics: ["Arithmetic", "Ratios", "Percentages", "Data Interpretation"],
      },
    ],
  },
  {
    title: "AILET",
    path: "/courses/LAW/exams/ailet",
    description:
      "All India Law Entrance Test (AILET) is conducted by National Law University, Delhi, for admission into law courses.",
    faqs: [
      {
        question: "Who conducts AILET?",
        answer: "National Law University, Delhi.",
      },
      {
        question: "When is AILET conducted every year?",
        answer: "In the month of December.",
      },
      {
        question: "Who is eligible to appear for AILET?",
        answer:
          "As per the AILET 2025 eligibility criteria, you must have secured at least 45% marks in class 12 or equivalent exams if you belong to the general category. If you belong to the SC/ST/PwD category, you must have scored a minimum of 40% marks in the qualifying examination. Students currently in Class 12 are also eligible to apply for CLAT, provided they meet the above-mentioned criteria.",
      },
      {
        question: "What is the mode of the exam?",
        answer: "Pen and Paper based exam.",
      },
      {
        question: "How many times is the exam held each year?",
        answer: "Once a year.",
      },
      {
        question:
          "How many sections does the AILET exam have, and what are they?",
        answer:
          "There are 3 sections in AILET: Current Affairs and General Knowledge – 30 Questions, English Language – 20 Questions, Logical Reasoning – 70 Questions.",
      },
      {
        question: "How many questions are there in AILET exam?",
        answer: "150 Questions.",
      },
      { question: "What is the duration of the exam?", answer: "2 Hrs." },
      {
        question: "Is there any sectional time limit?",
        answer: "No. There is no sectional time limit in AILET.",
      },
      {
        question: "What is the marking scheme?",
        answer: "+1 for correct answer, -0.25 for incorrect answer.",
      },
    ],
    syllabus: [
      {
        category: "English Language",
        topics: [
          "Reading Comprehension",
          "Critical Reasoning",
          "Vocabulary",
          "Idioms & Phrases",
        ],
      },
      {
        category: "General Knowledge",
        topics: [
          "Economics",
          "Physics",
          "History",
          "Geography",
          "Current Affairs",
        ],
      },
      {
        category: "Logical Reasoning",
        topics: [
          "Verbal Reasoning",
          "Critical Reasoning",
          "Coding-Decoding",
          "Fact, Inference & Judgement",
        ],
      },
    ],
  },
  {
    title: "SLAT",
    path: "/courses/LAW/exams/slat",
    description:
      "The Symbiosis Law Admission Test (SLAT) is conducted by Symbiosis International University for admission to law programs.",
    faqs: [
      {
        question: "Who conducts SLAT?",
        answer: "Symbiosis International University.",
      },
      {
        question: "When is SLAT conducted every year?",
        answer: "In the month of May.",
      },
      {
        question: "Who is eligible to appear for SLAT?",
        answer:
          "Candidates should have passed 10th and 12th examination with 45% (40% for candidates from SC / ST) or more. Students currently in Class 12 are also eligible to apply for CLAT, provided they meet the above-mentioned criteria.",
      },
      {
        question: "What is the mode of the exam?",
        answer: "Online – Computer Based Exam.",
      },
      {
        question: "How many times is the exam held each year?",
        answer: "Twice a year.",
      },
      {
        question:
          "How many sections does the SLAT exam have, and what are they?",
        answer:
          "There are 5 sections: Logical Reasoning, Legal Reasoning, Analytical Reasoning, Reading Comprehension, General Knowledge.",
      },
      {
        question: "How many questions are there in SLAT exam?",
        answer: "60 Questions.",
      },
      { question: "What is the duration of the exam?", answer: "1 Hr." },
      {
        question: "Is there any sectional time limit?",
        answer: "No. There is no sectional time limit in SNAP.",
      },
      {
        question: "What is the marking scheme?",
        answer: "+1 for correct answer, No negative marks.",
      },
    ],
    syllabus: [
      {
        category: "Logical Reasoning",
        topics: [
          "Blood Relations",
          "Syllogism",
          "Statement & Assumption",
          "Arrangements",
          "Puzzles",
        ],
      },
      {
        category: "Legal Reasoning",
        topics: [
          "Indian Constitution",
          "Contracts and Constitutional Law",
          "Law of Torts",
          "Indian Penal Code",
        ],
      },
      {
        category: "Analytical Reasoning",
        topics: [
          "Mental Ability",
          "Deductive Reasoning",
          "Algebra",
          "Profit and Loss",
        ],
      },
      {
        category: "Reading Comprehension",
        topics: [
          "Grammar",
          "Vocabulary",
          "Sentence Completion",
          "Para-jumbles",
        ],
      },
      {
        category: "General Knowledge",
        topics: [
          "International events",
          "Major Sports Events",
          "Current Affairs",
          "Awards and Honours",
        ],
      },
    ],
  },
];

const FeeTable = () => {
  const fees = [
    { exam: "CLAT", fee: "INR 4,000 (General/OBC), INR 3,500 (SC/ST)" },
    { exam: "AILET", fee: "INR 3,500 (General), INR 1,500 (SC/ST, PWD)" },
    {
      exam: "SLAT",
      fee: "INR 2,250 per attempt, INR 1,000 program fee per college",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-200 to-indigo-300 p-6 rounded-lg shadow-lg mt-10"
    >
      <h3 className="text-3xl font-bold text-white text-center mb-4 flex items-center justify-center">
        <FaMoneyBillWave className="mr-2" /> Exam Fees
      </h3>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-gray-800 text-left">Exam</th>
            <th className="py-3 px-6 text-gray-800 text-left">
              Application Fees
            </th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6 text-gray-700">{fee.exam}</td>
              <td className="py-3 px-6 text-gray-700">{fee.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

const EntranceExams = () => {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Law Entrance Exams
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {entranceExams.map((exam, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => navigate(exam.path, { state: { exam } })}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {exam.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      <FeeTable />
    </div>
  );
};

export default EntranceExams;
