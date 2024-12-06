import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/blogs/get/`
        );
        setBlogs(response.data);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const notifications = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Notification ${i + 1}`,
    description: `This is a brief description of notification ${i + 1}.`,
    link: `/news/notification-${i + 1}`,
  }));

  const events = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
    date: `Date: ${new Date(
      new Date().setDate(new Date().getDate() + i * 7)
    ).toDateString()}`,
    link: `/events/event-${i + 1}`,
  }));

  return (
    <div className="py-10 bg-gradient-to-b from-gray-100 via-blue-100 to-indigo-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-12">
        <div className="bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 shadow-xl rounded-lg p-6">
          <h3
            className="text-2xl font-bold font-serif text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Notifications / News
          </h3>
          <PerfectScrollbar style={{ maxHeight: "400px" }}>
            <ul className="space-y-4">
              {notifications.map((item) => (
                <li
                  key={item.id}
                  className="bg-sky-100 p-4 rounded-lg shadow-md hover:bg-sky-200 transition-all duration-300"
                >
                  <h4
                    className="font-bold text-lg text-gray-900"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                  <Link
                    to={item.link}
                    className="text-blue-700 hover:underline text-sm font-medium"
                  >
                    Read More &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </PerfectScrollbar>
        </div>

        <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 shadow-xl rounded-lg p-6">
          <h3
            className="text-2xl font-bold font-sans text-gray-900 mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Blogs
          </h3>
          <PerfectScrollbar style={{ maxHeight: "400px" }}>
            {loading ? (
              <p className="text-center text-gray-800">Loading blogs...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : blogs.length > 0 ? (
              <ul className="space-y-4">
                {blogs.map((blog) => (
                  <li
                    key={blog._id}
                    className="bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transition-all duration-300"
                  >
                    <h4
                      className="font-bold text-lg text-gray-900"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      {blog.title}
                    </h4>
                    <p className="text-gray-700 text-sm line-clamp-2">
                      {blog.description}
                    </p>
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="text-indigo-700 hover:underline text-sm font-medium"
                    >
                      Read More &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-800">No blogs available.</p>
            )}
          </PerfectScrollbar>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300 shadow-xl rounded-lg p-6">
          <h3
            className="text-2xl font-bold font-mono text-gray-900 mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Events
          </h3>
          <PerfectScrollbar style={{ maxHeight: "400px" }}>
            <ul className="space-y-4">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="bg-indigo-100 p-4 rounded-lg shadow-md hover:bg-indigo-200 transition-all duration-300"
                >
                  <h4
                    className="font-bold text-lg text-gray-900"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {event.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{event.date}</p>
                  <Link
                    to={event.link}
                    className="text-blue-700 hover:underline text-sm font-medium"
                  >
                    Learn More &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
