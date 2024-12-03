// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
import Courses from "../components/HomePage/Courses";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Dashboard from "../components/HomePage/Dashboard";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Testimonials />
      <Courses />
      <Dashboard />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
