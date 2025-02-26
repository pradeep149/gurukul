import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MarqueeAdmin = () => {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/marquee/get`
        );
        setText(res.data.text);
        setLink(res.data.link);
      } catch (error) {
        toast.error("Failed to load marquee. Please try again.");
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/marquee/update`,
        { text, link }
      );
      setMessage("Marquee updated successfully");
      setText(res.data.text);
      setLink(res.data.link);
    } catch (error) {
      setMessage("Error updating marquee");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 p-6">
      <div className="w-full max-w-2xl bg-white bg-opacity-30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white border-opacity-40">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          ✨ Edit Marquee ✨
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-900">
              Marquee Text
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all shadow-md"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900">
              Marquee Link
            </label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all shadow-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white text-lg font-semibold rounded-lg shadow-lg transition-all 
              bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 transform hover:scale-105"
          >
            🚀 Update Marquee
          </button>
        </form>
        {message && (
          <p className="mt-6 text-center text-lg font-semibold text-green-600 animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default MarqueeAdmin;
