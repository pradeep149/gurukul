import express from "express";
import multer from "multer";
import {
  getBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
} from "../controllers/blogController.js";

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Public route to fetch blogs
router.get("/get", getBlogs);
router.get("/:id", getBlogById);

// Admin routes
router.post("/add", upload.single("image"), addBlog);
router.put("/update/:id", upload.single("image"), updateBlog);
router.delete("/delete/:id", deleteBlog);

export default router;
