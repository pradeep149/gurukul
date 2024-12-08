import React from "react";
import BlogForm from "../components/BlogForm";
import { addBlog } from "../api/blogs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBlog = () => {
  const navigate = useNavigate();

  const handleAddBlog = async (formData) => {
    try {
      await addBlog(formData);
      toast.success("Blog added successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add blog. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 flex items-center justify-center py-10 px-6">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl p-8">
        <h2
          className="text-4xl font-bold text-gray-800 text-center mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Add New Blog
        </h2>
        <p
          className="text-lg text-gray-600 text-center mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Create and share your blog with our community. Fill in the details
          below to get started.
        </p>
        <BlogForm onSubmit={handleAddBlog} />
      </div>
    </div>
  );
};

export default AddBlog;
