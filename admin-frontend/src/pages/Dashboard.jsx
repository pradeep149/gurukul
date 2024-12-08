import React, { useEffect, useState } from "react";
import { fetchBlogs, deleteBlog } from "../api/blogs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "500px",
    padding: "30px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(to bottom, #ffffff, #f1f5f9)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

Modal.setAppElement("#root");

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const loadBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (error) {
      toast.error("Failed to fetch blogs");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteBlog(selectedBlogId);
      toast.success("Blog deleted successfully");
      setBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== selectedBlogId)
      );
      closeModal();
    } catch (error) {
      toast.error("Error deleting blog");
    }
  };

  const openModal = (id) => {
    setSelectedBlogId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlogId(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,
      easing: "ease-in-out",
    });
    loadBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-indigo-100 to-cyan-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1
          className="text-6xl font-extrabold tracking-wide text-gray-800 mb-6"
          data-aos="fade-down"
        >
          Admin Panel
        </h1>
        <p
          className="text-lg text-gray-600 mb-8"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Manage, edit, delete, or add new blogs with ease.
        </p>
        <div data-aos="zoom-in" data-aos-delay="200"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="h-48 bg-gray-100 relative">
              {blog.image ? (
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${blog.image}`}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 italic">
                  No Image
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                {blog.description}
              </p>

              <div className="mt-auto flex items-center justify-between space-x-4">
                <Link
                  to={`/blogs/${blog._id}`}
                  className="flex items-center text-teal-600 hover:text-teal-500 font-medium transition-colors duration-200"
                >
                  <FaEye className="mr-2" /> View
                </Link>
                <Link
                  to={`/edit/${blog._id}`}
                  className="flex items-center text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200"
                >
                  <FaEdit className="mr-2" /> Edit
                </Link>
                <button
                  onClick={() => openModal(blog._id)}
                  className="flex items-center text-red-600 hover:text-red-500 font-medium transition-colors duration-200"
                >
                  <FaTrashAlt className="mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {blogs.length === 0 && (
        <div
          className="max-w-7xl mx-auto bg-gray-100 shadow-lg rounded-lg p-6 mt-12 text-center"
          data-aos="fade-up"
        >
          <p className="text-gray-500 text-lg">No blogs available.</p>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Confirm Delete"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Confirm Deletion
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Are you sure you want to delete this blog? This action cannot be
          undone.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
