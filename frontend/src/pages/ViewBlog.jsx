import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/blogs/${blogId}`
        );
        setBlog(response.data);
      } catch (err) {
        setError("Failed to fetch the blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading blog...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-lg text-red-500">{error}</div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-100 via-indigo-100 to-cyan-100 py-10 mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-indigo-50 via-white to-cyan-50 shadow-xl rounded-lg overflow-hidden mb-10">
          <div className="p-8">
            <h1
              className="text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {blog.title}
            </h1>
            <p
              className="text-xl font-semibold text-indigo-500 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {blog.description}
            </p>
            <p className="text-sm text-gray-600">
              Published on:{" "}
              <span className="font-medium text-indigo-600">
                {new Date(blog.createdAt).toDateString()}
              </span>
            </p>
          </div>
          {blog.image && (
            <img
              src={`${process.env.REACT_APP_API_URL}/uploads/${blog.image}`}
              alt={blog.title}
              className="w-full h-72 object-cover"
            />
          )}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div
            className="text-gray-800 leading-loose space-y-6"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
