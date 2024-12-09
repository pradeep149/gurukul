import React from "react";
import Courses from "../components/HomePage/Courses";
import Testimonials from "../components/HomePage/Testimonials";
import Dashboard from "../components/HomePage/Dashboard";
import AnimatedButton from "../components/AnimatedButton";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Testimonials />
      <Courses />
      <Dashboard />
      <AnimatedButton />
    </div>
  );
};

export default Home;
