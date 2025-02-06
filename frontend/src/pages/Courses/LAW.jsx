import React from "react";
import Introduction from "../../components/LAW/Introduction";
import LawCourses from "../../components/LAW/LawCourses";
import EntranceExams from "../../components/LAW/EntranceExams";
import LawColleges from "../../components/LAW/LawColleges";

const LawPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 text-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 drop-shadow-lg mb-8 animate-fade-in">
          Law Programs & Entrance Exams
        </h1>
        <div className="space-y-12">
          <div className="animate-slide-up">
            <Introduction />
          </div>
          <div className="animate-slide-up delay-200">
            <LawCourses />
          </div>
          <div className="animate-slide-up delay-400">
            <EntranceExams />
          </div>
          <div className="animate-slide-up delay-600">
            <LawColleges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawPage;
