import News from "../models/newsModel.js";
import fs from "fs/promises";
import path from "path";
const __dirname = path.resolve();

export const getNews = async (req, res) => {
  try {
    const newsItems = await News.find().sort({ createdAt: -1 });
    res.status(200).json(newsItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addNews = async (req, res) => {
  try {
    const { title, description, content } = req.body;
    const image = req.file ? req.file.filename : null;
    const newsItem = new News({ title, description, content, image });
    await newsItem.save();
    res
      .status(201)
      .json({ message: "News created successfully", news: newsItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content } = req.body;
    const image = req.file ? req.file.filename : null;
    const newsItem = await News.findById(id);
    if (!newsItem) return res.status(404).json({ message: "News not found" });
    if (image && newsItem.image) {
      await fs.unlink(path.join(__dirname, "uploads", newsItem.image));
    }
    newsItem.title = title || newsItem.title;
    newsItem.description = description || newsItem.description;
    newsItem.content = content || newsItem.content;
    newsItem.image = image || newsItem.image;
    await newsItem.save();
    res
      .status(200)
      .json({ message: "News updated successfully", news: newsItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const newsItem = await News.findById(id);
    if (!newsItem) return res.status(404).json({ message: "News not found" });
    if (newsItem.image) {
      await fs.unlink(path.join(__dirname, "uploads", newsItem.image));
    }
    await News.deleteOne({ _id: id });
    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const newsItem = await News.findById(id);
    if (!newsItem) return res.status(404).json({ message: "News not found" });
    res.status(200).json(newsItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
