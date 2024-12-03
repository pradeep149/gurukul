import React from "react";
import Courses from "../components/HomePage/Courses";
import Testimonials from "../components/HomePage/Testimonials";
import Dashboard from "../components/HomePage/Dashboard";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Testimonials />
      <Courses />
      <Dashboard />
    </div>
  );
};

export default Home;
