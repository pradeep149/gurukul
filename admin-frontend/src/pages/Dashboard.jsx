import React, { useEffect, useState } from "react";
import { fetchBlogs, deleteBlog } from "../api/blogs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (error) {
      toast.error("Failed to fetch blogs");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(id);
        toast.success("Blog deleted");
        loadBlogs();
      } catch (error) {
        toast.error("Error deleting blog");
      }
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Manage Blogs</h2>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog._id} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.description}</p>
            <div className="flex space-x-4 mt-2">
              <Link
                to={`/edit/${blog._id}`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(blog._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
