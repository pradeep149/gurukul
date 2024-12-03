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

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/MBA" element={<MBA />} />
        <Route path="/courses/LAW" element={<LAW />} />
        <Route path="/courses/BBA" element={<BBA />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
      </Routes>
    </div>
  );
};

export default App;
