import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/news`;

export const fetchNews = async () => {
  const response = await axios.get(API_URL + "/get");
  console.log(response.data);
  return response.data;
};

export const addNews = async (newsData) => {
  const response = await axios.post(`${API_URL}/add`, newsData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateNews = async (id, newsData) => {
  const response = await axios.put(`${API_URL}/update/${id}`, newsData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteNews = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};
