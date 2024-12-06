import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import DeleteBlog from "./pages/DeleteBlog"; // Import DeleteBlog

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-10">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/edit/:id" element={<EditBlog />} />
          <Route path="/delete" element={<DeleteBlog />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
