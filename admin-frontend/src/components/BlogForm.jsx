import React, { useState } from "react";

const BlogForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalFormData = new FormData();
    Object.keys(formData).forEach((key) => {
      finalFormData.append(key, formData[key]);
    });
    onSubmit(finalFormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div>
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Enter the title of the blog"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Enter a short description of the blog"
          rows="2"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          placeholder="Enter the main content of the blog"
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Image</label>
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          Save Blog
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
