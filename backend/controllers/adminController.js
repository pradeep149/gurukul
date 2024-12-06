import Blog from "../models/blogModel.js";
import fs from "fs";

export const addBlog = async (req, res) => {
  try {
    const { title, description, content } = req.body;
    const image = req.file ? req.file.filename : null;

    const blog = new Blog({ title, description, content, image });
    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content } = req.body;
    const image = req.file ? req.file.filename : null;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (image && blog.image) {
      fs.unlinkSync(`uploads/${blog.image}`);
    }

    blog.title = title || blog.title;
    blog.description = description || blog.description;
    blog.content = content || blog.content;
    blog.image = image || blog.image;

    await blog.save();
    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.image) {
      fs.unlinkSync(`uploads/${blog.image}`);
    }

    await blog.remove();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
