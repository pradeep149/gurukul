import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/blogs`;

export const fetchBlogs = async () => {
  const response = await axios.get(API_URL + "/get");
  console.log(response.data);
  return response.data;
};

export const addBlog = async (blogData) => {
  const response = await axios.post(`${API_URL}/add`, blogData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateBlog = async (id, blogData) => {
  const response = await axios.put(`${API_URL}/update/${id}`, blogData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};
