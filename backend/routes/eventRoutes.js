import express from "express";
import multer from "multer";
import {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventById,
} from "../controllers/eventsController.js";

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

router.get("/get", getEvents);
router.get("/:id", getEventById);

router.post("/add", upload.single("image"), addEvent);
router.put("/update/:id", upload.single("image"), updateEvent);
router.delete("/delete/:id", deleteEvent);

export default router;
