import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/events`;

export const fetchEvents = async () => {
  const response = await axios.get(API_URL + "/get");
  console.log(response.data);
  return response.data;
};

export const addEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/add`, eventData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateEvent = async (id, eventData) => {
  const response = await axios.put(`${API_URL}/update/${id}`, eventData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};
