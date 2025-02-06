import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/home";
import MBA from "./pages/Courses/MBA";
import LAW from "./pages/Courses/LAW";
import BBA from "./pages/Courses/BBA";
import CareerGuidance from "./pages/Courses/CareerGuidance";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import DetailedCoursePage from "./components/ViewAll";
import Footer from "./components/Footer";
import ViewBlog from "./pages/ViewBlog";
import GamePage from "./pages/Game";
import SudokuGame from "./pages/SudokuGame";
import WordMage from "./pages/WordGame";
import IPMATPage from "./pages/BBA/IPMAT";
import IPMATROTHAKPage from "./pages/BBA/IPMATROTHAK.JSX";
import JIPMATPage from "./pages/BBA/JIPMAT";
import SETPage from "./pages/BBA/SET";
import NPATPage from "./pages/BBA/NPAT";
import CUETPage from "./pages/BBA/CUET";
import CourseInfo from "./components/LAW/Helpers/CourseInfo";
import ExamInfo from "./components/LAW/Helpers/ExamInfo";
import CollegeInfo from "./components/LAW/Helpers/CollegeInfo";
import AboutUs from "./pages/AboutUs";
import MBAWhatItsAllAbout from "./pages/MBA/MBAWhatItsAllAbout";
import MBAPgdm from "./pages/MBA/MBAPgdm";
import DifferencePgdmAndMBA from "./pages/MBA/DifferencePgdmAndMBA";
import ReasonsToDoMBA from "./pages/MBA/ReasonsToDoMBA";
import MBAEligibility from "./pages/MBA/MBAEligibility";
import TopBSchools from "./pages/MBA/TopBSchools";
import MBAEntranceExams from "./pages/MBA/MBAEntranceExams";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/MBA" element={<MBA />} />
          <Route path="/courses/LAW" element={<LAW />} />
          <Route path="/courses/BBA" element={<BBA />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:courseName" element={<DetailedCoursePage />} />
          <Route path="/blogs/:blogId" element={<ViewBlog />} />
          <Route path="/games" element={<GamePage />} />
          <Route path="/games/sudoku" element={<SudokuGame />} />
          <Route path="/games/word-maze" element={<WordMage />} />
          <Route path="/exam/ipmat" element={<IPMATPage />} />
          <Route path="/exam/ipmat-rohtak" element={<IPMATROTHAKPage />} />
          <Route path="/exam/jipmat" element={<JIPMATPage />} />
          <Route path="/exam/set" element={<SETPage />} />
          <Route path="/exam/npat" element={<NPATPage />} />
          <Route path="/exam/cuet" element={<CUETPage />} />
          <Route path="/courses/LAW/:courseId" element={<CourseInfo />} />
          <Route path="/courses/LAW/exams/:examId" element={<ExamInfo />} />
          <Route
            path="/courses/LAW/colleges/:collegeId"
            element={<CollegeInfo />}
          />
          <Route path="/about_us" element={<AboutUs />} />
          <Route
            path="/mba/what-its-all-about"
            element={<MBAWhatItsAllAbout />}
          />
          <Route path="/mba/pgdm" element={<MBAPgdm />} />
          <Route
            path="/mba/difference-pgdm-mba"
            element={<DifferencePgdmAndMBA />}
          />
          <Route path="/mba/reasons-to-do-mba" element={<ReasonsToDoMBA />} />
          <Route path="/mba/eligibility" element={<MBAEligibility />} />
          <Route path="/mba/top-b-schools" element={<TopBSchools />} />
          <Route path="/mba/entrance-exams" element={<MBAEntranceExams />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
