import Event from "../models/eventModel.js";
import fs from "fs/promises";
import path from "path";
const __dirname = path.resolve();

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addEvent = async (req, res) => {
  try {
    const { title, description, content, date } = req.body;
    const image = req.file ? req.file.filename : null;
    const event = new Event({ title, description, content, date, image });
    await event.save();
    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content, date } = req.body;
    const image = req.file ? req.file.filename : null;
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    if (image && event.image) {
      await fs.unlink(path.join(__dirname, "uploads", event.image));
    }
    event.title = title || event.title;
    event.description = description || event.description;
    event.content = content || event.content;
    event.date = date || event.date;
    event.image = image || event.image;
    await event.save();
    res.status(200).json({ message: "Event updated successfully", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    if (event.image) {
      await fs.unlink(path.join(__dirname, "uploads", event.image));
    }
    await Event.deleteOne({ _id: id });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
