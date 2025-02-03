import React from "react";
import Introduction from "../../components/LAW/Introduction";
import LawCourses from "../../components/LAW/LawCourses";
import EntranceExams from "../../components/LAW/EntranceExams";
import LawColleges from "../../components/LAW/LawColleges";

const LawPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Introduction />
      <LawCourses />
      <EntranceExams />
      <LawColleges />
    </div>
  );
};

export default LawPage;
