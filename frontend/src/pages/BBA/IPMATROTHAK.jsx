import React from "react";
import Header from "../../components/Courses/Header";
import VideoSection from "../../components/Courses/VideoSection";
import FAQSection from "../../components/Courses/FAQSection";
import SyllabusSection from "../../components/Courses/SyllabusSection";
import CollegeSection from "../../components/Courses/CollegeSection";
import CallToActionSection from "../../components/Courses/CallToActionSection";
import { faqs, syllabus, collegeDetails } from "../../content/ipmatRothakData";

const IPMATROTHAKPage = () => (
  <div className="bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 min-h-screen">
    <Header ExamName="IPMAT Rothak" />
    {/* <VideoSection videoLink="https://www.youtube.com/embed/jHNNMj5bNQw" /> */}
    <FAQSection faqs={faqs} />
    <SyllabusSection syllabus={syllabus} ExamName="IPMAT Rothak" />
    <CollegeSection collegeDetails={collegeDetails} ExamName="IPMAT Rothak" />
    <CallToActionSection />
  </div>
);

export default IPMATROTHAKPage;
