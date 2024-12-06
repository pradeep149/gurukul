import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBlogs, updateBlog } from "../api/blogs";
import BlogForm from "../components/BlogForm";
import { toast } from "react-toastify";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  const loadBlog = async () => {
    try {
      const blogs = await fetchBlogs();
      const blogToEdit = blogs.find((blog) => blog._id === id);
      if (blogToEdit) {
        setBlog(blogToEdit);
      } else {
        toast.error("Blog not found");
        navigate("/");
      }
    } catch (error) {
      toast.error("Failed to load blog");
    }
  };

  const handleUpdateBlog = async (formData) => {
    try {
      await updateBlog(id, formData);
      toast.success("Blog updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update blog. Please try again.");
    }
  };

  useEffect(() => {
    loadBlog();
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Blog</h2>
      <BlogForm onSubmit={handleUpdateBlog} initialData={blog} />
    </div>
  );
};

export default EditBlog;
