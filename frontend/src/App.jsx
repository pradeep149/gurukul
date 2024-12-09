import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/home";
import MBA from "./components/Courses/MBA";
import LAW from "./components/Courses/LAW";
import BBA from "./components/Courses/BBA";
import CareerGuidance from "./components/Courses/CareerGuidance";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import DetailedCoursePage from "./components/ViewAll";
import Footer from "./components/Footer";
import ViewBlog from "./pages/ViewBlog";
import GamePage from "./pages/Game";
import SudokuGame from "./pages/SudokuGame";
import WordMazeGame from "./pages/WordGame";

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
          <Route path="/games/word-maze" element={<WordMazeGame />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
