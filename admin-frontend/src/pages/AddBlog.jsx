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
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
      <BlogForm onSubmit={handleAddBlog} />
    </div>
  );
};

export default AddBlog;
