import React, { useEffect, useState } from "react";
import { fetchBlogs, deleteBlog } from "../api/blogs";
import { toast } from "react-toastify";

const DeleteBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (error) {
      toast.error("Failed to load blogs.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await deleteBlog(id);
      toast.success("Blog deleted successfully!");
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      toast.error("Failed to delete the blog.");
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Delete Blog</h2>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600">{blog.description}</p>
            </div>
            <button
              onClick={() => handleDelete(blog._id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteBlog;
