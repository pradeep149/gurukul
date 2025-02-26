// newsRouter.js
import express from "express";
import multer from "multer";
import {
  getNews,
  addNews,
  updateNews,
  deleteNews,
  getNewsById,
} from "../controllers/newsController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.get("/get", getNews);
router.get("/:id", getNewsById);

router.post("/add", upload.single("image"), addNews);
router.put("/update/:id", upload.single("image"), updateNews);
router.delete("/delete/:id", deleteNews);

export default router;
