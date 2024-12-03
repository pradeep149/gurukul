// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
import Header from "../components/Header";
import MainCarousel from "../components/HomePage/MainCarousel";
import Courses from "../components/HomePage/Courses";
import Updates from "../components/HomePage/Updates";
import Events from "../components/HomePage/Events";
import Blog from "../components/HomePage/Blog";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      {/* <Header /> */}
      {/* <MainCarousel/> */}
      <Testimonials />
      <Courses />
      {/* <Updates/>
      <Events/>
      <Blog/>
      <Footer/> */}
    </div>
  );
};

export default Home;
