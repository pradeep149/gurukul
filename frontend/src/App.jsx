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
import IPMATROTHAKPage from "./pages/BBA/IPMATROTHAK";
import JIPMATPage from "./pages/BBA/JIPMAT";
import SETPage from "./pages/BBA/SET";
import NPATPage from "./pages/BBA/NPAT";
import CUETPage from "./pages/BBA/CUET";
import CourseInfo from "./components/LAW/Helpers/CourseInfo";
import ExamInfo from "./components/LAW/Helpers/ExamInfo";
import CollegeInfo from "./components/LAW/Helpers/CollegeInfo";
import AboutUs from "./pages/AboutUs";
import WhatIsMBA from "./pages/MBA/WhatIsMBA";
import MBAHistory from "./pages/MBA/MBAHistory";
import WhoCanPursueMBA from "./pages/MBA/WhoCanPursueMBA";
import MBATypes from "./pages/MBA/MBATypes";
import WhyGetMBA from "./pages/MBA/WhyGetMBA";
import WhoShouldConsiderMBA from "./pages/MBA/WhoShouldConsiderMBA";
import WhereToDoMBA from "./pages/MBA/WhereToDoMBA";
import HowToGetIntoMBA from "./pages/MBA/HowToGetIntoMBA";
import RightTimeForMBA from "./pages/MBA/RightTimeForMBA";
import WhatIsCAT from "./pages/MBA/WhatIsCAT";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="mt-24">
        <ScrollToTop />
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
          <Route path="/mba/what-is-mba" element={<WhatIsMBA />} />
          <Route path="/mba/mba-history" element={<MBAHistory />} />
          <Route path="/mba/who-can-pursue" element={<WhoCanPursueMBA />} />
          <Route path="/mba/mba-types" element={<MBATypes />} />
          <Route path="/mba/why-get" element={<WhyGetMBA />} />
          <Route path="/mba/who-should" element={<WhoShouldConsiderMBA />} />
          <Route path="/mba/where-to-do" element={<WhereToDoMBA />} />
          <Route path="/mba/how-to-get" element={<HowToGetIntoMBA />} />
          <Route path="/mba/right-time" element={<RightTimeForMBA />} />
          <Route path="/mba/what-is-cat" element={<WhatIsCAT />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
