import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetail from "./pages/ViewBlog";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
      </Routes>
    </div>
  );
};

export default App;
